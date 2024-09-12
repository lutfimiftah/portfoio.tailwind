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
        dark: '#0f172a',
        lgt: 'rgb(14 165 233);'
      },
      fontFamily: {
        inter: 'inter'
      },
      screens : {
        '2xl' : '1320'
      },
    },
  },
  plugins: [],
}

