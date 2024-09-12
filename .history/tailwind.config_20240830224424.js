/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        dark: '#0f172a'
      },
      fontFamily: {
        inter: 'inter'
      },
      screens : {
        '2xl' : ''
      }
    },
  },
  plugins: [],
}

