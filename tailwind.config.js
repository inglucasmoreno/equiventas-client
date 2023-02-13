const { guessProductionMode } = require("@ngneat/tailwind");
const colors = require('tailwindcss/colors');

module.exports = {
    prefix: '',
    purge: {
        enabled: guessProductionMode(),
        content: [
            './src/**/*.{html,ts}',
        ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primaryColor: "#000000",
                secondaryColor: "#A09E9E",
                thirdColor: '#F3C43C',
                background: colors.gray,
                primary: colors.gray,
                orange: colors.orange,
                secondary: colors.blue,
            },
        },
        fontFamily: {
            display: ["Nunito", "sans-serif"],
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
};