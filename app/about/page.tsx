import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Leaf, SlidersHorizontal, Sparkles } from 'lucide-react'
import {
  ShieldCheck,
  Globe,
  Feather,
  Recycle,
  HeartHandshake
} from 'lucide-react'

export default function AboutPage() {

  return (
    <div className="min-h-screen flex flex-col bg-background">
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
            <div className="flex flex-col items-center justify-center text-center text-white 
             bg-primary/50 backdrop-blur-[3px] border border-white/10 
             p-6 md:p-12 rounded-2xl md:rounded-3xl shadow-2xl max-w-[90%] md:max-w-3xl mx-auto
             animate-in fade-in zoom-in duration-1000"
            >
              <div className="md:max-w-xl">
                {/* TIÊU ĐỀ */}
                <h1 className="font-brand text-white text-4xl md:text-7xl mb-2 drop-shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards">
                  Về Préci
                </h1>
                <p className="font-body text-xl text-white italic drop-shadow-lg leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-forwards">
                  Préci được sinh ra từ đam mê tạo ra những sản phẩm độc bản dành cho những người thân yêu, trân quý của mình.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section - Đã cập nhật theo giao diện mới */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">

          {/* Tiêu đề căn giữa, font Brand */}
          <h2 className="text-4xl md:text-6xl font-brand text-primary uppercase mb-8 md:mb-10">
            Câu chuyện của Préci
          </h2>

          {/* Nội dung căn giữa, đổi sang font-body (Cormorant) cho bay bổng */}
          <div className="font-body space-y-6 text-lg md:text-xl text-gray-500 leading-relaxed">
            <p>
              Préci bắt đầu từ một ý tưởng đơn giản: tạo ra những nến thơm không chỉ đẹp mắt mà còn tốt cho sức khỏe và môi trường. Chúng mình tin rằng mỗi không gian sống đều xứng đáng có một mùi hương đặc biệt, một cảm giác riêng.
            </p>

            <p>
              Từ những bước đầu tiên, chúng mình đã cam kết không bao giờ thỏa hiệp về chất lượng. Mỗi nến Préci được tạo ra bằng cách kết hợp những kỹ thuật truyền thống với các nguyên liệu hiện đại, tạo nên một sản phẩm độc đáo.
            </p>

            <p>
              Hôm nay, Préci tự hào phục vụ hàng ngàn khách hàng yêu thích, những người tin tưởng chúng mình để mang đến vẻ đẹp và yên bình cho nhà của họ.
            </p>
          </div>

        </section>

        {/* Nguồn gốc */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

            {/* TIÊU ĐỀ CHÍNH */}
            <div className="text-center mb-16 md:mb-24">
              <p className="text-base font-body font-bold text-gray-500 uppercase tracking-widest mb-3">
                Sản phẩm chủ đạo
              </p>
              <h1 className="text-4xl md:text-6xl font-brand text-primary uppercase">
                Nến Thơm Từ Thiên Nhiên
              </h1>
            </div>

            {/* NỘI DUNG CHÍNH: GRID 3 CỘT */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

              {/* CỘT TRÁI (3 Mục) */}
              <div className="space-y-12 md:space-y-16">

                {/* Mục 1 */}
                <div className="flex gap-4 md:gap-6 items-start">
                  <div className="flex-shrink-0 mt-1">
                    {/* Icon giả lập Badge 100% Natural */}
                    <div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center text-primary">
                      <span className="font-bold text-[10px] text-center leading-tight">100%<br />NATURAL</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-body font-bold text-foreground mb-2">100% Sáp tự nhiên</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed text-justify">
                      Nến thơm được làm từ 100% sáp có nguồn gốc tự nhiên. Đặc biệt, thành phần sáp ong được khai thác từ trại nuôi ong bằng mật hoa nhãn tại Vĩnh Long, Việt Nam.
                    </p>
                  </div>
                </div>

                {/* Mục 2 */}
                <div className="flex gap-4 md:gap-6 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ShieldCheck size={48} strokeWidth={1.5} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-body font-bold text-foreground mb-2">Không độc hại</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed text-justify">
                      Nến thơm không tạo ra khói độc khi đốt, hương thơm nhẹ nhàng, là một liệu pháp thư giãn tinh thần hiệu quả.
                    </p>
                  </div>
                </div>

                {/* Mục 3 */}
                <div className="flex gap-4 md:gap-6 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Globe size={48} strokeWidth={1.5} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-body font-bold text-foreground mb-2">Hương thơm lành tính</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed text-justify">
                      Hương thơm được nhập khẩu từ những nhà hương uy tín hàng đầu thế giới, không chứa các chất gây ung thư, đầy đủ giấy tờ pháp lý.
                    </p>
                  </div>
                </div>

              </div>

              {/* CỘT GIỮA (Hình ảnh) */}
              <div className="flex justify-center items-center py-8 lg:py-0">
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  <img
                    src="/assets/nen-tach-nen.webp"
                    alt="Nến thơm thiên nhiên"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                  {/* Hiệu ứng bóng mờ phía sau cho đẹp */}
                  <div className="absolute inset-0 bg-orange-100 rounded-full blur-3xl opacity-30 -z-10"></div>
                </div>
              </div>

              {/* CỘT PHẢI (3 Mục - Căn lề phải trên Desktop) */}
              <div className="space-y-12 md:space-y-16">

                {/* Mục 4 */}
                <div className="flex flex-row lg:flex-row-reverse gap-4 md:gap-6 items-start lg:text-right">
                  <div className="flex-shrink-0 mt-1">
                    {/* Icon Pb (Lead free) */}
                    <div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center text-primary relative">
                      <span className="font-bold text-lg">Pb</span>
                      <div className="absolute w-full h-[2px] bg-primary rotate-45"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-body font-bold text-foreground mb-2">Bấc cotton không chì</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed text-justify lg:text-right">
                      Những sợi bấc được dệt từ cotton không chứa chì hay kim loại nặng khác.
                    </p>
                  </div>
                </div>

                {/* Mục 5 */}
                <div className="flex flex-row lg:flex-row-reverse gap-4 md:gap-6 items-start lg:text-right">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center text-primary p-2">
                      <HeartHandshake size={32} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-body font-bold text-foreground mb-2">Hoàn toàn thủ công</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed text-justify lg:text-right">
                      Từng sản phẩm được phối trộn hoàn toàn thủ công dưới đôi bàn tay khéo léo của người thợ lành nghề.
                    </p>
                  </div>
                </div>

                {/* Mục 6 */}
                <div className="flex flex-row lg:flex-row-reverse gap-4 md:gap-6 items-start lg:text-right">
                  <div className="flex-shrink-0 mt-1">
                    <SlidersHorizontal size={48} strokeWidth={1.5} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-body font-bold text-foreground mb-2">ĐẶC BIỆT</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed text-justify lg:text-right">
                      Công nghệ customize mẫu nến thơm theo nhu cầu với mô phỏng 3D thời gian thực.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Process Section (Quy Trình Sản Xuất) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

            {/* TIÊU ĐỀ CHÍNH */}
            <div className="text-center mb-16 md:mb-24">
              <p className="text-base font-body font-bold text-gray-500 uppercase tracking-widest mb-3">
                Sự tỉ mỉ trong từng công đoạn
              </p>
              <h1 className="text-4xl md:text-6xl font-brand text-primary uppercase">
                Quy Trình Sản Xuất
              </h1>
            </div>

            {/* NỘI DUNG CHÍNH: GRID 3 CỘT */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

              {/* CỘT TRÁI (Các bước 01, 02, 03) */}
              <div className="space-y-12 md:space-y-16">

                {/* Bước 01 */}
                <div className="flex gap-4 md:gap-6 items-start">
                  <div className="flex-shrink-0 mt-1">
                    {/* Số 01 cách điệu */}
                    <div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center text-primary bg-white">
                      <span className="font-body font-bold text-xl">01</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-body font-bold text-foreground mb-2">Chọn Nguyên Liệu</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed text-justify">
                      Tuyển chọn những nguyên liệu tốt nhất từ các nhà cung cấp đáng tin cậy.
                    </p>
                  </div>
                </div>

                {/* Bước 02 */}
                <div className="flex gap-4 md:gap-6 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center text-primary bg-white">
                      <span className="font-body font-bold text-xl">02</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-body font-bold text-foreground mb-2">Pha Trộn Tinh Dầu</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed text-justify">
                      Pha trộn tinh dầu thiên nhiên theo công thức riêng biệt của Préci.
                    </p>
                  </div>
                </div>

                {/* Bước 03 */}
                <div className="flex gap-4 md:gap-6 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center text-primary bg-white">
                      <span className="font-body font-bold text-xl">03</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-body font-bold text-foreground mb-2">Tính Sáp</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed text-justify">
                      Nấu chảy sáp ở nhiệt độ phù hợp để đảm bảo chất lượng sáp tốt nhất.
                    </p>
                  </div>
                </div>

              </div>

              {/* CỘT GIỮA (Hình ảnh) */}
              <div className="flex justify-center items-center py-8 lg:py-0">
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  {/* Ảnh đại diện cho kết quả quy trình */}
                  <img
                    src="/assets/nen-tach-nen.webp"
                    alt="Nến thơm Préci"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                  {/* Hiệu ứng nền mờ */}
                  <div className="absolute inset-0 bg-orange-100 rounded-full blur-3xl opacity-30 -z-10"></div>
                </div>
              </div>

              {/* CỘT PHẢI (Các bước 04, 05, 06 - Căn lề phải trên Desktop) */}
              <div className="space-y-12 md:space-y-16">

                {/* Bước 04 */}
                <div className="flex flex-row lg:flex-row-reverse gap-4 md:gap-6 items-start lg:text-right">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center text-primary bg-white">
                      <span className="font-body font-bold text-xl">04</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-body font-bold text-foreground mb-2">Đổ Nến</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed text-justify lg:text-right">
                      Đổ hỗn hợp sáp vào các khuôn được chọn lọc kỹ càng, đảm bảo bề mặt mịn màng.
                    </p>
                  </div>
                </div>

                {/* Bước 05 */}
                <div className="flex flex-row lg:flex-row-reverse gap-4 md:gap-6 items-start lg:text-right">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center text-primary bg-white">
                      <span className="font-body font-bold text-xl">05</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-body font-bold text-foreground mb-2">Gia Công Hoàn Thiện</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed text-justify lg:text-right">
                      Kiểm tra chất lượng, cắt bấc và gia công hoàn thiện các chi tiết nhỏ nhất.
                    </p>
                  </div>
                </div>

                {/* Bước 06 */}
                <div className="flex flex-row lg:flex-row-reverse gap-4 md:gap-6 items-start lg:text-right">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center text-primary bg-white">
                      <span className="font-body font-bold text-xl">06</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-body font-bold text-foreground mb-2">Đóng Gói & Giao Hàng</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed text-justify lg:text-right">
                      Đóng gói đẹp mắt, cẩn thận và giao hàng tới tận tay khách hàng.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
