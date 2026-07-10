import React from "react";

/**
 * Renders an individual project card showcasing title, tags, description,
 * and links to live demo, frontend repository, and backend repository.
 * 
 * @component
 * @param {Object} props - The component properties.
 * @param {Object} props.project - The project data object.
 * @param {string} props.project.title - The title of the project.
 * @param {string} props.project.type - The project tech category/type.
 * @param {string} props.project.description - The description of the project.
 * @param {string[]} props.project.tags - Array of technology tags.
 * @param {string} [props.project.live] - Optional live deployment URL.
 * @param {string} [props.project.github] - Optional frontend/monorepo GitHub URL.
 * @param {string} [props.project.backend] - Optional backend GitHub URL.
 * @param {number} props.index - The 0-based index of the card in the list (used for staggered animation delay).
 * @returns {React.ReactElement} The project card layout.
 */
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
