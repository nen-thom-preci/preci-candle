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
                // Khai báo tên 'brand' nối với font 'Mallong' bạn đã định nghĩa bên CSS
                brand: ['Mallong', 'serif'],

                // Khai báo các font khác nếu cần
                heading1: ['"Cormorant Garamond Italic"', 'serif'],
                heading2: ['"Cormorant Garamond Light"', 'serif'],
            },
        },
        plugins: [],
    }
}