import { Link } from 'react-router-dom'
import { ShoppingCart, ChevronRight } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../data/mockData'

export default function StickyCartBar() {
  const { cartCount, total } = useCart()

  if (cartCount === 0) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden animate-slide-up">
      <Link
        to="/cart"
        className="flex items-center justify-between mx-4 mb-4 px-5 py-3.5 bg-brand-600 text-white rounded-2xl shadow-lg shadow-brand-600/30"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-white text-brand-700 text-[10px] font-bold rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </div>
          <div>
            <p className="text-sm font-semibold">{cartCount} item{cartCount > 1 ? 's' : ''}</p>
            <p className="text-xs text-brand-100">{formatPrice(total)}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-sm font-semibold">
          View Cart <ChevronRight className="w-4 h-4" />
        </div>
      </Link>
    </div>
  )
}
