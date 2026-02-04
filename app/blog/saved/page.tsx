'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { blogPosts, BLOG_CATEGORIES } from '@/lib/blog-data'
import { ArrowRight, BookmarkX, Heart } from 'lucide-react'

export default function SavedBlogPage() {
    const [savedPosts, setSavedPosts] = useState<typeof blogPosts>([])
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        // Lấy danh sách slug đã lưu từ LocalStorage
        try {
            const savedSlugs = JSON.parse(localStorage.getItem('saved_posts') || '[]')

            // Lọc ra các bài viết có slug nằm trong danh sách đã lưu
            const posts = blogPosts.filter(post => savedSlugs.includes(post.slug))
            setSavedPosts(posts)
        } catch (e) {
            console.error(e)
        }
        setMounted(true)
    }, [])

    // Hàm xóa bài viết khỏi danh sách đã lưu ngay tại trang này
    const removePost = (e: React.MouseEvent, slugToRemove: string) => {
        e.preventDefault() // Ngăn chặn chuyển trang khi bấm nút xóa
        const newPosts = savedPosts.filter(p => p.slug !== slugToRemove)
        setSavedPosts(newPosts)

        // Cập nhật lại LocalStorage
        const newSlugs = newPosts.map(p => p.slug)
        localStorage.setItem('saved_posts', JSON.stringify(newSlugs))

        // Bắn sự kiện để các component khác (nếu có) tự cập nhật
        window.dispatchEvent(new Event('saved-posts-updated'))
    }

    if (!mounted) return null // Tránh lỗi Hydration

    return (
        <div className="min-h-screen flex flex-col bg-[#FFFDFA]">
            <Header />

            <main className="flex-1">
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-brand font-bold text-[#715136] mb-4">
                            Bài viết đã lưu
                        </h1>
                        <p className="font-body text-gray-500">
                            Danh sách các bài viết yêu thích của bạn ({savedPosts.length})
                        </p>
                    </div>

                    {savedPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {savedPosts.map(post => (
                                <Link
                                    key={post.id}
                                    href={`/blog/${post.slug}`}
                                    className="group cursor-pointer h-full"
                                >
                                    <article className="flex flex-col h-full bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#E5E0D8] group-hover:border-[#DCAE96] relative">

                                        {/* Nút Xóa nhanh (Dấu X góc phải) */}
                                        <button
                                            onClick={(e) => removePost(e, post.slug)}
                                            className="absolute top-3 right-3 z-20 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors shadow-sm"
                                            title="Bỏ lưu"
                                        >
                                            <BookmarkX size={18} />
                                        </button>

                                        {/* Featured Image */}
                                        <div className="relative h-56 overflow-hidden bg-[#F2EFE9]">
                                            {post.image.startsWith('/') ? (
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#F2EFE9] to-[#E5E0D8]">
                                                    <span className="text-4xl">🌿</span>
                                                </div>
                                            )}

                                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#715136] uppercase tracking-wide shadow-sm">
                                                {BLOG_CATEGORIES.find(c => c.id === post.category)?.label}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="flex items-center gap-3 text-xs text-gray-400 mb-3 font-body">
                                                <span>{post.date}</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                <span>{post.readTime} đọc</span>
                                            </div>

                                            <h3 className="text-xl font-brand font-bold text-[#3a3a3a] mb-3 group-hover:text-[#715136] transition-colors leading-snug line-clamp-2">
                                                {post.title}
                                            </h3>

                                            <div className="flex items-center justify-between pt-4 border-t border-[#F2EFE9] mt-auto">
                                                <span className="text-xs font-bold text-gray-400 font-brand uppercase tracking-wider">
                                                    {post.author}
                                                </span>
                                                <span className="text-[#715136] font-bold text-sm group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                                    Đọc lại <ArrowRight size={16} />
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        // Trạng thái trống
                        <div className="flex flex-col items-center justify-center py-20 bg-[#F9F7F5] rounded-3xl border border-dashed border-[#E5E0D8]">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                                <Heart size={32} className="text-gray-300" />
                            </div>
                            <h3 className="text-2xl font-brand font-bold text-gray-400 mb-2">Chưa có bài viết nào</h3>
                            <p className="text-gray-500 font-body mb-8">Bạn hãy thả tim các bài viết hay để lưu vào đây nhé.</p>
                            <Link
                                href="/blog"
                                className="px-8 py-3 bg-[#715136] text-white rounded-full font-bold font-brand hover:bg-[#5a402a] transition-all shadow-md"
                            >
                                Khám phá Cẩm nang ngay
                            </Link>
                        </div>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    )
}