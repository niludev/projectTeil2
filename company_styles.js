/* inja harchi ke hamishe bayad sabet bemune ro negah midarim! */

const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      blue: colors.blue,
      yellow: colors.yellow,
      gray: colors.blueGray,
      cyan: colors.cyan,
      lime: colors.lime,
      rose: colors.rose,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
