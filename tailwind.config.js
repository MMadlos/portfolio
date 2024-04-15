/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

const breathe = {
  keyframe: {
    "80%": { "font-weight": "800", "font-width": "50" },
    "0%, 100%": { "font-weight": "200", "font-width": "100" },
  },
  animation: "breathe 2500ms infinite both",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
      keyframes: {
        breathe: breathe.keyframe,
      },
      animation: {
        breathe: breathe.animation,
      },
      fontFamily: {
        sans: ["Geist", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
