'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('candles')

  // 1. DANH SÁCH NẾN THƠM
  const candleImages = [
    '/assets/nen-thom/Picture2.png',
    '/assets/nen-thom/Picture3.png',
    '/assets/nen-thom/Picture4.png',
    '/assets/nen-thom/Picture5.png',
    '/assets/nen-thom/Picture6.png',
    '/assets/nen-thom/Picture7.png',
    '/assets/nen-thom/Picture8.png',
    '/assets/nen-thom/Picture9.png',
  ].map((img, i) => ({
    id: `c-${i}`,
    type: 'Nến thơm',
    image: img,
    // TẠO ĐƯỜNG DẪN: Ở đây tôi tạo tạm link theo số thứ tự
    // Sau này bạn có thể thay logic này để trỏ đúng slug sản phẩm
    link: `/products/nen-thom-${i + 1}`
  }))

  // 2. DANH SÁCH PHỤ KIỆN
  const accessoryImages = [
    '/assets/phu-kien/diem.png',
    '/assets/phu-kien/chuong-chup-tat-nen-thom.png',
    '/assets/phu-kien/de-go-thong.png',
    '/assets/phu-kien/khay-kim-loai.png',
    '/assets/phu-kien/keo-cat-bac-nen.png',
    '/assets/phu-kien/chong-chong.png',
    '/assets/phu-kien/que-kho.png',
    '/assets/phu-kien/combo.png',
  ].map((img, i) => ({
    id: `a-${i}`,
    type: 'Phụ kiện',
    image: img,
    // TẠO ĐƯỜNG DẪN CHO PHỤ KIỆN
    link: `/products/phu-kien-${i + 1}`
  }))

  // Logic chọn danh sách hiển thị
  const displayedProducts = activeTab === 'candles' ? candleImages : accessoryImages

  const blogPosts = [
    {
      id: 1,
      title: 'Lợi ích của nến thơm tự nhiên',
      category: 'Lợi ích nến thơm',
      excerpt: 'Khám phá các lợi ích sức khỏe tuyệt vời của nến thơm được làm từ nguyên liệu thiên nhiên.',
      date: '15 Tháng 1',
    },
    {
      id: 2,
      title: 'Ý tưởng quà tặng hoàn hảo',
      category: 'Ý tưởng quà tặng',
      excerpt: 'Những gợi ý quà tặng độc đáo và ý nghĩa cho người thân yêu của bạn.',
      date: '10 Tháng 1',
    },
    {
      id: 3,
      title: 'Mẹo chăm sóc nến thơm',
      category: 'Mẹo hay từ Préci',
      excerpt: 'Cách duy trì và sử dụng nến thơm để có tuổi thọ và mùi hương tốt nhất.',
      date: '5 Tháng 1',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* HERO VIDEO SECTION */}
        <section className="relative w-full h-[50vh] overflow-hidden bg-[#e5e0d8]">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
            <span className="text-sm font-brand tracking-widest">SCROLL</span>
          </div>
        </section>

        {/* SECTION GỘP: THÔNG ĐIỆP & ẢNH SẢN PHẨM */}
        <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-20 md:py-28">

          <div className="text-center mb-12">
            <h2 className="font-brand text-5xl md:text-7xl text-[#5e5046] mb-8 font-light tracking-wide">
              “Độc bản, trọn ý – Trọn tâm tình”
            </h2>

            {/* TAB CHUYỂN ĐỔI */}
            <div className="flex items-center justify-center gap-8 mb-4">
              <button
                onClick={() => setActiveTab('candles')}
                className={`text-xl font-brand font-bold transition-all ${activeTab === 'candles' ? 'text-[#715136] border-b border-[#715136]' : 'text-gray-400 hover:text-[#715136]'}`}
              >
                Nến thơm
              </button>
              <div className="w-[1px] h-4 bg-gray-300"></div>
              <button
                onClick={() => setActiveTab('accessories')}
                className={`text-xl font-brand font-bold transition-all ${activeTab === 'accessories' ? 'text-[#715136] border-b border-[#715136]' : 'text-gray-400 hover:text-[#715136]'}`}
              >
                Phụ kiện
              </button>
            </div>

            <p className="font-body text-2xl text-[#5e5046] mt-6 animate-in fade-in duration-300 key={activeTab}">
              {activeTab === 'candles' ? 'Các sản phẩm trước đây' : 'Các phụ kiện tinh tế từ Préci'}
            </p>
          </div>

          {/* LƯỚI ẢNH (Grid 4 cột) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 min-h-[400px]">
            {displayedProducts.map((item) => (
              <div key={item.id} className="animate-in fade-in zoom-in duration-500">
                {/* Thẻ chứa ảnh */}
                <div className="relative bg-[#f5f5f5] aspect-square overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow group cursor-pointer">

                  {/* Nếu ảnh tồn tại thì hiển thị */}
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.type}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      // Thêm xử lý lỗi nếu ảnh không tìm thấy (sẽ hiện khung xám)
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}

                  {/* Fallback / Placeholder (Hiện ra nếu ảnh lỗi hoặc đang load) */}
                  <div className={`absolute inset-0 flex items-center justify-center text-gray-400 bg-[#EFEBE7] flex-col gap-2 ${item.image ? 'hidden' : ''}`}>
                    <div className="w-16 h-16 rounded-full blur-xl opacity-30 bg-orange-200"></div>
                    <span className="relative z-10 font-brand text-sm">Préci {item.type}</span>
                  </div>

                  {/* (Tùy chọn) Overlay tên sản phẩm khi hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 text-[#715136] px-4 py-2 font-brand text-sm rounded-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Xem chi tiết
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* NÚT CTA THEO TAB */}
          <div className="flex justify-end mt-8 border-t border-gray-200 pt-8">
            <Link
              href={activeTab === 'candles' ? '/products?category=nen-thom' : '/products?category=phu-kien'}
              className="bg-[#AFA192] text-white font-brand font-bold text-lg px-8 py-3 rounded-md hover:bg-[#8C7E72] transition-colors shadow-sm animate-in fade-in duration-300"
            >
              {activeTab === 'candles' ? 'Bắt đầu tùy chỉnh nến thơm' : 'Chọn mua phụ kiện'}
            </Link>
          </div>

        </section>

        {/* Blog Preview (Giữ nguyên) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h3 className="font-brand text-5xl md:text-7xl text-[#5e5046] mb-8 font-light tracking-wide">
              Cẩm nang & Cảm hứng
            </h3>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Các bài viết giúp bạn tìm hiểu thêm về nến thơm và cách tận hưởng chúng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group cursor-pointer">
                <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors hover:shadow-md">
                  <div className="flex items-start justify-between mb-4">
                    <p className="font-brand text-xs font-semibold text-primary uppercase">{post.category}</p>
                    <p className="font-brand font-bold text-xs text-muted-foreground">{post.date}</p>
                  </div>
                  <h4 className="text-xl font-heading1 font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                  <span className="font-brand text-primary font-bold text-sm group-hover:translate-x-1 inline-block transition-transform">
                    Đọc tiếp →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Xem tất cả bài viết
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}