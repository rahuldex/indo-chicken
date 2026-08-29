import { Link } from 'react-router-dom'
import { ShoppingCart, Heart } from 'lucide-react'
import Badge from './ui/Badge'
import Button from './ui/Button'
import ProductImage from './ProductImage'
import { getDiscount, formatPrice } from '../data/mockData'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const discount = getDiscount(product.mrp, product.price)
  const outOfStock = product.stock === 0

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-100 transition-all duration-300 overflow-hidden animate-fade-in">
      <Link to={`/products/${product.id}`} className="block relative">
        <div className="aspect-[4/3] overflow-hidden bg-gray-100">
          <ProductImage
            product={product}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        {discount > 0 && (
          <div className="absolute top-3 left-3">
            <Badge variant="offer">{discount}% OFF</Badge>
          </div>
        )}
        {product.tags?.includes('Best Seller') && (
          <div className="absolute top-3 right-3">
            <Badge variant="dark">Best Seller</Badge>
          </div>
        )}
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation() }}
          className="absolute bottom-3 right-3 p-2 bg-white/90 backdrop-blur rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
        >
          <Heart className="w-4 h-4 text-gray-400 hover:text-red-500 transition-colors" />
        </button>
      </Link>

      <div className="p-4">
        <p className="text-xs text-gray-400 font-mono mb-1">{product.sku}</p>
        <Link to={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-1 group-hover:text-brand-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-gray-500 mb-3">{product.unit}</p>

        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
          {product.mrp > product.price && (
            <span className="text-sm text-gray-400 line-through">{formatPrice(product.mrp)}</span>
          )}
        </div>

        <div className="flex items-center justify-between gap-2">
          {outOfStock ? (
            <span className="text-xs font-medium text-red-500">Out of Stock</span>
          ) : product.stock <= 10 ? (
            <span className="text-xs font-medium text-orange-500">Only {product.stock} left</span>
          ) : (
            <span className="text-xs font-medium text-brand-600">In Stock</span>
          )}
          <Button
            size="sm"
            disabled={outOfStock}
            onClick={() => addToCart(product)}
            className="!px-3"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Add</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
