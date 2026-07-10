import React from "react";
/**
 * Renders an animated ambient background using CSS layers (embers, sparks, and grid glow).
 * It is hidden from screen readers using `aria-hidden="true"`.
 * 
 * @component
 * @returns {React.ReactElement} The animated background container.
 */
function AnimatedBackground() {
  return (
    <div className="animated-bg" aria-hidden="true">
      <span className="ember-layer ember-layer-one"></span>
      <span className="ember-layer ember-layer-two"></span>
      <span className="ember-sparks"></span>
      <div className="grid-glow"></div>
    </div>
  );
}

export default AnimatedBackground;
