/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#0d9488',
        secondary: '#64748b',
        dark: '#1e293b',
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

