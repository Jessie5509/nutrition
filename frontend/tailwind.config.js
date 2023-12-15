/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {},
    backgroundImage: {
      'home': "url('../src/assets/homebg.jpg')",
      'about-me': "url('../src/assets/aboutmebg.jpg')",
      'consult': "url('../src/assets/consulta.jpg')",
      'plan': "url('../src/assets/planalim.jpg')",
      'taller': "url('../src/assets/talleres.jpg')",
    },
    fontFamily: {
      main: ['Nunito', 'sans-serif'],
    },
  },
  plugins: [],
}

