/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fira: ["Fira Code", ...defaultTheme.fontFamily.sans],
      inter: ["Inter", ...defaultTheme.fontFamily.sans],
      geist: ["Geist", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
