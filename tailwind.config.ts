import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          50: "#fdf8f0",
          100: "#faecd6",
          200: "#f4d5a8",
          300: "#edb970",
          400: "#e59a3f",
          500: "#D4A853", // Main gold
          600: "#c48a2f",
          700: "#a36c28",
          800: "#855628",
          900: "#6e4724",
          950: "#3d2411",
        },
        // Dashboard dark theme
        dark: {
          50: "#f6f6f7",
          100: "#e2e3e5",
          200: "#c5c6cb",
          300: "#a0a2a9",
          400: "#7c7e87",
          500: "#61636c",
          600: "#4d4e56",
          700: "#3f4046",
          800: "#1a1a2e", // Main dark
          900: "#0f0f1a", // Darker
          950: "#08080c", // Darkest
        },
        // Accent colors
        accent: {
          purple: "#8B5CF6",
          pink: "#EC4899",
          cyan: "#06B6D4",
          green: "#10B981",
          red: "#EF4444",
          orange: "#F59E0B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(212, 168, 83, 0.3)",
        "glow-lg": "0 0 40px rgba(212, 168, 83, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
