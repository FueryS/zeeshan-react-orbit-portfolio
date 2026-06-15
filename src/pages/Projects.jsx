import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/portfolioData.js";
import React from "react";

function Projects() {
  return (
    <section className="shell page-pad inner-page">
      <div className="page-hero narrow">
        <p className="eyebrow">Projects</p>
        <h1>Selected builds across web, mobile, and full-stack systems.</h1>
        <p>
          These projects are arranged to show range: MERN backends, responsive
          web pages, e-commerce flows, mobile SQLite apps, and UI-focused
          product thinking.
        </p>
      </div>

      <div className="project-grid section-space tight-space">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.title} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
