import { journey } from "../data/portfolioData.js";
import React from "react";

function JourneyPath() {
  return (
    <section className="journey-section section-space">
      <div className="section-heading">
        <p className="eyebrow">Journey path</p>
        <h2>From student foundations to full-stack experiments.</h2>
      </div>

      <div className="journey-map">
        <svg
          className="journey-svg"
          viewBox="0 0 1100 700"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="journeyGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--lime)" />
              <stop offset="50%" stopColor="var(--white)" />
              <stop offset="100%" stopColor="var(--purple)" />
            </linearGradient>
          </defs>
          <path
            className="journey-shadow"
            d="M80 80 C270 20 310 210 480 180 C690 140 640 390 830 360 C990 335 930 560 1040 620"
          />
          <path
            className="journey-line"
            d="M80 80 C270 20 310 210 480 180 C690 140 640 390 830 360 C990 335 930 560 1040 620"
          />
        </svg>

        {journey.map((item, index) => (
          <article
            className={`journey-node node-${index + 1}`}
            key={item.title}
          >
            <span>{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default JourneyPath;
