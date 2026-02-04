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
    //*{
    //id: '1',
    //slug: 'loi-ich-cua-mui-huong',
    //title: 'Vì sao mùi hương có thể giúp làm dịu nhẹ cảm xúc/tinh thần sau một ngày dài mệt mỏi?',
    //category: 'benefits',
    //excerpt: 'Căng thẳng sau giờ làm việc là điều khó tránh khỏi. Hãy cùng Préci tìm hiểu cơ chế tác động của mùi hương lên não bộ giúp bạn thư giãn tức thì.',
    //content: '...',
    //image: '/blog/5-2.jpg',
    //date: '05/02/2026',
    //readTime: '5 phút',
    //author: 'Tiểu Vân'
    //
];

// 4. Helper function
export const getPostBySlug = (slug: string) => blogPosts.find(p => p.slug === slug);