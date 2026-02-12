'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { CheckCircle, Package, Truck, Clock, MapPin, Phone, Search } from 'lucide-react'
import Link from 'next/link'
import { getProductById } from '@/lib/products'

// --- BỘ TỪ ĐIỂN ĐẦY ĐỦ (FULL DICTIONARY) ---
const DICTIONARY: any = {
    // 1. HÌNH DÁNG
    shapes: {
        round: 'Tròn', square: 'Vuông', hexagon: 'Lục giác',
        pyramid: 'Tam giác', taper: 'Thon dài', oval: 'Bầu dục'
    },

    // 2. MÀU SẮC (Đủ 12 màu trong Customizer)
    colors: {
        paraffin: 'Trắng tinh', palm: 'Trắng sữa', beige: 'Kem (Soy)',
        beeswax: 'Vàng sáp ong', sand: 'Màu cát', terracotta: 'Cam đất',
        dustyrose: 'Hồng tro', burgundy: 'Đỏ rượu', lavender: 'Oải hương',
        forestgreen: 'Xanh rừng', sagegreen: 'Xanh xám', charcoal: 'Than chì'
    },

    // 3. ĐẾ NẾN (Khắc phục lỗi undefined 'marble' vừa rồi)
    bases: {
        wood: 'Đế Gỗ', marble: 'Đá Cẩm Thạch', ceramic: 'Gốm'
    },

    // 4. HỘP QUÀ (Dự phòng cho tương lai nếu bạn muốn hiện tên hộp)
    boxes: {
        box1: 'Mẫu 1', box2: 'Mẫu 2', box3: 'Mẫu 3',
        box4: 'Mẫu 4', box5: 'Mẫu 5', box6: 'Mẫu 6'
    }
}

function OrderCheckContent() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [orders, setOrders] = useState<any[]>([])
    const [highlightId, setHighlightId] = useState<string | null>(null)

    // Lấy ID đơn hàng vừa đặt xong (nếu có)
    const newOrderId = searchParams.get('id');
    const isNew = searchParams.get('new') === 'true';
    useEffect(() => {
        // 1. Lấy dữ liệu thô từ LocalStorage
        const rawHistory = JSON.parse(localStorage.getItem('order_history') || '[]');

        // 2. Lọc: Chỉ giữ lại các đơn CHƯA HỦY
        // (Nghĩa là đơn 'Đã hủy' sẽ bị loại bỏ khỏi danh sách này)
        const activeOrders = rawHistory.filter((order: any) => order.status !== 'Đã hủy');

        // 3. Nếu có đơn hàng bị xóa (số lượng khác nhau), cập nhật lại LocalStorage luôn
        if (rawHistory.length !== activeOrders.length) {
            localStorage.setItem('order_history', JSON.stringify(activeOrders));
        }

        // 4. Cập nhật State để hiển thị
        setOrders(activeOrders);

        // Highlight đơn hàng mới (nếu có)
        if (newOrderId) setHighlightId(newOrderId);
    }, [newOrderId])

    // HÀM XỬ LÝ HỦY ĐƠN
    const handleCancelOrder = (orderId: string) => {
        // 1. Hỏi xác nhận để tránh bấm nhầm
        if (!confirm("Bạn có chắc chắn muốn hủy đơn hàng này không?")) return;

        // 2. Cập nhật danh sách đơn hàng trong State
        const updatedList = orders.map(order => {
            if (order.id === orderId) {
                // Chỉ hủy được nếu đơn đang ở trạng thái 'Đang xử lý'
                if (order.status === 'Đang xử lý') {
                    return { ...order, status: 'Đã hủy' };
                }
            }
            return order;
        });

        // 3. Cập nhật State và LocalStorage
        setOrders(updatedList);
        localStorage.setItem('order_history', JSON.stringify(updatedList));

        alert("Đã hủy đơn hàng thành công.");
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#FFFDFA]">
            <Header />
            <main className="flex-1 py-12 px-4 max-w-4xl mx-auto w-full">

                {/* 1. THÔNG BÁO ĐẶT HÀNG THÀNH CÔNG (Chỉ hiện khi vừa mua xong) */}
                {isNew && newOrderId && (
                    <div className="bg-[#7B8B4C] text-white p-8 rounded-2xl text-center mb-12 shadow-lg animate-in zoom-in duration-500">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                            <CheckCircle size={40} className="text-white" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-brand font-bold uppercase mb-2">Đặt hàng thành công!</h1>
                        <div className="max-w-2xl mx-auto px-4 mt-2">
                            <p className="font-body text-base italic text-white/90 text-justify leading-relaxed">
                                Cảm ơn bạn đã dành thời gian ủng hộ Préci. Rất xin lỗi bạn vì đây chỉ là
                                dự án môn học nên chúng mình không thể giao đến cho bạn sản phẩm thực tế.
                                Hi vọng bạn đã có một trải nghiệm tuyệt vời với trang web của chúng mình.
                                Một lần nữa, đội ngũ Préci chân thành cảm ơn bạn đã dành thời gian trải nghiệm thương hiệu.
                            </p>
                        </div>
                        <div className="mt-6 inline-block bg-white/20 px-6 py-2 rounded-full backdrop-blur-sm font-brand tracking-widest">
                            MÃ ĐƠN: {newOrderId}
                        </div>
                    </div>
                )}

                {/* 2. DANH SÁCH ĐƠN HÀNG */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-brand font-bold uppercase text-[#715136] flex items-center gap-2">
                        <Package /> Đơn hàng của tôi
                    </h2>
                    <span className="text-sm text-gray-500 font-body italic">Lưu trên thiết bị này</span>
                </div>

                {orders.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-[#E5E0D8]">
                        <Search size={48} className="mx-auto text-gray-300 mb-4" />
                        <p className="font-body italic text-gray-500 mb-6">Bạn chưa có đơn hàng nào được lưu.</p>
                        <Link href="/products" className="px-6 py-2 bg-[#715136] text-white rounded-full font-body font-bold uppercase uppercase hover:bg-[#5a402a] transition-colors">
                            Mua sắm ngay
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {orders.map((order) => {
                            const isHighlight = order.id === highlightId;
                            // logic màu cho trạng thái đơn
                            let statusColor = "bg-yellow-100 text-yellow-700"; // Mặc định: Đang xử lý
                            if (order.status === 'Hoàn thành') statusColor = "bg-green-100 text-green-700";
                            if (order.status === 'Đã hủy') statusColor = "bg-red-100 text-red-700"; // Màu đỏ cho đơn hủy

                            return (
                                <div key={order.id} className={`bg-white rounded-2xl overflow-hidden border transition-all ${isHighlight ? 'border-[#7B8B4C] shadow-md ring-1 ring-[#7B8B4C]' : 'border-[#E5E0D8]'}`}>

                                    {/* Header Đơn hàng */}
                                    <div className="bg-[#F9F7F5] p-4 flex flex-wrap justify-between items-center gap-4 border-b border-[#E5E0D8]">
                                        <div>
                                            <div className="flex items-center gap-3">
                                                <span className="font-brand font-bold text-lg text-[#3a3a3a]">{order.id}</span>
                                                <span className={`text-xs px-2 py-1 rounded-full font-body font-bold ${order.status === 'Đang xử lý' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                                                    {order.status}
                                                </span>
                                            </div>
                                            <p className="font-body text-base text-gray-500 flex items-center gap-1 mt-1">
                                                <Clock size={12} /> {new Date(order.date).toLocaleString('vi-VN')}
                                            </p>
                                        </div>

                                        {/* NÚT HỦY ĐƠN (Chỉ hiện khi Đang xử lý) */}
                                        {order.status === 'Đang xử lý' && (
                                            <button
                                                onClick={() => handleCancelOrder(order.id)}
                                                className="font-body text-base text-red-500 underline hover:text-red-700 font-bold ml-auto md:ml-0"
                                            >
                                                Hủy đơn hàng
                                            </button>
                                        )}
                                    </div>

                                    {/* Body: Danh sách sản phẩm */}
                                    <div className="p-4 md:p-6 space-y-4">
                                        {order.items.map((item: any, idx: number) => {
                                            // 1. TRA CỨU SẢN PHẨM GỐC TỪ DATABASE
                                            const product = getProductById(Number(item.productId || item.id));
                                            let displayName = item.name;
                                            let displayImage = '/assets/placeholder.webp';

                                            if (product) {
                                                displayName = product.name; // <--- QUAN TRỌNG: Luôn lấy tên gốc (VD: Nến thơm Biển Cả)
                                                displayImage = product.image; // Luôn lấy ảnh gốc
                                            }

                                            return (
                                                <div key={idx} className="flex items-start gap-4">
                                                    {/* KHỐI ẢNH */}
                                                    <div className="w-16 h-16 bg-[#F9F7F5] rounded-lg flex-shrink-0 overflow-hidden border border-[#E5E0D8] relative mt-1">
                                                        <img
                                                            src={displayImage}
                                                            alt={displayName}
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => {
                                                                e.currentTarget.style.display = 'none';
                                                                e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                                                                e.currentTarget.parentElement!.innerText = '🕯️';
                                                            }}
                                                        />
                                                    </div>

                                                    {/* THÔNG TIN CHI TIẾT */}
                                                    <div className="flex-1">
                                                        {/* Tên sản phẩm to rõ */}
                                                        <p className="font-body font-bold uppercase text-[#3a3a3a] text-base md:text-lg">{displayName}</p>

                                                        {/* --- KHỐI HIỂN THỊ CHI TIẾT CUSTOM ĐẦY ĐỦ --- */}
                                                        {item.customization && (
                                                            <div className="mt-1.5 font-body text-sm text-gray-500 space-y-1 bg-gray-50 p-2 rounded border border-gray-100">
                                                                {/* 1. Hình & Màu */}
                                                                <p>
                                                                    <span className="uppercase">Kiểu:</span>{' '}
                                                                    {DICTIONARY.shapes[item.customization.shape] || item.customization.shape} - {' '}
                                                                    {DICTIONARY.colors[item.customization.color] || 'Tự chọn'}
                                                                </p>

                                                                {/* 2. Đế nến (Nếu có) */}
                                                                {item.customization.base && item.customization.base !== 'none' && (
                                                                    <p><span className="font-semibold">Đế:</span> {DICTIONARY.bases[item.customization.base] || item.customization.base}</p>
                                                                )}

                                                                {/* 3. Khắc tên (Nếu có) */}
                                                                {item.customization.engraving && (
                                                                    <p><span className="uppercase">Khắc:</span> "{item.customization.engraving}"</p>
                                                                )}

                                                                {/* 4. Thông điệp (Text hoặc Voice) */}
                                                                {item.customization.messageType === 'text' && (
                                                                    <p><span className="uppercase">Lời nhắn:</span> "{item.customization.message}"</p>
                                                                )}
                                                                {item.customization.messageType === 'voice' && (
                                                                    <p><span className="uppercase">Lời nhắn:</span> Kèm QR ghi âm</p>
                                                                )}

                                                                {/* 5. Hộp quà (Nếu có) */}
                                                                {item.customization.box && item.customization.box !== 'none' && (
                                                                    <p><span className="uppercase">Đóng gói:</span> Hộp quà tặng</p>
                                                                )}
                                                            </div>
                                                        )}

                                                        <p className="font-body text-sm text-gray-500 mt-1">Số lượng: x{item.qty}</p>
                                                    </div>

                                                    {/* GIÁ TIỀN */}
                                                    <p className="font-body font-bold text-[#715136] text-base md:text-lg">
                                                        {(item.price || 0).toLocaleString('vi-VN')} đ
                                                    </p>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    {/* Footer: Thông tin giao hàng */}
                                    <div className="p-4 bg-[#F9F7F5]/50 border-t border-[#E5E0D8] text-base text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex gap-2">
                                            <MapPin size={16} className="text-[#715136] flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-body font-bold uppercase">Địa chỉ nhận hàng:</p>
                                                <p className="font-body">{order.customer.firstName} {order.customer.lastName}</p>
                                                <p className="font-body">{order.customer.phone}</p>
                                                <p className="font-body">{order.customer.address}, {order.customer.district}, {order.customer.city}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Truck size={16} className="font-body text-[#715136] flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-body font-bold uppercase">Vận chuyển & Thanh toán:</p>
                                                <p className="font-body">Phí ship: {order.shipping === 0 ? 'Miễn phí' : `${order.shipping.toLocaleString('vi-VN')}đ`}</p>
                                                <p className="font-body">Phương thức: <span className="uppercase">{order.paymentMethod}</span></p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                )}

            </main>
            <Footer />
        </div>
    )
}
// --- Hàm default export mới để bọc Suspense ---
export default function OrderCheckPage() {
    return (
        <Suspense fallback={<div className="p-20 text-center">Đang tải thông tin đơn hàng...</div>}>
            <OrderCheckContent />
        </Suspense>
    )
}