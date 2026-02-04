import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft, Share2, Heart, Calendar, Clock, User } from 'lucide-react'
import { getPostBySlug } from '@/lib/blog-data'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogDetailPage({ params }: PageProps) {
  // Lấy slug từ URL
  const { slug } = await params

  // Tìm bài viết tương ứng trong dữ liệu chung
  const post = getPostBySlug(slug)

  // Xử lý trường hợp không tìm thấy bài viết (404)
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FFFDFA]">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <span className="text-4xl">🤔</span>
          </div>
          <h1 className="text-3xl font-brand font-bold text-[#715136] mb-2">Không tìm thấy bài viết</h1>
          <p className="text-gray-500 mb-8">Có thể bài viết này đã bị xóa hoặc đường dẫn không đúng.</p>
          <Link
            href="/blog"
            className="px-8 py-3 bg-[#715136] text-white rounded-full font-bold hover:bg-[#5a402a] transition-all"
          >
            Quay lại trang Cẩm nang
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDFA]">
      <Header />

      <main className="flex-1">
        {/* Hero Section (Tiêu đề & Ảnh bìa) */}
        <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 px-4 bg-[#F2EFE9]">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Category Badge */}
            <span className="inline-block px-4 py-1.5 bg-white rounded-full text-xs font-bold text-[#715136] uppercase tracking-widest mb-6 shadow-sm">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-brand font-bold text-[#3a3a3a] mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 font-body">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime} đọc</span>
              </div>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-30 mix-blend-multiply"></div>
        </section>

        {/* Featured Image (Ảnh lớn) */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 -mt-10 relative z-20">
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            {post.image.startsWith('/') ? (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#F2EFE9] to-[#E5E0D8] flex items-center justify-center">
                <span className="text-6xl">📖</span>
              </div>
            )}
          </div>
        </section>

        {/* Content Section */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-20">

          {/* Breadcrumb Back */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#715136] font-bold mb-8 hover:-translate-x-1 transition-transform group">
            <ArrowLeft size={20} className="group-hover:text-[#DCAE96]" />
            <span className="text-sm uppercase tracking-wider">Quay lại danh sách</span>
          </Link>

          {/* Main Content */}
          <div className="prose prose-lg prose-stone max-w-none font-body text-gray-600 leading-loose">
            {/* Render nội dung (Tạm thời render text, sau này có thể dùng thư viện Markdown) */}
            <p className="font-bold text-xl text-[#3a3a3a] mb-8 italic border-l-4 border-[#715136] pl-4">
              {post.excerpt}
            </p>

            {/* Giả lập tách đoạn văn bản dài thành các đoạn nhỏ */}
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-6">{paragraph}</p>
            ))}
          </div>

          {/* Action Buttons (Share/Like) */}
          <div className="mt-16 pt-8 border-t border-[#E5E0D8] flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="font-brand font-bold text-[#3a3a3a] text-lg">Bạn thấy bài viết này hữu ích?</p>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-white border border-[#E5E0D8] text-[#715136] font-bold rounded-full hover:bg-[#F2EFE9] hover:border-[#DCAE96] transition-all shadow-sm">
                <Heart size={20} />
                <span className="text-sm">Lưu bài viết</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-[#715136] text-white font-bold rounded-full hover:bg-[#5a402a] shadow-md hover:-translate-y-1 transition-all">
                <Share2 size={20} />
                <span className="text-sm">Chia sẻ</span>
              </button>
            </div>
          </div>
        </article>

        {/* Newsletter CTA (Tái sử dụng thiết kế chuẩn) */}
        <section className="bg-[#F2EFE9] py-16 border-t border-[#E5E0D8]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-brand font-bold text-[#715136] mb-4">
              Bạn muốn đọc thêm?
            </h3>
            <p className="text-gray-500 mb-8">
              Khám phá thêm nhiều bài viết thú vị khác về nghệ thuật nến thơm tại Préci Blog.
            </p>
            <Link
              href="/blog"
              className="inline-block px-10 py-4 bg-white border-2 border-[#715136] text-[#715136] font-bold rounded-full hover:bg-[#715136] hover:text-white transition-all uppercase tracking-wider text-sm"
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