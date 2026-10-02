import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a0a0a",
          900: "#121212",
          800: "#1c1c1c",
          700: "#2a2a2a",
          600: "#3d3d3d",
          400: "#737373",
          200: "#d4d4d4",
          100: "#e8e8e6",
        },
        paper: {
          DEFAULT: "#faf9f7",
          50: "#ffffff",
          100: "#f5f4f1",
        },
        gold: {
          950: "#2e2109",
          900: "#4a330f",
          800: "#6b4a18",
          700: "#82501e",
          600: "#a06e32",
          500: "#b8863c",
          400: "#c9a15a",
          300: "#dcb878",
          200: "#ead9b5",
          100: "#f4ecd9",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #82501e 0%, #b8863c 45%, #e6b46e 100%)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,10,10,0.04), 0 12px 32px -16px rgba(10,10,10,0.18)",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
