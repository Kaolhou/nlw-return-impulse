module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors:{
        brand:{
          100: '#C4AFF5',
          200: '#9C7FF5',
          300:'#996dff',
          500:'#8257e6',
        },
      },
      borderRadius:{
        md: '4px'
      }
    },
  },
  darkMode:'class',
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}
