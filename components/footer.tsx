import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary/90 text-background border-t border-background/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* 1. Brand Section (Chiếm 5/12 cột) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <img
                src="/assets/Logo.webp"
                alt="Préci Logo"
                className="w-14 h-14 bg-white object-cover rounded-full border border-[#E5E0D8] group-hover:opacity-90 transition-opacity"
              />
              <h3 className="text-5xl font-brand">Préci</h3>
            </Link>

            <p className="font-body text-base leading-relaxed max-w-md text-justify">
              Préci (trong tiếng Pháp là précieux) nghĩa là trân quý. Việc lược bỏ hậu tố nhằm thể hiện tinh thần tinh tế, tối giản nhưng vẫn giữ trọn cốt lõi. Chúng mình tin rằng mỗi mối quan hệ đều có giá trị cảm xúc riêng biệt cần được giữ gìn trân trọng.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 mt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61587106565203"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-[#E5E0D8] hover:bg-[#3a3a3a] hover:text-white hover:border-[#715136] transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/preci005"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-[#E5E0D8] hover:bg-[#3a3a3a] hover:text-white hover:border-[#715136] transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Spacer (Chiếm 1/12 cột để tạo khoảng trắng) */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* 2. Quick Links (Chiếm 3/12 cột) */}
          <div className="lg:col-span-3">
            <h4 className="font-brand text-[36px] tracking-[0.15em] mb-6">Liên kết</h4>
            <ul className="space-y-4">
              {['Về Préci', 'Sản phẩm', 'Cẩm nang', 'Liên hệ'].map((item, index) => {
                const links = ['/about', '/products', '/blog', '/contact'];
                return (
                  <li key={index}>
                    <Link
                      href={links[index]}
                      className="font-body hover:text-background/70 hover:translate-x-1 transition-all duration-300 inline-block"
                    >
                      {item}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* 3. Contact Info (Chiếm 3/12 cột) */}
          <div className="lg:col-span-3">
            <h4 className="font-brand text-[36px] tracking-[0.15em] mb-6">Liên hệ</h4>
            <ul className="space-y-4 font-body">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span>091 6446 265</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span className="break-all">preci.nenthom@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>279 Đường Nguyễn Tri Phương,<br />Phường Diên Hồng, TP.HCM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-body text-background/90">
          <p>&copy; {new Date().getFullYear()} Préci. All rights reserved.</p>
        </div>
      </div>
    </footer >
  )
}