/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors : {
        sunset: '#ff6f48',
        violet: '#f02aa6',
        darkBlue: '#13183F',
        lightBlue: '#666ca3',
        salmon: '#F74780',
        gray: '#83869A'
      },
      fontFamily: {
        'sans': 'Plus Jakarta Sans'
      }
    },
  },
  plugins: [],
}
