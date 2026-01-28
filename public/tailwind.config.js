/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ['Cormorant Garamond', 'serif'],
                serif: ['Cormorant Garamond', 'serif'],
                brand: ['Mallong', 'serif'],
            },
        },
    },
    plugins: [],
}
