import { Link } from 'wouter'
import { Package } from 'lucide-react'
import type { Product } from '../data/products'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="product-card">
      {/* Image */}
      <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-[#E63022] flex items-center justify-center mb-4">
          <Package size={22} className="text-white" />
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">{product.shortDesc}</p>

        {product.ctaType === 'catalog' ? (
          <Link
            href={`/products/${product.slug}`}
            className="block w-full bg-[#E63022] text-white text-center py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            {product.cta}
          </Link>
        ) : (
          <Link
            href="/contact"
            className="block w-full bg-[#E63022] text-white text-center py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            {product.cta}
          </Link>
        )}
      </div>
    </div>
  )
}
