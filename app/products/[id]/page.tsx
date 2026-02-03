import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import AddToCartClient from './AddToCartClient'
import { getProductById } from '@/lib/products' // 1. IMPORT TỪ THƯ VIỆN CHUNG

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params

  // 2. LẤY DỮ LIỆU TỪ HÀM CHUNG (Thay vì khai báo cứng const products = ...)
  const product = getProductById(parseInt(id))

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FFFDFA]">
        <Header />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="text-2xl font-brand font-bold text-foreground mb-4">Sản phẩm không tìm thấy</h1>
            <Link href="/products" className="text-primary font-semibold hover:underline">
              ← Quay lại cửa hàng
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDFA]">
      <Header />

      <main className="flex-1">
        {/* Product Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <Link href="/products" className="font-brand inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft size={20} />
            Quay Lại Sản Phẩm
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="h-[500px] w-full rounded-lg overflow-hidden bg-[#F2EFE9] border border-[#E5E0D8] shadow-sm flex items-center justify-center relative">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-8 hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <span className="text-8xl opacity-20">🎁</span>
                  <p className="text-xs text-muted-foreground italic">Hình ảnh đang cập nhật</p>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <p className="font-body text-sm font-bold text-primary uppercase mb-2 tracking-widest">
                  {product.category === 'candles' ? 'Nến Thơm' : 'Phụ Kiện Préci'}
                </p>
                <h1 className="text-4xl md:text-5xl font-brand text-[#1a1a1a] mb-4">{product.name}</h1>
                <p className="font-body text-lg text-gray-500 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <span className="text-sm font-body text-gray-400">
                    {product.rating} ({product.reviews} đánh giá)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-[#E5E0D8]">
                <p className="text-4xl font-body font-bold text-primary">
                  {product.priceFormatted}
                </p>
              </div>

              {/* Features (Xử lý phòng trường hợp dữ liệu cũ thiếu features) */}
              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-brand font-bold text-xl text-[#1a1a1a] mb-4">Đặc Điểm Nổi Bật</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600">
                        <span className="font-bold text-primary mt-1">✓</span>
                        <span className="font-body">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Add to Cart */}
              <div className="space-y-4">
                <AddToCartClient
                  productId={product.id}
                  productName={product.name}
                  priceString={product.priceFormatted}
                />

                <Link href="/products" className="block w-full text-center py-4 border border-primary text-primary font-body uppercase rounded-lg hover:bg-[#F2EFE9] transition-colors font-body">
                  Tiếp Tục Mua Sắm
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}