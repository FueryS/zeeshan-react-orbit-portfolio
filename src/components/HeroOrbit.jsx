import React from "react";
function HeroOrbit() {
  return (
    <div
      className="hero-orbit"
      aria-label="Animated crimson orbit graphic"
    >
      <svg viewBox="0 0 420 420" role="img">
        <defs>
          <linearGradient id="orbitGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="55%" stopColor="var(--gold)" />
            <stop offset="100%" stopColor="var(--ivory)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          className="orbit orbit-a"
          d="M50 210 C50 100 370 100 370 210 C370 320 50 320 50 210Z"
        />
        <path
          className="orbit orbit-b"
          d="M210 50 C320 50 320 370 210 370 C100 370 100 50 210 50Z"
        />
        <path
          className="orbit orbit-c"
          d="M95 95 C170 10 395 165 325 300 C260 430 25 270 95 95Z"
        />

        <g className="orbit-core" filter="url(#glow)">
          <circle cx="210" cy="210" r="74" />
          <text x="210" y="222" textAnchor="middle">
            SZ
          </text>
        </g>

        <circle className="spark spark-a" cx="50" cy="210" r="7" />
        <circle className="spark spark-b" cx="210" cy="50" r="6" />
        <circle className="spark spark-c" cx="95" cy="95" r="5" />
      </svg>
    </div>
  );
}

export default HeroOrbit;
