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
                main_blue_opacity: '#006DF033',
            },
        },
        screens: {
            mb: '375px',
            tablet: '700px',
            laptop: '1200px',
        },
        fontFamily: {
            'sf-pro-d': ['sf-pro-display'],
            'sf-pro-d-m': ['sf-pro-display-500'],
            'sf-pro-d-s': ['sf-pro-display-700'],
            inter: ['inter'],
            'inter-m': ['inter-500'],
            'inter-b': ['inter-700'],
        },
    },
    plugins: [],
};
