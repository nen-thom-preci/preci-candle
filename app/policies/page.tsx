'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { useState } from 'react'
import { ChevronDown, HelpCircle, FileText, Phone } from 'lucide-react'

export default function PoliciesPage() {
  const [expandedPolicy, setExpandedPolicy] = useState('purchase')

  const policies = [
    {
      id: 'purchase',
      title: 'Chính Sách Mua Hàng',
      icon: <FileText size={20} />,
      sections: [
        {
          heading: 'Quyền Lợi Khách Hàng',
          content: 'Tất cả khách hàng của Préci có quyền mua sắm trên trang web của chúng mình. Bạn có thể tùy chỉnh sản phẩm theo ý thích và nhận tư vấn từ đội ngũ của chúng mình.',
        },
        {
          heading: 'Độ Tuổi',
          content: 'Khách hàng phải từ 18 tuổi trở lên hoặc có sự đồng ý của người đại diện pháp luật để mua hàng trên trang web này.',
        },
        {
          heading: 'Điều Kiện Sử Dụng',
          content: 'Bằng cách sử dụng trang web của Préci, bạn đồng ý tuân thủ tất cả các điều khoản và điều kiện được đề ra.',
        },
      ],
    },
    {
      id: 'payment',
      title: 'Chính Sách Thanh Toán',
      icon: <FileText size={20} />,
      sections: [
        {
          heading: 'Phương Thức Thanh Toán',
          content: 'Chúng mình chấp nhận thanh toán khi nhận hàng (COD), chuyển khoản ngân hàng và các ví điện tử như MoMo, Zalo Pay.',
        },
        {
          heading: 'Bảo Mật Thanh Toán',
          content: 'Tất cả các giao dịch thanh toán trên trang web của chúng mình được mã hóa và bảo vệ bằng công nghệ SSL 256-bit.',
        },
        {
          heading: 'Chính Sách Hoàn Tiền',
          content: 'Nếu thanh toán không thành công hoặc đơn hàng bị hủy hợp lệ, tiền của bạn sẽ được hoàn trả trong vòng 5-7 ngày làm việc.',
        },
      ],
    },
    {
      id: 'shipping',
      title: 'Vận Chuyển & Giao Hàng',
      icon: <FileText size={20} />,
      sections: [
        {
          heading: 'Phí Vận Chuyển',
          content: 'Miễn phí vận chuyển cho đơn hàng từ 300.000đ. Các đơn hàng nhỏ hơn sẽ áp dụng mức phí tiêu chuẩn 30.000đ.',
        },
        {
          heading: 'Thời Gian Giao Hàng',
          content: 'Khu vực TP.HCM: 1-2 ngày làm việc. Các tỉnh thành khác: 3-5 ngày làm việc tùy thuộc vào đơn vị vận chuyển.',
        },
        {
          heading: 'Theo Dõi Đơn Hàng',
          content: 'Mã vận đơn sẽ được gửi qua email ngay khi đơn hàng được bàn giao cho đơn vị vận chuyển.',
        },
      ],
    },
    {
      id: 'returns',
      title: 'Đổi Trả & Hoàn Tiền',
      icon: <FileText size={20} />,
      sections: [
        {
          heading: 'Điều Kiện Đổi Trả',
          content: 'Áp dụng đổi trả trong vòng 30 ngày nếu sản phẩm còn nguyên vẹn, chưa qua sử dụng và còn tem mác.',
        },
        {
          heading: 'Quy Trình',
          content: 'Liên hệ CSKH để đăng ký đổi trả. Sau khi chúng mình nhận và kiểm tra sản phẩm, quy trình hoàn tiền/đổi hàng sẽ được kích hoạt.',
        },
        {
          heading: 'Chi Phí',
          content: 'Miễn phí đổi trả nếu lỗi từ nhà sản xuất. Khách hàng chịu phí vận chuyển nếu đổi trả theo nhu cầu cá nhân.',
        },
      ],
    },
  ]

  const faqs = [
    {
      q: 'Làm thế nào để tùy chỉnh nến thơm?',
      a: 'Truy cập trang "Tạo Nến Của Bạn", chọn hình dáng, màu sắc, mùi hương và phụ kiện. Hệ thống 3D sẽ giúp bạn hình dung sản phẩm thực tế.',
    },
    {
      q: 'Nến thơm của Préci có an toàn không?',
      a: 'Tuyệt đối an toàn. Chúng mình sử dụng sáp thực vật (sáp đậu nành, sáp cọ) và tinh dầu thiên nhiên, không chứa Paraffin độc hại.',
    },
    {
      q: 'Thời gian cháy của nến là bao lâu?',
      a: 'Trung bình từ 40-60 giờ tùy kích cỡ nến. Hãy cắt bấc nến còn 0.5cm trước khi đốt để nến cháy bền hơn.',
    },
    {
      q: 'Tôi có thể yêu cầu giao hàng hỏa tốc không?',
      a: 'Có. Chúng mình hỗ trợ giao hỏa tốc 2H trong nội thành TP.HCM. Vui lòng chọn phương thức này khi thanh toán.',
    },
    {
      q: 'Làm thế nào để bảo quản nến?',
      a: 'Bảo quản nơi khô ráo, tránh ánh nắng trực tiếp. Đậy nắp sau khi sử dụng để giữ mùi hương được lâu nhất.',
    },
    {
      q: 'Quy trình xử lý đơn hàng mất bao lâu?',
      a: 'Đơn hàng có sẵn được xử lý trong 24h. Đơn hàng tùy chỉnh (Custom) cần 2-3 ngày để hoàn thiện thủ công.',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDFA]">
      <Header />

      <main className="flex-1">
        {/* 1. HERO SECTION - Đồng bộ style Banner */}
        <section className="relative w-full h-[400px] md:h-[450px] overflow-hidden flex items-center justify-center">
          <img
            src="/assets/banner-policy.webp"
            alt="Chính sách Préci"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Lớp phủ tối màu để chữ Trắng nổi bật */}
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-brand text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              Chính Sách
            </h1>
            <p className="font-body text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Chúng mình cam kết minh bạch trong mọi hoạt động để mang lại trải nghiệm mua sắm an tâm nhất cho bạn.
            </p>
          </div>
        </section>

        {/* 2. POLICIES ACCORDION - Style gọn gàng */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="space-y-6">
            {policies.map(policy => (
              <div
                key={policy.id}
                className={`group border rounded-xl overflow-hidden transition-all duration-300 ${expandedPolicy === policy.id
                  ? 'border-[#715136]/30 bg-white shadow-md'
                  : 'border-[#E5E0D8] bg-transparent hover:border-[#715136]/30'
                  }`}
              >
                <button
                  onClick={() => setExpandedPolicy(expandedPolicy === policy.id ? '' : policy.id)}
                  className="w-full px-6 py-5 flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-full transition-colors ${expandedPolicy === policy.id ? 'bg-[#715136] text-white' : 'bg-[#F2EFE9] text-[#715136]'}`}>
                      {policy.icon}
                    </div>
                    <h2 className={`text-xl font-brand font-bold text-left ${expandedPolicy === policy.id ? 'text-[#715136]' : 'text-gray-800'}`}>
                      {policy.title}
                    </h2>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-[#715136] transition-transform duration-300 ${expandedPolicy === policy.id ? 'transform rotate-180' : ''
                      }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedPolicy === policy.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="px-6 pb-8 pt-2 pl-[72px] space-y-8">
                    {policy.sections.map((section, idx) => (
                      <div key={idx} className="relative">
                        <div className="absolute -left-4 top-2 w-1.5 h-1.5 rounded-full bg-[#DCAE96]" />
                        <h3 className="font-brand text-lg font-bold text-[#715136] mb-2">
                          {section.heading}
                        </h3>
                        <p className="font-body text-gray-600 leading-relaxed text-base">
                          {section.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3. FAQ SECTION - Style Grid Card */}
          <div className="mt-24 pt-16 border-t border-[#E5E0D8]">
            <div className="text-center mb-16 md:mb-24">
              <p className="text-base font-body font-bold text-gray-500 uppercase tracking-widest mb-3">
                Giải đáp thắc mắc
              </p>
              <h2 className="text-4xl md:text-6xl font-brand text-primary uppercase">
                Câu hỏi thường gặp
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F9F7F5] border border-transparent hover:border-[#DCAE96]/50 rounded-xl p-6 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <HelpCircle size={20} className="text-[#DCAE96] mt-1 shrink-0" />
                    <h3 className="font-brand font-bold text-[#715136] text-lg leading-snug">
                      {item.q}
                    </h3>
                  </div>
                  <p className="font-body text-gray-600 text-base leading-relaxed pl-8">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. CONTACT CTA - Style tối giản */}
          <div className="mt-20 bg-[#715136] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            {/* Pattern trang trí mờ */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('/assets/noise.png')]"></div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-brand font-bold mb-4">
                Bạn vẫn còn thắc mắc?
              </h2>
              <p className="font-body text-white/80 mb-8 max-w-xl mx-auto">
                Đừng ngần ngại liên hệ. Đội ngũ Préci luôn sẵn sàng lắng nghe và hỗ trợ bạn tìm ra giải pháp tốt nhất.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#715136] font-body uppercase font-bold rounded-full hover:bg-[#F2EFE9] transition-all transform hover:-translate-y-1 shadow-lg"
                >
                  <Phone size={18} />
                  Liên Hệ Ngay
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}