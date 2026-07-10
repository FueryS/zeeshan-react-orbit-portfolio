export const portfolioTheme = {
  name: "Sekiro Ember",
  cssVariables: {
    "--accent": "#ff2f2f",
    "--accent-strong": "#ff4a1c",
    "--accent-soft": "rgba(255, 47, 47, 0.2)",
    "--accent-glow": "rgba(255, 47, 47, 0.44)",
    "--ember": "#ff7a1a",
    "--ember-soft": "rgba(255, 122, 26, 0.18)",
    "--gold": "#f7c948",
    "--gold-soft": "rgba(247, 201, 72, 0.22)",
    "--ivory": "#fff8e7",
    "--ink": "#0d0705",
    "--ink-2": "#180b07",
    "--paper": "#fff1c2",
    "--muted": "#dac8bc",
    "--panel": "rgba(28, 10, 7, 0.72)",
    "--panel-strong": "rgba(75, 18, 10, 0.72)",
    "--border": "rgba(255, 168, 82, 0.3)",
    "--shadow": "0 30px 80px rgba(0, 0, 0, 0.42)",
    "--radius-xl": "28px",
    "--radius-lg": "18px",
    "--radius-md": "12px",
    "--shell": "1180px",

    "--lime": "#ff2f2f",
    "--lime-soft": "rgba(255, 47, 47, 0.2)",
    "--purple": "#f7c948",
    "--purple-soft": "rgba(247, 201, 72, 0.22)",
    "--white": "#fff8e7",
  },
  journey: {
    eyebrow: "Journey path",
    title: "A clean route through the work, wins, and experiments so far.",
  },
};

export const journeyItems = [
  {
    year: "2020",
    title: "SSC Foundation",
    accent: "#ff2f2f",
    motion: "left",
    description:
      "Completed Secondary School Certificate from Ramlingam Edu Foundation English High School & Junior College.",
  },
  {
    year: "2023",
    title: "Science HSC + Topper Recognition",
    accent: "#ff7a1a",
    motion: "right",
    description:
      "Completed HSC Science and was recognized among the top five highest-scoring students at KGN Classes, Govandi.",
  },
  {
    year: "2023-2026",
    title: "BSc Computer Science",
    accent: "#f7c948",
    motion: "bottom",
    description:
      "Completed Bachelor of Science in Computer Science at N.G. Acharya & D.K. Marathe College, Chembur.",
  },
  {
    year: "2025",
    title: "Inter-college Wins",
    accent: "#ff4757",
    motion: "left",
    description:
      "Won second prizes in Guess The Output, Reverse Coding, and Technical Quiz competitions.",
  },
  {
    year: "2026",
    title: "InAmigos Internship",
    accent: "#ff9f1c",
    motion: "right",
    description:
      "Started Creative Writing and Content Writing internship with InAmigos Foundation.",
  },
  {
    year: "Now",
    title: "Building Full Stack + Mobile Projects",
    accent: "#ffe066",
    motion: "bottom",
    description:
      "Creating MERN websites, React Native apps, AI-assisted workflows, and visually expressive frontend experiences.",
  },
];

export const journeyMotionDirections = ["bottom", "right", "left"];

/**
 * Applies CSS custom properties (variables) defined in a theme configuration
 * to the document's root element (`document.documentElement`).
 * 
 * @param {Object} [theme=portfolioTheme] - The theme configuration object containing CSS variables.
 * @param {Object} theme.cssVariables - A key-value map of CSS custom properties (e.g., {"--accent": "#ff2f2f"}).
 * @returns {void}
 */
export function applyThemeToRoot(theme = portfolioTheme) {
  if (typeof document === "undefined") {
    return;
  }

  Object.entries(theme.cssVariables).forEach(([property, value]) => {
    document.documentElement.style.setProperty(property, value);
  });
}
