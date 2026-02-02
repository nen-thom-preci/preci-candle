'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import {
  ShieldCheck,
  Leaf,
  Globe,
  Feather,
  SlidersHorizontal,
  HeartHandshake
} from 'lucide-react'

export default function Home() {
  // State quản lý slide hiện tại
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4; // Số lượng ảnh

  // Tự động chuyển slide sau mỗi 5 giây
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 4000); // 5000ms = 5 giây

    return () => clearInterval(timer); // Dọn dẹp timer khi component unmount
  }, []);

  const [activeTab, setActiveTab] = useState('candles')

  // 1. DANH SÁCH NẾN THƠM
  const candleImages = [
    '/nen-thom/Picture2.webp',
    '/nen-thom/Picture3.webp',
    '/nen-thom/Picture4.webp',
    '/nen-thom/Picture5.webp',
    '/nen-thom/Picture6.webp',
    '/nen-thom/Picture7.webp',
    '/nen-thom/Picture8.webp',
    '/nen-thom/Picture9.webp',
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
    '/phu-kien/hop-diem.webp',
    '/phu-kien/chuong-chup.webp',
    '/phu-kien/de-go-thong.webp',
    '/phu-kien/khay-kim-loai.webp',
    '/phu-kien/keo-cat-bac-nen.webp',
    '/phu-kien/chong-chong.webp',
    '/phu-kien/que-kho.webp',
    '/phu-kien/combo.webp',
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
        {/* HERO SLIDER SECTION */}
        <section className="relative w-full h-[85vh] overflow-hidden bg-[#e5e0d8] group">

          {/* Container chứa các ảnh (Sử dụng Flex để xếp ngang và Translate để trượt) */}
          <div
            className="flex w-full h-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* Danh sách ảnh */}
            {[
              '/assets/slider-1.webp',
              '/assets/slider-2.webp',
              '/assets/slider-3.webp',
              '/assets/slider-4.webp',
            ].map((src, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 relative">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Lớp phủ đen mờ để text (nếu có) dễ đọc hơn */}
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            ))}
          </div>

          {/* Nút chỉ dẫn (Dots) ở dưới cùng */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === index
                  ? 'bg-white w-8' // Active: dài ra và màu trắng
                  : 'bg-white/50 hover:bg-white/80' // Inactive: mờ
                  }`}
              />
            ))}
          </div>

          {/* Nút Scroll cũ của bạn */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/80 z-10">
            <span className="text-sm font-brand tracking-widest drop-shadow-md">SCROLL</span>
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

          {/* LƯỚI ẢNH (Grid 4 cột) - CHỈ HIỂN THỊ, KHÔNG BẤM ĐƯỢC */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 min-h-[400px]">
            {displayedProducts.map((item) => (
              // 1. Thay Link bằng div để không bấm chuyển trang được
              <div
                key={item.id}
                className="animate-in fade-in zoom-in duration-500"
              >
                {/* 2. Xóa 'cursor-pointer' để chuột hiển thị bình thường */}
                <div className="relative bg-[#f5f5f5] aspect-square overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow group">

                  {/* Hiển thị ảnh (Vẫn giữ hiệu ứng zoom nhẹ khi di chuột cho sinh động) */}
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.type}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}

                  {/* Fallback / Placeholder (Giữ nguyên phòng khi ảnh lỗi) */}
                  <div className={`absolute inset-0 flex items-center justify-center text-gray-400 bg-[#EFEBE7] flex-col gap-2 ${item.image ? 'hidden' : ''}`}>
                    <div className="w-16 h-16 rounded-full blur-xl opacity-30 bg-orange-200"></div>
                    <span className="relative z-10 font-brand text-sm">Préci {item.type}</span>
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

        {/* about */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

            {/* TIÊU ĐỀ CHÍNH */}
            <div className="text-center mb-16 md:mb-24">
              <p className="text-sm font-body font-bold text-gray-500 uppercase tracking-widest mb-3">
                Sản phẩm chủ đạo
              </p>
              <h1 className="text-4xl md:text-6xl font-brand text-primary uppercase">
                Nến Thơm Từ Thiên Nhiên
              </h1>
            </div>

            {/* NỘI DUNG CHÍNH: GRID 3 CỘT */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

              {/* CỘT TRÁI (3 Mục) */}
              <div className="space-y-12 md:space-y-16">

                {/* Mục 1 */}
                <div className="flex gap-4 md:gap-6 items-start">
                  <div className="flex-shrink-0 mt-1">
                    {/* Icon giả lập Badge 100% Natural */}
                    <div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center text-primary">
                      <span className="font-bold text-[10px] text-center leading-tight">100%<br />NATURAL</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-body font-bold text-foreground mb-2">100% Sáp tự nhiên</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed text-justify">
                      100% sáp ong có nguồn gốc tự nhiên được khai thác từ trại nuôi ong bằng mật hoa tại Vĩnh Phúc.
                    </p>
                  </div>
                </div>

                {/* Mục 2 */}
                <div className="flex gap-4 md:gap-6 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ShieldCheck size={48} strokeWidth={1.5} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-body font-bold text-foreground mb-2">Không độc hại</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed text-justify">
                      Khi đốt không tạo ra khí độc, là một liệu pháp thư giãn tinh thần hiệu quả.
                    </p>
                  </div>
                </div>

                {/* Mục 3 */}
                <div className="flex gap-4 md:gap-6 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Globe size={48} strokeWidth={1.5} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-body font-bold text-foreground mb-2">Hương thơm lành tính</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed text-justify">
                      Hương thơm quen thuộc gắn liền với đời sống của người dân Việt Nam, không chứa các chất gây ung thư, đầy đủ giấy tờ pháp lý.
                    </p>
                  </div>
                </div>

              </div>

              {/* CỘT GIỮA (Hình ảnh) */}
              <div className="flex justify-center items-center py-8 lg:py-0">
                {/* LƯU Ý: Bạn cần thay đường dẫn ảnh bên dưới bằng ảnh cái hũ nến nghiêng của bạn.
                   Nếu chưa có, tôi đang dùng tạm ảnh Picture2.webp 
                */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  <img
                    src="/assets/nen-tach-nen.webp"
                    alt="Nến thơm thiên nhiên"
                    className="w-full h-full object-contain drop-shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-700"
                  />
                  {/* Hiệu ứng bóng mờ phía sau cho đẹp */}
                  <div className="absolute inset-0 bg-orange-100 rounded-full blur-3xl opacity-30 -z-10"></div>
                </div>
              </div>

              {/* CỘT PHẢI (3 Mục - Căn lề phải trên Desktop) */}
              <div className="space-y-12 md:space-y-16">

                {/* Mục 4 */}
                <div className="flex flex-row lg:flex-row-reverse gap-4 md:gap-6 items-start lg:text-right">
                  <div className="flex-shrink-0 mt-1">
                    {/* Icon Pb (Lead free) */}
                    <div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center text-primary relative">
                      <span className="font-bold text-lg">Pb</span>
                      <div className="absolute w-full h-[2px] bg-primary rotate-45"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-body font-bold text-foreground mb-2">Bấc không chứa chì</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed text-justify lg:text-right">
                      Bấc cotton hoặc bấc gỗ không chứa chì hay kim loại nặng khác.
                    </p>
                  </div>
                </div>

                {/* Mục 5 */}
                <div className="flex flex-row lg:flex-row-reverse gap-4 md:gap-6 items-start lg:text-right">
                  <div className="flex-shrink-0 mt-1">
                    <SlidersHorizontal size={48} strokeWidth={1.5} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-body font-bold text-foreground mb-2">Thiết kế tùy chỉnh</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed text-justify lg:text-right">
                      Công nghệ customize mẫu nến thơm theo nhu cầu với mô phỏng 3D thời gian thực.
                    </p>
                  </div>
                </div>

                {/* Mục 6 */}
                <div className="flex flex-row lg:flex-row-reverse gap-4 md:gap-6 items-start lg:text-right">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center text-primary p-2">
                      <HeartHandshake size={32} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-body font-bold text-foreground mb-2">Hoàn toàn thủ công</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed text-justify lg:text-right">
                      Từng sản phẩm được phối trộn hoàn toàn thủ công dưới đôi bàn tay khéo léo của người thợ lành nghề.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Blog Preview (Giữ nguyên) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h3 className="font-brand uppercase text-5xl md:text-7xl text-primary mb-8 font-light tracking-wide">
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
                  <h4 className="text-xl font-body font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
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