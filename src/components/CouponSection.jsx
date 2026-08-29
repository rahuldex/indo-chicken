import { useState } from 'react'
import { Tag, Check, X } from 'lucide-react'
import { coupons } from '../data/mockData'
import { useCart } from '../context/CartContext'

export default function CouponSection() {
  const { coupon, setCoupon, subtotal } = useCart()
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [showList, setShowList] = useState(false)

  const applyCoupon = (c) => {
    if (subtotal < c.minOrder) {
      setError(`Minimum order of ₹${c.minOrder} required`)
      return
    }
    setCoupon(c)
    setCode(c.code)
    setError('')
    setShowList(false)
  }

  const removeCoupon = () => {
    setCoupon(null)
    setCode('')
    setError('')
  }

  const handleApply = () => {
    const found = coupons.find(c => c.code === code.toUpperCase())
    if (!found) { setError('Invalid coupon code'); return }
    applyCoupon(found)
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Tag className="w-5 h-5 text-offer" />
        <h3 className="font-semibold text-gray-900">Apply Coupon</h3>
      </div>

      {coupon ? (
        <div className="flex items-center justify-between bg-brand-50 border border-brand-200 rounded-xl px-4 py-3 animate-scale-in">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-brand-600" />
            <div>
              <p className="text-sm font-semibold text-brand-700">{coupon.code}</p>
              <p className="text-xs text-brand-600">{coupon.description}</p>
            </div>
          </div>
          <button onClick={removeCoupon} className="p-1 hover:bg-brand-100 rounded-lg transition-colors">
            <X className="w-4 h-4 text-brand-600" />
          </button>
        </div>
      ) : (
        <>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={code}
              onChange={(e) => { setCode(e.target.value.toUpperCase()); setError('') }}
              className="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-sm uppercase outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            />
            <button
              onClick={handleApply}
              className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors"
            >
              Apply
            </button>
          </div>
          {error && <p className="text-xs text-red-500 mb-2">{error}</p>}
          <button onClick={() => setShowList(!showList)} className="text-sm text-brand-600 font-medium hover:text-brand-700">
            {showList ? 'Hide' : 'View'} available coupons
          </button>
          {showList && (
            <div className="mt-3 space-y-2 animate-slide-up">
              {coupons.map(c => (
                <button
                  key={c.code}
                  onClick={() => applyCoupon(c)}
                  className="w-full flex items-center justify-between p-3 border border-dashed border-brand-200 rounded-xl hover:bg-brand-50 transition-colors text-left"
                >
                  <div>
                    <p className="text-sm font-bold text-brand-700">{c.code}</p>
                    <p className="text-xs text-gray-500">{c.description}</p>
                  </div>
                  <span className="text-xs font-medium text-brand-600 bg-brand-100 px-2 py-1 rounded-lg">Apply</span>
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
