'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Check, ChevronLeft, ChevronRight, CreditCard, Banknote, Truck, Wallet } from 'lucide-react' // Thêm icon
import { getProductById } from '@/lib/products'

export default function CheckoutPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    district: '',
    zipCode: '',
    paymentMethod: 'cod',
  })

  // State giỏ hàng
  const [cart, setCart] = useState<any[]>([])

  // Load cart từ localStorage khi mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem('cart')
      if (raw) setCart(JSON.parse(raw))
    } catch (err) {
      console.error('Không thể load cart từ localStorage', err)
    }
  }, [])

  const steps = [
    { id: 'review', title: 'Giỏ Hàng', label: '1' },
    { id: 'shipping', title: 'Vận Chuyển', label: '2' },
    { id: 'payment', title: 'Thanh Toán', label: '3' },
  ]

  // Hàm kiểm tra hợp lệ trước khi chuyển bước
  const validateStep = (stepIndex: number) => {
    // BƯỚC 1: KIỂM TRA GIỎ HÀNG
    if (stepIndex === 0) {
      if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống! Vui lòng thêm sản phẩm trước khi thanh toán.");
        return false;
      }
    }

    // BƯỚC 2: KIỂM TRA THÔNG TIN GIAO HÀNG
    if (stepIndex === 1) {
      // Danh sách các trường bắt buộc
      const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'district'];

      // Kiểm tra xem có trường nào bị bỏ trống không
      const missingField = requiredFields.find(field => !formData[field as keyof typeof formData]?.trim());

      if (missingField) {
        alert("Vui lòng điền đầy đủ thông tin giao hàng (Họ tên, SĐT, Địa chỉ...).");
        return false;
      }

      // Kiểm tra định dạng Email cơ bản (Optional)
      if (!formData.email.includes('@')) {
        alert("Vui lòng nhập địa chỉ Email hợp lệ.");
        return false;
      }

      // Kiểm tra độ dài SĐT (Optional)
      if (formData.phone.length < 10) {
        alert("Vui lòng nhập số điện thoại hợp lệ.");
        return false;
      }
    }

    return true;
  };

  // Hàm Next mới (Đã tích hợp validate)
  const handleNext = () => {
    // Nếu kiểm tra hợp lệ thì mới cho đi tiếp
    if (validateStep(currentStep)) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
        window.scrollTo(0, 0);
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    } else {
      router.back()
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const removeCartItem = (index: number) => {
    const copy = [...cart]
    copy.splice(index, 1)
    setCart(copy)
    try {
      localStorage.setItem('cart', JSON.stringify(copy))
    } catch (err) { console.error(err) }
  }

  const totalPrice = cart.reduce((s, it) => s + (it.price || 0) * (it.qty || 1), 0)

  const handlePlaceOrder = () => {
    // Kiểm tra bước cuối cùng (Thanh toán)
    if (!formData.paymentMethod) {
      alert("Vui lòng chọn một phương thức thanh toán.");
      return;
    }

    // Kiểm tra lại toàn bộ lần cuối để chắc chắn không bị hack bypass
    if (cart.length === 0) {
      alert("Giỏ hàng trống.");
      return;
    }

    // TODO: Gọi API đặt hàng thực tế ở đây
    try {
      localStorage.removeItem('cart')
      setCart([])
      alert(`Đặt hàng thành công!\nCảm ơn ${formData.lastName} ${formData.firstName} đã mua sắm tại Préci.`)
      router.push('/')
    } catch (err) {
      console.error('Place order error', err)
    }
  }

  // --- RENDER STEPS ---
  const renderStep = () => {
    switch (steps[currentStep].id) {
      // BƯỚC 1: REVIEW
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
                    const pid = item.productId || item.id;
                    const product = getProductById(Number(pid));
                    const displayName = product?.name || item.name || 'Sản phẩm không xác định';
                    const displayPrice = product?.price || item.price || 0;
                    const displayImage = product?.image || '/assets/placeholder.webp';

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
                            <div>
                              <h4 className="font-brand font-bold text-xl text-[#3a3a3a]">{displayName}</h4>
                              {product?.category === 'candles' ? (
                                <div className="text-sm text-gray-500 mt-2 space-y-1 font-body">
                                  <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#DCAE96]"></span> Hình dáng: <span className="text-[#715136] font-body">{item.customization?.shape || 'Tròn'}</span></p>
                                  <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#DCAE96]"></span> Mùi hương: <span className="text-[#715136] font-body">{item.customization?.color ? 'Theo màu' : 'Tự chọn'}</span></p>
                                  {item.customization?.engraving && <p className="flex items-center gap-2">✨ Khắc: <span className="italic">"{item.customization.engraving}"</span></p>}
                                </div>
                              ) : (
                                <p className="text-sm text-gray-500 mt-2 font-body italic">{product?.description}</p>
                              )}
                            </div>
                            <button onClick={() => removeCartItem(idx)} className="text-gray-400 hover:text-red-500 transition-colors p-1"><span className="sr-only">Xóa</span>✕</button>
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

            {/* Summary Box */}
            <div className="bg-[#F9F7F5] rounded-2xl p-6 border border-[#E5E0D8]">
              <div className="flex justify-between mb-3 text-gray-600 font-body font-bold">
                <span>Tạm tính</span>
                <span>{totalPrice.toLocaleString('vi-VN')} đ</span>
              </div>
              <div className="flex justify-between mb-4 text-gray-600 font-body font-bold">
                <span>Phí vận chuyển</span>
                <span className="text-[#715136]">Miễn phí</span>
              </div>
              <div className="border-t border-[#E5E0D8] pt-4 flex justify-between items-center">
                <span className="font-body font-bold text-lg text-[#3a3a3a]">Tổng cộng</span>
                <span className="text-3xl font-brand font-bold text-[#715136]">{totalPrice.toLocaleString('vi-VN')} đ</span>
              </div>
            </div>
          </div>
        )

      // BƯỚC 2: SHIPPING
      case 'shipping':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-brand font-bold text-[#715136]">Thông tin giao hàng</h2>
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

      // BƯỚC 3: PAYMENT
      case 'payment':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-brand font-bold text-[#715136]">Thanh toán & Xác nhận</h2>
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
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="flex justify-between items-end">
                      <span className="text-sm">Tổng thanh toán</span>
                      <span className="text-3xl font-brand font-bold">{totalPrice.toLocaleString('vi-VN')} đ</span>
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
        {/* Progress Indicator - Redesigned */}
        <section className="pt-8 pb-12">
          <div className="max-w-3xl mx-auto px-4">
            <div className="relative flex justify-between">
              {/* Line background */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#E5E0D8] -z-10 -translate-y-1/2 rounded-full"></div>
              {/* Active Line */}
              <div
                className="absolute top-1/2 left-0 h-0.5 bg-[#715136] -z-10 -translate-y-1/2 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              ></div>

              {steps.map((step, idx) => {
                const isActive = idx <= currentStep;
                const isCurrent = idx === currentStep;
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

        {/* Navigation Buttons - Fixed Bottom Mobile or Inline Desktop */}
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