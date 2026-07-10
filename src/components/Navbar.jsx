import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import React from "react";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Projects", path: "/projects" },
  { title: "Skills", path: "/skills" },
  { title: "Contact", path: "/contact" },
];

/**
 * Renders the responsive navigation bar featuring the logo, links to pages,
 * and a mobile hamburger menu toggle.
 * 
 * @component
 * @returns {React.ReactElement} The header and navbar markup.
 */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Closes the mobile navigation menu.
   * @returns {void}
   */
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar shell" aria-label="Main navigation">
        <Link className="brand" to="/" onClick={closeMenu}>
          <span className="brand-mark">Z</span>
          <span className="brand-text">Zeeshan.dev</span>
        </Link>

        <button
          className={`menu-toggle ${isOpen ? "active" : ""}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((currentValue) => !currentValue)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
