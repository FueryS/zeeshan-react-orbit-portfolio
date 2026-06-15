import { Link } from "react-router-dom";
import HeroOrbit from "../components/HeroOrbit.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import JourneyPath from "../components/JourneyPath.jsx";
import { profile, projects, stats } from "../data/portfolioData.js";

function Home() {
  return (
    <>
      <section className="hero shell page-pad">
        <div className="hero-copy">
          <p className="eyebrow">React themed portfolio • Lime / Purple / White</p>
          <h1>
            Building <span>interactive frontend</span> stories with full-stack logic.
          </h1>
          <p className="hero-description">{profile.headline}</p>

          <div className="hero-actions">
            <Link className="button primary" to="/projects">View Projects</Link>
            <Link className="button ghost" to="/contact">Contact Me</Link>
          </div>
        </div>

        <HeroOrbit />
      </section>

      <section className="stats-grid shell">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <JourneyPath />

      <section className="section-space shell">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Featured work</p>
            <h2>Projects that show code quality, UI flow, and real deployment.</h2>
          </div>
          <Link className="text-link" to="/projects">Explore all projects →</Link>
        </div>

        <div className="project-grid featured-grid">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard project={project} index={index} key={project.title} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
