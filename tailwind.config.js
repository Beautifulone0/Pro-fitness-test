/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend:{
      colors:{
        lightblue: 'hsl(227, 100%, 82%)',
        black:'hsl(0, 0%, 0%,)'
      }
    }
  },
  plugins: [],
}

