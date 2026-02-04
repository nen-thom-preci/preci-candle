'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { BLOG_CATEGORIES, blogPosts } from '@/lib/blog-data' // Import dữ liệu
import { BookOpen, ArrowRight, Heart } from 'lucide-react'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [savedCount, setSavedCount] = useState(0) // <--- State mới
  // Lọc bài viết

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('saved_posts') || '[]')
      setSavedCount(saved.length)

      // Lắng nghe sự kiện nếu có thay đổi từ tab khác
      const handleStorageChange = () => {
        const newSaved = JSON.parse(localStorage.getItem('saved_posts') || '[]')
        setSavedCount(newSaved.length)
      }
      window.addEventListener('saved-posts-updated', handleStorageChange)
      return () => window.removeEventListener('saved-posts-updated', handleStorageChange)
    } catch (e) { }
  }, [])
  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDFA]">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[400px] md:h-[450px] overflow-hidden flex items-center justify-center">
          <img
            src="/assets/banner-blog.webp"
            alt="Cẩm nang nến thơm Préci"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <span className="text-white/90 font-brand text-lg tracking-[0.2em] uppercase mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">
              Préci Blog
            </span>
            <h1 className="text-5xl md:text-7xl font-brand text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              Cẩm nang & Cảm hứng
            </h1>
            <p className="font-body text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Các bài viết giúp bạn tìm hiểu thêm về nến thơm và cách tận hưởng chúng
            </p>
          </div>
        </section>

        {/* Blog Section */}
        {/* Blog Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

          {/* TRƯỜNG HỢP 1: CHƯA CÓ BÀI VIẾT NÀO TRÊN HỆ THỐNG (DATA RỖNG) */}
          {blogPosts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-700">
              {/* Icon trang trí */}
              <div className="w-24 h-24 bg-[#F2EFE9] rounded-full flex items-center justify-center mb-6 shadow-sm border border-[#E5E0D8]">
                <BookOpen size={40} className="text-[#715136] opacity-80" />
              </div>

              <h2 className="text-3xl md:text-4xl font-brand font-bold text-[#715136] mb-4">
                Nội dung đang được ấp ủ
              </h2>

              <p className="font-body text-gray-500 max-w-lg mx-auto leading-relaxed mb-8">
                Đội ngũ Préci đang tỉ mỉ biên soạn những bài viết thú vị về nghệ thuật mùi hương và phong cách sống. Hãy quay lại sớm nhé!
              </p>

              <div className="flex gap-4">
                <Link
                  href="/"
                  className="px-8 py-3 rounded-full border border-[#E5E0D8] text-[#715136] font-brand font-bold hover:bg-[#F2EFE9] transition-all"
                >
                  Về trang chủ
                </Link>
                <Link
                  href="/products"
                  className="px-8 py-3 rounded-full bg-[#715136] text-white font-brand font-bold hover:bg-[#5a402a] shadow-lg hover:-translate-y-1 transition-all flex items-center gap-2"
                >
                  Mua sắm ngay <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ) : (
            /* TRƯỜNG HỢP 2: ĐÃ CÓ BÀI VIẾT (HIỆN BỘ LỌC VÀ DANH SÁCH NHƯ CŨ) */
            <>
              {/* Category Filter */}
              <nav className="mb-12" aria-label="Bộ lọc danh mục">
                {/* ... (Giữ nguyên code bộ lọc cũ của bạn) ... */}
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {BLOG_CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`text-sm md:text-base font-brand font-bold uppercase px-6 py-2.5 rounded-full transition-all duration-300 border ${activeCategory === cat.id
                        ? 'bg-[#715136] text-white border-[#715136] shadow-md'
                        : 'bg-transparent text-gray-500 border-transparent hover:text-[#715136] hover:bg-[#F2EFE9] hover:border-[#E5E0D8]'
                        }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </nav>

              {/* NÚT ĐẾN TRANG ĐÃ LƯU (MỚI) */}
              {savedCount > 0 && (
                <Link
                  href="/blog/saved"
                  className="flex items-center gap-2 px-5 py-2 bg-white border border-[#E5E0D8] rounded-full text-[#715136] font-brand font-bold shadow-sm hover:shadow-md hover:border-[#DCAE96] transition-all animate-in fade-in"
                >
                  <Heart size={18} className="fill-[#DCAE96] text-[#DCAE96]" />
                  <span>Bài đã lưu ({savedCount})</span>
                </Link>
              )}

              {/* Posts Grid */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* ... (Giữ nguyên vòng lặp hiển thị bài viết cũ) ... */}
                  {filteredPosts.map(post => (
                    /* ... Code Link và Article cũ ... */
                    <Link key={post.id} href={`/blog/${post.slug}`} className="group cursor-pointer h-full">
                      {/* ... Nội dung article ... */}
                      <article className="flex flex-col h-full bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#E5E0D8] group-hover:border-[#DCAE96]">
                        {/* ... Copy lại phần render bài viết ở câu trả lời trước ... */}
                        <div className="relative h-60 overflow-hidden bg-[#F2EFE9]">
                          {post.image.startsWith('/') ? (
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                          ) : (
                            <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-[#F2EFE9] to-[#E5E0D8]`}><span className="text-4xl">🌿</span></div>
                          )}
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-body text-[#715136] uppercase tracking-wide shadow-sm">
                            {BLOG_CATEGORIES.find(c => c.id === post.category)?.label}
                          </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center gap-3 text-xs text-gray-400 mb-3 font-body"><span>{post.date}</span><span className="w-1 h-1 rounded-full bg-gray-300"></span><span>{post.readTime} đọc</span></div>
                          <h3 className="text-xl font-brand font-bold text-[#3a3a3a] mb-3 group-hover:text-[#715136] transition-colors leading-snug line-clamp-2">{post.title}</h3>
                          <p className="font-body text-sm text-gray-500 mb-6 line-clamp-3 leading-relaxed flex-1">{post.excerpt}</p>
                          <div className="flex items-center justify-between pt-4 border-t border-[#F2EFE9] mt-auto">
                            <span className="text-xs font-bold text-gray-400 font-brand uppercase tracking-wider">{post.author}</span>
                            <span className="text-[#715136] font-body text-sm group-hover:translate-x-1 transition-transform flex items-center gap-1">Đọc tiếp →</span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              ) : (
                /* Empty Category State (Khi chọn danh mục mà không có bài) */
                <div className="text-center py-20 bg-[#F9F7F5] rounded-2xl border border-dashed border-[#E5E0D8]">
                  <p className="font-body text-lg text-gray-500 mb-4">Chưa có bài viết nào trong danh mục này.</p>
                  <button
                    onClick={() => setActiveCategory('all')}
                    className="font-brand text-[#715136] font-bold hover:underline underline-offset-4"
                  >
                    Xem tất cả bài viết
                  </button>
                </div>
              )}
            </>
          )}
        </section>

        {/* Newsletter CTA - Updated Design */}
        <section className="bg-[#715136] py-20 md:py-24 relative overflow-hidden">
          {/* Họa tiết trang trí nền (Optional) */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
            <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[200%] bg-white/20 blur-[100px] rounded-full mix-blend-overlay"></div>
          </div>
          <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
            {/* Icon trang trí */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#F2EFE9]"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            </div>
            <h3 className="text-3xl md:text-5xl font-brand font-bold text-white mb-4 leading-tight">
              Đừng bỏ lỡ những mùi hương mới
            </h3>
            <p className="font-body text-lg text-[#F2EFE9]/80 mb-10 max-w-lg mx-auto leading-relaxed">
              Đăng ký nhận bản tin để cập nhật các bài viết về liệu pháp mùi hương, mẹo chăm sóc nến và ưu đãi độc quyền từ Préci.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn..."
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:bg-white focus:text-[#715136] focus:border-white transition-all font-body"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#DCAE96] text-[#715136] font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 font-body uppercase tracking-wider text-sm shadow-lg"
              >
                Đăng Ký
              </button>
            </form>
            <p className="mt-6 text-xs text-white/40 font-body">

              Chúng mình cam kết bảo mật thông tin và không spam.

            </p>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}