import type { Product } from './types'

const tumbler: Product = {
  id: '2',
  slug: 'tumbler',
  name: 'แก้วน้ำ',
  shortDesc: 'แก้วน้ำและ Tumbler พิมพ์โลโก้แบรนด์ ขั้นต่ำน้อย ราคาโรงงาน คุณภาพสูง เก็บความเย็น-ร้อน เหมาะสำหรับของขวัญองค์กรและโปรโมชั่นบริษัท',
  description: 'แก้วน้ำและ Tumbler พิมพ์โลโก้แบรนด์ ขั้นต่ำน้อย ราคาโรงงาน คุณภาพสูง เก็บความเย็น-ร้อน เหมาะสำหรับของขวัญองค์กรและโปรโมชั่นบริษัท',
  cta: 'สอบถามเพิ่มเติม',
  ctaType: 'inquiry',
  image: '/images/tumbler_showcase_hero.png',
  stats: [
    { value: '80+', label: 'แบบสินค้า', desc: 'แก้วน้ำหลากหลายแบบ ทั้ง Tumbler และ Mug' },
    { value: '50', label: 'ชิ้นขั้นต่ำ', desc: 'รับผลิตแก้วน้ำพิมพ์โลโก้ตั้งแต่ 50 ชิ้น ราคาโรงงาน' },
    { value: '14-21', label: 'วันส่งมอบ', desc: 'ผลิตและจัดส่งภายใน 14-21 วัน ขึ้นอยู่กับปริมาณการสั่งผลิต' },
  ],
}

export default tumbler
