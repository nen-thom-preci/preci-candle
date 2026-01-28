'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight, Minus, Plus, Check } from 'lucide-react'
import dynamic from 'next/dynamic'

// Load 3D Scene
const Candle3D = dynamic(
  () => import('./candle-3d-scene').then(mod => ({ default: mod.Candle3D })),
  { ssr: false, loading: () => <div className="w-full h-full bg-[#FFFDFA] flex items-center justify-center text-[#715136]">Đang tải nến Préci...</div> }
)

interface CustomizerProps {
  productId: number
  productName: string
}

export default function ProductCustomizer({ productId, productName }: CustomizerProps) {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [tempEngraving, setTempEngraving] = useState('')
  useEffect(() => {
    const timer = setTimeout(() => {
      // Chỉ cập nhật vào customization sau 500ms ngừng gõ
      setCustomization(prev => {
        if (prev.engraving === tempEngraving) return prev // Không đổi thì thôi
        return { ...prev, engraving: tempEngraving }
      })
    }, 500) // Thời gian chờ 500ms

    return () => clearTimeout(timer) // Xóa timer cũ nếu gõ tiếp
  }, [tempEngraving])
  // STATE
  const [customization, setCustomization] = useState({
    shape: 'round',
    color: 'beige',
    sticker: false,
    base: 'none',
    engraving: '', // Biến lưu tên khắc
    message: '',
    box: 'none',
  })

  // DANH SÁCH BƯỚC
  const steps = [
    { id: 'shape', label: 'Hình dáng', title: 'Chọn hình dáng' },
    { id: 'color', label: 'Màu sắc', title: 'Chọn màu sắc' },
    { id: 'addons', label: 'Phụ kiện', title: 'Chọn đế nến' },
    { id: 'message', label: 'Thông điệp', title: 'Gửi lời nhắn' },
    { id: 'box', label: 'Hộp quà', title: 'Chọn hộp quà' },
  ]

  // --- DỮ LIỆU MẪU ---
  const shapes = [
    { id: 'round', label: 'Tròn', icon: '⭕' },
    { id: 'square', label: 'Vuông', icon: '⬜' },
    { id: 'hexagon', label: 'Lục giác', icon: '⬢' },
    { id: 'pyramid', label: 'Tam giác', icon: '▲' },
    { id: 'taper', label: 'Thon dài', icon: '🕯️' },
    { id: 'oval', label: 'Bầu dục', icon: '⬯' },
  ]

  // 12 MÀU ĐẦY ĐỦ
  const colors = [
    { id: 'beige', label: 'Kem (Soy)', hex: '#FDF5E6' },
    { id: 'beeswax', label: 'Vàng sáp ong', hex: '#E9D66B' },
    { id: 'paraffin', label: 'Trắng tinh', hex: '#F9F9F9' },
    { id: 'palm', label: 'Trắng sữa', hex: '#FCFBE3' },
    { id: 'sagegreen', label: 'Xanh xám', hex: '#B2AC88' },
    { id: 'dustyrose', label: 'Hồng tro', hex: '#DCAE96' },
    { id: 'lavender', label: 'Oải hương', hex: '#E6E6FA' },
    { id: 'terracotta', label: 'Cam đất', hex: '#E2725B' },
    { id: 'sand', label: 'Màu cát', hex: '#C2B280' },
    { id: 'charcoal', label: 'Than chì', hex: '#36454F' },
    { id: 'forestgreen', label: 'Xanh rừng', hex: '#224225' },
    { id: 'burgundy', label: 'Đỏ rượu', hex: '#800020' },
  ]

  const baseOptions = [
    { id: 'wood', label: 'Đế Gỗ', icon: '🪵', price: 80000 },
    { id: 'marble', label: 'Đá Cẩm Thạch', icon: '⚪', price: 120000 },
    { id: 'ceramic', label: 'Gốm', icon: '🏺', price: 95000 },
  ]

  const giftBoxes = [
    { id: 'box1', image: '/assets/boxes/box1.jpg' },
    { id: 'box2', image: '/assets/boxes/box2.jpg' },
    { id: 'box3', image: '/assets/boxes/box3.jpg' },
    { id: 'box4', image: '/assets/boxes/box4.jpg' },
    { id: 'box5', image: '/assets/boxes/box5.jpg' },
    { id: 'box6', image: '/assets/boxes/box6.jpg' },
  ]

  // --- TÍNH GIÁ ---
  const PRICES = { base: 299000, sticker: 50000, box: 50000, engraving: 45000 }

  const calculatePrice = () => {
    let price = PRICES.base
    if (customization.sticker) price += PRICES.sticker
    if (customization.box !== 'none') price += PRICES.box

    // Logic: Chỉ tính tiền đế và tiền khắc nếu có chọn đế
    if (customization.base !== 'none') {
      const selectedBase = baseOptions.find(b => b.id === customization.base)
      if (selectedBase) price += selectedBase.price
      // Nếu có nhập tên thì cộng tiền khắc
      if (customization.engraving.length > 0) price += PRICES.engraving
    }

    return price * quantity
  }

  // --- XỬ LÝ CART ---
  const handleAddToCart = (redirect = false) => {
    const finalPrice = calculatePrice()
    const item = {
      productId,
      name: `Nến ${customization.shape} Custom`,
      customization,
      price: finalPrice,
      qty: quantity,
      createdAt: Date.now(),
    }

    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    cart.push(item)
    localStorage.setItem('cart', JSON.stringify(cart))
    window.dispatchEvent(new Event('cart-updated'))

    if (redirect) router.push('/checkout')
    else alert('Đã thêm vào giỏ hàng!')
  }

  // --- RENDER CONTENT ---
  const renderStepContent = () => {
    switch (steps[currentStep].id) {
      case 'shape':
        return (
          <div className="grid grid-cols-3 gap-3">
            {shapes.map(s => (
              <button
                key={s.id}
                onClick={() => setCustomization(prev => ({ ...prev, shape: s.id }))}
                className={`aspect-square rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${customization.shape === s.id
                  ? 'border-[#715136] bg-[#715136]/10 text-[#715136]'
                  : 'border-[#E5E0D8] text-gray-500 hover:border-[#715136]/50'
                  }`}
              >
                <span className="text-3xl filter drop-shadow-sm">{s.icon}</span>
                <span className="text-xs font-bold">{s.label}</span>
              </button>
            ))}
          </div>
        )
      case 'color':
        return (
          <div className="grid grid-cols-3 gap-3">
            {colors.map(c => (
              <button
                key={c.id}
                onClick={() => setCustomization(prev => ({ ...prev, color: c.id }))}
                className={`aspect-square rounded-xl border-2 flex flex-col items-center justify-center gap-1 transition-all p-1 ${customization.color === c.id ? 'border-[#715136] bg-white shadow-md' : 'border-transparent hover:bg-white/50'
                  }`}
              >
                <div className="w-8 h-8 rounded-full shadow-inner border border-black/5" style={{ backgroundColor: c.hex }} />
                <span className="text-[10px] font-medium text-gray-600 text-center leading-tight line-clamp-2">{c.label}</span>
              </button>
            ))}
          </div>
        )
      case 'addons':
        return (
          <div className="space-y-6">
            {/* 1. Chọn Đế */}
            <div className="grid grid-cols-1 gap-2">
              <button
                onClick={() => setCustomization(prev => ({ ...prev, base: 'none' }))}
                className={`p-3 rounded-lg border text-left text-sm ${customization.base === 'none' ? 'border-[#715136] bg-[#715136]/5 font-bold' : 'border-gray-200'}`}
              >
                🚫 Không dùng đế
              </button>
              {baseOptions.map(b => (
                <button
                  key={b.id}
                  onClick={() => setCustomization(prev => ({ ...prev, base: b.id }))}
                  className={`p-3 rounded-lg border text-left flex justify-between items-center ${customization.base === b.id ? 'border-[#715136] bg-[#715136]/5' : 'border-gray-200 hover:bg-white'
                    }`}
                >
                  <span className="font-medium text-sm">{b.icon} {b.label}</span>
                  <span className="text-xs text-gray-500">+{b.price.toLocaleString()}đ</span>
                </button>
              ))}
            </div>

            {/* 2. Khắc Tên (Chỉ hiện khi ĐÃ CHỌN ĐẾ) */}
            {customization.base !== 'none' && (
              <div className="border-t border-dashed border-[#E5E0D8] pt-4 animate-in slide-in-from-top-2">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-[#715136] flex items-center gap-2">
                    <span>✨</span> Khắc tên lên đế
                  </label>
                  <span className="text-xs text-gray-500">+45.000đ</span>
                </div>
                <input
                  type="text"
                  maxLength={25}
                  placeholder="Nhập tên muốn khắc (Tối đa 25 ký tự)"
                  value={customization.engraving}
                  onChange={(e) => setCustomization(prev => ({ ...prev, engraving: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E0D8] bg-white focus:outline-none focus:border-[#715136] text-sm text-center font-serif text-[#715136]"
                />
                {customization.engraving && (
                  <p className="text-[10px] text-center mt-2 text-gray-400 italic">
                    Tên "{customization.engraving}" sẽ được khắc kim loại sang trọng
                  </p>
                )}
              </div>
            )}
          </div>
        )
      case 'message':
        return (
          <div className="space-y-6">
            <div
              onClick={() => setCustomization(prev => ({ ...prev, sticker: !prev.sticker }))}
              className={`p-4 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${customization.sticker ? 'border-[#715136] bg-[#715136]/5' : 'border-gray-200 hover:border-[#715136]/50'
                }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">💌</span>
                <div className="text-left">
                  <p className={`text-sm font-bold ${customization.sticker ? 'text-[#715136]' : 'text-gray-700'}`}>Thẻ thông điệp đính kèm</p>
                  <p className="text-xs text-gray-500">In lời nhắn lên thiệp riêng (+50.000đ)</p>
                </div>
              </div>
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${customization.sticker ? 'bg-[#715136] border-[#715136]' : 'border-gray-300'
                }`}>
                {customization.sticker && <Check size={12} className="text-white" />}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-[#715136] uppercase mb-2">Nội dung lời nhắn</p>
              <textarea
                value={customization.message}
                onChange={e => setCustomization(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Nhập lời nhắn gửi đến người nhận (Tối đa 50 ký tự)..."
                maxLength={50}
                className="w-full p-4 rounded-xl border border-[#E5E0D8] bg-white focus:outline-none focus:border-[#715136] min-h-[120px] text-sm resize-none shadow-inner"
              />
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-gray-400">{customization.message.length}/50 ký tự</span>
              </div>
            </div>
          </div>
        )
      case 'box':
        return (
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setCustomization(prev => ({ ...prev, box: 'none' }))}
              className={`aspect-square rounded-xl border-2 flex items-center justify-center text-gray-400 bg-white ${customization.box === 'none' ? 'border-[#715136] text-[#715136] font-bold' : 'border-dashed border-gray-300'
                }`}
            >
              Không hộp
            </button>

            {giftBoxes.map(box => (
              <button
                key={box.id}
                onClick={() => setCustomization(prev => ({ ...prev, box: box.id }))}
                className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${customization.box === box.id
                  ? 'border-[#715136] ring-2 ring-[#715136]/20'
                  : 'border-transparent hover:border-gray-300'
                  }`}
              >
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-2xl">🎁</span>
                </div>
                {customization.box === box.id && (
                  <div className="absolute top-1 right-1 w-5 h-5 bg-[#715136] rounded-full flex items-center justify-center">
                    <span className="text-white text-[10px]">✓</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">

      {/* HEADER */}
      <div className="bg-[#333333] text-white py-8 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-serif font-light mb-2">Tùy chỉnh nến thơm</h1>
        <p className="text-sm md:text-base opacity-80 font-light italic">Một phiên bản độc nhất mà bạn muốn</p>
      </div>

      {/* MAIN */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-auto lg:h-[600px]">

          {/* CỘT TRÁI */}
          <div className="flex gap-6 lg:w-[450px] flex-shrink-0">
            {/* NAV */}
            <div className="flex flex-col gap-6 pt-4 w-24 flex-shrink-0">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(index)}
                  className={`text-left text-sm font-bold transition-colors relative pb-1 ${index === currentStep
                    ? 'text-[#715136] border-b-2 border-[#715136]'
                    : 'text-gray-400 hover:text-gray-600'
                    }`}
                >
                  {step.label}
                </button>
              ))}
            </div>

            {/* OPTIONS CARD */}
            <div className="flex-1 flex flex-col">
              <div className="bg-[#F2EFE9] rounded-3xl p-6 flex-1 shadow-sm border border-[#E5E0D8] relative">
                <h3 className="text-center font-serif text-[#715136] mb-6 text-lg">{steps[currentStep].title}</h3>
                <div className="custom-scrollbar overflow-y-auto max-h-[350px]">
                  {renderStepContent()}
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                  disabled={currentStep === 0}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 disabled:opacity-30 transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
                  disabled={currentStep === steps.length - 1}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 disabled:opacity-30 transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex-1 bg-[#FFFDFA] rounded-xl relative overflow-hidden min-h-[300px] border border-[#f0f0f0]">
              <Candle3D
                shape={customization.shape}
                color={customization.color}
                sticker={customization.sticker}
                base={customization.base}
                message={customization.message}
                engraving={customization.engraving}
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#715136]/10 backdrop-blur-md px-4 py-1 rounded-full text-[10px] text-[#715136] uppercase tracking-widest pointer-events-none font-bold">
                Xoay để xem 360°
              </div>
            </div>

            <div className="bg-white border border-[#715136] rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
              <div className="text-center md:text-left border-r border-gray-200 pr-6 mr-2">
                <p className="text-xs text-gray-500 font-serif">Tổng chi phí</p>
                <p className="text-2xl font-serif font-bold text-[#715136] italic">
                  {calculatePrice().toLocaleString()}đ
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm font-serif italic text-gray-600">Số lượng:</span>
                <div className="flex items-center gap-3">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-6 h-6 flex items-center justify-center hover:text-[#715136]"><Minus size={16} /></button>
                  <span className="w-6 text-center font-bold bg-[#715136] text-white rounded-full text-sm h-6 flex items-center justify-center">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} className="w-6 h-6 flex items-center justify-center hover:text-[#715136]"><Plus size={16} /></button>
                </div>
              </div>

              <div className="flex gap-2 w-full md:w-auto">
                <button
                  onClick={() => handleAddToCart(true)}
                  className="flex-1 px-6 py-3 bg-[#B0A695] text-white font-bold rounded-lg hover:bg-[#8C7E72] transition-colors shadow-sm text-sm uppercase tracking-wide"
                >
                  Mua ngay
                </button>
                <button
                  onClick={() => handleAddToCart(false)}
                  className="flex-1 px-6 py-3 bg-[#6B8E23] text-white font-bold rounded-lg hover:bg-[#556B2F] transition-colors shadow-sm text-sm uppercase tracking-wide"
                >
                  Thêm vào giỏ
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}