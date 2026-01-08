/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        white: "#FFFFFF",
        background: "#F4F5F9",
        background2: "#F5F5F5",
        link: "#1A0DAB",
        text1: "#868889",
        primary: "#AEDC81",
        primarydark: "#6CC51D",
        primarylight: "#EBFFD7"
      }
    },
  },
  plugins: [],
};
