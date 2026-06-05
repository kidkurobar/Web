import { MessageCircle, Package } from 'lucide-react'

export default function SoftCTA() {
  return (
    <section className="py-14 bg-[#FFF5F3]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#E63022] font-semibold mb-2">ยังไม่แน่ใจ?</p>
        <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
          เริ่มต้นง่ายๆ ไม่มีข้อผูกมัด
        </h2>
        <p className="text-gray-500 mb-8">
       ทีมของเราพร้อมช่วยเหลือตั้งแต่เลือกสินค้า
          ประเมินราคา ไปจนถึงเจรจาผลิตสินค้าตัวอย่างก่อนตัดสินใจ
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://line.me/ti/p/@389xbjxh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#E63022] text-white rounded-full px-6 py-3 font-semibold hover:bg-red-700 transition-colors"
          >
            <Package size={18} />
            ขอดูแคตตาล็อกสินค้า
          </a>
          <a
            href="https://line.me/ti/p/@389xbjxh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-2 border-[#E63022] text-[#E63022] rounded-full px-6 py-3 font-semibold hover:bg-[#E63022] hover:text-white transition-colors"
          >
            <MessageCircle size={18} />
            ปรึกษาฟรี ไม่มีขั้นต่ำ
          </a>
        </div>
      </div>
    </section>
  )
}
