# Sourcing8

React + TypeScript + Tailwind CSS + Vite

## Stack
- React 19
- TypeScript
- Tailwind CSS v3
- Vite
- Wouter (routing)
- Lucide React (icons)

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   └── ContactSection.tsx
├── data/
│   └── products.ts        # สินค้า + ขั้นตอน
├── pages/
│   ├── Home.tsx
│   ├── Products.tsx
│   ├── ProductDetail.tsx
│   ├── Process.tsx
│   └── Contact.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Images

วางรูปภาพไว้ที่ `public/images/`:

| ไฟล์ | ใช้ใน |
|------|-------|
| `hero.jpg` | Hero section หน้าแรก |
| `spunbond-bag.jpg` | Product card ถุงสปันบอนด์ |
| `tumbler.jpg` | Product card แก้วน้ำ |
| `pen.jpg` | Product card ปากกา |
| `pen-1.jpg` `pen-2.jpg` `pen-3.jpg` | Product detail ปากกา |
| `paper-bag.jpg` | Product card ถุงกระดาษ |
| `nfc-card.jpg` | Product card การ์ด NFC |
| `other.jpg` | Product card สินค้าอื่นๆ |

## Contact Info

แก้ไขข้อมูลติดต่อจริงใน:
- `src/components/ContactSection.tsx` — Line ID, เบอร์โทร
- `src/pages/Contact.tsx` — Line ID, Messenger, เบอร์โทร, Email
- `src/pages/ProductDetail.tsx` — Line ID, Messenger, เบอร์โทร
- `src/components/Footer.tsx` — เบอร์โทร, Email

## Deploy

รองรับ: Vercel, Netlify, หรือ Static hosting ทั่วไป

```bash
npm run build
# output อยู่ที่ dist/
```
