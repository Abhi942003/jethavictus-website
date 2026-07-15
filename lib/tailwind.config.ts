import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0B0D",
        "ink-alt": "#14161A",
        panel: "#1B1E23",
        line: "#2A2D33",

        bone: "#F2F2F0",
        haze: "#8A8F98",

        crimson: {
          DEFAULT: "#E8402C",
          dim: "#B93122",
          glow: "#FF5A42",
        },
        steel: {
          DEFAULT: "#3B6EA5",
          dim: "#2C557F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest: ".22em",
      },
      transitionTimingFunction: {
        decisive: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(242,242,240,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(242,242,240,0.045) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "56px 56px",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;