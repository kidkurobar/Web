import { Link } from 'wouter'
import ContactSection from '../components/ContactSection'

export default function About() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Sourcing8',
            image: 'https://www.sourcing8.in.th/sourcing8_final_interlock_1.png',
            '@id': 'https://www.sourcing8.in.th/#organization',
            url: 'https://www.sourcing8.in.th/',
            telephone: '+66906926642',
            email: 'sourcing8.in.th@gmail.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'ตำบลเมืองสวรรคโลก อำเภอสวรรคโลก',
              addressLocality: 'จังหวัดสุโขทัย',
              postalCode: '64110',
              addressCountry: 'TH',
            },
            sameAs: [
              'https://www.facebook.com/sourcing8.in.th/',
              'https://line.me/ti/p/@389xbjxh',
            ],
            description:
              'Sourcing8 คือผู้เชี่ยวชาญด้านการผลิตและจัดหาสินค้าพรีเมียมพิมพ์โลโก้ ของขวัญองค์กร ด้วยบริการขั้นต่ำน้อย คุณภาพสูง และจัดส่งรวดเร็ว',
            areaServed: 'TH',
            priceRange: '฿฿',
          }),
        }}
      />

      <div className="bg-[#F5F5F5] min-h-screen">
        {/* Header */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[#E63022] font-semibold mb-2">เกี่ยวกับเรา</p>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
              Sourcing8: พันธมิตรผู้เชี่ยวชาญด้านสินค้าพรีเมียมพิมพ์โลโก้
            </h1>

            {/* Intro */}
            <p className="text-gray-600 leading-relaxed mb-10">
              ที่ Sourcing8 เราคือผู้เชี่ยวชาญด้านการผลิตและจัดหาสินค้าพรีเมียมพิมพ์โลโก้
              และของขวัญองค์กรที่เข้าใจความต้องการของธุรกิจทุกขนาด ไม่ว่าคุณจะเป็น SME
              ที่ต้องการสร้างแบรนด์ให้เป็นที่จดจำ หรือองค์กรขนาดใหญ่ที่มองหาของขวัญพิเศษ
              สำหรับลูกค้าและพนักงาน เราพร้อมเป็นพันธมิตรที่เชื่อถือได้ของคุณ
            </p>

            {/* Mission */}
            <h2 className="text-xl font-bold text-gray-900 mb-3">พันธกิจของเรา</h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              พันธกิจของ Sourcing8 คือการส่งมอบสินค้าพิมพ์โลโก้คุณภาพสูงที่สะท้อนถึงเอกลักษณ์
              และคุณค่าของแบรนด์คุณ ด้วยบริการที่ยืดหยุ่น รวดเร็ว และเป็นมืออาชีพ
              เรามุ่งมั่นที่จะช่วยให้ธุรกิจของคุณสร้างความประทับใจที่ยั่งยืน
              ผ่านผลิตภัณฑ์ที่โดดเด่นและมีคุณภาพ
            </p>

            {/* Why Us */}
            <h2 className="text-xl font-bold text-gray-900 mb-6">ทำไมต้องเลือก Sourcing8?</h2>

            <div className="space-y-8 mb-10">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">ขั้นต่ำน้อย (Low MOQ) เริ่มต้นเพียง 50 ชิ้น</h3>
                <p className="text-gray-600 leading-relaxed">
                  เราเข้าใจดีว่าบางครั้งคุณอาจไม่ต้องการสั่งสินค้าจำนวนมาก
                  ด้วยบริการขั้นต่ำน้อยของเรา คุณสามารถสั่งผลิตสินค้าพิมพ์โลโก้ได้ตั้งแต่ 50 ชิ้น*
                  ทำให้เหมาะสำหรับธุรกิจขนาดเล็ก กิจกรรมพิเศษ หรือการทดลองตลาด
                  โดยไม่ต้องกังวลเรื่องสต็อกสินค้าเกินความจำเป็น
                </p>
                <p className="text-gray-400 text-xs mt-1">*จำนวนขั้นต่ำอาจแตกต่างกันไปตามประเภทสินค้า</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">คุณภาพระดับพรีเมียมและเทคโนโลยีการผลิตที่ทันสมัย</h3>
                <p className="text-gray-600 leading-relaxed">
                  สินค้าทุกชิ้นจาก Sourcing8 ผ่านกระบวนการผลิตที่พิถีพิถันและใช้เทคโนโลยีที่ทันสมัย
                  เพื่อให้ได้ผลลัพธ์ที่มีคุณภาพสูงสุด เราใส่ใจในทุกรายละเอียด
                  ตั้งแต่การเลือกวัสดุ การพิมพ์โลโก้ ไปจนถึงการตรวจสอบคุณภาพ (QC) ก่อนส่งมอบ
                  เพื่อให้มั่นใจว่าคุณจะได้รับสินค้าที่สมบูรณ์แบบและตรงตามความคาดหวัง
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">จัดส่งรวดเร็วและตรงเวลา</h3>
                <p className="text-gray-600 leading-relaxed">
                  เราให้ความสำคัญกับเวลาของคุณ ด้วยกระบวนการผลิตที่มีประสิทธิภาพ
                  เราสามารถผลิตและจัดส่งสินค้าพิมพ์โลโก้ได้ภายใน 14-21 วัน*
                  พร้อมอัปเดตสถานะการผลิตให้คุณทราบในทุกขั้นตอน
                  เพื่อให้คุณมั่นใจว่าจะได้รับสินค้าทันตามกำหนดเวลา
                </p>
                <p className="text-gray-400 text-xs mt-1">*ระยะเวลาการผลิตขึ้นอยู่กับประเภทสินค้าและความซับซ้อนของงาน</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">บริการครบวงจรและคำปรึกษาจากผู้เชี่ยวชาญ</h3>
                <p className="text-gray-600 leading-relaxed">
                  ทีมงาน Sourcing8 พร้อมให้คำปรึกษาและช่วยเหลือคุณในทุกขั้นตอน
                  ตั้งแต่การเลือกสินค้า การออกแบบ การผลิต ไปจนถึงการจัดส่ง
                  เรามีประสบการณ์และความเชี่ยวชาญในการช่วยคุณเลือกสินค้าที่เหมาะสมที่สุด
                  กับงบประมาณและความต้องการของคุณ เพื่อให้ได้ผลลัพธ์ที่ดีที่สุดสำหรับแบรนด์ของคุณ
                </p>
              </div>
            </div>

            {/* Products */}
            <h2 className="text-xl font-bold text-gray-900 mb-4">ผลิตภัณฑ์และบริการของเรา</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              เรานำเสนอสินค้าพิมพ์โลโก้หลากหลายประเภท เพื่อตอบสนองทุกความต้องการของคุณ
              อาทิ ถุงสปันบอนด์พิมพ์โลโก้ที่เป็นมิตรต่อสิ่งแวดล้อม แก้วน้ำและ Tumbler
              ที่ใช้งานได้จริงในชีวิตประจำวัน ปากกาพิมพ์โลโก้ที่บ่งบอกถึงความเป็นมืออาชีพ
              ถุงกระดาษพิมพ์โลโก้ที่เพิ่มมูลค่าให้กับ Packaging การ์ด NFC นวัตกรรมใหม่
              สำหรับการแชร์ข้อมูล รวมถึงสินค้าพรีเมียมตามสั่งอีกมากมาย
            </p>
            <Link
              href="/products"
              className="inline-block bg-[#E63022] text-white rounded-full px-6 py-2.5 font-semibold hover:bg-red-700 transition-colors mb-10"
            >
              ดูสินค้าทั้งหมด
            </Link>

            {/* CTA */}
            <h2 className="text-xl font-bold text-gray-900 mb-4">ร่วมสร้างแบรนด์ที่แข็งแกร่งกับ Sourcing8</h2>
            <p className="text-gray-600 leading-relaxed">
              ไม่ว่าคุณจะกำลังมองหาสินค้าพรีเมียมสำหรับแคมเปญการตลาด
              ของขวัญสำหรับลูกค้าคนสำคัญ หรือของที่ระลึกสำหรับพนักงาน
              Sourcing8 พร้อมเป็นส่วนหนึ่งในการสร้างสรรค์สิ่งที่ดีที่สุดให้กับแบรนด์ของคุณ
              ติดต่อเราวันนี้เพื่อเริ่มต้นโปรเจกต์ของคุณ
            </p>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  )
}
