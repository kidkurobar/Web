import { useEffect } from 'react'
import { Link } from 'wouter'

export default function NotFound() {
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex'
    document.head.appendChild(meta)
    document.title = 'ไม่พบหน้านี้ (404) | Sourcing8'
    return () => {
      document.head.removeChild(meta)
    }
  }, [])

  return (
    <section className="py-24 text-center px-4">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-8">ไม่พบหน้าที่คุณต้องการ</p>
      <div className="flex gap-4 justify-center flex-wrap">
        <Link href="/" className="btn-primary">กลับหน้าแรก</Link>
        <Link
          href="/products"
          className="border-2 border-gray-300 text-gray-700 rounded-full px-6 py-2.5 font-semibold hover:border-[#E63022] hover:text-[#E63022] transition-colors"
        >
          ดูสินค้า
        </Link>
      </div>
    </section>
  )
}
