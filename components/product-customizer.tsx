'use client'

import QRCode from "react-qr-code";
import { useState, useEffect, useRef, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight, Minus, Plus, Check, Mic, Square, Play, Pause, Trash2 } from 'lucide-react'
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

// ==========================================
// 1. KHU VỰC HẰNG SỐ
// ==========================================

const PRICES = { base: 299000, sticker: 50000, box: 50000, engraving: 45000 }

const STEPS = [
  { id: 'shape', label: 'Hình dáng', title: 'Chọn hình dáng' },
  { id: 'color', label: 'Màu sắc', title: 'Chọn màu sắc' },
  { id: 'addons', label: 'Phụ kiện', title: 'Chọn đế nến' },
  { id: 'message', label: 'Thông điệp', title: 'Gửi lời nhắn' },
  { id: 'box', label: 'Hộp quà', title: 'Chọn hộp quà' },
]

const SHAPES = [
  { id: 'round', label: 'Tròn' },
  { id: 'square', label: 'Vuông' },
  { id: 'hexagon', label: 'Lục giác' },
  { id: 'pyramid', label: 'Tam giác' },
  { id: 'taper', label: 'Thon dài' },
  { id: 'oval', label: 'Bầu dục' },
]

const COLORS = [
  { id: 'paraffin', label: 'Trắng tinh', hex: '#F9F9F9', elements: ['kim', 'thuy'] },
  { id: 'palm', label: 'Trắng sữa', hex: '#FCFBE3', elements: ['kim'] },
  { id: 'beige', label: 'Kem (Soy)', hex: '#FDF5E6', elements: ['kim', 'tho'] },
  { id: 'beeswax', label: 'Vàng sáp ong', hex: '#E9D66B', elements: ['kim', 'tho'] },
  { id: 'sand', label: 'Màu cát', hex: '#C2B280', elements: ['tho', 'kim'] },
  { id: 'terracotta', label: 'Cam đất', hex: '#E2725B', elements: ['tho', 'hoa'] },
  { id: 'dustyrose', label: 'Hồng tro', hex: '#DCAE96', elements: ['hoa', 'tho'] },
  { id: 'burgundy', label: 'Đỏ rượu', hex: '#800020', elements: ['hoa', 'tho'] },
  { id: 'lavender', label: 'Oải hương', hex: '#E6E6FA', elements: ['hoa', 'thuy'] },
  { id: 'forestgreen', label: 'Xanh rừng', hex: '#224225', elements: ['moc', 'hoa'] },
  { id: 'sagegreen', label: 'Xanh xám', hex: '#B2AC88', elements: ['moc', 'kim'] },
  { id: 'charcoal', label: 'Than chì', hex: '#36454F', elements: ['thuy', 'moc'] },
]

const BASE_OPTIONS = [
  { id: 'wood', label: 'Đế Gỗ', icon: '🪵', price: 80000 },
  { id: 'marble', label: 'Đá Cẩm Thạch', icon: '⚪', price: 120000 },
  { id: 'ceramic', label: 'Gốm', icon: '🏺', price: 95000 },
]

const GIFT_BOXES = [
  { id: 'box1', image: '/hop-qua/1.webp' },
  { id: 'box2', image: '/hop-qua/2.webp' },
  { id: 'box3', image: '/hop-qua/3.webp' },
  { id: 'box4', image: '/hop-qua/4.webp' },
  { id: 'box5', image: '/hop-qua/5.webp' },
  { id: 'box6', image: '/hop-qua/6.webp' },
]

// Component Icon Hình Dáng
const ShapeIcon = ({ id }: { id: string }) => {
  const green = "#7B8B4C";
  const brown = "#8B5E3C";

  switch (id) {
    case 'round': return <svg width="40" height="40" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill={green} /></svg>;
    case 'square': return <svg width="40" height="40" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill={brown} /></svg>;
    case 'hexagon': return <svg width="40" height="40" viewBox="0 0 100 100"><polygon points="50 5, 95 27.5, 95 72.5, 50 95, 5 72.5, 5 27.5" fill={green} /></svg>;
    case 'pyramid': return <svg width="40" height="40" viewBox="0 0 100 100"><polygon points="50 10, 90 90, 10 90" fill={brown} /></svg>;
    case 'taper': return <svg width="40" height="40" viewBox="0 0 100 100"><rect x="25" y="10" width="50" height="80" fill={green} /></svg>;
    case 'oval': return <svg width="40" height="40" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="30" ry="45" fill={brown} /></svg>;
    default: return null;
  }
}

const calculateElement = (year: number) => {
  const menhMap: Record<number, string> = {
    1950: 'moc', 1951: 'moc', 1958: 'moc', 1959: 'moc', 1972: 'moc', 1973: 'moc', 1980: 'moc', 1981: 'moc', 1988: 'moc', 1989: 'moc', 2002: 'moc', 2003: 'moc', 2010: 'moc', 2011: 'moc', 2018: 'moc', 2019: 'moc',
    1952: 'thuy', 1953: 'thuy', 1966: 'thuy', 1967: 'thuy', 1974: 'thuy', 1975: 'thuy', 1982: 'thuy', 1983: 'thuy', 1996: 'thuy', 1997: 'thuy', 2004: 'thuy', 2005: 'thuy', 2012: 'thuy', 2013: 'thuy', 2026: 'thuy', 2027: 'thuy',
    1954: 'kim', 1955: 'kim', 1962: 'kim', 1963: 'kim', 1970: 'kim', 1971: 'kim', 1984: 'kim', 1985: 'kim', 1992: 'kim', 1993: 'kim', 2000: 'kim', 2001: 'kim', 2014: 'kim', 2015: 'kim', 2022: 'kim', 2023: 'kim',
    1956: 'hoa', 1957: 'hoa', 1964: 'hoa', 1965: 'hoa', 1978: 'hoa', 1979: 'hoa', 1986: 'hoa', 1987: 'hoa', 1994: 'hoa', 1995: 'hoa', 2008: 'hoa', 2009: 'hoa', 2016: 'hoa', 2017: 'hoa', 2024: 'hoa', 2025: 'hoa',
    1960: 'tho', 1961: 'tho', 1968: 'tho', 1969: 'tho', 1976: 'tho', 1977: 'tho', 1990: 'tho', 1991: 'tho', 1998: 'tho', 1999: 'tho', 2006: 'tho', 2007: 'tho', 2020: 'tho', 2021: 'tho', 2028: 'tho', 2029: 'tho'
  };
  return menhMap[year] || null;
};

const getElementLabel = (slug: string) => {
  const map: Record<string, string> = { kim: 'Kim', moc: 'Mộc', thuy: 'Thủy', hoa: 'Hỏa', tho: 'Thổ' };
  return map[slug] || '';
};

// ==========================================
// 3. COMPONENT CHÍNH
// ==========================================

export default function ProductCustomizer({ productId, productName }: CustomizerProps) {
  const router = useRouter()

  // STATE
  const [currentStep, setCurrentStep] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [tempEngraving, setTempEngraving] = useState('')

  // State Phong Thủy
  const [colorMode, setColorMode] = useState<'fengshui' | 'custom'>('fengshui');
  const [birthYear, setBirthYear] = useState<string>('');

  const [customization, setCustomization] = useState({
    shape: 'round',
    color: 'beige',
    sticker: false,
    base: 'none',
    engraving: '',
    message: '',
    box: 'none',
    messageType: 'none',
    voiceData: null as Blob | null,
  })

  // --- STATE CHO GHI ÂM ---
  const [isRecording, setIsRecording] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [qrConfirmed, setQrConfirmed] = useState(false)

  const mediaRecorderRef = useRef<any>(null)
  const timerRef = useRef<any>(null)
  const audioRef = useRef<any>(null)

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  const startRecording = async () => {
    setQrConfirmed(false)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      const chunks: BlobPart[] = []

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data)
      }

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' })
        const url = URL.createObjectURL(blob)
        setAudioUrl(url)
        setCustomization(prev => ({ ...prev, voiceData: blob }))
      }

      mediaRecorder.start()
      setIsRecording(true)
      setRecordingTime(0)
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => {
          if (prev >= 30) {
            stopRecording()
            return 30
          }
          return prev + 1
        })
      }, 1000)

    } catch (err) {
      alert("Vui lòng cấp quyền truy cập micro để ghi âm lời chúc!")
      console.error(err)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }

  const togglePlayback = () => {
    if (!audioRef.current && audioUrl) {
      audioRef.current = new Audio(audioUrl)
      audioRef.current.onended = () => setIsPlaying(false)
    }

    if (isPlaying) {
      audioRef.current?.pause()
    } else {
      audioRef.current?.play()
    }
    setIsPlaying(!isPlaying)
  }

  const deleteRecording = () => {
    setAudioUrl(null)
    setIsPlaying(false)
    setRecordingTime(0)
    setQrConfirmed(false)
    setCustomization(prev => ({ ...prev, voiceData: null }))
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.src = ""
      audioRef.current = null
    }
  }

  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCustomization(prev => {
        if (prev.engraving === tempEngraving) return prev
        return { ...prev, engraving: tempEngraving }
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [tempEngraving])

  const handleFinishAndUpload = async () => {
    if (!customization.voiceData) {
      alert("Chưa có file ghi âm!");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", customization.voiceData);
    formData.append("upload_preset", "preci_audio");
    formData.append("resource_type", "video");

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/di6humtpc/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.secure_url) {
        setAudioUrl(data.secure_url);
        setQrConfirmed(true);
      } else {
        alert("Lỗi tạo link: " + (data.error?.message || "Thử lại sau"));
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Lỗi kết nối internet.");
    } finally {
      setIsUploading(false);
    }
  };

  // --- RENDER CONTENT ---
  const renderStepContent = () => {
    switch (STEPS[currentStep].id) {
      case 'shape':
        return (
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {SHAPES.map(s => (
              <button
                key={s.id}
                onClick={() => setCustomization(prev => ({ ...prev, shape: s.id }))}
                className={`aspect-square rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all p-2 ${customization.shape === s.id
                  ? 'border-[#715136] bg-[#715136]/10 text-[#715136]'
                  : 'border-[#E5E0D8] text-gray-500 hover:border-[#715136]/50'
                  }`}
              >
                <div className="mb-1 transform scale-100 md:scale-110">
                  <ShapeIcon id={s.id} />
                </div>
                <span className="text-xs md:text-sm font-body font-bold text-center">{s.label}</span>
              </button>
            ))}
          </div>
        )
      case 'color':
        const userElement = birthYear.length === 4 ? calculateElement(parseInt(birthYear)) : null;
        const suggestedColors = userElement
          ? COLORS.filter(c => c.elements?.includes(userElement))
          : [];

        return (
          <div className="flex flex-col h-full animate-in fade-in zoom-in duration-500">
            {/* TABS */}
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="flex bg-[#EFEBE7] p-1 rounded-full shadow-inner w-full md:w-auto">
                <button
                  onClick={() => setColorMode('fengshui')}
                  className={`flex-1 md:flex-none px-3 md:px-5 py-2 rounded-full text-xs md:text-sm font-bold font-brand transition-all duration-300 ${colorMode === 'fengshui' ? 'bg-[#7B8B4C] text-white shadow-sm' : 'text-[#8C7E72] hover:text-[#715136]'}`}
                >
                  Theo phong thủy
                </button>
                <button
                  onClick={() => setColorMode('custom')}
                  className={`flex-1 md:flex-none px-3 md:px-5 py-2 rounded-full text-xs md:text-sm font-bold font-brand transition-all duration-300 ${colorMode === 'custom' ? 'bg-[#7B8B4C] text-white shadow-sm' : 'text-[#8C7E72] hover:text-[#715136]'}`}
                >
                  Tùy chọn
                </button>
              </div>
            </div>

            {/* NỘI DUNG MÀU */}
            <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar">
              {colorMode === 'fengshui' ? (
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-[250px] text-center mb-6">
                    <label className="block text-[#715136] font-brand font-bold mb-2 text-sm md:text-base">Nhập năm sinh của bạn</label>
                    <input
                      type="number"
                      placeholder="VD: 1997"
                      value={birthYear}
                      onChange={(e) => setBirthYear(e.target.value.slice(0, 4))}
                      className="w-full text-center bg-white border border-[#C4B5A5] rounded-lg focus:border-[#715136] focus:ring-1 focus:ring-[#715136] outline-none py-3 font-body text-lg text-[#715136] placeholder:text-gray-300 transition-all shadow-sm"
                    />
                    {userElement && (
                      <div className="mt-3 animate-in slide-in-from-top-2">
                        <span className="text-xs md:text-sm text-gray-800 font-brand">Bạn thuộc mệnh</span>
                        <div className="text-[#7B8B4C] font-bold font-brand text-xl uppercase tracking-wider">
                          {getElementLabel(userElement)}
                        </div>
                      </div>
                    )}
                  </div>

                  {userElement ? (
                    <div className="w-full animate-in fade-in duration-500">
                      <div className="flex items-center gap-2 mb-4 justify-center">
                        <div className="h-[1px] w-8 bg-[#C4B5A5]"></div>
                        <p className="text-center text-[#715136] font-brand font-bold italic text-sm md:text-base">Màu sắc hợp mệnh</p>
                        <div className="h-[1px] w-8 bg-[#C4B5A5]"></div>
                      </div>
                      {suggestedColors.length > 0 ? (
                        <div className="grid grid-cols-3 md:grid-cols-3 gap-3">
                          {suggestedColors.map(c => (
                            <button
                              key={c.id}
                              onClick={() => setCustomization(prev => ({ ...prev, color: c.id }))}
                              className={`aspect-square rounded-xl border-2 flex flex-col items-center justify-center gap-1 transition-all p-1 group ${customization.color === c.id ? 'border-[#7B8B4C] bg-white shadow-md ring-1 ring-[#7B8B4C] ring-offset-1' : 'border-transparent hover:bg-white/60 hover:shadow-sm'}`}
                            >
                              <div className="w-8 h-8 rounded-full shadow-inner border border-black/5 group-hover:scale-110 transition-transform" style={{ backgroundColor: c.hex }} />
                              <span className="text-xs font-medium text-gray-600 text-center leading-tight line-clamp-2 font-brand">{c.label}</span>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <p className="text-center text-sm text-gray-400">Đang cập nhật dữ liệu...</p>
                      )}
                    </div>
                  ) : (
                    <div className="opacity-40 w-full text-center mt-4">
                      <p className="font-body text-sm text-gray-700">Nhập năm sinh để xem gợi ý</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="animate-in fade-in duration-300">
                  <p className="text-center text-[#715136] font-brand font-bold text-sm md:text-base mb-4">Bảng màu Préci</p>
                  <div className="grid grid-cols-3 md:grid-cols-3 gap-3">
                    {COLORS.map(c => (
                      <button
                        key={c.id}
                        onClick={() => setCustomization(prev => ({ ...prev, color: c.id }))}
                        className={`aspect-square rounded-xl border-2 flex flex-col items-center justify-center gap-1 transition-all p-1 group ${customization.color === c.id ? 'border-[#715136] bg-white shadow-md' : 'border-transparent hover:bg-white/60 hover:shadow-sm'}`}
                      >
                        <div className="w-8 h-8 rounded-full shadow-inner border border-black/5 group-hover:scale-110 transition-transform" style={{ backgroundColor: c.hex }} />
                        <span className="text-[11px] md:text-[13px] text-gray-600 text-center leading-tight line-clamp-2 font-body font-bold">{c.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )
      case 'addons':
        return (
          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 gap-2">
              <button
                onClick={() => setCustomization(prev => ({ ...prev, base: 'none' }))}
                className={`p-3 md:p-4 rounded-lg border text-left text-sm md:text-base font-body ${customization.base === 'none' ? 'border-[#715136] bg-[#715136]/5' : 'border-gray-200'}`}
              >
                🚫 Không dùng đế
              </button>
              {BASE_OPTIONS.map(b => (
                <button
                  key={b.id}
                  onClick={() => setCustomization(prev => ({ ...prev, base: b.id }))}
                  className={`p-3 md:p-4 rounded-lg border text-left flex justify-between items-center ${customization.base === b.id ? 'border-[#715136] bg-[#715136]/5' : 'border-gray-200 hover:bg-white'}`}
                >
                  <span className="font-body font-bold text-sm md:text-base">{b.icon} {b.label}</span>
                  <span className="text-xs md:text-sm text-gray-500">+{b.price.toLocaleString()}đ</span>
                </button>
              ))}
            </div>

            {customization.base !== 'none' && (
              <div className="border-t border-dashed border-[#E5E0D8] pt-4 animate-in slide-in-from-top-2">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm md:text-base font-body font-bold uppercase text-[#715136] flex items-center gap-2">
                    <span>✨</span> Khắc tên lên đế
                  </label>
                  <span className="text-xs md:text-sm text-gray-500">+45.000đ</span>
                </div>
                <input
                  type="text"
                  maxLength={25}
                  placeholder="Nhập tên muốn khắc (Tối đa 25 ký tự)"
                  value={tempEngraving}
                  onChange={(e) => setTempEngraving(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E0D8] bg-white focus:outline-none focus:border-[#715136] text-base text-center font-body text-[#715136]"
                />
                {tempEngraving && (
                  <p className="text-[10px] text-center mt-2 text-gray-400 italic">
                    Tên "{tempEngraving}" sẽ được khắc kim loại sang trọng
                  </p>
                )}
              </div>
            )}
          </div>
        )

      case 'message':
        return (
          <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-[#F2EFE9] p-3 md:p-4 rounded-xl border border-[#E5E0D8]">
              <p className="text-center font-brand font-bold text-[#715136] mb-3 md:mb-4 text-sm md:text-base">Thẻ thông điệp đính kèm</p>

              <div className="space-y-2 md:space-y-3">
                <div
                  onClick={() => setCustomization(prev => ({ ...prev, messageType: 'none', sticker: false }))}
                  className={`flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all ${customization.messageType === 'none'
                    ? 'border-[#715136] bg-white shadow-sm'
                    : 'border-transparent hover:bg-white/50'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${customization.messageType === 'none' ? 'bg-[#DCAE96]' : 'bg-gray-200'}`}>
                      <span className="text-lg text-gray-500">✕</span>
                    </div>
                    <span className="font-body text-sm md:text-base text-[#715136]">Không gửi thông điệp</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${customization.messageType === 'none' ? 'bg-[#715136] border-[#715136]' : 'border-gray-400'}`}>
                    {customization.messageType === 'none' && <Check size={12} className="text-white" />}
                  </div>
                </div>

                <div
                  onClick={() => setCustomization(prev => ({ ...prev, messageType: 'text', sticker: true }))}
                  className={`flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all ${customization.messageType === 'text'
                    ? 'border-[#715136] bg-white shadow-sm'
                    : 'border-transparent hover:bg-white/50'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${customization.messageType === 'text' ? 'bg-[#DCAE96]' : 'bg-gray-200'}`}>
                      <span className="text-lg">💌</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-body font-bold text-sm md:text-base text-[#715136]">In lời nhắn lên thẻ</span>
                      <span className="text-xs text-gray-500">(+50.000đ)</span>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${customization.messageType === 'text' ? 'bg-[#715136] border-[#715136]' : 'border-gray-400'}`}>
                    {customization.messageType === 'text' && <Check size={12} className="text-white" />}
                  </div>
                </div>

                <div
                  onClick={() => setCustomization(prev => ({ ...prev, messageType: 'voice', sticker: true }))}
                  className={`flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all ${customization.messageType === 'voice'
                    ? 'border-[#715136] bg-white shadow-sm'
                    : 'border-transparent hover:bg-white/50'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${customization.messageType === 'voice' ? 'bg-[#DCAE96]' : 'bg-gray-200'}`}>
                      <span className="text-lg">🎙️</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-body font-bold text-sm md:text-base text-[#715136]">In mã quét giọng nói</span>
                      <span className="text-xs text-gray-500">(+50.000đ)</span>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${customization.messageType === 'voice' ? 'bg-[#715136] border-[#715136]' : 'border-gray-400'}`}>
                    {customization.messageType === 'voice' && <Check size={12} className="text-white" />}
                  </div>
                </div>
              </div>
            </div>

            {customization.messageType === 'text' && (
              <div>
                <p className="text-sm md:text-base font-body font-bold text-primary uppercase mb-2 ml-1">Nội dung lời nhắn</p>
                <textarea
                  value={customization.message}
                  onChange={e => setCustomization(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Nhập lời nhắn gửi đến người nhận (Tối đa 50 ký tự)..."
                  maxLength={50}
                  className="w-full p-4 rounded-xl border border-[#E5E0D8] bg-white focus:outline-none focus:border-[#715136] min-h-[120px] text-base resize-none shadow-inner font-body text-[#715136]"
                />
                <div className="flex justify-between items-center mt-2 px-1">
                  <span className="text-xs text-gray-400 italic">Lời nhắn của bạn sẽ được <p> khắc lên thẻ thông điệp </p>
                  </span>
                  <span className="text-xs text-gray-400">{customization.message.length}/50 ký tự</span>
                </div>
              </div>
            )
            }

            {
              customization.messageType === 'voice' && (
                <div className="flex flex-col items-center justify-center py-2 md:py-4">

                  {!audioUrl ? (
                    <>
                      <p className="font-body text-[#715136] italic mb-4 md:mb-6 text-sm md:text-base">
                        {isRecording ? `Đang ghi âm... (${formatTime(recordingTime)})` : "Bắt đầu ghi âm lời chúc (dưới 30s)"}
                      </p>

                      <button
                        onClick={isRecording ? stopRecording : startRecording}
                        className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all shadow-lg ${isRecording
                          ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                          : 'bg-[#715136] hover:bg-[#8C7E72]'
                          }`}
                      >
                        {isRecording ? <Square size={24} className="text-white fill-white" /> : <Mic size={28} className="text-white" />}
                      </button>

                      {isRecording && (
                        <div className="flex gap-1 h-8 items-center mt-6">
                          {[...Array(10)].map((_, i) => (
                            <div key={i} className="w-1 bg-[#DCAE96] animate-bounce" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }}></div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="w-full flex flex-col items-center">
                      <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                        <button
                          onClick={deleteRecording}
                          className="px-3 py-2 bg-[#EFEBE7] text-[#715136] rounded-lg text-xs md:text-sm font-bold hover:bg-gray-200 flex items-center gap-2"
                        >
                          <Trash2 size={14} /> Xóa
                        </button>

                        <button
                          onClick={togglePlayback}
                          className="w-12 h-12 md:w-14 md:h-14 bg-[#715136] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform"
                        >
                          {isPlaying ? <Pause size={20} fill="white" /> : <Play size={20} fill="white" className="ml-1" />}
                        </button>

                        <button
                          onClick={handleFinishAndUpload}
                          disabled={isUploading || qrConfirmed}
                          className={`px-3 py-2 rounded-lg text-xs md:text-sm font-bold flex items-center gap-2 transition-all ${qrConfirmed
                            ? 'bg-gray-400 cursor-not-allowed text-white'
                            : 'bg-[#7B8B4C] text-white hover:bg-[#6A7A40] shadow-md'
                            }`}
                        >
                          {isUploading ? (
                            <>⏳ Đang tạo mã...</>
                          ) : (
                            <><Check size={14} /> {qrConfirmed ? "Đã in lên nến" : "Hoàn thành"}</>
                          )}
                        </button>
                      </div>

                      <div className="text-center w-full">
                        <p className="text-xs md:text-sm font-bold text-[#715136] uppercase tracking-widest mb-2">Mã in trên thẻ</p>
                        <div className="flex flex-row items-center justify-center gap-4 bg-white p-3 rounded-lg border border-[#E5E0D8]">
                          <div className="flex flex-col items-center">
                            <div className="p-1 bg-white">
                              <QRCode
                                key={audioUrl}
                                value={audioUrl || "https://preci.vn"}
                                size={60}
                                fgColor="#715136"
                              />
                            </div>
                            <span className="text-[9px] text-gray-400 mt-1">Quét để nghe</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  )}
                </div>
              )
            }
          </div >
        )

      case 'box':
        return (
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setCustomization(prev => ({ ...prev, box: 'none' }))}
              className={`aspect-square rounded-xl border-2 flex items-center justify-center font-body text-gray-400 bg-white text-sm md:text-base ${customization.box === 'none' ? 'border-[#715136] text-[#715136]' : 'border-dashed border-gray-300'}`}
            >
              Không hộp
            </button>

            {GIFT_BOXES.map(box => (
              <button
                key={box.id}
                onClick={() => setCustomization(prev => ({ ...prev, box: box.id }))}
                className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${customization.box === box.id ? 'border-[#715136] ring-2 ring-[#715136]/20' : 'border-transparent hover:border-gray-300'}`}
              >
                <img
                  src={box.image}
                  alt="Hộp quà"
                  className="w-full h-full object-cover"
                />
                {customization.box === box.id && (
                  <div className="absolute top-1 right-1 w-5 h-5 bg-[#715136] rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-white text-[10px]">✓</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        )
      default: return null
    }
  }

  // --- TÍNH GIÁ ---
  const totalPrice = useMemo(() => {
    let price = PRICES.base
    if (customization.sticker) price += PRICES.sticker
    if (customization.box !== 'none') price += PRICES.box

    if (customization.base !== 'none') {
      const selectedBase = BASE_OPTIONS.find(b => b.id === customization.base)
      if (selectedBase) price += selectedBase.price
      if (customization.engraving.length > 0) price += PRICES.engraving
    }
    return price * quantity
  }, [customization, quantity])

  const handleAddToCart = (redirect = false) => {
    const finalPrice = totalPrice
    const item = {
      productId,
      name: `Nến ${SHAPES.find(s => s.id === customization.shape)?.label || 'Custom'}`,
      customization,
      price: finalPrice,
      qty: quantity,
      createdAt: Date.now(),
    }

    try {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]')
      cart.push(item)
      localStorage.setItem('cart', JSON.stringify(cart))
      window.dispatchEvent(new Event('cart-updated'))

      if (redirect) router.push('/checkout')
      else alert('Đã thêm vào giỏ hàng!')
    } catch (error) {
      console.error('Lỗi lưu giỏ hàng:', error);
      alert('Có lỗi xảy ra, vui lòng thử lại.');
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans pb-32 lg:pb-0">
      {/* HEADER */}
      <div className="bg-[#333333] text-white py-4 md:py-8 px-4 md:px-9 text-center">
        <h1 className="text-3xl md:text-4xl font-brand mb-1 md:mb-2">Tùy chỉnh nến thơm</h1>
        <p className="text-xs md:text-base opacity-80 font-body">Một phiên bản độc nhất mà bạn muốn</p>
      </div>

      {/* MAIN CONTAINER */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-0 md:px-4 py-0 md:py-12">
        <div className="flex flex-col-reverse lg:flex-row gap-0 lg:gap-12 h-auto lg:h-[600px]">

          {/* 1. KHU VỰC ĐIỀU KHIỂN (CONTROLS) - NẰM DƯỚI Ở MOBILE, TRÁI Ở PC */}
          <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-[450px] flex-shrink-0 px-4 py-6 md:p-0">
            {/* NAV STEPS - MOBILE DẠNG SCROLL NGANG */}
            {/* NAV STEPS: Mobile (Ngang) - Desktop (Dọc y hệt cũ) */}
            <div className="flex flex-row lg:flex-col gap-4 lg:gap-6 w-full lg:w-24 flex-shrink-0 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 lg:pt-4 custom-scrollbar">
              {STEPS.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(index)}
                  className={`text-left text-sm lg:text-base font-body font-bold uppercase transition-colors relative pb-1 whitespace-nowrap flex-shrink-0 
                    ${index === currentStep
                      ? 'text-[#715136] border-b-2 border-[#715136]'
                      : 'text-gray-400 hover:text-gray-600'
                    }`}
                >
                  {step.label}
                </button>
              ))}
            </div>

            {/* OPTIONS CARD */}
            <div className="flex-1 flex flex-col w-full">
              <div className="bg-[#F2EFE9] rounded-2xl md:rounded-3xl p-4 md:p-6 flex-1 shadow-sm border border-[#E5E0D8] relative">
                <h3 className="text-center font-body uppercase font-bold italic text-[#715136] mb-4 md:mb-6 text-base md:text-lg">{STEPS[currentStep].title}</h3>
                <div className="custom-scrollbar overflow-y-auto max-h-[350px]">
                  {renderStepContent()}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-center gap-4 mt-4 md:mt-6 mb-20 lg:mb-0">
                <button onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))} disabled={currentStep === 0} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 disabled:opacity-30 transition-all">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={() => setCurrentStep(prev => Math.min(STEPS.length - 1, prev + 1))} disabled={currentStep === STEPS.length - 1} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 disabled:opacity-30 transition-all">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* 2. KHU VỰC HIỂN THỊ (3D) - NẰM TRÊN Ở MOBILE, PHẢI Ở PC */}
          <div className="flex-1 flex flex-col gap-6 w-full">
            {/* KHUNG 3D: CỐ ĐỊNH CHIỀU CAO TRÊN MOBILE ĐỂ KHÔNG BỊ CẮT */}
            <div className="w-full bg-[#FFFDFA] relative overflow-hidden border-b md:border border-[#f0f0f0] md:rounded-xl h-[45vh] lg:h-auto lg:min-h-[300px] lg:flex-1">
              <Candle3D
                shape={customization.shape}
                color={customization.color}
                sticker={customization.sticker}
                base={customization.base}
                message={
                  customization.messageType === 'voice'
                    ? (qrConfirmed ? (audioUrl || 'https://preci.vn') : '')
                    : customization.message
                }
                engraving={customization.engraving}
                isQRCode={customization.messageType === 'voice' && qrConfirmed}
              />
              {/* Note nhỏ nhắc zoom */}
              <div className="absolute bottom-2 left-0 w-full text-center lg:hidden pointer-events-none">
                <p className="text-[10px] text-gray-400 bg-white/50 backdrop-blur-sm px-2 py-1 inline-block rounded-full">Dùng 1 ngón tay để xoay, 2 ngón để zoom</p>
              </div>
            </div>

            {/* DESKTOP PRICE BAR (Ẩn trên Mobile) */}
            <div className="hidden lg:flex bg-white border border-[#715136] rounded-xl p-4 items-center justify-between gap-4 shadow-lg">
              <div className="text-left border-r border-gray-200 pr-6 mr-2">
                <p className="text-base text-gray-500 font-body">Tổng chi phí</p>
                <p className="text-2xl font-body font-bold text-[#715136]">
                  {totalPrice.toLocaleString('vi-VN')}đ
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-base font-body italic text-gray-600">Số lượng:</span>
                <div className="flex items-center gap-3">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-6 h-6 flex items-center justify-center hover:text-[#715136]"><Minus size={16} /></button>
                  <span className="w-6 text-center font-bold bg-[#715136] text-white rounded-full text-base h-6 flex items-center justify-center">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} className="w-6 h-6 flex items-center justify-center hover:text-[#715136]"><Plus size={16} /></button>
                </div>
              </div>

              <div className="flex gap-2">
                <button onClick={() => handleAddToCart(true)} className="px-6 py-3 bg-primary text-white font-body font-bold uppercase rounded-lg hover:bg-[#8C7E72] transition-colors shadow-sm text-base tracking-wide">
                  Mua ngay
                </button>
                <button onClick={() => handleAddToCart(false)} className="px-6 py-3 bg-[#6B8E23] text-white font-body font-bold uppercase rounded-lg hover:bg-[#556B2F] transition-colors shadow-sm text-base tracking-wide flex items-center justify-center">
                  <span className="flex flex-col items-center leading-6">
                    <span>Thêm vào</span>
                    <span>giỏ hàng</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE STICKY FOOTER (Chỉ hiện trên Mobile) */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-[#715136] p-4 z-50 lg:hidden shadow-[0_-5px_15px_rgba(0,0,0,0.1)] flex flex-col gap-3 pb-6 safe-area-bottom">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500">Tổng cộng:</p>
            <p className="text-xl font-bold text-[#715136]">{totalPrice.toLocaleString('vi-VN')}đ</p>
          </div>
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-8 h-8 flex items-center justify-center text-gray-600"><Minus size={14} /></button>
            <span className="w-8 text-center font-bold text-sm">{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)} className="w-8 h-8 flex items-center justify-center text-gray-600"><Plus size={14} /></button>
          </div>
        </div>
        <div className="flex gap-2 w-full">
          <button onClick={() => handleAddToCart(true)} className="flex-1 py-3 bg-primary text-white font-bold uppercase rounded-lg text-sm shadow-sm">
            Mua ngay
          </button>
          <button onClick={() => handleAddToCart(false)} className="flex-1 py-3 bg-[#6B8E23] text-white font-bold uppercase rounded-lg text-sm shadow-sm">
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    </div>
  )
}