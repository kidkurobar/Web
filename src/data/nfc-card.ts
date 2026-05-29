import type { Product } from './types'

const nfcCard: Product = {
  id: '5',
  slug: 'nfc-card',
  name: 'การ์ด NFC พิมพ์โลโก้แบรนด์',
  shortDesc: 'การ์ด NFC พิมพ์โลโก้แบรนด์ ขั้นต่ำน้อย ราคาโรงงาน เทคโนโลยีแชร์ข้อมูลด้วยการแตะ เหมาะสำหรับนามบัตรดิจิทัลและแคมเปญการตลาดสมัยใหม่',
  description: 'การ์ด NFC พิมพ์โลโก้แบรนด์ ขั้นต่ำน้อย ราคาโรงงาน เทคโนโลยีแชร์ข้อมูลด้วยการแตะ เหมาะสำหรับนามบัตรดิจิทัลและแคมเปญการตลาดสมัยใหม่',
  cta: 'ดูแคตตาล็อก',
  ctaType: 'catalog',
  image: '/images/nfc_cards_showcase_hero.png',
  stats: [
    { value: '10+', label: 'แบบสินค้า', desc: 'การ์ด NFC หลากหลายวัสดุ ทั้ง PVC โลหะ และพลาสติกพรีเมียม' },
    { value: '100', label: 'ใบขั้นต่ำ', desc: 'รับผลิตการ์ด NFC พิมพ์โลโก้ตั้งแต่ 100 ใบ ราคาโรงงาน' },
    { value: '14-21', label: 'วันส่งมอบ', desc: 'ผลิตและจัดส่งการ์ด NFC ภายใน 14-21 วัน ขึ้นอยู่กับปริมาณการสั่งผลิต' },
  ],
  variants: [
    { name: 'ป้าย NFC Google Review', desc: 'ป้ายตั้งโต๊ะ NFC พิมพ์โลโก้ แตะเพื่อรีวิว Google ขั้นต่ำ 100 ชิ้น ราคาโรงงาน', image: '/images/NFC_01.png' },
    { name: 'การ์ด NFC สีสัน', desc: 'การ์ด NFC พิมพ์โลโก้แบรนด์ หลากสี ออกแบบได้ตามต้องการ ขั้นต่ำ 100 ใบ ราคาโรงงาน', image: '/images/NFC_02.png' },
    { name: 'ป้าย NFC Google Review หลายสี', desc: 'ป้ายตั้งโต๊ะ NFC สำหรับรีวิว Google มีให้เลือกหลายสี พิมพ์โลโก้แบรนด์ได้', image: '/images/NFC_03.png' },
    { name: 'การ์ด NFC กำหนดเองได้', desc: 'การ์ด NFC พิมพ์ภาพและข้อมูลได้ตามต้องการ เหมาะสำหรับ Photocard และนามบัตรดิจิทัล', image: '/images/NFC_04.png' },
    { name: 'สายรัดข้อมือ NFC ผ้า', desc: 'สายรัดข้อมือ NFC พิมพ์โลโก้ เหมาะสำหรับ Event คอนเสิร์ต และงาน Festival', image: '/images/NFC_05.png' },
    { name: 'ป้าย NFC Social Media', desc: 'ป้ายตั้งโต๊ะ NFC เชื่อมต่อ Google, Instagram, Facebook แตะเพื่อ Follow ได้ทันที', image: '/images/NFC_06.png' },
    { name: 'สายรัดข้อมือ NFC ยืดหยุ่น', desc: 'สายรัดข้อมือ NFC ผ้ายืด พิมพ์โลโก้แบรนด์ได้ เหมาะสำหรับ Event และ Access Control', image: '/images/NFC_07.png' },
    { name: 'การ์ด RFID Blocking', desc: 'การ์ด RFID Blocking ป้องกันข้อมูล พิมพ์โลโก้แบรนด์ได้ ขั้นต่ำ 100 ใบ', image: '/images/NFC_08.png' },
    { name: 'การ์ด NFC Tap to Connect', desc: 'การ์ด NFC แตะเพื่อเชื่อมต่อเว็บไซต์ โซเชียลมีเดีย และ Landing Page ได้ทันที', image: '/images/NFC_09.png' },
    { name: 'นามบัตร NFC โลหะ', desc: 'นามบัตร NFC วัสดุโลหะพรีเมียม พิมพ์ข้อมูลติดต่อ แตะเพื่อแชร์ได้ทันที', image: '/images/NFC_10.png' },
    { name: 'การ์ด NFC พรีเมียม Emboss', desc: 'การ์ด NFC พิมพ์นูน (Emboss) โลโก้แบรนด์ วัสดุพรีเมียม ขั้นต่ำ 100 ใบ', image: '/images/NFC_11.png' },
    { name: 'การ์ด NFC โลหะ Matte Black', desc: 'การ์ด NFC โลหะสีดำ Matte แกะสลักโลโก้ได้ พรีเมียม เหมาะสำหรับแบรนด์หรู', image: '/images/NFC_12.png' },
  ],
}

export default nfcCard
