const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      blue: colors.blue,
      yellow: colors.yellow,
      blueGray: colors.blueGray,
      cyan: colors.cyan,
      lime: colors.lime,
      roseRed: colors.rose,
    },
    extend: {},
  },
  variants: {
    extend: {

      /* colors: {
        darkBlue: '#212f49'
      },

      spacing: {
        13: '3.25rem',
      }, */

    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
