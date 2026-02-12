import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft, User, Calendar, Clock, CheckCircle, Tag } from 'lucide-react'
import { getPostBySlug, calculateReadingTime, getPostCategory, getPosts, getPostTags, WPPost } from '@/lib/wordpress'
import { format } from 'date-fns'
import { vi } from 'date-fns/locale'
import TableOfContents from '@/components/table-of-contents'

// ... (Các import giữ nguyên) ...

// --- HÀM MỚI: XỬ LÝ ID THÔNG MINH ---
function addIdsToHeadings(content: string) {
  // Regex này bắt được: <h2 class="abc">Tiêu đề</h2>
  return content.replace(/<(h[23])([^>]*)>(.*?)<\/\1>/g, (_, tag, attrs, text) => {
    // Logic Slugify y hệt bên TableOfContents để khớp ID
    const id = text
      .toString()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[đĐ]/g, 'd')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    // Trả về thẻ cũ nhưng chèn thêm id="..." vào đầu
    // attrs là các thuộc tính cũ (class, style...), ta giữ nguyên
    return `<${tag} id="${id}"${attrs}>${text}</${tag}>`;
  });
}

// ... (Phần còn lại của file page.tsx giữ nguyên, chỉ cần thay hàm trên) ...

// Component 404
const NotFoundState = () => (
  <div className="min-h-screen flex flex-col bg-[#FFFDFA]">
    <Header />
    <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-brand font-bold text-[#715136] mb-2">Không tìm thấy bài viết</h1>
      <Link href="/blog" className="mt-6 px-8 py-3 bg-[#715136] text-white rounded-full font-bold">Quay lại</Link>
    </main>
    <Footer />
  </div>
)

interface PageProps { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  return {
    title: post ? `${post.title.rendered} - Préci Blog` : 'Bài viết không tồn tại',
  }
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params

  // 1. Lấy bài viết hiện tại
  const post = await getPostBySlug(slug)
  if (!post) return <NotFoundState />

  // 2. Lấy danh sách bài viết mới nhất cho Sidebar (Lấy 5 bài để trừ hao bài hiện tại)
  const allRecentPosts = await getPosts(1, 5);
  // Lọc bỏ bài hiện tại ra khỏi danh sách "Bài viết liên quan"
  const relatedPosts = Array.isArray(allRecentPosts)
    ? allRecentPosts.filter((p: WPPost) => p.id !== post.id).slice(0, 3)
    : [];

  // Xử lý dữ liệu hiển thị
  const title = post.title.rendered
  const rawContent = post.content.rendered
  const contentWithIds = addIdsToHeadings(rawContent)
  const excerpt = post.excerpt.rendered
  const authorName = post._embedded?.['author']?.[0]?.name || 'Préci Team'
  const dateFormatted = format(new Date(post.date), 'dd/MM/yyyy', { locale: vi })
  const readingTime = calculateReadingTime(rawContent)
  const categoryName = getPostCategory(post)
  const tags = getPostTags(post);

  return (
    <div className="min-h-screen flex flex-col bg-white font-body text-[#2a2a2a]">
      <Header />

      <main className="flex-1 pt-28 pb-16">

        {/* --- HEADER BÀI VIẾT --- */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex items-center gap-2 text-base text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#715136]">Trang chủ</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#715136]">Cẩm nang</Link>
            <span>/</span>
            <span className="text-[#715136] font-bold">{categoryName}</span>
          </div>

          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-brand font-bold text-[#3a3a3a] leading-tight mb-6"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          <div className="flex items-center gap-4 border-y border-gray-100 py-4">
            <div className="w-10 h-10 bg-[#715136] rounded-full flex items-center justify-center text-white font-bold">
              {authorName.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="font-bold text-base text-[#3a3a3a] flex items-center gap-2">
                {authorName} <CheckCircle size={14} className="text-blue-500" fill="white" />
              </div>
              <div className="text-sm text-gray-500">Kiểm duyệt bởi Đội ngũ Chuyên gia từ Préci</div>
            </div>
            <div className="font-brand font-semibold text-sm text-gray-800 flex items-center gap-4">
              <span className="flex items-center gap-1"><Calendar size={14} /> {dateFormatted}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {readingTime}</span>
            </div>
          </div>
        </div>

        {/* --- LAYOUT 2 CỘT --- */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* CỘT TRÁI: NỘI DUNG (8 phần) */}
          <article className="lg:col-span-8">

            {/* Sapo */}
            {excerpt && (
              <div className="text-lg md:text-xl font-medium text-gray-700 mb-8 italic leading-relaxed border-l-4 border-[#715136] pl-5 py-1 bg-[#F9F7F5] rounded-r-lg">
                <div dangerouslySetInnerHTML={{ __html: excerpt }} />
              </div>
            )}

            {/* Mục lục */}
            <TableOfContents content={contentWithIds} />

            {/* NỘI DUNG CHÍNH - Dùng CSS "Cưỡng chế" để sửa lỗi Heading/Table */}
            <div className="
              font-body text-[#2a2a2a] leading-8 text-lg
              
              /* 1. HEADING - Ép size to và font Brand */
              [&_h2]:font-brand [&_h2]:text-[#3a3a3a] [&_h2]:font-bold 
              [&_h2]:text-3xl [&_h2]:md:text-4xl 
              [&_h2]:mt-14 [&_h2]:mb-6 
              [&_h2]:border-b-2 [&_h2]:border-[#E5E0D8] [&_h2]:pb-3 [&_h2]:inline-block
              [&_h2]:scroll-mt-32

              [&_h3]:font-brand [&_h3]:text-[#715136] [&_h3]:font-bold
              [&_h3]:text-2xl [&_h3]:md:text-3xl 
              [&_h3]:mt-10 [&_h3]:mb-4
              [&_h3]:scroll-mt-32

              [&_h4]:font-bold [&_h4]:text-xl [&_h4]:mt-6 [&_h4]:mb-3

              /* 2. TABLE - Ép full width và style đẹp */
              [&_table]:w-full [&_table]:!min-w-full [&_table]:table-fixed [&_table]:my-10 [&_table]:border-collapse [&_table]:shadow-md [&_table]:rounded-lg [&_table]:overflow-hidden
              [&_thead]:bg-[#715136] [&_thead]:text-white
              [&_th]:p-4 [&_th]:border-r [&_th]:border-white/20 [&_th]:font-brand [&_th]:text-lg [&_th]:uppercase [&_th]:tracking-wide
              [&_td]:p-4 [&_td]:border-b [&_td]:border-[#E5E0D8] [&_td]:text-gray-700 [&_td]:bg-white [&_td]:align-top
              [&_tr:last-child_td]:border-b-0
              [&_tr:hover_td]:bg-[#F9F7F5]

              /* 3. LIST & IMG */
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-6 [&_ul]:marker:text-[#DCAE96]
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-6 [&_ol]:marker:font-bold [&_ol]:marker:text-[#715136]
              [&_li]:mb-3
              
              [&_img]:rounded-xl [&_img]:shadow-lg [&_img]:mx-auto [&_img]:my-10 [&_img]:w-full [&_img]:border [&_img]:border-[#f0f0f0]
              [&_figcaption]:text-center [&_figcaption]:text-base [&_figcaption]:text-gray-500 [&_figcaption]:mt-2 [&_figcaption]:italic

              [&_p]:mb-6 [&_p]:text-justify
              [&_a]:text-[#715136] [&_a]:font-bold [&_a]:no-underline hover:[&_a]:underline
            ">
              <div dangerouslySetInnerHTML={{ __html: contentWithIds }} />
            </div>

            {/* 3. KHU VỰC TAGS (Hiển thị Tag thật từ WordPress) */}
            {tags.length > 0 && (
              <div className="mt-12 pt-6 border-t border-gray-100 flex gap-2">
                <Tag size={18} className="text-gray-400 mt-1" />
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Link
                      key={tag.id}
                      href={`/blog?tag=${tag.id}`} // (Optional) Link này để sau này làm tính năng lọc
                      className="bg-gray-100 text-xs px-3 py-1 rounded-full text-gray-600 hover:bg-[#715136] hover:text-white transition-colors cursor-pointer"
                    >
                      #{tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* CỘT PHẢI: SIDEBAR (4 phần) */}
          <aside className="lg:col-span-4 space-y-8">

            {/* Box 1: CTA Sản phẩm (Luôn hiển thị vì đây là điều hướng quan trọng) */}
            <div className="bg-[#715136] rounded-xl p-6 text-white text-center sticky top-28 z-10 shadow-xl">
              <h3 className="text-xl font-brand font-bold mb-2">Bạn đang tìm món quà độc bản để gửi trọn tâm tình cho người thân yêu?</h3>
              <p className="text-white/80 text-sm mb-6">Khám phá bộ sưu tập nến thơm thiên nhiên từ Préci</p>
              <Link href="/products" className="block w-full bg-white text-[#715136] font-bold py-3 rounded-full hover:bg-gray-100 transition-colors shadow-md">
                Xem sản phẩm
              </Link>
            </div>

            {/* Box 2: Bài viết mới nhất (Dữ liệu thật - Tự động ẩn nếu chưa có bài khác) */}
            {relatedPosts.length > 0 && (
              <div className="border border-gray-100 rounded-xl p-6 bg-white shadow-sm">
                <h3 className="font-brand font-bold text-[#3a3a3a] mb-4 text-lg border-b border-gray-100 pb-2">Bài viết mới nhất</h3>
                <ul className="space-y-4">
                  {relatedPosts.map((p) => (
                    <li key={p.id}>
                      <Link href={`/blog/${p.slug}`} className="group block">
                        <span className="text-xs text-[#DCAE96] font-bold uppercase block mb-1">
                          {getPostCategory(p)}
                        </span>
                        <h4 className="font-bold text-gray-700 group-hover:text-[#715136] transition-colors line-clamp-2">
                          {p.title.rendered}
                        </h4>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>

        </div>
      </main>
      <Footer />
    </div>
  )
}