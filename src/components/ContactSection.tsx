import { MessageCircle, Phone } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#E63022] to-[#F97316] rounded-2xl p-10 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">ได้ไอเดียแล้ว?</h2>
        <p className="text-white/90 mb-8">ติดต่อเราเพื่อรับคำปรึกษาฟรีและใบเสนอราคา</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://line.me/ti/p/@389xbjxh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            Line
          </a>
          <a
            href="tel:0906926642"
            className="btn-outline flex items-center justify-center gap-2"
          >
            <Phone size={18} />
            โทรศัพท์
          </a>
        </div>
      </div>
    </section>
  )
}
