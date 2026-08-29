import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingCart, Truck, Shield, ChevronRight, Heart } from 'lucide-react'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'
import ProductImage from '../../components/ProductImage'
import ProductCard from '../../components/ProductCard'
import PincodeChecker from '../../components/PincodeChecker'
import { products, getDiscount, formatPrice } from '../../data/mockData'
import { useCart } from '../../context/CartContext'

export default function ProductDetails() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))
  const { addToCart } = useCart()
  const [qty, setQty] = useState(1)

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
        <Link to="/products" className="text-brand-600 mt-4 inline-block">Back to products</Link>
      </div>
    )
  }

  const discount = getDiscount(product.mrp, product.price)
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
  const outOfStock = product.stock === 0

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 animate-fade-in">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-brand-600">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/products" className="hover:text-brand-600">Products</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-gray-900 font-medium truncate">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
        {/* Image */}
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden bg-gray-100">
            <ProductImage product={product} alt={product.name} className="w-full h-full object-cover" />
          </div>
          {discount > 0 && (
            <div className="absolute top-4 left-4">
              <Badge variant="offer" className="!text-sm !px-3 !py-1">{discount}% OFF</Badge>
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <p className="text-sm text-gray-400 font-mono mb-2">SKU: {product.sku}</p>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="font-semibold text-sm">{product.rating}</span>
            </div>
            <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
            <span className="text-sm text-gray-300">|</span>
            <span className="text-sm text-gray-500">{product.weight}</span>
          </div>

          {product.tags?.length > 0 && (
            <div className="flex gap-2 mb-4">
              {product.tags.map(tag => <Badge key={tag} variant={tag === 'Best Seller' ? 'dark' : 'default'}>{tag}</Badge>)}
            </div>
          )}

          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl font-bold text-gray-900">{formatPrice(product.price)}</span>
            {product.mrp > product.price && (
              <>
                <span className="text-lg text-gray-400 line-through">{formatPrice(product.mrp)}</span>
                <span className="text-sm font-semibold text-offer">Save {formatPrice(product.mrp - product.price)}</span>
              </>
            )}
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

          <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-gray-500">Weight</p>
              <p className="font-semibold text-gray-900">{product.weight}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-gray-500">Shelf Life</p>
              <p className="font-semibold text-gray-900">{product.shelfLife}</p>
            </div>
          </div>

          {/* Stock */}
          <div className="mb-6">
            {outOfStock ? (
              <p className="text-red-500 font-medium">Out of Stock</p>
            ) : product.stock <= 10 ? (
              <p className="text-orange-500 font-medium">Only {product.stock} left in stock — order soon!</p>
            ) : (
              <p className="text-brand-600 font-medium">✓ In Stock ({product.stock} available)</p>
            )}
          </div>

          {/* Qty + Add to cart */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3 hover:bg-gray-50 transition-colors">
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 py-2 font-semibold text-sm min-w-[3rem] text-center">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="p-3 hover:bg-gray-50 transition-colors">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <Button size="lg" disabled={outOfStock} onClick={() => addToCart(product, qty)} className="flex-1">
              <ShoppingCart className="w-5 h-5" /> Add to Cart
            </Button>
            <button className="p-3 border border-gray-200 rounded-xl hover:bg-red-50 hover:border-red-200 transition-colors">
              <Heart className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Trust */}
          <div className="flex gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-brand-600" /> Same day delivery</div>
            <div className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-brand-600" /> FSSAI certified</div>
          </div>
        </div>
      </div>

      {/* Pincode */}
      <div className="max-w-lg mb-16">
        <PincodeChecker />
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section>
          <h2 className="font-display text-xl font-bold text-gray-900 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  )
}
