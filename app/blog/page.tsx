'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { useState } from 'react'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'Tất Cả' },
    { id: 'benefits', label: 'Lợi ích nến thơm' },
    { id: 'gifts', label: 'Ý tưởng quà tặng' },
    { id: 'tips', label: 'Mẹo hay từ Préci' },
    { id: 'inspiration', label: 'Cảm hứng sống' },
  ]

  const posts = [
    {
      id: 1,
      title: 'Lợi ích tuyệt vời của nến thơm tự nhiên',
      category: 'benefits',
      excerpt: 'Khám phá cách nến thơm thiên nhiên có thể cải thiện sức khỏe tinh thần và thể chất của bạn.',
      content: 'Nến thơm tự nhiên mang lại nhiều lợi ích sức khỏe. Tinh dầu thiên nhiên giúp giảm căng thẳng, cải thiện chất lượng giấc ngủ và tạo không khí trong lành.',
      image: 'bg-gradient-to-br from-purple-50 to-pink-100',
      date: '15 Tháng 1',
      readTime: '5 phút',
      author: 'Préci Team',
    },
    {
      id: 2,
      title: 'Ý tưởng quà tặng hoàn hảo cho người yêu thích',
      category: 'gifts',
      excerpt: 'Những gợi ý quà tặng độc đáo và ý nghĩa với nến thơm cao cấp.',
      content: 'Tìm quà tặng hoàn hảo cho những người thân yêu không bao giờ dễ dàng. Nến thơm tùy chỉnh là lựa chọn quà tặng tinh tế và ý nghĩa.',
      image: 'bg-gradient-to-br from-yellow-50 to-amber-100',
      date: '12 Tháng 1',
      readTime: '6 phút',
      author: 'Préci Team',
    },
    {
      id: 3,
      title: 'Cách chăm sóc nến thơm của bạn',
      category: 'tips',
      excerpt: 'Các mẹo giữ nến thơm tươi và thơm lâu dài.',
      content: 'Để tối đa hóa tuổi thọ của nến thơm, bạn nên cắt bấc định kỳ, tránh gió và để nến ở nơi mát mẻ.',
      image: 'bg-gradient-to-br from-green-50 to-emerald-100',
      date: '10 Tháng 1',
      readTime: '4 phút',
      author: 'Préci Team',
    },
    {
      id: 4,
      title: 'Tạo không gian yên bình trong nhà của bạn',
      category: 'inspiration',
      excerpt: 'Hướng dẫn tạo một không gian sống yên tĩnh và thư giãn.',
      content: 'Không gian yên bình bắt đầu từ những chi tiết nhỏ. Nến thơm, âm thanh nhẹ nhàng và ánh sáng mềm mại tạo nên một bầu không khí hoàn hảo.',
      image: 'bg-gradient-to-br from-blue-50 to-cyan-100',
      date: '8 Tháng 1',
      readTime: '7 phút',
      author: 'Préci Team',
    },
    {
      id: 5,
      title: 'Những loại tinh dầu tốt nhất cho mùa đông',
      category: 'benefits',
      excerpt: 'Khám phá những hương thơm ấm áp và thoải mái cho mùa lạnh.',
      content: 'Mùa đông đòi hỏi các hương thơm ấm áp. Vani, cinnamon và hương thơm từ gỗ là những lựa chọn tuyệt vời.',
      image: 'bg-gradient-to-br from-orange-50 to-red-100',
      date: '5 Tháng 1',
      readTime: '6 phút',
      author: 'Préci Team',
    },
    {
      id: 6,
      title: 'Nến thơm tùy chỉnh: Tạo quà tặng cá nhân',
      category: 'gifts',
      excerpt: 'Cách tạo nến thơm tùy chỉnh hoàn hảo cho những dịp đặc biệt.',
      content: 'Nến thơm tùy chỉnh cho phép bạn tạo quà tặng hoàn toàn cá nhân. Chọn màu, mùi và phụ kiện theo ý thích của bạn.',
      image: 'bg-gradient-to-br from-pink-50 to-rose-100',
      date: '2 Tháng 1',
      readTime: '5 phút',
      author: 'Préci Team',
    },
  ]

  const filteredPosts = activeCategory === 'all'
    ? posts
    : posts.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section (Banner mới) */}
        <section className="relative w-full h-[400px] md:h-[400px] overflow-hidden">
          {/* 1. Ảnh nền*/}
          <img
            src="/assets/banner-blog.webp"
            alt="Về Préci"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/20" />

          {/* 2. Nội dung chữ phủ lên trên (Căn trái) */}
          <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-center">
            <div className="md:max-w-xl"> {/* Giới hạn chiều rộng để chữ không tràn sang phải */}
              <h1 className="text-6xl md:text-8xl font-brand text-[#000000] mb-6 leading-tight fade-in animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                Cẩm nang
              </h1>
              <p className="font-body text-xl md:text-xl text-[#000000] italic leading-relaxed animate-in fade-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                Cùng Préci khám phá thêm những điều hay ho nhé!
              </p>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-lg font-brand font-bold uppercase px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === cat.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-transparent text-gray-500 hover:text-primary hover:bg-[#F2EFE9]'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group cursor-pointer"
              >
                <div className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all border border-border hover:border-primary">
                  {/* Featured Image */}
                  <div className={`${post.image} h-48 flex items-center justify-center`}>
                    <span className="text-5xl opacity-30">📖</span>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-brand text-xs font-semibold text-primary uppercase">
                        {categories.find(c => c.id === post.category)?.label}
                      </p>
                      <p className="font-brand font-bold text-xs text-muted-foreground">{post.date}</p>
                    </div>

                    <h3 className="text-xl font-body uppercase font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="font-brand font-bold text-xs text-muted-foreground">{post.readTime} đọc</span>
                      <span className="text-primary font-semibold group-hover:translate-x-1 transition-transform inline-block">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="font-body text-lg text-muted-foreground mb-4">Không có bài viết trong danh mục này</p>
              <button
                onClick={() => setActiveCategory('all')}
                className="font-body text-primary font-semibold hover:underline"
              >
                Xem tất cả bài viết
              </button>
            </div>
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
              Chúng tôi cam kết bảo mật thông tin và không spam.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
