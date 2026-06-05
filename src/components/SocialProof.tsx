import { Link } from 'wouter'
import { socialProofStats, portfolioItems } from '../data/portfolio'

export default function SocialProof() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#E63022] font-semibold mb-2">ผลงานจริง ลูกค้าจริง</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            แบรนด์ที่ไว้วางใจ Sourcing8
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            ตั้งแต่ SME ที่เพิ่งเริ่มสร้างแบรนด์ ไปจนถึงองค์กรที่ต้องการของขวัญพรีเมียม<br />
            เราดูแลทุกออเดอร์ด้วยมาตรฐานเดียวกัน
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-14">
          {socialProofStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl shadow-sm p-6 text-center border border-gray-100"
            >
              <p className="text-4xl font-extrabold text-[#E63022] mb-1">{stat.value}</p>
              <p className="font-bold text-gray-900 mb-1">{stat.label}</p>
              <p className="text-gray-400 text-sm">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.product} - ${item.client}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Tag */}
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 text-[#E63022] text-xs font-semibold px-2 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <div className="p-3">
<p className="font-semibold text-gray-900 text-xs">{item.product}</p>
<p className="text-gray-400 text-xs mt-0.5 truncate">{item.client} · {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/showcase"
            className="text-[#E63022] font-semibold text-sm hover:underline"
          >
            ดูผลงานทั้งหมด →
          </Link>
        </div>
      </div>
    </section>
  )
}
