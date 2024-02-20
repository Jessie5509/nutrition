/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {},
    backgroundImage: {
      'home': "url('../src/assets/homebg.jpg')",
      'about': "url('../src/assets/about.jpg')",
      'consult': "url('../src/assets/consulta.jpg')",
      'plan': "url('../src/assets/planalim.jpg')",
      'taller': "url('../src/assets/talleres.jpg')",
      'contact': "url('../src/assets/contact.jpg')",
      'recipes': "url('../src/assets/recipes.jpg')",
      'services': "url('../src/assets/lemon.jpg')"
    },
    fontFamily: {
      main: ['Nunito', 'sans-serif'],
    },
  },
  plugins: [],
}

