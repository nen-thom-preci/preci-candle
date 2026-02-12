'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Check, ChevronLeft, ChevronRight, CreditCard, Banknote, Truck, Wallet } from 'lucide-react'
import { getProductById } from '@/lib/products'
import emailjs from '@emailjs/browser';

// --- 1. TỪ ĐIỂN DỊCH THUẬT (Đặt ngoài component để code gọn và không lỗi) ---
const DICTIONARY: any = {
  shapes: {
    round: 'Tròn', square: 'Vuông', hexagon: 'Lục giác',
    pyramid: 'Tam giác', taper: 'Thon dài', oval: 'Bầu dục'
  },
  colors: {
    paraffin: 'Trắng tinh', palm: 'Trắng sữa', beige: 'Kem (Soy)',
    beeswax: 'Vàng sáp ong', sand: 'Màu cát', terracotta: 'Cam đất',
    dustyrose: 'Hồng tro', burgundy: 'Đỏ rượu', lavender: 'Oải hương',
    forestgreen: 'Xanh rừng', sagegreen: 'Xanh xám', charcoal: 'Than chì'
  },
  bases: {
    wood: 'Đế Gỗ', marble: 'Đá Cẩm Thạch', ceramic: 'Gốm'
  }
}

export default function CheckoutPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)

  // Form Data
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', district: '', zipCode: '',
    paymentMethod: 'cod',
  })

  // State giỏ hàng (Dùng any[] để tránh lỗi TS khắt khe với object custom)
  const [cart, setCart] = useState<any[]>([])

  // Load cart
  useEffect(() => {
    try {
      const raw = localStorage.getItem('cart')
      if (raw) setCart(JSON.parse(raw))
    } catch (err) {
      console.error('Lỗi load cart', err)
    }
  }, [])

  const steps = [
    { id: 'review', title: 'Giỏ Hàng', label: '1' },
    { id: 'shipping', title: 'Vận Chuyển', label: '2' },
    { id: 'payment', title: 'Thanh Toán', label: '3' },
  ]

  // --- VALIDATION ---
  const validateStep = (stepIndex: number) => {
    if (stepIndex === 0) {
      if (cart.length === 0) {
        alert("Giỏ hàng trống! Hãy thêm sản phẩm.");
        return false;
      }
    }
    if (stepIndex === 1) {
      const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'district'];
      const missingField = requiredFields.find(field => !formData[field as keyof typeof formData]?.trim());
      if (missingField) {
        alert("Vui lòng điền đầy đủ thông tin giao hàng.");
        return false;
      }
      if (!formData.email.includes('@') || formData.phone.length < 10) {
        alert("Email hoặc số điện thoại không hợp lệ.");
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
        window.scrollTo(0, 0);
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1)
    else router.back()
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const removeCartItem = (index: number) => {
    const copy = [...cart]
    copy.splice(index, 1)
    setCart(copy)
    localStorage.setItem('cart', JSON.stringify(copy))
    window.dispatchEvent(new Event('cart-updated')) // Cập nhật số lượng trên header nếu có
  }

  // 1. Tính tổng tiền hàng (Tạm tính)
  const totalPrice = cart.reduce((s, it) => s + (it.price || 0) * (it.qty || 1), 0)

  // 2. LOGIC VẬN CHUYỂN (Theo chính sách Préci)
  const FREE_SHIP_THRESHOLD = 300000; // Mốc 300k
  const STANDARD_SHIP_FEE = 30000;    // Phí 30k

  // Nếu mua >= 500k thì phí = 0, ngược lại là 30k
  const shippingFee = totalPrice >= FREE_SHIP_THRESHOLD ? 0 : STANDARD_SHIP_FEE;

  // 3. Tổng thanh toán cuối cùng
  const finalTotal = totalPrice + shippingFee;

  // ... (giữ nguyên các đoạn code trên)

  const handlePlaceOrder = async () => { // Thêm async vào đây
    // Thêm 3 dòng này vào ngay đầu hàm để hết gạch đỏ
    const cartTotal = cart.reduce((s, it) => s + (it.price || 0) * (it.qty || 1), 0);
    const shippingFee = cartTotal >= 500000 ? 0 : 30000;
    const finalTotal = cartTotal + shippingFee;
    if (!formData.paymentMethod) return alert("Vui lòng chọn phương thức thanh toán.");
    if (cart.length === 0) return alert("Giỏ hàng trống.");

    // 1. Tạo Mã Đơn Hàng ngẫu nhiên (VD: PRECI-8392)
    const orderId = `PRECI-${Math.floor(1000 + Math.random() * 9000)}`;
    const orderDate = new Date().toISOString();

    // 2. Tạo object Đơn Hàng hoàn chỉnh
    const newOrder = {
      id: orderId,
      date: orderDate,
      customer: formData,
      items: cart,
      // Lưu lại các con số tài chính
      subtotal: totalPrice,
      shipping: shippingFee,
      total: finalTotal,
      paymentMethod: formData.paymentMethod,
      status: 'Đang xử lý' // Trạng thái mặc định
    };

    try {
      try {
        // Chuẩn bị dữ liệu để gửi
        const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScoVi9VmCGZEtzVNQ0HGJ8jxLh8WF3-1P8oqxlImTEXRaFTSw/formResponse"; // Thay XXXXX bằng ID form của bạn

        // Tạo form data ảo
        const formBody = new FormData();

        // Thay các mã entry.xxxxx bằng mã bạn lấy được ở BƯỚC 2
        formBody.append("entry.2005620554", orderId);                 // Mã đơn
        formBody.append("entry.1045781291", `${formData.lastName} ${formData.firstName}`); // Tên
        formBody.append("entry.1065046570", formData.phone);          // SĐT
        formBody.append("entry.1166974658", finalTotal.toLocaleString('vi-VN')); // Tổng tiền

        // Gom danh sách món ăn thành 1 chuỗi text
        const itemsDetail = cart.map(item => `${item.name} (x${item.qty})`).join(", ");
        formBody.append("entry.839337160", itemsDetail);             // Chi tiết

        // Gửi ngầm (No-cors để không bị lỗi chặn trình duyệt)
        await fetch(googleFormUrl, {
          method: "POST",
          mode: "no-cors",
          body: formBody
        });

      } catch (err) {
        console.error("Lỗi gửi sheet:", err);
        // Không chặn quy trình đặt hàng dù gửi lỗi
      }
      // --- KẾT THÚC ĐOẠN CODE GỬI ---
      // 3. Lưu vào Lịch sử đơn hàng (LocalStorage)
      const currentHistory = JSON.parse(localStorage.getItem('order_history') || '[]');
      currentHistory.unshift(newOrder); // Thêm đơn mới vào đầu danh sách
      localStorage.setItem('order_history', JSON.stringify(currentHistory));

      // 4. Xóa giỏ hàng
      localStorage.removeItem('cart');
      setCart([]);
      window.dispatchEvent(new Event('cart-updated'));

      // 5. Chuyển hướng sang trang Tra Cứu (kèm mã đơn hàng vừa tạo)
      router.push(`/order-check?id=${orderId}&new=true`);

    } catch (err) {
      console.error('Lỗi đặt hàng', err);
      alert("Có lỗi xảy ra, vui lòng thử lại.");
    }
  }

  // --- RENDER STEPS ---
  const renderStep = () => {
    switch (steps[currentStep].id) {
      // BƯỚC 1: REVIEW (ĐÃ SỬA LỖI HIỂN THỊ)
      case 'review':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-brand uppercase font-bold text-[#715136]">Kiểm tra đơn hàng</h2>
              <p className="font-body text-gray-500 mt-2">Vui lòng xem lại các sản phẩm trước khi tiếp tục.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#E5E0D8]">
              {cart.length === 0 ? (
                <div className="py-12 text-center">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="text-gray-500 font-body">Giỏ hàng của bạn đang trống.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item, idx) => {
                    // 1. Xác định đây là sản phẩm Custom hay Thường để hiển thị chi tiết bên dưới
                    const isCustomItem = !!item.customization;

                    // 2. Lấy thông tin gốc từ Database dựa vào ID sản phẩm
                    // (Để đảm bảo luôn hiện: "Nến thơm Biển Cả", "Nến thơm Hoa Nhài"...)
                    const product = getProductById(Number(item.productId || item.id));

                    // 3. Thiết lập biến hiển thị
                    // Mặc định lấy trong giỏ, nhưng nếu tìm thấy trong DB thì GHI ĐÈ bằng tên gốc
                    let displayName = item.name;
                    let displayImage = '/assets/placeholder.webp';

                    // Logic giá: Hàng custom dùng giá trong giỏ (vì đã cộng phụ phí), hàng thường dùng giá gốc
                    let displayPrice = item.price || 0;

                    if (product) {
                      displayName = product.name; // <--- QUAN TRỌNG: Luôn lấy tên gốc (VD: Nến thơm Biển Cả)
                      displayImage = product.image; // Luôn lấy ảnh gốc

                      if (!isCustomItem) {
                        displayPrice = product.price;
                      }
                    }

                    return (
                      <div key={idx} className="flex flex-col sm:flex-row items-start gap-6 pb-6 border-b border-[#F2EFE9] last:border-b-0 last:pb-0">
                        {/* Ảnh sản phẩm */}
                        <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#F9F7F5] rounded-xl overflow-hidden border border-[#E5E0D8] flex-shrink-0 relative group shadow-sm">
                          <img
                            src={displayImage}
                            alt={displayName}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                              e.currentTarget.parentElement!.innerText = '🕯️';
                            }}
                          />
                        </div>

                        {/* Thông tin */}
                        <div className="flex-1 w-full">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              {/* Tên sản phẩm gốc hiển thị ở đây */}
                              <h4 className="font-brand font-bold text-xl text-[#3a3a3a]">{displayName}</h4>

                              {/* --- PHẦN HIỂN THỊ CHI TIẾT CUSTOM (GIỮ NGUYÊN NHƯ ĐỀ XUẤT) --- */}
                              {isCustomItem && item.customization ? (
                                <div className="text-sm text-gray-500 mt-3 space-y-1.5 font-body bg-[#F9F7F5] p-3 rounded-lg border border-[#E5E0D8]">
                                  {/* Hình dáng */}
                                  <p className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#DCAE96]"></span>
                                    <span>Hình dáng:</span>
                                    <span className="text-[#715136] font-bold">
                                      {DICTIONARY.shapes[item.customization.shape] || item.customization.shape}
                                    </span>
                                  </p>

                                  {/* Màu sắc */}
                                  <p className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#DCAE96]"></span>
                                    <span>Màu sắc:</span>
                                    <span className="text-[#715136] font-bold">
                                      {DICTIONARY.colors[item.customization.color] || 'Tự chọn'}
                                    </span>
                                  </p>

                                  {/* Đế nến */}
                                  {item.customization.base && item.customization.base !== 'none' && (
                                    <p className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#DCAE96]"></span>
                                      <span>Đế nến:</span>
                                      <span className="text-[#715136] font-bold">
                                        {DICTIONARY.bases[item.customization.base] || item.customization.base}
                                      </span>
                                    </p>
                                  )}

                                  {/* Khắc tên */}
                                  {item.customization.engraving && (
                                    <p className="flex items-start gap-2">
                                      <span className="text-xs">✨</span>
                                      <span>Khắc:</span>
                                      <span className="text-[#715136] font-bold italic">"{item.customization.engraving}"</span>
                                    </p>
                                  )}

                                  {/* Thông điệp */}
                                  {item.customization.messageType === 'text' && (
                                    <p className="flex items-start gap-2">
                                      <span className="text-xs">💌</span>
                                      <span>Lời nhắn:</span>
                                      <span className="text-[#715136] font-medium line-clamp-1">"{item.customization.message}"</span>
                                    </p>
                                  )}

                                  {item.customization.messageType === 'voice' && (
                                    <p className="flex items-center gap-2">
                                      <span className="text-xs">🎙️</span>
                                      <span className="text-[#715136] font-bold">Kèm mã QR giọng nói</span>
                                    </p>
                                  )}

                                  {/* Hộp quà */}
                                  {item.customization.box && item.customization.box !== 'none' && (
                                    <p className="flex items-center gap-2">
                                      <span className="text-xs">🎁</span>
                                      <span className="text-[#715136]">Đóng gói hộp quà</span>
                                    </p>
                                  )}
                                </div>
                              ) : (
                                <p className="text-sm text-gray-500 mt-2 font-body italic">
                                  Sản phẩm có sẵn
                                </p>
                              )}
                            </div>
                            <button onClick={() => removeCartItem(idx)} className="text-gray-400 hover:text-red-500 transition-colors p-2"><span className="sr-only">Xóa</span>✕</button>
                          </div>
                        </div>

                        {/* Giá */}
                        <div className="text-right sm:text-right w-full sm:w-auto flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-end mt-2 sm:mt-0">
                          <span className="text-sm text-gray-400 font-body block sm:hidden">Thành tiền:</span>
                          <div>
                            <p className="font-body italic text-lg text-[#715136]">{displayPrice.toLocaleString('vi-VN')} đ</p>
                            <p className="text-sm text-gray-400">x{item.qty || 1}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Summary Box - Đã cập nhật chính sách vận chuyển */}
            <div className="bg-[#F9F7F5] rounded-2xl p-6 border border-[#E5E0D8]">
              {/* Tạm tính */}
              <div className="flex justify-between mb-3 text-gray-600 font-body">
                <span>Tạm tính</span>
                <span>{totalPrice.toLocaleString('vi-VN')} đ</span>
              </div>

              {/* Phí vận chuyển */}
              <div className="flex justify-between mb-2 text-gray-600 font-body">
                <span>Phí vận chuyển</span>
                <span className={shippingFee === 0 ? "text-[#6B8E23]" : "text-[#3a3a3a]"}>
                  {shippingFee === 0 ? "Miễn phí" : `${shippingFee.toLocaleString('vi-VN')} đ`}
                </span>
              </div>

              {/* Gợi ý mua thêm (Upsell) - Rất tốt cho trải nghiệm khách hàng */}
              {shippingFee > 0 && (
                <p className="font-body font-bold text-xs text-gray-400 italic mb-4 text-right border-b border-dashed border-gray-300 pb-2">
                  Mua thêm <span className="text-[#715136] font-brand">{(FREE_SHIP_THRESHOLD - totalPrice).toLocaleString('vi-VN')}đ</span> để được Freeship
                </p>
              )}

              {/* Tổng cộng */}
              <div className="border-t border-[#E5E0D8] pt-4 flex justify-between items-center">
                <span className="font-body font-bold text-lg text-[#3a3a3a]">Tổng cộng</span>
                <span className="text-3xl font-brand font-bold text-[#715136]">{finalTotal.toLocaleString('vi-VN')} đ</span>
              </div>
            </div>
          </div>
        )

      // BƯỚC 2: SHIPPING (GIỮ NGUYÊN)
      case 'shipping':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-brand font-bold uppercase text-[#715136]">Thông tin giao hàng</h2>
              <p className="font-body text-gray-500 mt-2">Chúng mình sẽ giao hàng đến địa chỉ này.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#E5E0D8]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-body text-[#715136] ml-1">Họ</label>
                  <input type="text" value={formData.firstName} onChange={e => handleInputChange('firstName', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#E5E0D8] focus:outline-none focus:border-[#715136] focus:ring-1 focus:ring-[#715136] transition-all bg-[#F9F7F5]" placeholder="Nguyễn" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-body text-[#715136] ml-1">Tên</label>
                  <input type="text" value={formData.lastName} onChange={e => handleInputChange('lastName', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#E5E0D8] focus:outline-none focus:border-[#715136] focus:ring-1 focus:ring-[#715136] transition-all bg-[#F9F7F5]" placeholder="Văn A" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-body text-[#715136] ml-1">Email</label>
                  <input type="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#E5E0D8] focus:outline-none focus:border-[#715136] focus:ring-1 focus:ring-[#715136] transition-all bg-[#F9F7F5]" placeholder="email@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-body text-[#715136] ml-1">Số điện thoại</label>
                  <input type="tel" value={formData.phone} onChange={e => handleInputChange('phone', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#E5E0D8] focus:outline-none focus:border-[#715136] focus:ring-1 focus:ring-[#715136] transition-all bg-[#F9F7F5]" placeholder="0912..." />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-body text-[#715136] ml-1">Địa chỉ nhận hàng</label>
                  <input type="text" value={formData.address} onChange={e => handleInputChange('address', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#E5E0D8] focus:outline-none focus:border-[#715136] focus:ring-1 focus:ring-[#715136] transition-all bg-[#F9F7F5]" placeholder="Số nhà, tên đường..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-body text-[#715136] ml-1">Tỉnh / Thành phố</label>
                  <input type="text" value={formData.city} onChange={e => handleInputChange('city', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#E5E0D8] focus:outline-none focus:border-[#715136] focus:ring-1 focus:ring-[#715136] transition-all bg-[#F9F7F5]" placeholder="TP.HCM" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-body text-[#715136] ml-1">Quận / Huyện</label>
                  <input type="text" value={formData.district} onChange={e => handleInputChange('district', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#E5E0D8] focus:outline-none focus:border-[#715136] focus:ring-1 focus:ring-[#715136] transition-all bg-[#F9F7F5]" placeholder="Quận 1" />
                </div>
              </div>
            </div>
          </div>
        )

      // BƯỚC 3: PAYMENT (GIỮ NGUYÊN)
      case 'payment':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-brand font-bold uppercase text-[#715136]">Thanh toán & Xác nhận</h2>
              <p className="font-body text-gray-500 mt-2">Chọn phương thức thanh toán an toàn.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Payment Methods */}
              <div className="lg:col-span-2 space-y-4">
                {[
                  { id: 'cod', label: 'Thanh toán khi nhận hàng (COD)', desc: 'Trả tiền mặt cho shipper khi nhận được hàng', icon: <Banknote size={24} /> },
                  { id: 'bank', label: 'Chuyển khoản ngân hàng', desc: 'Chuyển khoản qua QR Code hoặc STK', icon: <CreditCard size={24} /> },
                  { id: 'wallet', label: 'Ví điện tử', desc: 'Momo / ZaloPay / Apple Pay', icon: <Wallet size={24} /> },
                ].map(method => (
                  <div
                    key={method.id}
                    onClick={() => handleInputChange('paymentMethod', method.id)}
                    className={`relative p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 flex items-start gap-4 ${formData.paymentMethod === method.id
                      ? 'border-[#715136] bg-[#715136]/5 shadow-md'
                      : 'border-[#E5E0D8] bg-white hover:border-[#DCAE96]'
                      }`}
                  >
                    <div className={`p-3 rounded-full ${formData.paymentMethod === method.id ? 'bg-[#715136] text-white' : 'bg-[#F2EFE9] text-[#715136]'}`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-bold font-brand text-lg ${formData.paymentMethod === method.id ? 'text-[#715136]' : 'text-gray-700'}`}>{method.label}</h4>
                      <p className="text-sm text-gray-500 font-body mt-1">{method.desc}</p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${formData.paymentMethod === method.id ? 'border-[#715136]' : 'border-gray-300'}`}>
                      {formData.paymentMethod === method.id && <div className="w-3 h-3 rounded-full bg-[#715136]" />}
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary (Final) */}
              <div className="lg:col-span-1">
                <div className="bg-[#715136] text-white rounded-2xl p-6 shadow-lg sticky top-8">
                  <h3 className="font-brand font-bold text-xl mb-6 border-b border-white/20 pb-4">Thông tin đơn hàng</h3>
                  <div className="space-y-4 text-sm font-body text-white/90">
                    <div className="flex justify-between"><span>Khách hàng:</span> <span className="font-body">{formData.firstName} {formData.lastName}</span></div>
                    <div className="flex justify-between"><span>SĐT:</span> <span className="font-bold">{formData.phone}</span></div>
                    <div className="flex flex-col gap-1">
                      <span>Địa chỉ:</span>
                      <span className="font-body text-right">{formData.address}, {formData.district}, {formData.city}</span>
                    </div>
                  </div>
                  {/* ... Bên trong Payment Summary ... */}
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="flex justify-between items-center mb-2 text-white/80 text-sm">
                      <span>Tạm tính:</span>
                      <span>{totalPrice.toLocaleString('vi-VN')} đ</span>
                    </div>
                    <div className="flex justify-between items-center mb-4 text-white/80 text-sm">
                      <span>Vận chuyển:</span>
                      <span>{shippingFee === 0 ? "Miễn phí" : `${shippingFee.toLocaleString('vi-VN')} đ`}</span>
                    </div>
                    <div className="flex justify-between items-end border-t border-white/20 pt-4">
                      <span className="text-sm">Tổng thanh toán</span>
                      {/* Dùng biến finalTotal */}
                      <span className="text-3xl font-brand font-bold">{finalTotal.toLocaleString('vi-VN')} đ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      default: return null
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDFA]">
      <Header />

      <main className="flex-1 pb-20">
        {/* Progress Indicator */}
        <section className="pt-8 pb-12">
          <div className="max-w-3xl mx-auto px-4">
            <div className="relative flex justify-between">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#E5E0D8] -z-10 -translate-y-1/2 rounded-full"></div>
              <div
                className="absolute top-1/2 left-0 h-0.5 bg-[#715136] -z-10 -translate-y-1/2 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              ></div>

              {steps.map((step, idx) => {
                const isActive = idx <= currentStep;
                return (
                  <div key={step.id} className="flex flex-col items-center bg-[#FFFDFA] px-2">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 border-2 ${isActive
                        ? 'bg-[#715136] border-[#715136] text-white shadow-lg scale-110'
                        : 'bg-white border-[#E5E0D8] text-gray-400'
                        }`}
                    >
                      {idx < currentStep ? <Check size={18} /> : step.label}
                    </div>
                    <span className={`mt-3 text-xs md:text-sm font-body tracking-wide uppercase transition-colors ${isActive ? 'text-[#715136]' : 'text-gray-400'}`}>
                      {step.title}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Content Area */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6">
          {renderStep()}
        </section>

        {/* Navigation Buttons */}
        <section className="max-w-5xl mx-auto px-4 mt-12">
          <div className="flex justify-between items-center pt-8 border-t border-[#E5E0D8]">
            <button
              onClick={handlePrev}
              className="flex items-center gap-2 px-6 py-3 text-[#715136] font-bold rounded-full hover:bg-[#715136]/10 transition-all font-body"
            >
              <ChevronLeft size={20} />
              Quay lại
            </button>

            {currentStep === steps.length - 1 ? (
              <button
                onClick={handlePlaceOrder}
                className="px-8 py-3.5 bg-[#715136] text-white font-body rounded-full hover:bg-[#5a402a] hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                Hoàn tất đơn hàng <Truck size={20} />
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-8 py-3.5 bg-[#715136] text-white font-body rounded-full hover:bg-[#5a402a] hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                Tiếp theo <ChevronRight size={20} />
              </button>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}