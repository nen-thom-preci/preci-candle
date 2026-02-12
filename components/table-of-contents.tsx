'use client'

import { useEffect, useState } from 'react'

interface TOCItem {
    id: string
    text: string
    level: number
}

// 1. Hàm Slugify chuẩn tiếng Việt (Dùng chung)
const slugify = (text: string) => {
    return text
        .toString()
        .toLowerCase()
        .normalize('NFD') // Tách dấu ra khỏi chữ
        .replace(/[\u0300-\u036f]/g, '') // Xóa các dấu
        .replace(/[đĐ]/g, 'd') // Chuyển đ -> d
        .replace(/[^a-z0-9]+/g, '-') // Thay ký tự đặc biệt bằng dấu gạch ngang
        .replace(/(^-|-$)+/g, '') // Xóa gạch ngang ở đầu/cuối
}

export default function TableOfContents({ content }: { content: string }) {
    const [headings, setHeadings] = useState<TOCItem[]>([])

    useEffect(() => {
        // Regex mới: Bắt được cả thẻ có attributes (class, style...)
        const regex = /<(h[23])([^>]*)>(.*?)<\/\1>/g
        const found: TOCItem[] = []
        let match

        while ((match = regex.exec(content)) !== null) {
            const level = match[1] === 'h2' ? 2 : 3
            // match[3] là nội dung text bên trong thẻ
            const text = match[3].replace(/<[^>]*>/g, '')
            const id = slugify(text)

            found.push({ id, text, level })
        }
        setHeadings(found)
    }, [content])

    if (headings.length === 0) return null

    return (
        <div className="bg-[#F9F7F5] p-6 rounded-xl border border-[#E5E0D8] mb-8">
            <h4 className="font-brand font-bold text-3xl text-[#3a3a3a] mb-4 border-b border-[#E5E0D8] pb-2">
                Mục lục bài viết
            </h4>
            <nav>
                <ul className="space-y-2">
                    {headings.map((item, index) => (
                        <li
                            key={index}
                            style={{ paddingLeft: item.level === 3 ? '1.5rem' : '0' }}
                        >
                            <a
                                href={`#${item.id}`}
                                className="text-xl text-gray-600 hover:text-[#715136] hover:underline transition-colors block font-body scroll-smooth"
                                onClick={(e) => {
                                    e.preventDefault()
                                    const element = document.getElementById(item.id)
                                    if (element) {
                                        // Trừ hao chiều cao của Header cố định (nếu có)
                                        const headerOffset = 100
                                        const elementPosition = element.getBoundingClientRect().top
                                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

                                        window.scrollTo({
                                            top: offsetPosition,
                                            behavior: "smooth"
                                        })
                                    }
                                }}
                            >
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}