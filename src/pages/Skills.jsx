import SkillOrbit from "../components/SkillOrbit.jsx";
import { skills } from "../data/portfolioData.js";
import React from "react";

/**
 * Renders the Skills page component, combining the SkillOrbit component
 * and detailed categorized lists of tools, languages, and technical groups.
 * 
 * @component
 * @returns {React.ReactElement} The Skills page layout.
 */
function Skills() {
  return (
    <section className="shell page-pad inner-page">
      <div className="page-hero narrow">
        <p className="eyebrow">Skills</p>
        <h1>
          Technical stack shaped around React, MERN, mobile apps, and creative
          tooling.
        </h1>
        <p>
          The skill page uses orbit visuals to match the React-inspired design
          direction while keeping the content readable on small screens.
        </p>
      </div>

      <div className="skills-layout section-space tight-space">
        <SkillOrbit />

        <div className="skill-groups">
          {Object.entries(skills).map(([groupName, items]) => (
            <article className="skill-group" key={groupName}>
              <h2>{groupName}</h2>
              <div className="tag-list large-tags">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
