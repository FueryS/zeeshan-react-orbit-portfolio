import JourneyPath from "../components/JourneyPath.jsx";
import { achievements, profile, training } from "../data/portfolioData.js";
import React from "react";

function About() {
  return (
    <section className="shell page-pad inner-page">
      <div className="page-hero narrow">
        <p className="eyebrow">About</p>
        <h1>{profile.name}</h1>
        <p>{profile.summary}</p>
      </div>

      <div className="info-grid section-space tight-space">
        <article className="glass-panel">
          <h2>Profile</h2>
          <p>
            I enjoy creating responsive interfaces, clean component systems,
            animated web experiences, and full-stack products that feel
            practical instead of just decorative.
          </p>
          <p>
            My current direction is to grow as a frontend-heavy full-stack
            developer with strong React, MERN, React Native, and AI-assisted
            development skills.
          </p>
        </article>

        <article className="glass-panel">
          <h2>Education</h2>
          <ul className="clean-list">
            <li>
              <strong>BSc Computer Science</strong> — N.G. Acharya & D.K.
              Marathe College, 2023–2026, CGPA 8.15.
            </li>
            <li>
              <strong>HSC Science</strong> — Swami Ramkrishna Paramhans Junior
              College, 2023.
            </li>
            <li>
              <strong>SSC</strong> — Ramlingam Edu Foundation English High
              School & Junior College, 2020.
            </li>
          </ul>
        </article>
      </div>

      <JourneyPath />

      <div className="info-grid section-space tight-space">
        <article className="glass-panel">
          <h2>Achievements</h2>
          <ul className="clean-list">
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </article>

        <article className="glass-panel">
          <h2>Training</h2>
          <ul className="clean-list">
            {training.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default About;
