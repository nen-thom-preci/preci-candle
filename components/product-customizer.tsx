'use client'

import QRCode from "react-qr-code";
import { useState, useEffect, useRef } from 'react'
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
// 1. KHU VỰC HẰNG SỐ (ĐƯA RA NGOÀI COMPONENT)
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

// Component Icon Hình Dáng (Tách ra để code gọn hơn)
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
  // Bảng tra cứu chính xác
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
  const [tempEngraving, setTempEngraving] = useState('') // Biến tạm cho Input

  // State Phong Thủy
  const [colorMode, setColorMode] = useState<'fengshui' | 'custom'>('fengshui');
  const [birthYear, setBirthYear] = useState<string>('');

  const [customization, setCustomization] = useState({
    shape: 'round',
    color: 'beige',
    sticker: false, // <--- SỬA THÀNH FALSE (Mặc định không hiện thẻ)
    base: 'none',
    engraving: '',
    message: '',
    box: 'none',
    messageType: 'none', // <--- Mặc định là 'none'
    voiceData: null as Blob | null,
  })

  // --- STATE CHO GHI ÂM ---
  const [isRecording, setIsRecording] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  // THÊM DÒNG NÀY: State để xác nhận đã bấm nút Hoàn thành hay chưa
  const [qrConfirmed, setQrConfirmed] = useState(false)
  // Ref để quản lý MediaRecorder và Timer
  // Thêm <any> vào để máy tính cho phép chứa bất kỳ thứ gì (Recorder, Audio, Timer...)
  const mediaRecorderRef = useRef<any>(null)
  const timerRef = useRef<any>(null)
  const audioRef = useRef<any>(null)

  // Hàm định dạng thời gian (00:00)
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  // Xử lý Bắt đầu ghi âm
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
        // Lưu vào customization để gửi đi
        setCustomization(prev => ({ ...prev, voiceData: blob }))
      }

      mediaRecorder.start()
      setIsRecording(true)

      // Bắt đầu đếm giờ
      setRecordingTime(0)
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => {
          if (prev >= 30) { // Giới hạn 30s
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

  // Xử lý Dừng ghi âm
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }

  // Xử lý Phát/Tạm dừng ghi âm
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

  // Xử lý Xóa ghi âm
  const deleteRecording = () => {
    // 1. Dọn sạch biến hiển thị
    setAudioUrl(null)
    setIsPlaying(false)
    setRecordingTime(0)
    setQrConfirmed(false) // Ẩn QR code đi

    // 2. QUAN TRỌNG: Dọn sạch dữ liệu file trong Customization
    setCustomization(prev => ({ ...prev, voiceData: null }))

    // 3. QUAN TRỌNG: Hủy bộ nhớ trình phát nhạc (Fix lỗi nghe lại bài cũ)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.src = "" // Ngắt source
      audioRef.current = null   // Xóa hoàn toàn khỏi bộ nhớ
    }
  }

  const [isUploading, setIsUploading] = useState(false); // Trạng thái đang tải lên

  // --- SỬA LỖI DEBOUNCE ---
  // Khi người dùng gõ, chỉ update tempEngraving.
  // Sau 500ms không gõ nữa, mới update customization.engraving để 3D render lại.
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
    // Luôn lấy file từ state mới nhất (customization.voiceData)
    if (!customization.voiceData) {
      alert("Chưa có file ghi âm!");
      return;
    }

    setIsUploading(true);

    const formData = new FormData();
    // Đảm bảo dùng customization.voiceData (không dùng biến audioBlob cũ nào khác)
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
          <div className="grid grid-cols-3 gap-3">
            {SHAPES.map(s => (
              <button
                key={s.id}
                onClick={() => setCustomization(prev => ({ ...prev, shape: s.id }))}
                className={`aspect-square rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${customization.shape === s.id
                  ? 'border-[#715136] bg-[#715136]/10 text-[#715136]'
                  : 'border-[#E5E0D8] text-gray-500 hover:border-[#715136]/50'
                  }`}
              >
                <div className="mb-2 transform scale-110">
                  <ShapeIcon id={s.id} />
                </div>
                <span className="text-xs font-bold">{s.label}</span>
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
            <div className="flex justify-center mb-6">
              <div className="flex bg-[#EFEBE7] p-1 rounded-full shadow-inner">
                <button
                  onClick={() => setColorMode('fengshui')}
                  className={`px-5 py-2 rounded-full text-xs font-bold font-brand transition-all duration-300 ${colorMode === 'fengshui' ? 'bg-[#7B8B4C] text-white shadow-sm' : 'text-[#8C7E72] hover:text-[#715136]'}`}
                >
                  Chọn theo phong thủy
                </button>
                <button
                  onClick={() => setColorMode('custom')}
                  className={`px-5 py-2 rounded-full text-xs font-bold font-brand transition-all duration-300 ${colorMode === 'custom' ? 'bg-[#7B8B4C] text-white shadow-sm' : 'text-[#8C7E72] hover:text-[#715136]'}`}
                >
                  Tùy chọn
                </button>
              </div>
            </div>

            {/* NỘI DUNG MÀU */}
            <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar">
              {colorMode === 'fengshui' ? (
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-[200px] text-center mb-6">
                    <label className="block text-[#715136] font-brand font-bold mb-2 text-sm">Nhập năm sinh của bạn</label>
                    <input
                      type="number"
                      placeholder="VD: 1997"
                      value={birthYear}
                      onChange={(e) => setBirthYear(e.target.value.slice(0, 4))}
                      className="w-full text-center bg-white border border-[#C4B5A5] rounded-lg focus:border-[#715136] focus:ring-1 focus:ring-[#715136] outline-none py-2 font-body text-lg text-[#715136] placeholder:text-gray-300 transition-all shadow-sm"
                    />
                    {userElement && (
                      <div className="mt-3 animate-in slide-in-from-top-2">
                        <span className="text-xs text-gray-500 font-brand">Bạn thuộc mệnh</span>
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
                        <p className="text-center text-[#715136] font-brand italic text-sm">Màu sắc hợp mệnh</p>
                        <div className="h-[1px] w-8 bg-[#C4B5A5]"></div>
                      </div>
                      {suggestedColors.length > 0 ? (
                        <div className="grid grid-cols-3 gap-3">
                          {suggestedColors.map(c => (
                            <button
                              key={c.id}
                              onClick={() => setCustomization(prev => ({ ...prev, color: c.id }))}
                              className={`aspect-square rounded-xl border-2 flex flex-col items-center justify-center gap-1 transition-all p-1 group ${customization.color === c.id ? 'border-[#7B8B4C] bg-white shadow-md ring-1 ring-[#7B8B4C] ring-offset-1' : 'border-transparent hover:bg-white/60 hover:shadow-sm'}`}
                            >
                              <div className="w-8 h-8 rounded-full shadow-inner border border-black/5 group-hover:scale-110 transition-transform" style={{ backgroundColor: c.hex }} />
                              <span className="text-[10px] font-medium text-gray-600 text-center leading-tight line-clamp-2 font-brand">{c.label}</span>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <p className="text-center text-xs text-gray-400">Đang cập nhật dữ liệu...</p>
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
                  <p className="text-center text-[#715136] font-brand font-bold text-sm mb-4">Bảng màu Préci</p>
                  <div className="grid grid-cols-3 gap-3">
                    {COLORS.map(c => (
                      <button
                        key={c.id}
                        onClick={() => setCustomization(prev => ({ ...prev, color: c.id }))}
                        className={`aspect-square rounded-xl border-2 flex flex-col items-center justify-center gap-1 transition-all p-1 group ${customization.color === c.id ? 'border-[#715136] bg-white shadow-md' : 'border-transparent hover:bg-white/60 hover:shadow-sm'}`}
                      >
                        <div className="w-8 h-8 rounded-full shadow-inner border border-black/5 group-hover:scale-110 transition-transform" style={{ backgroundColor: c.hex }} />
                        <span className="text-[13px] text-gray-600 text-center leading-tight line-clamp-2 font-body font-bold">{c.label}</span>
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
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-2">
              <button
                onClick={() => setCustomization(prev => ({ ...prev, base: 'none' }))}
                className={`p-3 rounded-lg border text-left text-sm font-body ${customization.base === 'none' ? 'border-[#715136] bg-[#715136]/5' : 'border-gray-200'}`}
              >
                🚫 Không dùng đế
              </button>
              {BASE_OPTIONS.map(b => (
                <button
                  key={b.id}
                  onClick={() => setCustomization(prev => ({ ...prev, base: b.id }))}
                  className={`p-3 rounded-lg border text-left flex justify-between items-center ${customization.base === b.id ? 'border-[#715136] bg-[#715136]/5' : 'border-gray-200 hover:bg-white'}`}
                >
                  <span className="font-body font-bold text-sm">{b.icon} {b.label}</span>
                  <span className="text-xs text-gray-500">+{b.price.toLocaleString()}đ</span>
                </button>
              ))}
            </div>

            {customization.base !== 'none' && (
              <div className="border-t border-dashed border-[#E5E0D8] pt-4 animate-in slide-in-from-top-2">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-[#715136] flex items-center gap-2">
                    <span>✨</span> Khắc tên lên đế
                  </label>
                  <span className="text-xs text-gray-500">+45.000đ</span>
                </div>
                {/* SỬA LỖI: Input dùng tempEngraving, không dùng customization.engraving trực tiếp */}
                <input
                  type="text"
                  maxLength={25}
                  placeholder="Nhập tên muốn khắc (Tối đa 25 ký tự)"
                  value={tempEngraving}
                  onChange={(e) => setTempEngraving(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E0D8] bg-white focus:outline-none focus:border-[#715136] text-sm text-center font-body text-[#715136]"
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
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* 1. KHUNG CHỌN LOẠI THÔNG ĐIỆP (Radio Group) */}
            <div className="bg-[#F2EFE9] p-4 rounded-xl border border-[#E5E0D8]">
              <p className="text-center font-brand font-bold text-[#715136] mb-4">Thẻ thông điệp đính kèm</p>

              <div className="space-y-3">
                <div className="space-y-3">
                  {/* --- LỰA CHỌN 1: KHÔNG DÙNG THẺ (Mới thêm) --- */}
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
                      <span className="font-body text-sm text-[#715136]">Không gửi thông điệp</span>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${customization.messageType === 'none' ? 'bg-[#715136] border-[#715136]' : 'border-gray-400'}`}>
                      {customization.messageType === 'none' && <Check size={12} className="text-white" />}
                    </div>
                  </div>

                  {/* --- LỰA CHỌN 2: TEXT (Giữ nguyên, chỉ đảm bảo sticker: true) --- */}
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
                      <span className="font-body font-bold text-sm text-[#715136]">In lời nhắn lên thẻ thiệp (+50.000đ)</span>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${customization.messageType === 'text' ? 'bg-[#715136] border-[#715136]' : 'border-gray-400'}`}>
                      {customization.messageType === 'text' && <Check size={12} className="text-white" />}
                    </div>
                  </div>

                  {/* --- LỰA CHỌN 3: VOICE (Giữ nguyên, chỉ đảm bảo sticker: true) --- */}
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
                      <span className="font-body font-bold text-sm text-[#715136]">In mã quét ra giọng nói (+100.000đ)</span>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${customization.messageType === 'voice' ? 'bg-[#715136] border-[#715136]' : 'border-gray-400'}`}>
                      {customization.messageType === 'voice' && <Check size={12} className="text-white" />}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. GIAO DIỆN TƯƠNG TÁC (Tùy theo Option chọn) */}

            {/* --- GIAO DIỆN VĂN BẢN --- */}
            {customization.messageType === 'text' && (
              <div>
                <p className="text-xs font-bold text-[#715136] uppercase mb-2 ml-1">Nội dung lời nhắn</p>
                <textarea
                  value={customization.message}
                  onChange={e => setCustomization(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Nhập lời nhắn gửi đến người nhận (Tối đa 50 ký tự)..."
                  maxLength={50}
                  className="w-full p-4 rounded-xl border border-[#E5E0D8] bg-white focus:outline-none focus:border-[#715136] min-h-[120px] text-sm resize-none shadow-inner font-brand text-[#715136]"
                />
                <div className="flex justify-between items-center mt-2 px-1">
                  <span className="text-xs text-gray-400 italic">Préci sẽ in đẹp đẽ lên thiệp cho bạn</span>
                  <span className="text-xs text-gray-400">{customization.message.length}/50 ký tự</span>
                </div>
              </div>
            )}

            {/* --- GIAO DIỆN GHI ÂM (VOICE) --- */}
            {customization.messageType === 'voice' && (
              <div className="flex flex-col items-center justify-center py-4">

                {/* Trạng thái 1: Chưa có file ghi âm */}
                {!audioUrl ? (
                  <>
                    <p className="font-brand text-[#715136] italic mb-6">
                      {isRecording ? `Đang ghi âm... (${formatTime(recordingTime)})` : "Bắt đầu ghi âm lời chúc (dưới 30s)"}
                    </p>

                    <button
                      onClick={isRecording ? stopRecording : startRecording}
                      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-lg ${isRecording
                        ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                        : 'bg-[#715136] hover:bg-[#8C7E72]'
                        }`}
                    >
                      {isRecording ? <Square size={24} className="text-white fill-white" /> : <Mic size={32} className="text-white" />}
                    </button>

                    {/* Hình sóng âm giả lập khi đang ghi */}
                    {isRecording && (
                      <div className="flex gap-1 h-8 items-center mt-6">
                        {[...Array(10)].map((_, i) => (
                          <div key={i} className="w-1 bg-[#DCAE96] animate-bounce" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }}></div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  // Trạng thái 2: Đã ghi âm xong (Review)
                  <div className="w-full flex flex-col items-center">

                    {/* Controls (Nghe lại / Xóa) */}
                    <div className="flex items-center gap-6 mb-8">
                      <button
                        onClick={deleteRecording}
                        className="px-4 py-2 bg-[#EFEBE7] text-[#715136] rounded-lg text-xs font-bold hover:bg-gray-200 flex items-center gap-2"
                      >
                        <Trash2 size={14} /> Xóa
                      </button>

                      <button
                        onClick={togglePlayback}
                        className="w-14 h-14 bg-[#715136] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform"
                      >
                        {isPlaying ? <Pause size={24} fill="white" /> : <Play size={24} fill="white" className="ml-1" />}
                      </button>

                      {/* NÚT HOÀN THÀNH MỚI */}
                      <button
                        onClick={handleFinishAndUpload} // <--- GỌI HÀM UPLOAD
                        disabled={isUploading || qrConfirmed} // Khóa nút khi đang tải hoặc đã xong
                        className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all ${qrConfirmed
                          ? 'bg-gray-400 cursor-not-allowed text-white'
                          : 'bg-[#7B8B4C] text-white hover:bg-[#6A7A40] shadow-md'
                          }`}
                      >
                        {isUploading ? (
                          <>⏳ Đang tạo mã...</> // Hiển thị khi đang upload
                        ) : (
                          <><Check size={14} /> {qrConfirmed ? "Đã in lên nến" : "Hoàn thành"}</>
                        )}
                      </button>
                    </div>

                    {/* PHẦN HIỂN THỊ MÃ QR */}
                    <div className="text-center w-full">
                      <p className="text-xs font-bold text-[#715136] uppercase tracking-widest mb-2">Mã in trên thẻ</p>

                      <div className="flex flex-row items-center justify-center gap-4 bg-white p-3 rounded-lg border border-[#E5E0D8]">

                        {/* 1. MÃ QR */}
                        <div className="flex flex-col items-center">
                          <div className="p-1 bg-white">
                            <QRCode
                              key={audioUrl} // <--- THÊM DÒNG NÀY (Bí quyết để fix lỗi cache hiển thị)
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
            )}

          </div>
        )

      case 'box':
        return (
          <div className="grid grid-cols-3 gap-3">
            {/* Nút "Không hộp" - GIỮ NGUYÊN */}
            <button
              onClick={() => setCustomization(prev => ({ ...prev, box: 'none' }))}
              className={`aspect-square rounded-xl border-2 flex items-center justify-center font-body text-gray-400 bg-white ${customization.box === 'none' ? 'border-[#715136] text-[#715136]' : 'border-dashed border-gray-300'}`}
            >
              Không hộp
            </button>

            {/* Các nút Hộp quà - SỬA ĐỔI ĐỂ HIỆN ẢNH */}
            {GIFT_BOXES.map(box => (
              <button
                key={box.id}
                onClick={() => setCustomization(prev => ({ ...prev, box: box.id }))}
                className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${customization.box === box.id ? 'border-[#715136] ring-2 ring-[#715136]/20' : 'border-transparent hover:border-gray-300'}`}
              >
                {/* Thay thế icon cũ bằng thẻ img */}
                <img
                  src={box.image}
                  alt="Hộp quà"
                  className="w-full h-full object-cover"
                />

                {/* Dấu tích chọn - Giữ nguyên */}
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
  const calculatePrice = () => {
    let price = PRICES.base
    if (customization.sticker) price += PRICES.sticker
    if (customization.box !== 'none') price += PRICES.box

    if (customization.base !== 'none') {
      const selectedBase = BASE_OPTIONS.find(b => b.id === customization.base)
      if (selectedBase) price += selectedBase.price
      // Tính phí khắc nếu có nội dung
      if (customization.engraving.length > 0) price += PRICES.engraving
    }
    return price * quantity
  }

  // --- XỬ LÝ CART ---
  const handleAddToCart = (redirect = false) => {
    const finalPrice = calculatePrice()
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
    <div className="min-h-screen bg-background flex flex-col font-sans">
      {/* HEADER */}
      <div className="bg-[#333333] text-white py-8 px-9 text-center">
        <h1 className="text-6xl md:text-4xl font-brand mb-2">Tùy chỉnh nến thơm</h1>
        <p className="text-sm md:text-base opacity-80 font-body">Một phiên bản độc nhất mà bạn muốn</p>
      </div>

      {/* MAIN */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-auto lg:h-[600px]">

          {/* CỘT TRÁI */}
          <div className="flex gap-6 lg:w-[450px] flex-shrink-0">
            {/* NAV */}
            <div className="flex flex-col gap-6 pt-4 w-24 flex-shrink-0">
              {STEPS.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(index)}
                  className={`text-left text-sm font-bold transition-colors relative pb-1 ${index === currentStep ? 'text-[#715136] border-b-2 border-[#715136]' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  {step.label}
                </button>
              ))}
            </div>

            {/* OPTIONS CARD */}
            <div className="flex-1 flex flex-col">
              <div className="bg-[#F2EFE9] rounded-3xl p-6 flex-1 shadow-sm border border-[#E5E0D8] relative">
                <h3 className="text-center font-body text-[#715136] mb-6 text-lg">{STEPS[currentStep].title}</h3>
                <div className="custom-scrollbar overflow-y-auto max-h-[350px]">
                  {renderStepContent()}
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-6">
                <button onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))} disabled={currentStep === 0} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 disabled:opacity-30 transition-all">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={() => setCurrentStep(prev => Math.min(STEPS.length - 1, prev + 1))} disabled={currentStep === STEPS.length - 1} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 disabled:opacity-30 transition-all">
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
                // LOGIC MỚI:
                // 1. Nếu là Voice và ĐÃ BẤM HOÀN THÀNH -> Truyền Link (để vẽ QR)
                // 2. Nếu là Voice và CHƯA HOÀN THÀNH -> Truyền rỗng (để hiện thẻ trắng logo Préci)
                // 3. Nếu là Text -> Truyền nội dung text
                message={
                  customization.messageType === 'voice'
                    ? (qrConfirmed ? (audioUrl || 'https://preci.vn') : '')
                    : customization.message
                }

                engraving={customization.engraving}

                // Chỉ vẽ QR khi đang chọn Voice VÀ đã bấm Hoàn thành
                isQRCode={customization.messageType === 'voice' && qrConfirmed}
              />
            </div>

            <div className="bg-white border border-[#715136] rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
              <div className="text-center md:text-left border-r border-gray-200 pr-6 mr-2">
                <p className="text-sm text-gray-500 font-body">Tổng chi phí</p>
                <p className="text-2xl font-body font-bold text-[#715136]">
                  {calculatePrice().toLocaleString()}đ
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm font-body italic text-gray-600">Số lượng:</span>
                <div className="flex items-center gap-3">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-6 h-6 flex items-center justify-center hover:text-[#715136]"><Minus size={16} /></button>
                  <span className="w-6 text-center font-bold bg-[#715136] text-white rounded-full text-sm h-6 flex items-center justify-center">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} className="w-6 h-6 flex items-center justify-center hover:text-[#715136]"><Plus size={16} /></button>
                </div>
              </div>

              <div className="flex gap-2 w-full md:w-auto">
                <button onClick={() => handleAddToCart(true)} className="flex-1 px-6 py-3 bg-[#B0A695] text-white font-body font-bold uppercase rounded-lg hover:bg-[#8C7E72] transition-colors shadow-sm text-sm uppercase tracking-wide">
                  Mua ngay
                </button>
                <button onClick={() => handleAddToCart(false)} className="flex-1 px-6 py-3 bg-[#6B8E23] text-white font-body font-bold uppercase rounded-lg hover:bg-[#556B2F] transition-colors shadow-sm text-sm uppercase tracking-wide">
                  Thêm vào <p /> giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}