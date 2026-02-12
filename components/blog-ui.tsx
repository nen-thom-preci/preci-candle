'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { useState, useEffect, useMemo } from 'react'
import { BookOpen, ArrowRight, Heart } from 'lucide-react'
// 1. Import thêm getPostCategory
import { WPPost, getPostImage, getPostCategory } from '@/lib/wordpress'

export default function BlogUI({ posts }: { posts: WPPost[] }) {
    const [activeCategory, setActiveCategory] = useState('Tất cả')
    const [savedCount, setSavedCount] = useState(0)

    // Logic đếm bài đã lưu (Giữ nguyên)
    useEffect(() => {
        try {
            const updateCount = () => {
                const saved = JSON.parse(localStorage.getItem('saved_posts') || '[]')
                setSavedCount(saved.length)
            }
            updateCount() // Chạy lần đầu
            window.addEventListener('saved-posts-updated', updateCount)
            return () => window.removeEventListener('saved-posts-updated', updateCount)
        } catch (e) { }
    }, [])

    // 2. TỰ ĐỘNG TẠO DANH SÁCH DANH MỤC (Dynamic Categories)
    // Code sẽ quét tất cả bài viết để xem có những danh mục nào
    const categories = useMemo(() => {
        // Lấy danh sách tên category của từng bài
        const allCats = posts.map(p => getPostCategory(p))
        // Loại bỏ trùng lặp (Set) và chuyển về mảng
        const uniqueCats = Array.from(new Set(allCats))
        // Thêm nút "Tất cả" vào đầu tiên
        return ['Tất cả', ...uniqueCats]
    }, [posts])

    // 3. LOGIC LỌC BÀI VIẾT THẬT
    const filteredPosts = activeCategory === 'Tất cả'
        ? posts
        : posts.filter(p => getPostCategory(p) === activeCategory)

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
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

                    {/* TRƯỜNG HỢP 1: DATA RỖNG */}
                    {posts.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-700">
                            <div className="w-24 h-24 bg-[#F2EFE9] rounded-full flex items-center justify-center mb-6 shadow-sm border border-[#E5E0D8]">
                                <BookOpen size={40} className="text-[#715136] opacity-80" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-brand font-bold text-[#715136] mb-4">
                                Nội dung đang được ấp ủ
                            </h2>
                            <p className="font-body text-gray-500 max-w-lg mx-auto leading-relaxed mb-8">
                                Đội ngũ Préci đang tỉ mỉ biên soạn những bài viết thú vị về nghệ thuật mùi hương. Hãy quay lại sớm nhé!
                            </p>
                            <div className="flex gap-4">
                                <Link href="/" className="px-8 py-3 rounded-full border border-[#E5E0D8] text-[#715136] font-brand font-bold hover:bg-[#F2EFE9] transition-all">
                                    Về trang chủ
                                </Link>
                            </div>
                        </div>
                    ) : (
                        /* TRƯỜNG HỢP 2: CÓ BÀI VIẾT */
                        <>
                            {/* Category Filter - Đã sửa thành Dynamic */}
                            <nav className="mb-12" aria-label="Bộ lọc danh mục">
                                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                    {categories.map((cat, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveCategory(cat)}
                                            className={`text-sm md:text-base font-brand font-bold uppercase px-6 py-2.5 rounded-full transition-all duration-300 border ${activeCategory === cat
                                                ? 'bg-[#715136] text-white border-[#715136] shadow-md'
                                                : 'bg-transparent text-gray-500 border-transparent hover:text-[#715136] hover:bg-[#F2EFE9] hover:border-[#E5E0D8]'
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </nav>

                            {/* Nút đến trang đã lưu */}
                            {savedCount > 0 && (
                                <Link
                                    href="/blog/saved"
                                    className="flex items-center gap-2 px-5 py-2 bg-white border border-[#E5E0D8] rounded-full text-[#715136] font-brand font-bold shadow-sm hover:shadow-md hover:border-[#DCAE96] transition-all animate-in fade-in mb-8 w-fit"
                                >
                                    <Heart size={18} className="fill-[#DCAE96] text-[#DCAE96]" />
                                    <span>Bài đã lưu ({savedCount})</span>
                                </Link>
                            )}

                            {/* Posts Grid */}
                            {filteredPosts.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filteredPosts.map(post => {
                                        // XỬ LÝ DỮ LIỆU CHUẨN
                                        const imageUrl = getPostImage(post);
                                        const dateFormatted = new Date(post.date).toLocaleDateString('vi-VN');
                                        const category = getPostCategory(post); // Lấy tên category thật

                                        return (
                                            <Link key={post.id} href={`/blog/${post.slug}`} className="group cursor-pointer h-full">
                                                <article className="flex flex-col h-full bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#E5E0D8] group-hover:border-[#DCAE96]">

                                                    {/* Ảnh đại diện */}
                                                    <div className="relative h-60 overflow-hidden bg-[#F2EFE9]">
                                                        <img
                                                            src={imageUrl}
                                                            alt={post.title.rendered}
                                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                        />
                                                        {/* Badge hiển thị Category thật */}
                                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-body text-[#715136] uppercase tracking-wide shadow-sm font-bold">
                                                            {category}
                                                        </div>
                                                    </div>

                                                    {/* Nội dung */}
                                                    <div className="p-6 flex-1 flex flex-col">
                                                        <div className="flex items-center gap-3 text-sm text-gray-600 mb-3 font-body font-bold">
                                                            <span>{dateFormatted}</span>
                                                        </div>

                                                        <h3
                                                            className="text-xl font-brand font-bold text-[#3a3a3a] mb-3 group-hover:text-[#715136] transition-colors leading-snug line-clamp-2"
                                                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                                        />

                                                        <div
                                                            className="font-body text-sm text-gray-500 mb-6 line-clamp-3 leading-relaxed flex-1"
                                                            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                                        />

                                                        <div className="flex items-center justify-between pt-4 border-t border-[#F2EFE9] mt-auto">
                                                            <span className="text-xs font-bold text-gray-400 font-brand uppercase tracking-wider">Préci Team</span>
                                                            <span className="text-[#715136] font-body text-sm group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">Đọc tiếp →</span>
                                                        </div>
                                                    </div>
                                                </article>
                                            </Link>
                                        )
                                    })}
                                </div>
                            ) : (
                                <div className="text-center py-20 bg-[#F9F7F5] rounded-2xl border border-dashed border-[#E5E0D8]">
                                    <p className="font-body text-lg text-gray-500 mb-4">Chưa có bài viết nào trong danh mục "{activeCategory}".</p>
                                    <button onClick={() => setActiveCategory('Tất cả')} className="font-brand text-[#715136] font-bold hover:underline underline-offset-4">
                                        Xem tất cả bài viết
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </section>

                {/* Newsletter CTA */}
                <section className="bg-[#715136] py-20 md:py-24 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                        <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[200%] bg-white/20 blur-[100px] rounded-full mix-blend-overlay"></div>
                    </div>
                    <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
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
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}