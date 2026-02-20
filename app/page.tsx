// app/page.tsx
import { getPosts, WPPost } from '@/lib/wordpress'
import MainUI from '@/components/main-ui' // Import cái file to đùng vừa tạo

export default async function Home() {
  // 1. Lấy dữ liệu từ WordPress ngay tại Server (Chuẩn SEO, Nhanh)
  const posts: WPPost[] = await getPosts(1, 3);
  // 2. LỌC BÀI VIẾT (Logic mới thêm vào)
  const filteredPosts = posts.filter((post) => {
    // Lấy tiêu đề bài viết (xử lý an toàn nếu tiêu đề là object hoặc string)
    // Trong WordPress API chuẩn, tiêu đề thường nằm trong post.title.rendered
    const title = typeof post.title === 'string' ? post.title : post.title.rendered;

    // Kiểm tra xem tiêu đề có bắt đầu bằng cụm "[nhap]" không (không phân biệt hoa thường)
    const isDraft = title.trim().toLowerCase().startsWith('[nhap]');

    // Kiểm tra môi trường: 'production' là web chính, 'development' là localhost
    const isProduction = process.env.NODE_ENV === 'production';

    // NẾU là bài nháp VÀ đang ở trên web chính -> ẨN ĐI (return false)
    if (isDraft && isProduction) {
      return false;
    }

    // Các trường hợp còn lại -> HIỆN (return true)
    return true;
  });
  // 2. Truyền dữ liệu xuống cho giao diện hiển thị
  return <MainUI posts={filteredPosts} />
}