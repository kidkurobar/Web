import { showcaseItems } from '../data/showcase'
import ContactSection from '../components/ContactSection'

export default function Showcase() {
  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      {/* Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#E63022] font-semibold mb-2">ผลงานจริง</p>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-3">ผลงานของเรา</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            ตัวอย่างงานจริงจากลูกค้าที่ไว้วางใจ Sourcing8
            ทุกชิ้นผลิตตามออเดอร์ พิมพ์โลโก้แบรนด์ได้ตามต้องการ
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {showcaseItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.product}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-gray-900">{item.product}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
