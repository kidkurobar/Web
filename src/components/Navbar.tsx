import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [location] = useLocation()

  const links = [
    { href: '/#about', label: 'เกี่ยวกับเรา' },
    { href: '/products', label: 'สินค้า' },
    { href: '/showcase', label: 'ผลงาน' },
    { href: '/process', label: 'ขั้นตอน' },
    { href: '/contact', label: 'ติดต่อ' },
  ]

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/sourcing8_final_interlock_1.png" alt="Sourcing8" className="h-8 w-auto" />
            <span className="text-xl font-bold text-gray-900">Sourcing8</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-700 hover:text-[#E63022] font-medium transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary">
              ติดต่อเรา
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block text-gray-700 hover:text-[#E63022] font-medium py-2"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary block text-center mt-2">
            ติดต่อเรา
          </Link>
        </div>
      )}
    </nav>
  )
}
