import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AnimatedBackground from "./components/AnimatedBackground.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import { applyThemeToRoot, portfolioTheme } from "./data/siteTheme.js";

import React from "react";

/**
 * A controller component that applies the global portfolio theme
 * styles to the document root element when mounted.
 * 
 * @component
 * @returns {null} Renders no UI elements.
 */
function ThemeController() {
  useEffect(() => {
    applyThemeToRoot(portfolioTheme);
  }, []);

  return null;
}

/**
 * A utility component that scrolls the window back to the top
 * with a smooth animation whenever the current route/pathname changes.
 * 
 * @component
 * @returns {null} Renders no UI elements.
 */
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

/**
 * The main application component that sets up the global controllers,
 * layout (Navbar, Footer, Background), and routing structure.
 * 
 * @component
 * @returns {React.ReactElement} The root app structure.
 */
function App() {
  return (
    <>
      <ThemeController />
      <AnimatedBackground />
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
