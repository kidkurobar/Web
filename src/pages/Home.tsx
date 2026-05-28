import { Link } from 'wouter'
import { ShieldCheck, Zap, Clock } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import ContactSection from '../components/ContactSection'
import { products } from '../data/products'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F5F5F5] min-h-[calc(100vh-64px)] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#E63022] font-semibold mb-2">ยินดีต้อนรับสู่</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-3">Sourcing8</h1>
            <p className="text-xl font-bold text-[#F97316] mb-6">สินค้าพิมพ์โลโก้แบรนด์ ขั้นต่ำน้อย เริ่มต้นที่ 50 ชิ้น</p>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
              ต้องการสินค้าพิมพ์โลโก้ที่มีคุณภาพ แต่ไม่อยากสั่งจำนวนมาก?
              เรามีคำตอบให้คุณ เราผลิตสินค้าพรีเมียมตั้งแต่จำนวนน้อย
              พร้อมมาตรฐานคุณภาพสูงและบริการจากผู้เชี่ยวชาญ
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/contact" className="btn-primary">เริ่มต้นเลย</Link>
              <Link href="/products" className="border-2 border-gray-300 text-gray-700 rounded-full px-6 py-2.5 font-semibold hover:border-[#E63022] hover:text-[#E63022] transition-colors">
                ดูสินค้า
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden aspect-square">
              <img
                src="/images/hero-merchandise-showcase.png"
                alt="Sourcing8 Products"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const el = e.target as HTMLImageElement
                  el.parentElement!.style.background = 'linear-gradient(135deg, #ffeee9 0%, #fff5f0 100%)'
                  el.style.display = 'none'
                }}
              />
            </div>
            {/* Decorative */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-40 h-40 rounded-full bg-[#F97316]/10" />
            <div className="absolute -z-10 -top-4 -left-4 w-24 h-24 rounded-full bg-[#E63022]/10" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: <ShieldCheck size={32} className="text-[#E63022]" />, title: 'เทคโนโลยีการผลิตคุณภาพสูง', desc: 'สินค้าพิมพ์โลโก้ทุกชิ้นผ่านการขึ้นงานแบบ ส่งให้ลูกค้าตรวจสอบความถูกต้องก่อนผลิต QC คุณภาพก่อนส่งมอบ รับประกันคุณภาพ', note: null },
              { icon: <Zap size={32} className="text-[#F97316]" />, title: 'ขั้นต่ำน้อย เริ่มต้นที่ 50 ชิ้น', desc: 'รับผลิตสินค้าพิมพ์โลโก้ตั้งแต่ 50 ชิ้น เหมาะสำหรับ SME และ Event organizer', note: '*จำนวนขั้นต่ำการผลิตขึ้นอยู่กับประเภทสินค้า' },
              { icon: <Clock size={32} className="text-[#E63022]" />, title: 'จัดส่งรวดเร็ว', desc: 'ผลิตและจัดส่งสินค้าพิมพ์โลโก้ภายใน 14-21 วัน อัปเดตสถานะทุกขั้นตอน', note: '*ระยะเวลาการผลิตขึ้นอยู่กับประเภทสินค้า' },
            ].map((item) => (
              <div key={item.title} className="p-6">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
                {item.note && <p className="text-gray-400 text-xs mt-2">{item.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">สินค้าของเรา</h2>
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
      </section>

      <ContactSection />
    </>
  )
}
