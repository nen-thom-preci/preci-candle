'use client'

import { useState, useEffect } from 'react'
import { Heart, Share2, Check, Link as LinkIcon } from 'lucide-react'

interface BlogActionsProps {
    slug: string
    title: string
}

export default function BlogActions({ slug, title }: BlogActionsProps) {
    const [isSaved, setIsSaved] = useState(false)
    const [isCopied, setIsCopied] = useState(false)

    // 1. Kiểm tra xem bài viết đã được lưu chưa khi tải trang
    useEffect(() => {
        try {
            const savedPosts = JSON.parse(localStorage.getItem('saved_posts') || '[]')
            if (savedPosts.includes(slug)) {
                setIsSaved(true)
            }
        } catch (e) {
            console.error(e)
        }
    }, [slug])

    // 2. Xử lý Lưu / Bỏ lưu
    const handleToggleSave = () => {
        try {
            const savedPosts = JSON.parse(localStorage.getItem('saved_posts') || '[]')

            let newSavedPosts
            if (isSaved) {
                // Nếu đang lưu -> Xóa khỏi danh sách
                newSavedPosts = savedPosts.filter((s: string) => s !== slug)
                setIsSaved(false)
            } else {
                // Nếu chưa lưu -> Thêm vào danh sách
                newSavedPosts = [...savedPosts, slug]
                setIsSaved(true)
            }

            localStorage.setItem('saved_posts', JSON.stringify(newSavedPosts))

            // Dispatch sự kiện để nếu bạn có trang "Bài đã lưu" nó sẽ tự cập nhật (tương tự giỏ hàng)
            window.dispatchEvent(new Event('saved-posts-updated'))

        } catch (e) {
            alert('Không thể lưu bài viết. Vui lòng thử lại.')
        }
    }

    // 3. Xử lý Chia sẻ
    const handleShare = async () => {
        const url = window.location.href

        // Ưu tiên dùng tính năng chia sẻ của điện thoại (nếu có)
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    text: 'Đọc bài viết này trên Préci hay lắm nè!',
                    url: url,
                })
                return
            } catch (err) {
                console.log('User cancelled share')
            }
        }

        // Fallback: Copy link vào clipboard
        try {
            await navigator.clipboard.writeText(url)
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000) // Tắt thông báo sau 2s
        } catch (err) {
            alert('Không thể copy link')
        }
    }

    return (
        <div className="mt-16 pt-8 border-t border-[#E5E0D8] flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="font-brand font-bold text-[#3a3a3a] text-lg">Bạn thấy bài viết này hữu ích?</p>

            <div className="flex gap-4">
                {/* Nút Lưu */}
                <button
                    onClick={handleToggleSave}
                    className={`flex items-center gap-2 px-6 py-3 border transition-all shadow-sm font-bold rounded-full ${isSaved
                            ? 'bg-[#DCAE96] border-[#DCAE96] text-white hover:bg-[#cfa38c]'
                            : 'bg-white border-[#E5E0D8] text-[#715136] hover:bg-[#F2EFE9] hover:border-[#DCAE96]'
                        }`}
                >
                    <Heart size={20} className={isSaved ? "fill-white" : ""} />
                    <span className="text-sm">{isSaved ? 'Đã lưu' : 'Lưu bài viết'}</span>
                </button>

                {/* Nút Chia sẻ */}
                <button
                    onClick={handleShare}
                    className="flex items-center gap-2 px-6 py-3 bg-[#715136] text-white font-bold rounded-full hover:bg-[#5a402a] shadow-md hover:-translate-y-1 transition-all min-w-[130px] justify-center relative"
                >
                    {isCopied ? (
                        <>
                            <Check size={20} />
                            <span className="text-sm">Đã copy!</span>
                        </>
                    ) : (
                        <>
                            <Share2 size={20} />
                            <span className="text-sm">Chia sẻ</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    )
}