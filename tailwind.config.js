/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                substrate: '#ECEEF1',
                main_blue: '#006DF0',
            },
        },
        screens: {
            mb: '375px',
            tablet: '700px',
            laptop: '1200px',
        },
    },
    plugins: [],
};
