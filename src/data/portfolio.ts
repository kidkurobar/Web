// Portfolio data structure — เตรียมไว้รอใส่ข้อมูลจริงภายหลัง

export interface PortfolioItem {
  id: string
  client: string           // ชื่อลูกค้า / แบรนด์
  industry: string         // ประเภทธุรกิจ เช่น Event, Retail, Corporate
  product: string          // สินค้าที่ผลิต
  quantity: string         // จำนวนที่สั่ง เช่น "500 ชิ้น"
  image: string            // path รูปผลงาน
  description?: string     // คำอธิบายสั้นๆ (optional)
  tag?: string             // tag เช่น "Event", "Corporate Gift", "Branding"
}

export interface SocialProofStat {
  value: string            // เช่น "50+", "100+", "14 วัน"
  label: string            // เช่น "ลูกค้าที่ไว้วางใจ"
  desc: string             // คำอธิบายย่อ
}

// Stats — แก้ตัวเลขตามข้อมูลจริง
export const socialProofStats: SocialProofStat[] = [
  {
    value: '50+',
    label: 'ลูกค้าที่ไว้วางใจ',
    desc: 'ทั้งองค์กร SME และ Event Organizer',
  },
  {
    value: '10+',
    label: 'ประเภทสินค้า',
    desc: 'ครอบคลุมทุก Category ของพรีเมียม',
  },
  {
    value: '14-21',
    label: 'วันส่งมอบ',
    desc: 'นับจากวันอนุมัติแบบ พร้อมอัปเดตทุกขั้นตอน',
  },
]

// Portfolio items — placeholder รอข้อมูลจริง
export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    client: 'Slip to Sleep',
    industry: 'Retail',
    product: 'ถุงสปันบอนด์พิมพ์โลโก้',
    quantity: '1,000 ชิ้น',
    image: '/images/showcase/SC_5.png',
    tag: 'Branding',
  },
  {
    id: '2',
    client: 'Slip to Sleep x Liunic',
    industry: 'Retail',
    product: 'ถุงกระดาษพิมพ์โลโก้',
    quantity: '500 ชิ้น',
    image: '/images/showcase/SC_7.png',
    tag: 'Packaging',
  },
  {
    id: '3',
    client: 'LaundryHub',
    industry: 'Service',
    product: 'ถุงพลาสติกพิมพ์โลโก้',
    quantity: '2,000 ชิ้น',
    image: '/images/showcase/SC_4.png',
    tag: 'Branding',
  },
  {
    id: '4',
    client: 'Parnas Hotel Jeju',
    industry: 'Hospitality',
    product: 'การ์ด NFC พิมพ์โลโก้',
    quantity: '300 ใบ',
    image: '/images/showcase/SC_3.png',
    tag: 'NFC',
  },
  {
    id: '5',
    client: 'Singha Mawinn Gym',
    industry: 'Sport',
    product: 'เสื้อและกางเกงพิมพ์โลโก้',
    quantity: '100 ชุด',
    image: '/images/showcase/SC_9.jpg',
    tag: 'Apparel',
  },
  {
    id: '6',
    client: 'Mori Nail',
    industry: 'Beauty',
    product: 'การ์ดขอบคุณพิมพ์โลโก้',
    quantity: '500 ใบ',
    image: '/images/showcase/SC_8.jpg',
    tag: 'Print',
  },
]
