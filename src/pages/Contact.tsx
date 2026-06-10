import { MessageCircle, Phone, Mail } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'

export default function Contact() {
  usePageMeta({
    title: 'ติดต่อเรา — ขอใบเสนอราคาสินค้าพิมพ์โลโก้ | Sourcing8',
    description: 'ติดต่อ Sourcing8 ขอใบเสนอราคาสินค้าพิมพ์โลโก้ โทร 090-6926642 หรือ LINE @389xbjxh ปรึกษาฟรี',
    path: '/contact',
  })

  return (
    <div className="min-h-screen bg-[#F5F5F5] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#E63022]/10 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full border-2 border-[#F97316]/20" />
      <div className="absolute bottom-40 right-20 grid grid-cols-5 gap-2 opacity-30">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#E63022]" />
        ))}
      </div>

      <div className="relative max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-[#E63022] font-semibold mb-2">พร้อมเริ่มต้น?</p>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">ติดต่อเราวันนี้เลย</h1>
        <p className="text-gray-500 mb-12">มีคำถามหรือต้องการปรึกษา? ทีมของเรา พร้อมช่วยเหลือคุณ</p>

        <div className="absolute left-0 right-0 top-32 text-[120px] font-black text-[#E63022]/5 text-center pointer-events-none select-none leading-none">
          CONTACT US
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-16 relative">
          {[
            { label: 'Line', sub: 'แชทกับเรา', icon: <MessageCircle size={24} />, href: 'https://line.me/ti/p/@389xbjxh', color: '#E63022' },
            { label: 'Facebook', sub: 'ส่งข้อความ', icon: <MessageCircle size={24} />, href: 'https://www.facebook.com/sourcing8.in.th/', color: '#F97316' },
            { label: 'โทรศัพท์', sub: '090-6926642', icon: <Phone size={24} />, href: 'tel:0906926642', color: '#E63022' },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white mx-auto mb-4"
                style={{ backgroundColor: c.color }}
              >
                {c.icon}
              </div>
              <p className="font-bold text-gray-900 text-lg">{c.label}</p>
              <p className="text-gray-500 text-sm">{c.sub}</p>
            </a>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm text-left max-w-sm mx-auto">
          <div className="flex items-center gap-3 mb-1">
            <Mail size={18} className="text-[#E63022]" />
            <span className="text-gray-500 text-sm font-semibold uppercase tracking-wide">EMAIL</span>
          </div>
          <p className="text-gray-700 text-sm pl-7">sourcing8.in.th@gmail.com</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#E63022] to-[#F97316] py-14 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">ได้ไอเดียแล้ว?</h2>
        <p className="text-white/90 mb-8">ติดต่อเราเพื่อรับคำปรึกษาฟรีและใบเสนอราคา</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://line.me/ti/p/@389xbjxh" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center justify-center gap-2">
            <MessageCircle size={18} />
            Line
          </a>
          <a href="tel:0906926642" className="btn-outline flex items-center justify-center gap-2">
            <Phone size={18} />
            โทรศัพท์
          </a>
        </div>
      </div>
    </div>
  )
}
