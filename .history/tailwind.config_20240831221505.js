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
        tlw: '#06B6D4'
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

