'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { products } from '@/lib/products' // Import dữ liệu từ file chung

function ProductContent() {
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam === 'nen-thom') setActiveCategory('candles')
    else if (categoryParam === 'phu-kien') setActiveCategory('accessories')
    else setActiveCategory('all')
  }, [searchParams])

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDFA]">
      <Header />

      <main className="flex-1">
        {/* --- HEADER BANNER SẢN PHẨM (ĐÃ KHẮC PHỤC CHỮ CHÌM) --- */}
        <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">

          {/* 1. Ảnh nền Banner */}
          <img
            src="/assets/banner-products.webp"
            alt="Banner Sản Phẩm"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* 2. LỚP PHỦ MỜ (Overlay) - GIÚP NỔI BẬT CHỮ */}
          {/* bg-white/40 nghĩa là lớp trắng mờ 40%. Bạn có thể giảm xuống /30 hoặc tăng lên /50 tùy mắt nhìn */}
          <div className="absolute inset-0 bg-white/20" />

          {/* 3. Lớp phủ nội dung */}
          <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col justify-center md:justify-end items-center md:items-end pb-12 md:pb-20">

            {/* GOM CẢ 2 VÀO MỘT KHỐI VÀ CĂN PHẢI */}
            <div className="text-center md:text-right">

              {/* Tiêu đề: Đã xóa 'md:self-center' và thêm 'mb-2' để tạo khoảng cách với mô tả dưới */}
              <h1 className="text-6xl md:text-[7rem] font-brand text-[#1a1a1a] leading-none drop-shadow-sm mb-2 md:mb-4">
                Sản phẩm
              </h1>

              <p className="font-body text-base md:text-xl text-[#1a1a1a] font-medium italic tracking-wide ml-auto drop-shadow-sm">
                Khám phá bộ sưu tập nến thơm và phụ kiện cao cấp được chế tác tỉ mỉ
              </p>

            </div>

          </div>
        </section>

        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Filter Buttons */}
          <div className="flex justify-center gap-6 mb-16">
            {[
              { id: 'all', label: 'Tất Cả' },
              { id: 'candles', label: 'Nến Thơm' },
              { id: 'accessories', label: 'Phụ Kiện' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-lg font-brand font-bold uppercase px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === cat.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-transparent text-gray-500 hover:text-primary hover:bg-[#F2EFE9]'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                // LOGIC LIÊN KẾT: Nếu là nến -> trang customize, nếu là phụ kiện -> trang chi tiết thường
                href={product.customizable ? `/products/customize/${product.id}` : `/products/${product.id}`}
                className="group block"
              >
                <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#E5E0D8]">
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-[#F9F7F5]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Badge */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold font-body text-primary rounded-sm shadow-sm">
                      {product.category === 'candles' ? 'NẾN THƠM' : 'PHỤ KIỆN'}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="font-brand font-bold text-2xl text-[#3A3A3A] mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-body text-primary font-bold text-lg">
                      {product.priceFormatted}
                    </p>
                    <span className="font-body inline-block mt-4 text-xs font-bold tracking-widest text-gray-400 uppercase group-hover:text-primary border-b border-transparent group-hover:border-primary transition-all">
                      {product.customizable ? 'Tùy chỉnh ngay' : 'Xem chi tiết'}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}>
      <ProductContent />
    </Suspense>
  )
}