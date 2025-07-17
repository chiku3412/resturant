/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts,scss}"],
    theme: {
        extend: {
            fontFamily: {
                titleFont: ['"DM Serif Display"', 'serif'],
            }
        },
    },
    plugins: [],
}