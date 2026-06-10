import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'สั่งขั้นต่ำกี่ชิ้น?',
    a: 'ขึ้นอยู่กับสินค้า ส่วนใหญ่เริ่มที่ 50–100 ชิ้น บางรายการน้อยกว่านั้น ทักมาถามได้เลยค่ะ',
  },
  {
    q: 'ผลิตใช้เวลากี่วัน?',
    a: 'หลังยืนยันแบบและชำระเงินแล้ว ประมาณ 7–15 วันทำการค่ะ',
  },
  {
    q: 'พิมพ์โลโก้ได้กี่สี?',
    a: 'พิมพ์ได้หลายสี เทคนิคขึ้นอยู่กับสินค้า ส่งไฟล์โลโก้มาได้เลย ทีมจะแนะนำให้ค่ะ',
  },
  {
    q: 'มีสินค้าประเภทใดบ้าง?',
    a: 'ถุงสปันบอนด์ กระบอกน้ำสแตนเลส ปากกา ถุงกระดาษ การ์ด NFC และสินค้าพรีเมียมอื่นๆ ตามต้องการค่ะ',
  },
  {
    q: 'จัดส่งทั่วประเทศได้ไหม?',
    a: 'ได้ค่ะ จัดส่งทั่วไทยค่ะ',
  },
  {
    q: 'ขอดูตัวอย่างสินค้าก่อนได้ไหม?',
    a: 'ได้เลยค่ะ ทักมาที่ LINE @389xbjxh ขอแคตตาล็อกได้เลย ไม่มีข้อผูกมัดค่ะ',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
          คำถามที่พบบ่อย
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full text-left px-5 py-4 flex justify-between items-center gap-4 font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{f.q}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-gray-400 transition-transform ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-gray-600 leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
