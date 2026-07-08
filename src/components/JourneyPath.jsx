import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  journeyItems,
  journeyMotionDirections,
  portfolioTheme,
} from "../data/siteTheme.js";

const clamp = (value, min = 0, max = 1) =>
  Math.min(Math.max(value, min), max);

function cubicPoint(start, controlA, controlB, end, time) {
  const inverse = 1 - time;

  return {
    x:
      inverse ** 3 * start.x +
      3 * inverse ** 2 * time * controlA.x +
      3 * inverse * time ** 2 * controlB.x +
      time ** 3 * end.x,
    y:
      inverse ** 3 * start.y +
      3 * inverse ** 2 * time * controlA.y +
      3 * inverse * time ** 2 * controlB.y +
      time ** 3 * end.y,
  };
}

function distanceBetween(pointA, pointB) {
  return Math.hypot(pointB.x - pointA.x, pointB.y - pointA.y);
}

function cubicLength(start, controlA, controlB, end) {
  let length = 0;
  let previous = start;

  for (let step = 1; step <= 32; step += 1) {
    const point = cubicPoint(start, controlA, controlB, end, step / 32);
    length += distanceBetween(previous, point);
    previous = point;
  }

  return length;
}

function buildJourneyPath(points) {
  if (!points.length) {
    return {
      d: "",
      markerProgress: [],
      totalLength: 0,
    };
  }

  const commands = [`M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`];
  const markerLengths = [0];
  let totalLength = 0;

  for (let index = 0; index < points.length - 1; index += 1) {
    const start = points[index];
    const end = points[index + 1];
    const direction = end.y >= start.y ? 1 : -1;
    const bend = Math.max(Math.abs(end.y - start.y) * 0.42, 88);
    const controlA = {
      x: start.x,
      y: start.y + bend * direction,
    };
    const controlB = {
      x: end.x,
      y: end.y - bend * direction,
    };

    commands.push(
      `C ${controlA.x.toFixed(1)} ${controlA.y.toFixed(1)}, ${controlB.x.toFixed(
        1,
      )} ${controlB.y.toFixed(1)}, ${end.x.toFixed(1)} ${end.y.toFixed(1)}`,
    );
    totalLength += cubicLength(start, controlA, controlB, end);
    markerLengths.push(totalLength);
  }

  return {
    d: commands.join(" "),
    markerProgress: markerLengths.map((length) =>
      totalLength ? length / totalLength : 1,
    ),
    totalLength,
  };
}

function getMotionDirection(item, index) {
  return item.motion || journeyMotionDirections[index % journeyMotionDirections.length];
}

function JourneyPath() {
  const mapRef = useRef(null);
  const markerRefs = useRef([]);
  const cardRefs = useRef([]);
  const [layout, setLayout] = useState({
    width: 1,
    height: 1,
    points: [],
  });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleCards, setVisibleCards] = useState(() => new Set());

  const path = useMemo(() => buildJourneyPath(layout.points), [layout.points]);

  const activeIndex = useMemo(() => {
    let indexReached = -1;

    path.markerProgress.forEach((markerProgress, index) => {
      if (scrollProgress >= markerProgress - 0.018) {
        indexReached = index;
      }
    });

    return indexReached;
  }, [path.markerProgress, scrollProgress]);

  const measurePath = useCallback(() => {
    const map = mapRef.current;

    if (!map) {
      return;
    }

    const mapRect = map.getBoundingClientRect();
    const points = markerRefs.current
      .slice(0, journeyItems.length)
      .filter(Boolean)
      .map((marker) => {
        const markerRect = marker.getBoundingClientRect();

        return {
          x: markerRect.left - mapRect.left + markerRect.width / 2,
          y: markerRect.top - mapRect.top + markerRect.height / 2,
        };
      });

    setLayout((current) => {
      const width = Math.max(mapRect.width, 1);
      const height = Math.max(mapRect.height, 1);
      const sameSize =
        Math.abs(current.width - width) < 0.5 &&
        Math.abs(current.height - height) < 0.5;
      const samePoints =
        current.points.length === points.length &&
        current.points.every(
          (point, index) =>
            Math.abs(point.x - points[index].x) < 0.5 &&
            Math.abs(point.y - points[index].y) < 0.5,
        );

      if (sameSize && samePoints) {
        return current;
      }

      return {
        width,
        height,
        points,
      };
    });
  }, []);

  useLayoutEffect(() => {
    let animationFrame = 0;

    const scheduleMeasure = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(measurePath);
    };

    scheduleMeasure();

    const resizeObserver = new ResizeObserver(scheduleMeasure);

    if (mapRef.current) {
      resizeObserver.observe(mapRef.current);
    }

    markerRefs.current.filter(Boolean).forEach((marker) => {
      resizeObserver.observe(marker);
    });

    window.addEventListener("resize", scheduleMeasure);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", scheduleMeasure);
    };
  }, [measurePath]);

  useEffect(() => {
    let animationFrame = 0;

    const updateProgress = () => {
      const map = mapRef.current;

      if (!map) {
        return;
      }

      const rect = map.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const sectionTop = scrollY + rect.top;
      const start = sectionTop - window.innerHeight * 0.68;
      const end = sectionTop + rect.height - window.innerHeight * 0.42;
      const nextProgress = clamp((scrollY - start) / Math.max(end - start, 1));

      setScrollProgress((current) =>
        Math.abs(current - nextProgress) > 0.001 ? nextProgress : current,
      );
    };

    const scheduleProgress = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", scheduleProgress, { passive: true });
    window.addEventListener("resize", scheduleProgress);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleProgress);
      window.removeEventListener("resize", scheduleProgress);
    };
  }, [layout.height]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleCards((current) => {
          const next = new Set(current);

          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              next.add(Number(entry.target.dataset.journeyIndex));
            }
          });

          return next;
        });
      },
      {
        threshold: 0.26,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    cardRefs.current.filter(Boolean).forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const drawnLength = path.totalLength * scrollProgress;
  const dashLength = Math.max(path.totalLength, 1);
  const gradientStart = layout.points[0] || { x: 0, y: 0 };
  const gradientEnd = layout.points[layout.points.length - 1] || {
    x: layout.width,
    y: layout.height,
  };

  return (
    <section className="journey-section section-space" id="journey">
      <div className="section-heading journey-heading">
        <p className="eyebrow">{portfolioTheme.journey.eyebrow}</p>
        <h2>{portfolioTheme.journey.title}</h2>
      </div>

      <div
        className="journey-map"
        ref={mapRef}
        style={{ "--journey-progress": scrollProgress }}
      >
        <svg
          className="journey-svg"
          viewBox={`0 0 ${layout.width} ${layout.height}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="journeyGradient"
              gradientUnits="userSpaceOnUse"
              x1={gradientStart.x}
              y1={gradientStart.y}
              x2={gradientEnd.x}
              y2={gradientEnd.y}
            >
              {journeyItems.map((item, index) => (
                <stop
                  key={`${item.title}-stop`}
                  offset={`${(path.markerProgress[index] ?? 0) * 100}%`}
                  stopColor={item.accent}
                />
              ))}
            </linearGradient>
          </defs>
          <path className="journey-track" d={path.d} />
          <path
            className="journey-flow"
            d={path.d}
            style={{
              strokeDasharray: dashLength,
              strokeDashoffset: dashLength - drawnLength,
            }}
          />
        </svg>

        <div className="journey-list">
          {journeyItems.map((item, index) => {
            const isActive = index <= activeIndex;
            const isVisible = visibleCards.has(index);
            const alignment = index % 2 === 0 ? "left" : "right";
            const motion = getMotionDirection(item, index);

            return (
              <article
                className={`journey-node align-${alignment} from-${motion} ${
                  isVisible ? "is-visible" : ""
                } ${isActive ? "is-lit" : ""}`}
                data-journey-index={index}
                key={item.title}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                style={{
                  "--item-color": item.accent,
                  "--item-index": index,
                }}
              >
                <span
                  className="journey-dot"
                  ref={(element) => {
                    markerRefs.current[index] = element;
                  }}
                  aria-hidden="true"
                />
                <div className="journey-card-copy">
                  <span className="journey-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default JourneyPath;
