/* inja harchi ke hamishe bayad sabet bemune ro negah midarim! */

const colors = require('tailwindcss/colors')

module.exports = {
    corePlugins: {
        /* float: false, */
        container: false,
    },
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            tablet: '640px',
            computer: '1000px',
        },
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
    plugins: [
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    '@screen computer': {
                        maxWidth: '1140px',
                    },
                }
            })
        }
    ],
}
