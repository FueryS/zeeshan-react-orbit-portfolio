import React from "react";
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
