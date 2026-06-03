export interface ShowcaseItem {
  id: string
  image: string
  product: string
  client: string
}

export const showcaseItems: ShowcaseItem[] = [
  // วางรูปที่ public/images/showcase/
  // ชื่อไฟล์แนะนำ: showcase_01.jpg, showcase_02.jpg, ...
  { id: '1', image: '/images/showcase/showcase_01.jpg', product: 'ถุงสปันบอนด์สลักโลโก้', client: 'XXX Shop' },
  { id: '2', image: '/images/showcase/showcase_02.jpg', product: 'ปากกาพิมพ์โลโก้', client: 'XXX Brand' },
  { id: '3', image: '/images/showcase/showcase_03.jpg', product: 'แก้วน้ำตีโลโก้', client: 'XXX Company' },
  { id: '4', image: '/images/showcase/showcase_04.jpg', product: 'ถุงกระดาษพิมพ์โลโก้', client: 'XXX Store' },
  { id: '5', image: '/images/showcase/showcase_05.jpg', product: 'การ์ด NFC พิมพ์โลโก้', client: 'XXX Group' },
  { id: '6', image: '/images/showcase/showcase_06.jpg', product: 'พวงกุญแจสลักโลโก้', client: 'XXX Event' },
  { id: '7', image: '/images/showcase/showcase_07.jpg', product: 'สมุดโน้ตพิมพ์โลโก้', client: 'XXX Office' },
  { id: '8', image: '/images/showcase/showcase_08.jpg', product: 'กระเป๋า Canvas พิมพ์โลโก้', client: 'XXX Market' },
  { id: '9', image: '/images/showcase/showcase_09.jpg', product: 'กล่องของขวัญพิมพ์โลโก้', client: 'XXX Premium' },
]
