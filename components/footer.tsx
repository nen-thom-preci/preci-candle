import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border font-[\'Cormorant Garamond\']">
      <div className="max-w-7xl mx-auto px-4 sm:px-14 lg:px-18 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center">
              <img
                src={`/assets/Logo.png`}
                alt="Préci"
                className="w-7 h-7 object-cover mb-4"
              />
              <h3 className="text-2xl ml-2 mb-3 font-brand font-bold text-primary">Préci</h3>
            </Link>
            <p className="font-heading1 text-sm leading-relaxed">
              Préci (trong tiếng Pháp là précieux) nghĩa là trân quý. Việc lược bỏ hậu tố nhằm thể hiện tinh thần tinh tế, tối giản - đúng với định hướng của thương hiệu - nhưng vẫn giữ trọn tinh thần cốt lõi của từ gốc. Tên gọi này xuất phát dựa trên niềm tin rằng mỗi mối quan hệ đều có những giá trị cảm xúc riêng biệt, vì vậy điều này cần được giữ gìn một cách trân trọng.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl mb-3 font-brand font-bold text-primary tracking-wide">Liên kết</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="font-heading1 hover:text-primary transition-colors">Về Préci</Link></li>
              <li><Link href="/products" className="font-heading1 hover:text-primary transition-colors">Sản phẩm</Link></li>
              <li><Link href="/blog" className="font-heading1 hover:text-primary transition-colors">Cẩm nang</Link></li>
              <li><Link href="/contact" className="font-heading1 hover:text-primary transition-colors">Liên hệ</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-2xl mb-3 font-brand font-bold text-primary tracking-wide">Liên hệ</h4>
            <ul className="space-y-2.5 font-heading1 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+84 (0)123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>preci.nenthom@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>TP.HCM, Việt Nam</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>&copy; 2024 Préci. Bảo lưu tất cả các quyền.</p>
            <div className="flex gap-6">
              <Link href="/policies" className="hover:text-primary transition-colors">Chính sách bảo mật</Link>
              <Link href="/policies" className="hover:text-primary transition-colors">Điều khoản sử dụng</Link>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}
