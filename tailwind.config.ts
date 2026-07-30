import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0d0d10",
        paper: "#f7f6f3",
        line: "#25262b",
        mist: "#8b8d95",
        royal: {
          DEFAULT: "#2a3fb8",
          soft: "#e8eaf7",
          deep: "#1c2c8c",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      maxWidth: {
        content: "1240px",
        prose: "62ch",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
