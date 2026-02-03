// lib/blog-data.ts

// 1. QUAN TRỌNG: Phải định nghĩa Interface này thì file kia mới hết báo đỏ
export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    category: string;
    excerpt: string;
    content: string;
    image: string;      // <-- File kia cần cái này để check .startsWith()
    date: string;
    readTime: string;   // <-- File kia cần cái này
    author: string;
    keywords?: string[];
}

// 2. Danh mục (Giữ nguyên để bộ lọc hoạt động)
export const BLOG_CATEGORIES = [
    { id: 'all', label: 'Tất Cả' },
    { id: 'benefits', label: 'Lợi ích nến thơm' },
    { id: 'gifts', label: 'Ý tưởng quà tặng' },
    { id: 'tips', label: 'Mẹo hay từ Préci' },
    { id: 'inspiration', label: 'Cảm hứng sống' },
];

// 3. Dữ liệu bài viết (Đang để rỗng để hiện giao diện "Coming Soon")
export const blogPosts: BlogPost[] = [
    // Bạn có thể comment dữ liệu lại như bạn đã làm, 
    // nhưng ĐỪNG XÓA interface ở mục 1 nhé!

    /* {
      id: '1',
      slug: 'loi-ich-cua-nen-thom',
      title: 'Lợi ích tuyệt vời...',
      category: 'benefits',
      excerpt: '...',
      content: '...',
      image: '/blog/loi-ich.webp',
      date: '15/01/2024',
      readTime: '5 phút',
      author: 'Préci Team'
    }
    */
];

// 4. Helper function
export const getPostBySlug = (slug: string) => blogPosts.find(p => p.slug === slug);