import { getPosts, WPPost } from '@/lib/wordpress'
import BlogUI from '@/components/blog-ui' // Import file UI vừa tạo

export default async function BlogPage() {
  // Lấy 100 bài viết mới nhất từ WordPress (để lọc client-side cho mượt)
  const posts: WPPost[] = await getPosts(1, 100);

  // Truyền dữ liệu xuống Component giao diện
  return <BlogUI posts={posts} />
}