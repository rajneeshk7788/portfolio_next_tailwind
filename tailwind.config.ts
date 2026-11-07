import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0C0E",
        deep: "#0E1012",
        surface: "#131518",
        raised: "#1A1D21",
        line: "rgba(236, 233, 226, 0.1)",
        paper: "#ECE9E2",
        muted: "#A3A29B",
        brass: "#E8B563",
        // Brass dark enough to read as small text on the paper background.
        "brass-deep": "#85560F",
        sage: "#7FD1B9",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        panel: "0 1px 0 0 rgba(236, 233, 226, 0.06) inset, 0 30px 60px -30px rgba(0, 0, 0, 0.7)",
        glow: "0 8px 30px -8px rgba(232, 181, 99, 0.45)",
      },
    },
  },
  plugins: [],
};
export default config;
