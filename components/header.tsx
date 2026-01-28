'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react' // Đã có useEffect
import { Menu, X, ShoppingCart } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // --- LOGIC GIỎ HÀNG ---
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const updateCount = () => {
      try {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]')
        const count = cart.reduce((acc: any, item: any) => acc + (item.qty || 1), 0)
        setCartCount(count)
      } catch (e) { setCartCount(0) }
    }
    updateCount()
    window.addEventListener('cart-updated', updateCount)
    window.addEventListener('storage', updateCount)
    return () => {
      window.removeEventListener('cart-updated', updateCount)
      window.removeEventListener('storage', updateCount)
    }
  }, [])
  // ----------------------

  const navItems = [
    { label: 'Về Préci', href: '/about' },
    { label: 'Sản phẩm', href: '/products' },
    { label: 'Cẩm nang', href: '/blog' },
    { label: 'Chính sách', href: '/policies' },
  ]

  return (
    <header className="font-brand border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">

          {/* 1. LOGO (BÊN TRÁI) */}
          <Link href="/" className="flex items-center group">
            <img
              src="/assets/Logo.png"
              alt="Préci"
              className="w-10 h-10 object-contain group-hover:opacity-80 transition-opacity"
            />
            <h1 className="text-3xl ml-2 font-brand text-primary">Préci</h1>
          </Link>

          {/* 2. CỤM MENU + GIỎ HÀNG (GOM CHUNG VÀO 1 KHỐI) */}
          {/* hidden md:flex: Chỉ hiện trên máy tính, ẩn trên điện thoại */}
          <div className="hidden md:flex items-center gap-6">

            {/* Các link Menu */}
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Icon Giỏ hàng (Nằm ngay bên phải Menu) */}
            <Link
              href="/checkout"
              className="relative group text-foreground hover:text-primary transition-colors pb-1"
              aria-label="Giỏ hàng"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm animate-in zoom-in">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* 3. NÚT MENU MOBILE (CHỈ HIỆN TRÊN ĐIỆN THOẠI) */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* --- MOBILE NAVIGATION DROPDOWN --- */}
        {isOpen && (
          <nav className="md:hidden border-t border-border mt-4 pt-4 space-y-1 bg-background animate-in slide-in-from-top-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-base font-medium text-foreground hover:text-primary hover:bg-secondary/50 px-3 py-2 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {/* Link Giỏ hàng cho Mobile */}
            <Link
              href="/checkout"
              className="flex items-center gap-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary/50 px-3 py-2 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingCart size={20} /> Giỏ hàng ({cartCount})
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}