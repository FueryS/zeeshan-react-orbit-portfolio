import React from "react";

function ProjectCard({ project, index }) {
  return (
    <article className="project-card" style={{ "--card-index": index }}>
      <div className="project-card-topline">
        <span>{project.type}</span>
        <span>0{index + 1}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tag-list">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="project-actions">
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer">
            Live
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            Frontend / Repo
          </a>
        )}
        {project.backend && (
          <a href={project.backend} target="_blank" rel="noreferrer">
            Backend
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
