import React from "react"
import type { Metadata } from 'next'
// 1. Thêm localFont và đổi Playfair sang Cormorant (cho đúng thiết kế)
import localFont from 'next/font/local'
import { Geist, Geist_Mono, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// 2. Cấu hình Font Mallong (Local - Để sửa lỗi không hiện trên máy khác)
const mallong = localFont({
  src: './fonts/Mallong-Regular.ttf', // Đảm bảo file nằm trong app/fonts/
  variable: '--font-mallong',
  display: 'swap',
})

// 3. Cấu hình Font Tiêu đề (Cormorant Garamond - Cho đúng ảnh thiết kế)
const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: '--font-cormorant', // Đặt tên biến để dùng trong Tailwind
  display: 'swap',
});

// Giữ nguyên Geist như cũ
const _geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans", // Thêm biến để Tailwind dùng
});
const _geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// --- PHẦN METADATA CŨ (GIỮ NGUYÊN 100%) ---
export const metadata: Metadata = {
  title: 'Préci - Nến Thơm Cao Cấp',
  description: 'Khám phá bộ sưu tập nến thơm tự nhiên và các phụ kiện cao cấp từ Préci',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png', // Dấu / ở đầu nghĩa là tìm trong thư mục public
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      {/* 4. Thêm các biến font vào body để Tailwind nhận diện được */}
      <body className={`${mallong.variable} ${cormorant.variable} ${_geist.variable} ${_geistMono.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        {/* Giữ nguyên Analytics */}
        <Analytics />
      </body>
    </html>
  )
}