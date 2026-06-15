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

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
