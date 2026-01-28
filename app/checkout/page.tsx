'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'

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
    { id: 'review', title: 'Xem Lại Đơn Hàng', label: '1' },
    { id: 'shipping', title: 'Thông Tin Giao Hàng', label: '2' },
    { id: 'payment', title: 'Thanh Toán', label: '3' },
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  // LOGIC ĐÃ SỬA: Nếu ở bước 1 (index 0) thì back về trang trước
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    } else {
      router.back()
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }))
  }

  // Helper: Xóa sản phẩm khỏi giỏ
  const removeCartItem = (index: number) => {
    const copy = [...cart]
    copy.splice(index, 1)
    setCart(copy)
    try {
      localStorage.setItem('cart', JSON.stringify(copy))
    } catch (err) {
      console.error('Không lưu được cart', err)
    }
  }

  // Tính tổng tiền
  const totalPrice = cart.reduce((s, it) => s + (it.price || 0) * (it.qty || 1), 0)

  // Xử lý đặt hàng
  const handlePlaceOrder = () => {
    // TODO: Gọi API đặt hàng thực tế ở đây
    try {
      localStorage.removeItem('cart')
      setCart([])
      alert('Đặt hàng thành công! Cảm ơn bạn đã mua sắm tại Préci.')
      router.push('/') // Về trang chủ
    } catch (err) {
      console.error('Place order error', err)
    }
  }

  const renderStep = () => {
    switch (steps[currentStep].id) {
      case 'review':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-foreground">Xem Lại Đơn Hàng</h2>

            <div className="bg-secondary rounded-lg p-8 space-y-6">
              {/* Order Items dynamic */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Sản Phẩm Đặt Hàng</h3>

                {cart.length === 0 ? (
                  <div className="p-6 text-center text-muted-foreground">Giỏ hàng trống.</div>
                ) : (
                  <div className="border border-border rounded-lg p-6 space-y-4">
                    {cart.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 pb-4 border-b border-border last:border-b-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-yellow-50 to-amber-100 rounded-lg flex items-center justify-center text-3xl">
                          🕯️
                        </div>

                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{item.name}</h4>
                          <p className="text-sm text-muted-foreground mt-2">
                            Hình dáng: {item.customization?.shape || '-'} | Màu: {item.customization?.color || '-'} | Mùi: {item.customization?.scent || '-'}
                            {item.customization?.base !== 'none' ? ` | Đế: ${item.customization?.base}` : ''}
                            {item.customization?.engraving ? ` | Khắc: ${item.customization?.engraving}` : ''}
                          </p>
                          {item.customization?.message && <p className="text-sm mt-2 italic">"Lời nhắn: {item.customization.message}"</p>}
                        </div>

                        <div className="text-right">
                          <p className="font-semibold text-foreground">{(item.price || 0).toLocaleString('vi-VN')} đ</p>
                          <p className="text-sm text-muted-foreground">x{item.qty || 1}</p>
                          <button
                            onClick={() => removeCartItem(idx)}
                            className="text-sm text-red-500 mt-2 hover:underline"
                          >
                            Xoá
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Summary */}
              <div className="border-t border-border pt-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tạm tính:</span>
                  <span className="font-semibold text-foreground">{totalPrice.toLocaleString('vi-VN')} đ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phí vận chuyển:</span>
                  <span className="font-semibold text-foreground">0 đ (Miễn phí)</span>
                </div>
                <div className="flex justify-between text-lg border-t border-border pt-3">
                  <span className="font-semibold text-foreground">Tổng cộng:</span>
                  <span className="text-2xl font-serif font-bold text-primary">{totalPrice.toLocaleString('vi-VN')} đ</span>
                </div>
              </div>
            </div>
          </div>
        )


      case 'shipping':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-foreground">Thông Tin Giao Hàng</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-secondary rounded-lg p-8">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Họ
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={e => handleInputChange('firstName', e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Nguyễn"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Tên
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={e => handleInputChange('lastName', e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Văn A"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Số Điện Thoại
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={e => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+84 912 345 678"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Địa Chỉ
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={e => handleInputChange('address', e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Nhập địa chỉ của bạn"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Thành Phố / Tỉnh
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={e => handleInputChange('city', e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="TP.HCM"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Quận / Huyện
                </label>
                <input
                  type="text"
                  value={formData.district}
                  onChange={e => handleInputChange('district', e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Quận 10"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Mã Bưu Chính
                </label>
                <input
                  type="text"
                  value={formData.zipCode}
                  onChange={e => handleInputChange('zipCode', e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="100000"
                />
              </div>
            </div>
          </div>
        )

      case 'payment':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-foreground">Thanh Toán</h2>

            <div className="space-y-4 bg-secondary rounded-lg p-8">
              <h3 className="font-semibold text-foreground mb-6">Chọn Phương Thức Thanh Toán</h3>

              {[
                { id: 'cod', label: 'Thanh Toán Khi Nhận (COD)', desc: 'Thanh toán tiền mặt khi nhận hàng' },
                { id: 'bank', label: 'Chuyển Khoản Ngân Hàng', desc: 'Chuyển tiền vào tài khoản ngân hàng' },
                { id: 'wallet', label: 'Ví Điện Tử', desc: 'Thanh toán qua MoMo, Zalo Pay, etc.' },
              ].map(method => (
                <button
                  key={method.id}
                  onClick={() => handleInputChange('paymentMethod', method.id)}
                  className={`w-full p-4 rounded-lg border-2 transition-all text-left ${formData.paymentMethod === method.id
                    ? 'border-primary bg-primary bg-opacity-10'
                    : 'border-border hover:border-primary'
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{method.label}</p>
                      <p className="text-sm text-muted-foreground">{method.desc}</p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.paymentMethod === method.id ? 'bg-primary border-primary' : 'border-border'
                      }`}>
                      {formData.paymentMethod === method.id && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                  </div>
                </button>
              ))}

              {/* Order Summary for Confirmation */}
              <div className="border-t border-border mt-8 pt-8">
                <h4 className="font-semibold text-foreground mb-4">Xác Nhận Đơn Hàng</h4>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tên: {formData.firstName} {formData.lastName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email: {formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">SĐT: {formData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Địa chỉ: {formData.address}, {formData.city}</span>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between text-lg">
                    <span className="font-semibold text-foreground">Tổng thanh toán:</span>
                    <span className="text-2xl font-serif font-bold text-primary">{totalPrice.toLocaleString('vi-VN')} đ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Progress Indicator */}
        <section className="bg-secondary py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {steps.map((step, idx) => (
                <div key={step.id} className="flex-1 flex flex-col items-center">
                  <button
                    onClick={() => setCurrentStep(idx)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg transition-all mb-2 ${idx <= currentStep
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-border text-muted-foreground'
                      }`}
                  >
                    {idx < currentStep ? <Check size={20} /> : step.label}
                  </button>
                  <p className="text-sm font-semibold text-foreground text-center hidden md:block">
                    {step.title}
                  </p>
                  {idx < steps.length - 1 && (
                    <div
                      className={`absolute h-1 transition-all hidden md:block`}
                      style={{
                        width: '33%',
                        left: `calc(25% + ${idx * 33}%)`,
                        top: '24px',
                        backgroundColor: idx < currentStep ? 'var(--color-primary)' : 'var(--color-border)',
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {renderStep()}
        </section>

        {/* Navigation Buttons */}
        <section className="bg-secondary py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-4">
            <button
              onClick={handlePrev}
              // Đã xóa disabled={currentStep === 0} để nút luôn bấm được (quay về trang trước)
              className="flex items-center gap-2 px-6 py-3 border-2 border-border text-foreground font-semibold rounded-lg hover:border-primary hover:text-primary transition-all"
            >
              <ChevronLeft size={20} />
              Quay Lại
            </button>
            {currentStep === steps.length - 1 ? (
              <button
                onClick={handlePlaceOrder}
                className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all"
              >
                Hoàn Tất Đơn Hàng
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all"
              >
                Tiếp Theo
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}