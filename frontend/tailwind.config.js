/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {},
    backgroundImage: {
      'home': "url('../src/assets/homebg.jpg')",
      'about-me': "url('../src/assets/aboutmebg.jpg')",
    },
  },
  plugins: [],
}

