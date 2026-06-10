import { products } from './data'

export const BASE_URL = 'https://www.sourcing8.in.th'
export const DEFAULT_OG_IMAGE = `${BASE_URL}/sourcing8_final_interlock_1.png`

export interface PageMeta {
  title: string
  description: string
  path: string
  ogImage?: string
  noindex?: boolean
}

// Static pages
const staticMeta: PageMeta[] = [
  {
    path: '/',
    title: 'รับผลิตสินค้าพิมพ์โลโก้ ของขวัญองค์กร MOQ น้อย | Sourcing8',
    description:
      'รับผลิตสินค้าพิมพ์โลโก้พรีเมียม ถุงสปันบอนด์ แก้วน้ำ ปากกา การ์ด NFC สั่งขั้นต่ำน้อย จัดส่งไว ปรึกษาฟรี',
  },
  {
    path: '/about',
    title: 'เกี่ยวกับเรา — รับผลิตของพรีเมียมพิมพ์โลโก้ | Sourcing8',
    description:
      'Sourcing8 รับผลิตของพรีเมียมพิมพ์โลโก้สำหรับองค์กรและงาน Event สั่งขั้นต่ำน้อย จัดส่งทั่วไทย',
  },
  {
    path: '/products',
    title: 'สินค้าพิมพ์โลโก้ทั้งหมด ขั้นต่ำน้อย ราคาโรงงาน | Sourcing8',
    description:
      'รวมสินค้าพรีเมียมพิมพ์โลโก้ ถุงสปันบอนด์ กระบอกน้ำ ปากกา ถุงกระดาษ การ์ด NFC สั่งขั้นต่ำน้อย ราคาโรงงาน',
  },
  {
    path: '/process',
    title: 'ขั้นตอนการสั่งผลิตสินค้าพิมพ์โลโก้ | Sourcing8',
    description:
      'ขั้นตอนสั่งผลิตของพรีเมียมพิมพ์โลโก้กับ Sourcing8 — เลือกสินค้า ส่งแบบ ยืนยัน ผลิต จัดส่งถึงมือ',
  },
  {
    path: '/contact',
    title: 'ติดต่อเรา — ขอใบเสนอราคาสินค้าพิมพ์โลโก้ | Sourcing8',
    description:
      'ติดต่อ Sourcing8 ขอใบเสนอราคาสินค้าพิมพ์โลโก้ โทร 090-6926642 หรือ LINE @389xbjxh ปรึกษาฟรี',
  },
  {
    path: '/showcase',
    title: 'ผลงานที่ผ่านมา — สินค้าพิมพ์โลโก้ | Sourcing8',
    description:
      'ตัวอย่างผลงานสินค้าพิมพ์โลโก้ที่ Sourcing8 ผลิตให้ลูกค้าองค์กรและงาน Event ทั่วประเทศ',
  },
  {
    path: '/sora',
    title: 'ปรึกษาของพรีเมียมพิมพ์โลโก้สำหรับองค์กร | Sourcing8',
    description:
      'ปรึกษาทีม Sourcing8 เรื่องของพรีเมียมและของแจก Event พิมพ์โลโก้ สั่งขั้นต่ำน้อย จัดส่งทั่วไทย',
  },
]

export function productMeta(slug: string): PageMeta | null {
  const p = products.find((x) => x.slug === slug)
  if (!p) return null
  return {
    path: `/products/${slug}`,
    title: `${p.pageTitle || p.name + 'พิมพ์โลโก้ ขั้นต่ำน้อย ราคาโรงงาน'} | Sourcing8`,
    description: p.shortDesc,
  }
}

// All routes to prerender
export function allRoutes(): PageMeta[] {
  const productRoutes = products
    .map((p) => productMeta(p.slug))
    .filter((m): m is PageMeta => m !== null)
  return [...staticMeta, ...productRoutes]
}

export function metaForPath(path: string): PageMeta {
  const found = staticMeta.find((m) => m.path === path)
  if (found) return found
  const m = path.match(/^\/products\/(.+)$/)
  if (m) {
    const pm = productMeta(m[1])
    if (pm) return pm
  }
  return {
    path,
    title: 'ไม่พบหน้านี้ (404) | Sourcing8',
    description: 'ไม่พบหน้าที่คุณต้องการ',
    noindex: true,
  }
}
