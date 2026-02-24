/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#002B5B',
                    light: '#1A5F7A',
                    dark: '#001C30',
                },
                secondary: {
                    DEFAULT: '#2C74B3',
                },
                accent: {
                    DEFAULT: '#D4AF37',
                    dark: '#B8860B',
                }
            }
        },
    },
    plugins: [],
}
