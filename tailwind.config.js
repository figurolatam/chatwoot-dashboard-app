/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        // eslint-disable-next-line no-undef
        require("@tailwindcss/typography"),
        // eslint-disable-next-line no-undef
        require("daisyui"),
    ],
};
