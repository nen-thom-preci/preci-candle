// lib/wordpress.ts

// --- ĐÂY LÀ ĐƯỜNG DẪN DÀNH RIÊNG CHO WORDPRESS FREE ---
const BASE_API = 'https://public-api.wordpress.com/wp/v2/sites/precinenthom-xrgmf.wordpress.com';

export interface WPPost {
    id: number;
    date: string;
    slug: string;
    title: { rendered: string };
    excerpt: { rendered: string };
    content: { rendered: string };
    _embedded?: {
        'wp:featuredmedia'?: Array<{ source_url: string }>;
        'author'?: Array<{ name: string }>;
        'wp:term'?: Array<Array<{ id: number; name: string; slug: string }>>;
    };
}

// DỮ LIỆU GIẢ (PHÒNG KHI MẤT MẠNG HOẶC API LỖI)
const MOCK_DATA: WPPost[] = [
    {
        id: 1,
        date: new Date().toISOString(),
        slug: "huong-dan-chon-nen-thom",
        title: { rendered: "Hướng dẫn chọn nến thơm (Bài mẫu)" },
        excerpt: { rendered: "<p>Đây là bài viết mẫu hiển thị khi chưa kết nối được WordPress...</p>" },
        content: { rendered: "<p>Nội dung chi tiết bài viết mẫu...</p>" },
        _embedded: {
            'wp:featuredmedia': [{ source_url: "/assets/slider-1.webp" }],
            'author': [{ name: "Préci Team" }]
        }
    },
    {
        id: 2,
        date: new Date().toISOString(),
        slug: "loi-ich-sap-dau-nanh",
        title: { rendered: "Lợi ích sáp đậu nành (Bài mẫu)" },
        excerpt: { rendered: "<p>Sáp đậu nành an toàn cho sức khỏe hơn paraffin...</p>" },
        content: { rendered: "<p>Nội dung chi tiết...</p>" },
        _embedded: {
            'wp:featuredmedia': [{ source_url: "/assets/slider-2.webp" }],
            'author': [{ name: "Préci Team" }]
        }
    }
];

export async function getPosts(page = 1, perPage = 9) {
    try {
        // Gọi API của WordPress.com
        const res = await fetch(`${BASE_API}/posts?_embed&page=${page}&per_page=${perPage}`, {
            next: { revalidate: 60 }
        });

        // Nếu lỗi kết nối (404, 500, HTML...), ném lỗi để nhảy xuống catch
        if (!res.ok) throw new Error('API Error');

        const data = await res.json();
        return data;

    } catch (error) {
        console.warn("⚠️ Không lấy được bài từ WordPress, đang dùng dữ liệu mẫu.");
        // TRẢ VỀ MOCK DATA ĐỂ WEB KHÔNG BỊ SẬP
        return MOCK_DATA;
    }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
    try {
        const res = await fetch(`${BASE_API}/posts?slug=${slug}&_embed`, {
            next: { revalidate: 60 }
        });

        if (!res.ok) throw new Error('API Error');

        const posts = await res.json();
        return posts.length > 0 ? posts[0] : MOCK_DATA[0]; // Nếu không tìm thấy thì trả về bài mẫu số 1
    } catch (error) {
        return MOCK_DATA[0]; // Trả về bài mẫu để không lỗi trang chi tiết
    }
}

/**
 * HÀM THÔNG MINH: Tự động tìm ảnh đại diện
 * Ưu tiên 1: Ảnh Featured Image (cài trong cột phải WP)
 * Ưu tiên 2: Ảnh đầu tiên tìm thấy trong bài viết
 * Ưu tiên 3: Ảnh placeholder mặc định
 */
export function getPostImage(post: WPPost): string {
    // 1. Kiểm tra Featured Image trước
    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    if (featuredImage) {
        return featuredImage;
    }

    // 2. Nếu không có, dùng Regex quét tìm thẻ <img /> đầu tiên trong nội dung
    const content = post.content.rendered;
    const imgRegex = /<img[^>]+src="([^">]+)"/;
    const match = content.match(imgRegex);

    if (match && match[1]) {
        return match[1]; // Trả về đường dẫn ảnh đầu tiên tìm thấy
    }

    // 3. Đường cùng: Trả về ảnh mặc định (Bạn nhớ tạo ảnh này trong folder public/assets)
    return '/assets/blog-placeholder.jpg';
}

export function calculateReadingTime(content: string): string {
    const wordsPerMinute = 200; // Tốc độ đọc trung bình
    // Loại bỏ thẻ HTML để đếm chữ chuẩn xác
    const text = content.replace(/<[^>]+>/g, '');
    const wordCount = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} phút đọc`;
}

// 2. Hàm lấy tên Danh mục (Category) đầu tiên
export function getPostCategory(post: WPPost): string {
    // Trong WordPress API, category nằm trong _embedded['wp:term'][0]
    // Lưu ý: Cần đảm bảo API gọi về có tham số ?_embed
    const terms = post._embedded?.['wp:term'];
    if (terms && terms.length > 0 && terms[0].length > 0) {
        return terms[0][0].name; // Lấy tên category đầu tiên
    }
    return 'Cẩm nang'; // Mặc định nếu không có category
}

// 4. Hàm lấy danh sách Tags thật từ WordPress
export function getPostTags(post: WPPost): Array<{ id: number; name: string; slug: string }> {
    // Trong wp:term, phần tử thứ 2 (index 1) thường là Tags
    const terms = post._embedded?.['wp:term'];

    // Kiểm tra xem có mảng Tags không và mảng đó có rỗng không
    if (terms && terms.length > 1 && terms[1].length > 0) {
        return terms[1]; // Trả về danh sách Tags thật
    }

    return []; // Trả về rỗng nếu không có tag nào
}