// app/page.tsx
import { getPosts, WPPost } from '@/lib/wordpress'
import MainUI from '@/components/main-ui' // Import cái file to đùng vừa tạo

export default async function Home() {
  // 1. Lấy dữ liệu từ WordPress ngay tại Server (Chuẩn SEO, Nhanh)
  const posts: WPPost[] = await getPosts(1, 3);

  // 2. Truyền dữ liệu xuống cho giao diện hiển thị
  return <MainUI posts={posts} />
}