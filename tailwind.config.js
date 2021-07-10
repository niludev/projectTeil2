/* inja harchi ke variable hast (dar vaghe taghir mikone) ro negah midarim! */

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'ul > li::before': {
              backgroundColor: theme('colors.gray.800'),
            },
          },
        },
      }),
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        sm: '1rem',
        lg: '2rem',
        xl: '4rem',
        '2xl': '8rem',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'focus'], /* inja überschreiben mikonim variant hasho */
    extend: { /* inja variant haye jadid ezafe mikonim */

      /* colors: {
        darkBlue: '#212f49'
      },

      spacing: {
        13: '3.25rem',
      }, */

      width: ['hover'],

    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/typography'),
  ],
  presets: [
    /* require('./company_styles') */
    require('./zdf_styles')
  ],
}
