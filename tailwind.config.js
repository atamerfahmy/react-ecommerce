/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ...defaultColors,
                "BACKGROUND_OFF_WHITE": "#f9fafb",
                "DEFAULT_PURPLE": "#6a00e7",
                "SIGNUP_BACKGROUND_COLOR": "#f2f7f9",
                "PRIMARY_GREEN": "#00d277",
                "PRIMARY_ORANGE": "#ff7d1b"
            }
        },

    },
    plugins: [],
}
