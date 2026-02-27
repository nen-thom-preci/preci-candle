import React from "react"
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Geist, Geist_Mono, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google' // 1. THÊM IMPORT NÀY Ở ĐÂY
import './globals.css'

// Cấu hình Font Mallong
const mallong = localFont({
  src: './fonts/Mallong-Regular.ttf',
  variable: '--font-mallong',
  display: 'swap',
})

// Cấu hình Font Tiêu đề
const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: '--font-cormorant',
  display: 'swap',
});

// Giữ nguyên Geist như cũ
const _geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});
const _geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// --- PHẦN METADATA CŨ (GIỮ NGUYÊN 100%) ---
export const metadata: Metadata = {
  title: 'Préci - Nến Thơm Customize',
  description: 'Cùng khám phá hũ nến thơm mà bạn tự thiết kế cùng các phụ kiện tinh tế đi kèm từ Préci',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
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
      <body className={`${mallong.variable} ${cormorant.variable} ${_geist.variable} ${_geistMono.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        {/* Giữ nguyên Analytics của Vercel */}
        <Analytics />

        {/* 2. THÊM COMPONENT GA4 VÀO ĐÂY (TRƯỚC KHI ĐÓNG THẺ BODY) */}
        <GoogleAnalytics gaId="G-YHFBBPP2FR" />
      </body>
    </html>
  )
}