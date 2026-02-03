/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}", // Thêm dòng này cho chắc
        "./src/**/*.{js,ts,jsx,tsx}",   // Thêm dòng này nếu code nằm trong src
    ],
    theme: {
        extend: {
            // --- CHỈ SỬA ĐÚNG KHÚC NÀY ---
            fontFamily: {
                // 1. Font Brand: Dùng biến --font-mallong (như trong layout.tsx bạn đã khai báo)
                brand: ['var(--font-mallong)', 'serif'],

                // 2. Font Body: Dùng biến --font-cormorant (thay vì Inter)
                body: ['var(--font-cormorant)', 'serif'],
            },
            // -----------------------------
        },
    },
    plugins: [], // Giữ nguyên các plugin nếu có (ví dụ tailwindcss-animate)
}