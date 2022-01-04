/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
    content: ['./index.html', './src/**/*.tsx'],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'), require('daisyui')],
    darkMode: 'class',
};
