import { profile } from "../data/portfolioData.js";
import React from "react";

/**
 * Renders the global footer component containing the brand name, description,
 * and social contact links (GitHub, LinkedIn, Email).
 * 
 * @component
 * @returns {React.ReactElement} The footer element.
 */
function Footer() {
  return (
    <footer className="footer shell">
      <div>
        <p className="footer-logo">Sayyed Zeeshan Azaz</p>
        <p className="muted">
          Frontend systems, mobile apps, and creative web experiences.
        </p>
      </div>

      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a
          href={`mailto:${profile.email}?subject=Portfolio%20Contact%20-%20Sayyed%20Zeeshan`}
          aria-label={`Email ${profile.name}`}
        >
          {profile.email}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
