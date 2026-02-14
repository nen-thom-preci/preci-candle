'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import {
    ShieldCheck,
    Globe,
    SlidersHorizontal,
    HeartHandshake
} from 'lucide-react'
import { WPPost, getPostImage } from '@/lib/wordpress'

// Tối ưu Tooltip cho mobile: Giới hạn chiều rộng max-w-[90vw]
const SloganTooltip = ({ text, desc }: { text: string, desc: string }) => {
    return (
        <span className="group relative inline-block cursor-help hover:text-[#715136] transition-colors duration-300 border-b border-dotted border-gray-400 md:border-none">
            {text}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[280px] md:w-[400px] max-w-[90vw] p-4 md:p-5 
       bg-[#2a2a2a]/95 backdrop-blur-md text-white text-sm md:text-base font-body font-normal tracking-normal normal-case leading-relaxed
       rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible 
       transition-all duration-300 transform group-hover:-translate-y-2 z-50 text-left border border-white/10 pointer-events-none"
            >
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#2a2a2a]/95"></div>
                {desc}
            </div>
        </span>
    )
}

export default function MainUI({ posts }: { posts: WPPost[] }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 4;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const [activeTab, setActiveTab] = useState('candles')

    // DATA SẢN PHẨM
    const candleImages = [
        '/nen-thom/Picture2.webp', '/nen-thom/Picture3.webp', '/nen-thom/Picture4.webp', '/nen-thom/Picture5.webp',
        '/nen-thom/Picture6.webp', '/nen-thom/Picture7.webp', '/nen-thom/Picture8.webp', '/nen-thom/Picture9.webp',
    ].map((img, i) => ({ id: `c-${i}`, type: 'Nến thơm', image: img, link: `/products/nen-thom-${i + 1}` }))

    const accessoryImages = [
        '/phu-kien/hop-diem.webp', '/phu-kien/chuong-chup.webp', '/phu-kien/de-go-thong.webp', '/phu-kien/khay-kim-loai.webp',
        '/phu-kien/keo-cat-bac-nen.webp', '/phu-kien/chong-chong.webp', '/phu-kien/que-kho.webp', '/phu-kien/combo.webp',
    ].map((img, i) => ({ id: `a-${i}`, type: 'Phụ kiện', image: img, link: `/products/phu-kien-${i + 1}` }))

    const displayedProducts = activeTab === 'candles' ? candleImages : accessoryImages

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-1">
                {/* HERO SLIDER SECTION */}
                {/* Mobile: h-[70vh] để không quá dài, PC: h-[85vh] */}
                <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-[#e5e0d8] group">

                    <div
                        className="flex w-full h-full transition-transform duration-1000 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
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
                                <div className="absolute inset-0 bg-black/10"></div>
                            </div>
                        ))}
                    </div>

                    {/* CONTENT LOGO */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
                        <div className="flex flex-col items-center justify-center text-center text-white 
             bg-black/20 backdrop-blur-[3px] border border-white/10 
             p-6 md:p-12 rounded-2xl md:rounded-3xl shadow-2xl max-w-[90%] md:max-w-3xl mx-auto
             animate-in fade-in zoom-in duration-1000"
                        >
                            {/* Mobile: Text nhỏ hơn (4xl) */}
                            <h1 className="font-brand text-4xl md:text-7xl tracking-[0.1em] mb-2 drop-shadow-lg">
                                Préci
                            </h1>

                            <div className="w-16 md:w-20 h-[1px] bg-white/70 mb-3 md:mb-4"></div>

                            <p className="font-body font-light text-base md:text-xl tracking-[0.2em] opacity-90 drop-shadow-md text-nowrap">
                                Độc bản, trọn ý - Trọn tâm tình
                            </p>
                        </div>
                    </div>

                    {/* NAVIGATION DOTS */}
                    <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                        {[0, 1, 2, 3].map((index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${currentSlide === index
                                    ? 'bg-white w-6 md:w-8 shadow-sm'
                                    : 'bg-white/50 hover:bg-white/80'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* SCROLL INDICATOR */}
                    <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/90 z-20">
                        <span className="text-xs md:text-sm font-brand tracking-[0.3em] drop-shadow-md">SCROLL</span>
                    </div>
                </section>

                {/* SLOGAN & PRODUCTS */}
                {/* Giảm padding trên mobile: py-12 thay vì py-20 */}
                <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-28">

                    <div className="text-center mb-8 md:mb-12">
                        <div className="text-center mb-8 md:mb-12">
                            {/* Mobile: flex-col để ngắt dòng hợp lý hơn, giảm size text */}
                            <h2 className="font-brand text-3xl md:text-7xl text-[#5e5046] mb-6 md:mb-8 font-light tracking-wide flex flex-wrap justify-center gap-x-2 md:gap-x-3 gap-y-1">
                                <span>“</span>
                                <SloganTooltip text="Độc bản" desc="Món quà được thiết kế riêng biệt, mang sự độc quyền và duy nhất." />
                                <span>,</span>
                                <SloganTooltip text="trọn ý" desc="Sản phẩm được làm ra một cách chỉnh chu, mọi chi tiết đều được chăm chút đúng như mong muốn và dụng ý của người tặng." />
                                <span className="hidden md:inline">–</span>
                                {/* Mobile: Xuống dòng cho đẹp */}
                                <div className="basis-full h-0 md:hidden"></div>
                                <SloganTooltip text="Trọn tâm tình" desc="Thể hiện sự chân thành và tình cảm của người tặng muốn gửi đến người nhận." />
                                <span>”</span>
                            </h2>
                        </div>

                        {/* TAB BUTTONS */}
                        <div className="flex items-center justify-center gap-4 md:gap-8 mb-4">
                            <button
                                onClick={() => setActiveTab('candles')}
                                className={`text-lg md:text-xl font-brand font-bold transition-all ${activeTab === 'candles' ? 'text-[#715136] border-b border-[#715136]' : 'text-gray-400 hover:text-[#715136]'}`}
                            >
                                Nến thơm
                            </button>
                            <div className="w-[1px] h-4 bg-gray-300"></div>
                            <button
                                onClick={() => setActiveTab('accessories')}
                                className={`text-lg md:text-xl font-brand font-bold transition-all ${activeTab === 'accessories' ? 'text-[#715136] border-b border-[#715136]' : 'text-gray-400 hover:text-[#715136]'}`}
                            >
                                Phụ kiện
                            </button>
                        </div>

                        <p className="font-body text-lg md:text-2xl text-[#5e5046] mt-4 md:mt-6 animate-in fade-in duration-300">
                            {activeTab === 'candles' ? 'Các sản phẩm trước đây' : 'Các phụ kiện tinh tế từ Préci'}
                        </p>
                    </div>

                    {/* GRID ẢNH */}
                    {/* Giảm gap trên mobile: gap-4 */}
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12 min-h-[300px] md:min-h-[400px]">
                        {displayedProducts.map((item) => (
                            <div
                                key={item.id}
                                className="animate-in fade-in zoom-in duration-500"
                            >
                                <div className="relative bg-[#f5f5f5] aspect-square overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow group">
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

                                    <div className={`absolute inset-0 flex items-center justify-center text-gray-400 bg-[#EFEBE7] flex-col gap-2 ${item.image ? 'hidden' : ''}`}>
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full blur-xl opacity-30 bg-orange-200"></div>
                                        <span className="relative z-10 font-brand text-xs md:text-sm">Préci {item.type}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-6 md:mt-8 border-t border-gray-200 pt-6 md:pt-8">
                        <Link
                            href={activeTab === 'candles' ? '/products?category=nen-thom' : '/products?category=phu-kien'}
                            className="bg-primary text-white font-body font-bold text-base md:text-lg px-6 py-2.5 md:px-8 md:py-3 rounded-md hover:bg-[#8C7E72] transition-colors shadow-sm animate-in fade-in duration-300 w-full md:w-auto text-center"
                        >
                            {activeTab === 'candles' ? 'Bắt đầu tùy chỉnh nến thơm' : 'Chọn mua phụ kiện'}
                        </Link>
                    </div>
                </section>

                {/* ABOUT SECTION */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white/50">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="text-center mb-12 md:mb-24">
                            <p className="text-xs md:text-sm font-body font-bold text-gray-500 uppercase tracking-widest mb-2 md:mb-3">Sản phẩm chủ đạo</p>
                            <h1 className="text-3xl md:text-6xl font-brand text-primary uppercase leading-tight">Nến Thơm Từ Thiên Nhiên</h1>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12 items-center">
                            {/* Cột Trái: Mobile căn giữa, PC căn trái */}
                            <div className="space-y-8 md:space-y-16 order-2 lg:order-1">
                                <FeatureItem
                                    icon={<div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center text-primary"><span className="font-bold text-[10px] text-center leading-tight">100%<br />NATURAL</span></div>}
                                    title="100% Sáp tự nhiên"
                                    desc="100% sáp ong có nguồn gốc tự nhiên được khai thác từ trại nuôi ong bằng mật hoa tại Vĩnh Phúc."
                                    align="left"
                                />
                                <FeatureItem
                                    icon={<ShieldCheck size={48} strokeWidth={1.5} className="text-primary" />}
                                    title="Không độc hại"
                                    desc="Khi đốt không tạo ra khí độc, là một liệu pháp thư giãn tinh thần hiệu quả."
                                    align="left"
                                />
                                <FeatureItem
                                    icon={<Globe size={48} strokeWidth={1.5} className="text-primary" />}
                                    title="Hương thơm lành tính"
                                    desc="Hương thơm quen thuộc gắn liền với đời sống của người dân Việt Nam, không chứa chất gây hại."
                                    align="left"
                                />
                            </div>

                            {/* Cột Giữa (Ảnh): Luôn ở đầu trên mobile */}
                            <div className="flex justify-center items-center py-4 lg:py-0 order-1 lg:order-2">
                                <div className="relative w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96">
                                    <img src="/assets/nen-tach-nen.png" alt="Nến thơm thiên nhiên" className="w-full h-full object-contain drop-shadow-2xl" />
                                    <div className="absolute inset-0 bg-orange-100 rounded-full blur-3xl opacity-30 -z-10"></div>
                                </div>
                            </div>

                            {/* Cột Phải: Mobile căn giữa, PC căn phải */}
                            <div className="space-y-8 md:space-y-16 order-3">
                                <FeatureItem
                                    icon={<div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center text-primary relative"><span className="font-bold text-lg">Pb</span><div className="absolute w-full h-[2px] bg-primary rotate-45"></div></div>}
                                    title="Bấc không chứa chì"
                                    desc="Bấc cotton hoặc bấc gỗ không chứa chì hay kim loại nặng khác."
                                    align="right"
                                />
                                <FeatureItem
                                    icon={<div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center text-primary p-2"><HeartHandshake size={32} strokeWidth={1.5} /></div>}
                                    title="Hoàn toàn thủ công"
                                    desc="Từng sản phẩm được phối trộn hoàn toàn thủ công dưới đôi bàn tay khéo léo của người thợ."
                                    align="right"
                                />
                                <FeatureItem
                                    icon={<SlidersHorizontal size={48} strokeWidth={1.5} className="text-primary" />}
                                    title="ĐẶC BIỆT"
                                    desc="Công nghệ customize mẫu nến thơm theo nhu cầu với mô phỏng 3D thời gian thực."
                                    align="right"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* BLOG SECTION */}
                <section className="bg-[#FFFDFA] py-16 md:py-28 border-t border-[#E5E0D8]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10 md:mb-16">
                            <span className="text-gray-500 font-brand font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-3 block">Préci Blog</span>
                            <h3 className="font-brand uppercase text-3xl md:text-6xl text-primary mb-6">Cẩm nang & Cảm hứng</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16">
                            {posts.map((post, index) => {
                                const imageUrl = getPostImage(post);
                                const date = new Date(post.date).toLocaleDateString('vi-VN');

                                return (
                                    <Link
                                        key={post.id}
                                        href={`/blog/${post.slug}`}
                                        className="group cursor-pointer h-full block animate-in fade-in slide-in-from-bottom-8"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <article className="flex flex-col h-full bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 border border-[#E5E0D8] group-hover:border-[#DCAE96] group-hover:-translate-y-2">
                                            <div className="relative h-48 md:h-56 overflow-hidden bg-[#F2EFE9]">
                                                <img src={imageUrl} alt={post.title.rendered} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                            </div>
                                            <div className="p-5 md:p-6 flex-1 flex flex-col">
                                                <div className="flex items-center gap-3 text-xs md:text-sm text-gray-600 mb-2 font-brand font-semibold "><span>{date}</span></div>
                                                <h4 className="text-lg md:text-xl font-brand font-bold text-[#3a3a3a] mb-2 group-hover:text-[#715136] transition-colors leading-snug line-clamp-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                                <div className="font-body text-sm text-gray-500 mb-4 line-clamp-3 leading-relaxed flex-1" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                                                <div className="flex items-center justify-between pt-4 border-t border-[#F2EFE9] mt-auto">
                                                    <span className="text-[#715136] font-body font-bold text-sm group-hover:translate-x-1 transition-transform flex items-center gap-2">Đọc chi tiết <ArrowRight size={16} /></span>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                )
                            })}
                        </div>

                        <div className="text-center">
                            <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-3 bg-transparent border-2 border-[#715136] text-[#715136] font-brand font-bold rounded-full hover:bg-[#715136] hover:text-white transition-all duration-300 group text-sm md:text-base">
                                Xem tất cả bài viết
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

// Component phụ để render các mục Features (Giúp code gọn hơn & xử lý Responsive dễ hơn)
const FeatureItem = ({ icon, title, desc, align }: { icon: any, title: string, desc: string, align: 'left' | 'right' }) => {
    return (
        // Mobile: Flex-col + items-center (căn giữa). PC: Giữ nguyên logic cũ
        <div className={`flex flex-col items-center text-center gap-3 
                    ${align === 'left' ? 'lg:flex-row lg:text-left' : 'lg:flex-row-reverse lg:text-right'}`}>

            <div className="flex-shrink-0 mt-1">
                {icon}
            </div>

            <div>
                <h3 className="text-lg md:text-xl font-body font-bold text-foreground mb-1 md:mb-2">
                    {title}
                </h3>
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                    {desc}
                </p>
            </div>
        </div>
    )
}