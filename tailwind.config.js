module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    extend: {},
  },
  variants: {
    extend: {

      colors: {
        darkBlue: '#212f49'
      },

      spacing: {
        13: '3.25rem',
      },

    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
