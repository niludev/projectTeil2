/* inja harchi ke variable hast (dar vaghe taghir mikone) ro negah midarim! */

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        sm: '1rem',
        lg: '2rem',
        xl: '4rem',
        '2xl' : '8rem',
      },
    },
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
  presets: [
    require('./company_styles')
  ],
}
