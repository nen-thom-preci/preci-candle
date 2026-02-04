'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDFA]">
      <Header />

      <main className="flex-1">
        {/* Hero Section (Banner mới) */}
        <section className="relative w-full h-[400px] md:h-[400px] overflow-hidden">
          {/* 1. Ảnh nền*/}
          <img
            src="/assets/banner-about.webp"
            alt="Về Préci"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/20" />

          {/* 2. Nội dung chữ phủ lên trên (Căn trái) */}
          <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-center">
            <div className="md:max-w-xl">
              {/* TIÊU ĐỀ */}
              <h1 className="text-6xl md:text-8xl font-brand text-[#3a3a3a] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards">
                Liên hệ
              </h1>

              {/* ĐOẠN VĂN */}
              {/* Thêm delay-200 để nó hiện sau tiêu đề một chút cho đẹp */}
              <p className="font-body text-xl md:text-xl text-[#3a3a3a] italic leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-forwards">
                Chúng mình luôn sẵn sàng lắng nghe và hỗ trợ bạn
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-[#E5E0D8]">
              <h2 className="text-3xl font-brand font-bold text-[#715136] mb-2">Gửi Tin Nhắn</h2>
              <p className="font-body text-gray-500 mb-8">Để lại lời nhắn, chúng mình sẽ phản hồi sớm nhất có thể.</p>

              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#715136] mb-2 font-body">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-5 py-3 bg-[#F9F7F5] border border-[#E5E0D8] rounded-xl focus:outline-none focus:border-[#715136] focus:ring-1 focus:ring-[#715136] transition-all font-body text-[#3a3a3a]"
                    placeholder="Nhập tên của bạn"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#715136] mb-2 font-body">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-5 py-3 bg-[#F9F7F5] border border-[#E5E0D8] rounded-xl focus:outline-none focus:border-[#715136] focus:ring-1 focus:ring-[#715136] transition-all font-body text-[#3a3a3a]"
                    placeholder="hello@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-[#715136] mb-2 font-body">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-5 py-3 bg-[#F9F7F5] border border-[#E5E0D8] rounded-xl focus:outline-none focus:border-[#715136] focus:ring-1 focus:ring-[#715136] transition-all font-body text-[#3a3a3a]"
                    placeholder="+84 (0)123 456 789"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-[#715136] mb-2 font-body">
                    Tin nhắn
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-5 py-3 bg-[#F9F7F5] border border-[#E5E0D8] rounded-xl focus:outline-none focus:border-[#715136] focus:ring-1 focus:ring-[#715136] transition-all font-body text-[#3a3a3a] resize-none"
                    placeholder="Nhập tin nhắn của bạn..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#715136] text-white font-bold rounded-full hover:bg-[#5a402a] hover:shadow-lg transition-all transform hover:-translate-y-1 font-body uppercase tracking-wider text-sm mt-4"
                >
                  Gửi Tin Nhắn
                </button>
              </form>
            </div>

            {/* Right: Contact Info */}
            <div className="space-y-10 lg:pl-8 pt-4">
              <div>
                <h2 className="text-4xl font-brand font-bold text-[#715136] mb-4">Thông Tin Liên Hệ</h2>
                <p className="font-body text-gray-500 leading-relaxed text-lg">
                  Hãy ghé thăm cửa hàng của chúng mình để trải nghiệm trực tiếp mùi hương hoặc liên hệ qua các kênh dưới đây.
                </p>
              </div>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-[#F2EFE9] flex items-center justify-center text-[#715136] group-hover:bg-[#715136] group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="font-brand font-bold text-xl text-[#3a3a3a] mb-1">Điện Thoại</h3>
                    <p className="font-body text-gray-600">+84 (0)123 456 789</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-[#F2EFE9] flex items-center justify-center text-[#715136] group-hover:bg-[#715136] group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="font-brand font-bold text-xl text-[#3a3a3a] mb-1">Email</h3>
                    <p className="font-body text-gray-600">preci.nenthom@gmail.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-[#F2EFE9] flex items-center justify-center text-[#715136] group-hover:bg-[#715136] group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="font-brand font-bold text-xl text-[#3a3a3a] mb-1">Địa Chỉ</h3>
                    <p className="font-body text-gray-600 leading-relaxed">
                      279 Nguyễn Tri Phương<br />
                      Phường Diên Hồng, Thành phố Hồ Chí Minh<br />
                      Việt Nam
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-[#F2EFE9] flex items-center justify-center text-[#715136] group-hover:bg-[#715136] group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h3 className="font-brand font-bold text-xl text-[#3a3a3a] mb-1">Giờ Hoạt Động</h3>
                    <p className="font-body text-gray-600 leading-relaxed">
                      Thứ Hai - Thứ Sáu: 9:00 - 18:00<br />
                      Thứ Bảy: 10:00 - 17:00<br />
                      <span className="text-[#DCAE96] font-bold">Chủ Nhật: Đóng cửa</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview - Redesigned */}
        <section className="bg-[#F2EFE9] py-20 border-t border-[#E5E0D8]">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-12">
              <span className="text-[#DCAE96] font-bold tracking-widest text-sm uppercase mb-2 block">Hỗ trợ</span>
              <h2 className="text-3xl md:text-4xl font-brand font-bold text-[#715136]">Câu Hỏi Thường Gặp</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: 'Nến Préci làm từ chất liệu gì?',
                  a: 'Nến Préci được làm từ sáp thiên nhiên và tinh dầu hữu cơ, không chứa paraffin hay hóa chất độc hại.',
                },
                {
                  q: 'Thời gian giao hàng bao lâu?',
                  a: 'Chúng mình giao hàng trong vòng 2-3 ngày làm việc tại các khu vực chính. Phí giao hàng miễn phí cho đơn hàng từ 500.000 đ.',
                },
                {
                  q: 'Tôi có thể tùy chỉnh hương thơm không?',
                  a: 'Có! Chúng mình cung cấp dịch vụ tùy chỉnh nến thơm hoàn toàn. Bạn có thể chọn hình dáng, màu sắc, mùi hương và các tùy chọn khác.',
                },
                {
                  q: 'Chính sách hoàn trả như thế nào?',
                  a: 'Bạn có thể hoàn trả sản phẩm trong vòng 30 ngày nếu không hài lòng. Vui lòng xem Chính Sách Hoàn Trả để biết chi tiết.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-[#FFFDFA] border border-[#E5E0D8] rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-brand font-bold text-xl text-[#715136] mb-3">{item.q}</h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}