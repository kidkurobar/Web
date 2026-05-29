export interface ProductVariant {
  name: string
  desc: string
  image: string
}

export interface ProductStat {
  value: string
  label: string
  desc: string
}

export interface Product {
  id: string
  slug: string
  name: string
  pageTitle?: string
  pageSubtitle?: string
  description: string
  shortDesc: string
  cta: string
  ctaType: 'catalog' | 'inquiry'
  image: string
  stats?: ProductStat[]
  variants?: ProductVariant[]
}
