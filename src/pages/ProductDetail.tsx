import { Link, useParams } from 'wouter'
import { ArrowLeft, MessageCircle, Package } from 'lucide-react'
import ContactSection from '../components/ContactSection'
import { products } from '../data'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">ไม่พบสินค้า</p>
          <Link href="/products" className="btn-primary">กลับไปดูสินค้า</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      {/* Header */}
      <div className="bg-white border-b px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/products" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft size={18} />
            <span>กลับไปหน้าแรก</span>
          </Link>
          <h1 className="text-lg font-bold text-gray-900">{product.name}</h1>
          <div className="w-24" />
        </div>
      </div>

      {/* Product Header */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-3">
            {product.pageTitle || product.name}
          </h2>
          {product.pageSubtitle && (
            <p className="text-center text-gray-500 max-w-xl mx-auto">
              {product.pageSubtitle}
            </p>
          )}
        </div>
      </section>

      {product.variants && (
        <section className="py-10 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.variants.slice(0, 21).map((v, i) => (
                <div key={i} className="product-card">
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    <img
                      src={v.image}
                      alt={v.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-2">{v.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">{v.desc}</p>
                    <Link
                      href="/contact"
                      className="block w-full bg-[#E63022] text-white text-center py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    >
                      สอบถามราคา
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats */}
      {product.stats && (
        <section className="py-14 bg-[#FFF5F3]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-extrabold mb-10">ทำไมต้องเลือก Sourcing8?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {product.stats.map((s) => (
                <div key={s.label}>
                  <p className="text-4xl font-extrabold text-[#E63022] mb-1">{s.value}</p>
                  <p className="font-bold text-gray-900 mb-2">{s.label}</p>
                  <p className="text-gray-500 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">สอบถามเพิ่มเติม</h2>
          <p className="text-gray-500 mb-8">ติดต่อเราเพื่อสอบถามราคา ขั้นต่ำการผลิต และข้อมูลเพิ่มเติม</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Line', sub: 'YOUR_LINE_ID', icon: <MessageCircle size={20} className="text-[#E63022]" /> },
              { label: 'Messenger', sub: 'YOUR_MESSENGER_ID', icon: <MessageCircle size={20} className="text-[#E63022]" /> },
              { label: 'โทรศัพท์', sub: '+66XXXXXXXXX', icon: <Package size={20} className="text-[#E63022]" /> },
            ].map((c) => (
              <div key={c.label} className="bg-[#F5F5F5] rounded-xl p-5 text-center">
                <div className="flex justify-center mb-2">{c.icon}</div>
                <p className="font-semibold text-gray-900">{c.label}</p>
                <p className="text-gray-500 text-sm">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
