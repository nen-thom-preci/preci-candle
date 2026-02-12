'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRight, BookmarkX, Heart, Loader2 } from 'lucide-react'
import { WPPost } from '@/lib/wordpress' // Chỉ lấy kiểu dữ liệu

export default function SavedBlogPage() {
    const [savedPosts, setSavedPosts] = useState<WPPost[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchAndCleanSavedPosts = async () => {
            try {
                // 1. Lấy danh sách slug đang lưu trong máy
                const localSlugs = JSON.parse(localStorage.getItem('saved_posts') || '[]')

                if (localSlugs.length === 0) {
                    setSavedPosts([])
                    setLoading(false)
                    return
                }

                // 2. Kiểm tra từng bài với WordPress
                // (Dùng Public API để đảm bảo không bị chặn)
                const postsData = await Promise.all(
                    localSlugs.map(async (slug: string) => {
                        try {
                            const res = await fetch(`https://public-api.wordpress.com/wp/v2/sites/precinenthom-xrgmf.wordpress.com/posts?slug=${slug}&_embed`)
                            const data = await res.json()
                            // Nếu tìm thấy bài thì trả về bài đó, không thì trả về null
                            return (data && data.length > 0) ? data[0] : null
                        } catch (e) {
                            return null
                        }
                    })
                )

                // 3. Lọc lấy những bài THỰC SỰ tồn tại (Không null)
                const validPosts = postsData.filter((p): p is WPPost => p !== null)
                setSavedPosts(validPosts)

                // --- ĐÂY LÀ PHẦN SỬA LỖI ĐẾM SAI ---
                // Nếu số bài hợp lệ ít hơn số bài trong LocalStorage (tức là có bài rác)
                // Ta sẽ cập nhật lại LocalStorage cho khớp ngay lập tức
                if (validPosts.length !== localSlugs.length) {
                    const validSlugs = validPosts.map(p => p.slug)
                    localStorage.setItem('saved_posts', JSON.stringify(validSlugs))

                    // Bắn sự kiện để Header cập nhật lại số 0 (hoặc số đúng)
                    window.dispatchEvent(new Event('saved-posts-updated'))
                }
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        }

        fetchAndCleanSavedPosts()
    }, [])

    // Hàm xóa bài viết
    const removePost = (e: React.MouseEvent, slugToRemove: string) => {
        e.preventDefault()
        e.stopPropagation() // Ngăn chặn click lan ra ngoài

        const newPosts = savedPosts.filter(p => p.slug !== slugToRemove)
        setSavedPosts(newPosts)

        // Cập nhật LocalStorage
        const newSlugs = newPosts.map(p => p.slug)
        localStorage.setItem('saved_posts', JSON.stringify(newSlugs))

        // Bắn sự kiện cập nhật số lượng trên Header
        window.dispatchEvent(new Event('saved-posts-updated'))
    }

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

                    {loading ? (
                        <div className="flex justify-center py-20">
                            <Loader2 className="animate-spin text-[#715136]" size={40} />
                        </div>
                    ) : savedPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {savedPosts.map(post => {
                                const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/assets/blog-placeholder.jpg';
                                const date = new Date(post.date).toLocaleDateString('vi-VN');

                                return (
                                    <Link
                                        key={post.id}
                                        href={`/blog/${post.slug}`}
                                        className="group cursor-pointer h-full"
                                    >
                                        <article className="flex flex-col h-full bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#E5E0D8] group-hover:border-[#DCAE96] relative">

                                            {/* Nút Xóa nhanh */}
                                            <button
                                                onClick={(e) => removePost(e, post.slug)}
                                                className="absolute top-3 right-3 z-20 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors shadow-sm"
                                                title="Bỏ lưu"
                                            >
                                                <BookmarkX size={18} />
                                            </button>

                                            {/* Featured Image */}
                                            <div className="relative h-56 overflow-hidden bg-[#F2EFE9]">
                                                <img
                                                    src={imageUrl}
                                                    alt={post.title.rendered}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="p-6 flex-1 flex flex-col">
                                                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3 font-body">
                                                    <span>{date}</span>
                                                </div>

                                                <h3
                                                    className="text-xl font-brand font-bold text-[#3a3a3a] mb-3 group-hover:text-[#715136] transition-colors leading-snug line-clamp-2"
                                                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                                />

                                                <div className="flex items-center justify-between pt-4 border-t border-[#F2EFE9] mt-auto">
                                                    <span className="text-[#715136] font-bold text-sm group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                                        Đọc lại <ArrowRight size={16} />
                                                    </span>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                )
                            })}
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