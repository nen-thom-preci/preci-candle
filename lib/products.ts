// lib/products.ts

export interface Product {
    id: number;
    name: string;
    category: 'candles' | 'accessories';
    price: number;
    priceFormatted: string;
    description: string;
    image: string;
    rating: number;
    reviews: number;
    features: string[];
    details: string;
    customizable: boolean; // Cờ đánh dấu sản phẩm có thể tùy chỉnh (Nến) hay không (Phụ kiện)
}

export const products = [
    // --- NẾN THƠM (CUSTOMIZABLE = TRUE) ---

    {
        id: 1,
        name: 'Nến thơm Hoa Nhài',
        category: 'candles',
        price: 299000,
        priceFormatted: '299.000 đ',
        description: 'Mùi hoa nhài tươi, ngọt nhẹ, giống trà hoa nhài mới pha',
        image: '/products/Hoa lài.webp',
        customizable: true,
    },
    {
        id: 2,
        name: 'Nến thơm Thảo Mộc',
        category: 'candles',
        price: 299000,
        priceFormatted: '299.000 đ',
        description: 'Mùi lá xanh tươi, hơi cay nhẹ như húng, rosemary; cảm giác sạch và mát',
        image: '/products/Thảo mộc.webp',
        customizable: true,
    },
    {
        id: 3,
        name: 'Nến thơm Vani',
        category: 'candles',
        price: 399000,
        priceFormatted: '399.000 đ',
        description: 'Mùi vani ngọt ấm, giống bánh nướng hoặc kem vani',
        image: '/products/Vani.webp',
        customizable: true,
    },
    {
        id: 4,
        name: 'Nến thơm Cam Chanh',
        category: 'candles',
        price: 349000,
        priceFormatted: '349.000 đ',
        description: 'Mùi vỏ cam, chanh tươi; chua ngọt, rất sảng khoái',
        image: '/products/Cam chanh.webp',
        customizable: true,
    },
    {
        id: 5,
        name: 'Nến thơm Oải Hương',
        category: 'candles',
        price: 349000,
        priceFormatted: '349.000 đ',
        description: 'Mùi hoa khô nhẹ, giống tinh dầu spa; dịu và dễ chịu',
        image: '/products/Oải hương.webp',
        customizable: true,
    },
    {
        id: 6,
        name: 'Nến thơm Biển Cả',
        category: 'candles',
        price: 349000,
        priceFormatted: '349.000 đ',
        description: 'Mùi gió biển mát, hơi mặn và sảng khoái, giống không khí gần biển',
        image: '/products/Biển cả.webp',
        customizable: true,
    },
    {
        id: 7,
        name: 'Hộp diêm đốt nến thơm',
        category: 'accessories',
        price: 20000,
        priceFormatted: '20.000 đ',
        description: '...',
        image: '/phu-kien/hop-diem.png',
        customizable: false,
    },
    {
        id: 8,
        name: 'Chuông chụp tắt nến',
        category: 'accessories',
        price: 90000,
        priceFormatted: '90.000 đ',
        description: '...',
        image: '/phu-kien/chuong-chup.png',
        customizable: false,
    },
    {
        id: 9,
        name: 'Đế gỗ thông đựng nến',
        category: 'accessories',
        price: 15000,
        priceFormatted: '15.000 đ',
        description: '...',
        image: '/phu-kien/de-go-thong.png',
        customizable: false,
    },
    {
        id: 10,
        name: 'Khay đựng nến kim loại',
        category: 'accessories',
        price: 60000,
        priceFormatted: '60.000 đ',
        description: '...',
        image: '/phu-kien/khay-kim-loai.png',
        customizable: false,
    },
    {
        id: 11,
        name: 'Kéo cắt bấc nến',
        category: 'accessories',
        price: 80000,
        priceFormatted: '80.000 đ',
        description: '...',
        image: '/phu-kien/keo-cat-bac-nen.png',
        customizable: false,
    },
    {
        id: 12,
        name: 'Chóng chóng khuếch tán',
        category: 'accessories',
        price: 100000,
        priceFormatted: '100.000 đ',
        description: '...',
        image: '/phu-kien/chong-chong.png',
        customizable: false,
    },
    {
        id: 13,
        name: 'Quế khô trang trí nến',
        category: 'accessories',
        price: 40000,
        priceFormatted: '40.000 đ',
        description: '...',
        image: '/phu-kien/que-kho.png',
        customizable: false,
    },
    {
        id: 14,
        name: 'Combo chăm sóc nến',
        category: 'accessories',
        price: 299000,
        priceFormatted: '299.000 đ',
        description: '...',
        image: '/phu-kien/combo.png',
        customizable: false,
    },
]

// Hàm helper để lấy sản phẩm theo ID
export const getProductById = (id: number) => products.find(p => p.id === id);