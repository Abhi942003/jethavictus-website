import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#121212",
        "ink-alt": "#121212",
        panel: "#1C1B19",
        line: "#2E2B27",

        obsidian: "#121212",
        mist: "#181715",
        blush: "#1C1917",

        bone: "#F3F1EC",
        haze: "#9A968D",
        fog: "#9A968D",

        crimson: {
          DEFAULT: "#28527A",
          dim: "#1F4666",
        },
        steel: {
          DEFAULT: "#5FA8D3",
          dim: "#4489B0",
        },
      },
      boxShadow: {
        card: "0 2px 16px rgba(0,0,0,0.3)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      transitionTimingFunction: {
        decisive: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(243,241,236,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(243,241,236,0.05) 1px, transparent 1px)",
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
