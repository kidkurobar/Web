import { Link } from 'wouter'
import { Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Sourcing8</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              บริการผลิตสินค้าพิมพ์โลโก้ พรีเมียม และสร้างแบรนด์ OEM ของคุณ
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">ลิงก์</h4>
            <ul className="space-y-2 text-sm">
              {['เกี่ยวกับเรา', 'สินค้า', 'ขั้นตอน', 'ติดต่อ'].map((item, i) => {
                const hrefs = ['/#about', '/products', '/process', '/contact']
                return (
                  <li key={item}>
                    <Link href={hrefs[i]} className="hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">ติดต่อ</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={14} />
                <span>+66 XX-XXXX-XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} />
                <span>info@sourcing8.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-3">ติดตามเรา</h4>
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Line</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © 2026 Sourcing8. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
