'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

// --- COMPONENT CON: CHỨA LOGIC CHÍNH ---
function ProductContent() {
  const searchParams = useSearchParams()
  // Mặc định là 'all', nhưng nếu URL có ?category=... thì lấy giá trị đó
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    // Đọc tham số từ URL
    const categoryParam = searchParams.get('category')

    if (categoryParam === 'nen-thom') {
      setActiveCategory('candles')
    } else if (categoryParam === 'phu-kien') {
      setActiveCategory('accessories')
    } else {
      setActiveCategory('all')
    }
  }, [searchParams])

  const categories = [
    { id: 'all', label: 'Tất Cả Sản Phẩm', icon: '✨' },
    { id: 'candles', label: 'Nến Thơm', icon: '🕯️' },
    { id: 'accessories', label: 'Phụ Kiện', icon: '🎁' },
  ]

  const products = [
    {
      id: 1,
      name: 'Nến Thơm Hoa Lài',
      category: 'candles',
      price: 299000,
      priceFormatted: '299.000 đ',
      description: 'Thanh khiết, nhẹ nhàng',
      image: '/products/Hoa lài.jpg',
      customizable: true,
    },
    {
      id: 2,
      name: 'Nến Thơm Thảo Mộc',
      category: 'candles',
      price: 299000,
      priceFormatted: '299.000 đ',
      description: 'Xô thơm & bạc hà tươi mới',
      image: '/products/Thảo mộc.jpg',
      customizable: true,
    },
    {
      id: 3,
      name: 'Nến Thơm Vani',
      category: 'candles',
      price: 399000,
      priceFormatted: '399.000 đ',
      description: 'Ngọt ngào, ấm cúng',
      image: '/products/Vani.png',
      customizable: true,
    },
    {
      id: 4,
      name: 'Nến Thơm Cam Chanh',
      category: 'candles',
      price: 349000,
      priceFormatted: '349.000 đ',
      description: 'Tươi mát, đầy năng lượng',
      image: '/products/Cam chanh.jpg',
      customizable: true,
    },
    {
      id: 5,
      name: 'Nến Thơm Oải Hương',
      category: 'candles',
      price: 349000,
      priceFormatted: '349.000 đ',
      description: 'Thư giãn, ngủ ngon',
      image: '/products/Oải hương.jpg',
      customizable: true,
    },
    {
      id: 6,
      name: 'Nến Thơm Biển Cả',
      category: 'candles',
      price: 349000,
      priceFormatted: '349.000 đ',
      description: 'Mát lành, phóng khoáng',
      image: '/products/Biển cả.jpg',
      customizable: true,
    },
    {
      id: 7,
      name: 'Hộp Quà Nến Thơm',
      category: 'accessories',
      price: 89000,
      priceFormatted: '89.000 đ',
      description: 'Hộp quà sang trọng để đựng nến thơm',
      image: '/products/giftbox.jpg',
      customizable: false,
    },
    {
      id: 8,
      name: 'Dây Nến Sợi Linen',
      category: 'accessories',
      price: 49000,
      priceFormatted: '49.000 đ',
      description: 'Dây linen chất lượng cao cho nến thơm',
      image: '/products/dây nến.jpg',
      customizable: false,
    },
    {
      id: 9,
      name: 'Khuôn Nến Silicon',
      category: 'accessories',
      price: 199000,
      priceFormatted: '199.000 đ',
      description: 'Khuôn silicon chuyên nghiệp để tạo nến',
      image: '/products/Khuôn nến.jpg',
      customizable: false,
    },
  ]

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-brand text-foreground mb-6">
              Sản phẩm
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl">
              Khám phá bộ sưu tập nến thơm và phụ kiện cao cấp được chế tác tỉ mỉ
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="font-heading1 text-sm font-semibold text-primary uppercase mb-4">Danh mục</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${activeCategory === cat.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground hover:bg-accent hover:text-accent-foreground'
                    }`}
                >
                  {cat.icon} {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <Link
                key={product.id}
                href={product.customizable ? `/products/customize/${product.id}` : `/products/${product.id}`}
                className="group cursor-pointer"
              >
                <div className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all hover:border-primary border border-border">
                  {/* Product Image */}
                  <div className="h-56 w-full overflow-hidden flex items-center justify-center bg-secondary relative">
                    {product.image.startsWith('/') ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`${product.image} w-full h-full flex items-center justify-center`}>
                        <span className="text-5xl opacity-30 animate-pulse">🕯️</span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <p className="font-brand text-xs font-bold text-primary mb-2 uppercase">
                      {product.category === 'candles' ? 'Nến Thơm' : 'Phụ Kiện'}
                    </p>
                    <h3 className="text-xl font-heading1 uppercase font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mb-4 h-10 overflow-hidden">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="font-heading1 text-lg font-semibold text-primary">{product.priceFormatted}</span>
                      <span className="font-body text-primary font-semibold group-hover:translate-x-1 transition-transform inline-block">
                        →
                      </span>
                    </div>
                    {product.customizable && (
                      <p className="font-heading1 text-xs text-primary mt-3">Sản phẩm có thể tùy chỉnh theo ý bạn</p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">Không có sản phẩm trong danh mục này</p>
              <button
                onClick={() => setActiveCategory('all')}
                className="text-primary font-semibold hover:underline"
              >
                Xem tất cả sản phẩm
              </button>
            </div>
          )}
        </section>

        {/* Newsletter CTA */}
        <section className="bg-secondary py-16 md:py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-brand font-bold text-foreground mb-4">
              Nhận ưu đãi độc quyền
            </h3>
            <p className="font-heading1 text-muted-foreground mb-6">
              Đăng ký nhận tin tức sản phẩm mới và ưu đãi đặc biệt từ Préci
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all"
              >
                Đăng ký
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

// --- COMPONENT CHA: BỌC SUSPENSE ---
export default function ProductsPage() {
  return (
    // Suspense là bắt buộc khi dùng useSearchParams để tránh lỗi build
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Đang tải...</div>}>
      <ProductContent />
    </Suspense>
  )
}