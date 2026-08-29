import { useState } from 'react'
import { MapPin, CheckCircle, XCircle, Loader2 } from 'lucide-react'
import { serviceablePincodes } from '../data/mockData'
import { useCart } from '../context/CartContext'

export default function PincodeChecker({ compact = false }) {
  const { pincode, setPincode, pincodeValid, setPincodeValid } = useCart()
  const [checking, setChecking] = useState(false)

  const checkPincode = () => {
    if (pincode.length !== 6) return
    setChecking(true)
    setTimeout(() => {
      setPincodeValid(serviceablePincodes.includes(pincode))
      setChecking(false)
    }, 800)
  }

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <MapPin className="w-4 h-4 text-brand-600 shrink-0" />
        <input
          type="text"
          maxLength={6}
          placeholder="Enter pincode"
          value={pincode}
          onChange={(e) => { setPincode(e.target.value.replace(/\D/g, '')); setPincodeValid(null) }}
          className="w-24 bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
        <button onClick={checkPincode} disabled={pincode.length !== 6 || checking} className="text-xs font-semibold text-brand-600 hover:text-brand-700 disabled:opacity-50">
          {checking ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Check'}
        </button>
        {pincodeValid === true && <CheckCircle className="w-4 h-4 text-brand-600" />}
        {pincodeValid === false && <XCircle className="w-4 h-4 text-red-500" />}
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <MapPin className="w-5 h-5 text-brand-600" />
        <h3 className="font-semibold text-gray-900">Check Delivery Availability</h3>
      </div>
      <p className="text-sm text-gray-500 mb-4">Enter your pincode to see delivery options and slots</p>
      <div className="flex gap-2">
        <input
          type="text"
          maxLength={6}
          placeholder="e.g. 110016"
          value={pincode}
          onChange={(e) => { setPincode(e.target.value.replace(/\D/g, '')); setPincodeValid(null) }}
          className="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
        />
        <button
          onClick={checkPincode}
          disabled={pincode.length !== 6 || checking}
          className="px-5 py-2.5 bg-brand-600 text-white text-sm font-medium rounded-xl hover:bg-brand-700 transition-colors disabled:opacity-50"
        >
          {checking ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Check'}
        </button>
      </div>
      {pincodeValid === true && (
        <div className="mt-3 flex items-center gap-2 text-sm text-brand-700 bg-brand-50 rounded-lg px-3 py-2 animate-fade-in">
          <CheckCircle className="w-4 h-4" />
          <span>Great! We deliver to <strong>{pincode}</strong>. Same-day delivery available.</span>
        </div>
      )}
      {pincodeValid === false && (
        <div className="mt-3 flex items-center gap-2 text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2 animate-fade-in">
          <XCircle className="w-4 h-4" />
          <span>Sorry, we don't deliver to <strong>{pincode}</strong> yet. We're expanding soon!</span>
        </div>
      )}
    </div>
  )
}
