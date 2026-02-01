import Header from '@/components/header'
import Footer from '@/components/footer'
import ProductCustomizer from '@/components/product-customizer' // Component bạn đã có
import { getProductById } from '@/lib/products'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function CustomizePage({ params }: PageProps) {
  const { id } = await params
  const product = getProductById(parseInt(id));

  if (!product) return <div>Sản phẩm không tìm thấy</div>;

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDFA]">
      <Header />
      <main className="flex-1">
        {/* Truyền đúng thông tin sản phẩm vào Customizer */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <ProductCustomizer
            productId={product.id}
            productName={product.name}
          // Bạn có thể truyền thêm basePrice vào component Customizer nếu cần
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}