/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "50px",
    },
    extend: {
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
