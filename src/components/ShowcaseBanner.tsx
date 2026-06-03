import { Link } from 'wouter'
import { showcaseItems } from '../data/showcase'

export default function ShowcaseBanner() {
  // duplicate for seamless loop
  const items = [...showcaseItems, ...showcaseItems]

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">ผลงานของเรา</h2>
          <p className="text-gray-500 text-sm mt-1">ตัวอย่างงานจริงจากลูกค้าที่ไว้วางใจเรา</p>
        </div>
        <Link
          href="/showcase"
          className="text-[#E63022] font-semibold text-sm hover:underline"
        >
          ดูทั้งหมด →
        </Link>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex gap-4 animate-marquee">
          {items.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="flex-shrink-0 w-56 bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100"
            >
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.product}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold text-gray-900 truncate">{item.product}</p>
                <p className="text-xs text-gray-400 truncate">{item.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
