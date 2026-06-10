import ProductCard from '../components/ProductCard'
import { products } from '../data'
import usePageMeta from '../hooks/usePageMeta'

export default function Products() {
  usePageMeta({
    title: 'สินค้าพิมพ์โลโก้ทั้งหมด ขั้นต่ำน้อย ราคาโรงงาน | Sourcing8',
    description: 'รวมสินค้าพรีเมียมพิมพ์โลโก้ ถุงสปันบอนด์ กระบอกน้ำ ปากกา ถุงกระดาษ การ์ด NFC สั่งขั้นต่ำน้อย ราคาโรงงาน',
    path: '/products',
  })

  return (
    <div className="bg-[#F5F5F5] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-3">สินค้าของเรา</h1>
          <p className="text-gray-500">
            เลือกสินค้าพิมพ์โลโก้ที่เหมาะกับธุรกิจของคุณ
            หรือติดต่อเราเพื่อปรึกษาแบบกำหนดเอง
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  )
}
