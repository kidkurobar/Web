export type { Product, ProductVariant, ProductStat } from './types'

import spunbondBag from './products/spunbond-bag'
import tumbler from './products/tumbler'
import pen from './products/pen'
import paperBag from './products/paper-bag'
import nfcCard from './products/nfc-card'
import other from './products/other'

export const products = [spunbondBag, tumbler, pen, paperBag, nfcCard, other]

export const processSteps = [
  { step: 1, title: 'เลือกสินค้า', desc: 'เลือกสินค้าที่ชอบจากหลากหลายตัวเลือกของเรา' },
  { step: 2, title: 'ส่งแบบและขนาด', desc: 'ส่งแบบออกแบบและขนาดที่ต้องการ เราจะประเมินราคาให้' },
  { step: 3, title: 'ยืนยันและชำระราคา', desc: 'ตกลงราคาและชำระเงินเพื่อเริ่มกระบวนการ' },
  { step: 4, title: 'ยืนยันแบบก่อนผลิต', desc: 'เราส่งตัวอย่าง ให้คุณตรวจสอบและอนุมัติก่อนผลิตจำนวนมาก' },
  { step: 5, title: 'ผลิตสินค้า', desc: 'ทีมผู้เชี่ยวชาญของเราผลิตสินค้าตามมาตรฐานคุณภาพสูง' },
  { step: 6, title: 'ตรวจสอบสินค้า', desc: 'ตรวจสอบคุณภาพสินค้าอย่างเข้มงวดก่อนจัดส่ง' },
  { step: 7, title: 'รับสินค้า', desc: 'สินค้าพร้อมส่งมอบให้คุณแล้ว ใช้ได้เลย!' },
]
