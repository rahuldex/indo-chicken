import { Link } from 'react-router-dom'
import { formatPrice } from '../data/mockData'
import { useCart } from '../context/CartContext'

export default function OrderSummary({ showCheckout = true }) {
  const { items, subtotal, deliveryFee, discount, total } = useCart()

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm sticky top-24">
      <h3 className="font-semibold text-gray-900 mb-4">Order Summary</h3>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Subtotal ({items.length} items)</span>
          <span className="font-medium">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Delivery Fee</span>
          {deliveryFee === 0 ? (
            <span className="font-medium text-brand-600">FREE</span>
          ) : (
            <span className="font-medium">{formatPrice(deliveryFee)}</span>
          )}
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-brand-600">
            <span>Coupon Discount</span>
            <span className="font-medium">-{formatPrice(discount)}</span>
          </div>
        )}
        <div className="border-t border-gray-100 pt-3 flex justify-between">
          <span className="font-semibold text-gray-900">Total</span>
          <span className="font-bold text-lg text-gray-900">{formatPrice(total)}</span>
        </div>
      </div>
      {subtotal > 0 && subtotal < 499 && (
        <p className="mt-3 text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
          Add {formatPrice(499 - subtotal)} more for <strong className="text-brand-600">FREE delivery</strong>
        </p>
      )}
      {showCheckout && items.length > 0 && (
        <Link
          to="/checkout"
          className="mt-4 w-full flex items-center justify-center px-5 py-3 bg-brand-600 text-white font-medium rounded-xl hover:bg-brand-700 transition-colors"
        >
          Proceed to Checkout
        </Link>
      )}
    </div>
  )
}
