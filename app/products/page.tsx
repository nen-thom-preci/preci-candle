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

          {/* 3. Lớp phủ nội dung */}
          <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center text-center text-white 
             bg-black/30 backdrop-blur-[3px] border border-white/10 
             p-6 md:p-12 rounded-2xl md:rounded-3xl shadow-2xl max-w-[90%] md:max-w-3xl mx-auto
             animate-in fade-in zoom-in duration-1000"
            >
              <div className="md:max-w-xl">
                {/* TIÊU ĐỀ */}
                <h1 className="font-brand text-white text-4xl md:text-7xl mb-2 drop-shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards">
                  Sản phẩm
                </h1>
                <p className="font-body text-xl text-white italic drop-shadow-lg leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-forwards">
                  Khám phá bộ sưu tập nến thơm và phụ kiện cao cấp được chế tác tỉ mỉ
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- DANH SÁCH SẢN PHẨM --- */}
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
                className={`text-base md:text-lg font-brand font-bold px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === cat.id
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
      </main >
      <Footer />
    </div >
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}>
      <ProductContent />
    </Suspense>
  )
}