import { skills } from "../data/portfolioData.js";
import React from "react";

function SkillOrbit() {
  const allSkills = Object.values(skills).flat();

  return (
    <div className="skill-orbit-card">
      <svg viewBox="0 0 520 520" aria-hidden="true">
        <circle className="skill-ring ring-one" cx="260" cy="260" r="215" />
        <circle className="skill-ring ring-two" cx="260" cy="260" r="155" />
        <circle className="skill-ring ring-three" cx="260" cy="260" r="90" />
        <text x="260" y="252" textAnchor="middle">
          React
        </text>
        <text x="260" y="285" textAnchor="middle">
          MERN
        </text>
      </svg>

      <div className="orbit-badges">
        {allSkills.slice(0, 14).map((skill, index) => (
          <span key={skill} style={{ "--skill-index": index }}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillOrbit;
