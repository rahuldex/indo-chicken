import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react'
import Button from '../../components/ui/Button'
import ProductImage from '../../components/ProductImage'
import CouponSection from '../../components/CouponSection'
import OrderSummary from '../../components/OrderSummary'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../data/mockData'

export default function Cart() {
  const { items, updateQty, removeFromCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center animate-fade-in">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-10 h-10 text-gray-300" />
        </div>
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Add some fresh chicken or eggs to get started!</p>
        <Link to="/products">
          <Button size="lg">Browse Products</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 animate-fade-in">
      <div className="flex items-center gap-3 mb-8">
        <Link to="/products" className="p-2 rounded-xl hover:bg-gray-100 transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </Link>
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-500 text-sm">{items.length} item{items.length > 1 ? 's' : ''}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <div key={item.id} className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 flex gap-4 shadow-sm animate-scale-in">
              <Link to={`/products/${item.id}`} className="shrink-0">
                <ProductImage product={item} alt={item.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover" />
              </Link>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs text-gray-400 font-mono">{item.sku}</p>
                    <Link to={`/products/${item.id}`}>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base hover:text-brand-600 transition-colors">{item.name}</h3>
                    </Link>
                    <p className="text-xs text-gray-500 mt-0.5">{item.unit}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                    <button onClick={() => updateQty(item.id, item.qty - 1)} className="p-1.5 hover:bg-gray-50"><Minus className="w-3.5 h-3.5" /></button>
                    <span className="px-3 text-sm font-semibold">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} className="p-1.5 hover:bg-gray-50"><Plus className="w-3.5 h-3.5" /></button>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{formatPrice(item.price * item.qty)}</p>
                    {item.mrp > item.price && (
                      <p className="text-xs text-gray-400 line-through">{formatPrice(item.mrp * item.qty)}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <CouponSection />
        </div>

        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}
