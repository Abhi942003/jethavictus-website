import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#FFFFFF",
        "ink-alt": "#FFFFFF",
        panel: "#F5F5F3",
        line: "#E5E5E1",

        navy: "#0E1A2B",
        "navy-alt": "16273D",
        obsidian: "#FFFFFF",
        mist: "#F5F5F3",
        blush: "#F5F5F3",

        bone: "#121212",
        haze: "#63645F",
        fog: "#63645F",

        crimson: {
          DEFAULT: "#0EA5E9",
          dim: "#0B84BC",
        },
        steel: {
          DEFAULT: "#5FA8D3",
          dim: "#4489B0",
        },
      },
      boxShadow: {
        card: "0 2px 16px rgba(18,18,18,0.06)",
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
          "linear-gradient(to right, rgba(18,18,18,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(18,18,18,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
