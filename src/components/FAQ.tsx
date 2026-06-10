import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'จำนวนสั่งซื้อขั้นต่ำของ Sourcing8 เป็นอย่างไร?',
    a: 'การสั่งซื้อขั้นต่ำ (MOQ) ของเราจะแตกต่างกันไปตามประเภทของสินค้า โดยส่วนใหญ่จะเริ่มต้นที่ 50-100 ชิ้น อย่างไรก็ตาม สินค้าบางรายการอาจมีจำนวนสั่งซื้อขั้นต่ำที่ยืดหยุ่นกว่านั้น คุณสามารถติดต่อทีมงานของเราเพื่อสอบถามรายละเอียดเพิ่มเติมสำหรับสินค้าที่คุณสนใจได้เลยค่ะ',
  },
  {
    q: 'ระยะผลิตใช้เวลากี่วัน?',
    a: 'หลังจากที่คุณยืนยันแบบและดำเนินการชำระเงินเรียบร้อยแล้ว กระบวนการผลิตจะใช้เวลาประมาณ 7-15 วันทำการ ทั้งนี้ขึ้นอยู่กับชนิดของสินค้าและความซับซ้อนของงานพิมพ์ค่ะ',
  },
  {
    q: 'สามารถพิมพ์โลโก้ได้กี่สี และมีเทคนิคการพิมพ์แบบใดบ้าง?',
    a: 'เราสามารถพิมพ์โลโก้ได้หลากหลายสีสัน โดยเทคนิคการพิมพ์จะขึ้นอยู่กับประเภทของสินค้า เช่น การสกรีน, การพิมพ์ UV หรือการปั๊มโลโก้ คุณสามารถส่งไฟล์โลโก้ของคุณมาให้เราได้เลยค่ะ ทีมงานผู้เชี่ยวชาญของเราจะช่วยแนะนำเทคนิคที่เหมาะสมที่สุดเพื่อให้โลโก้ของคุณโดดเด่นและสวยงาม',
  },
  {
    q: 'Sourcing8 มีสินค้าประเภทใดให้เลือกบ้าง?',
    a: 'เรามีสินค้าพรีเมียมให้เลือกสรรมากมาย ไม่ว่าจะเป็นถุงสปันบอนด์, กระบอกน้ำสแตนเลส, ปากกาพรีเมียม, ถุงกระดาษ, การ์ด NFC และสินค้าพรีเมียมอื่น ๆ อีกมากมายที่สามารถปรับแต่งได้ตามความต้องการเฉพาะของคุณ',
  },
  {
    q: 'Sourcing8 มีบริการจัดส่งสินค้าทั่วประเทศหรือไม่?',
    a: 'เรามีบริการจัดส่งสินค้าครอบคลุมทั่วประเทศไทย ไม่ว่าจะเป็นในเขตกรุงเทพฯ หรือต่างจังหวัด เราพร้อมส่งมอบสินค้าคุณภาพถึงมือคุณ',
  },
  {
    q: 'สามารถขอแคตตาล็อกเพื่อประกอบการตัดสินใจได้หรือไม่?',
    a: 'คุณสามารถติดต่อเราได้ที่ เบอร์โทร: 090-6926642 หรือ LINE @389xbjxh เพื่อขอรับแคตตาล็อกสินค้าได้เลย โดยไม่มีข้อผูกมัดใด ๆ เพื่อให้คุณมั่นใจในคุณภาพก่อนตัดสินใจสั่งซื้อค่ะ',
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
