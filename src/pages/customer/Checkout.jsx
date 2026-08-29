import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, CreditCard, Banknote, Smartphone, CheckCircle, ArrowLeft } from 'lucide-react'
import Button from '../../components/ui/Button'
import DeliverySlotPicker from '../../components/DeliverySlotPicker'
import OrderSummary from '../../components/OrderSummary'
import { addresses } from '../../data/mockData'
import { useCart } from '../../context/CartContext'

export default function Checkout() {
  const { items, clearCart } = useCart()
  const [step, setStep] = useState(1)
  const [selectedAddress, setSelectedAddress] = useState(addresses.find(a => a.isDefault)?.id)
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [paymentMethod, setPaymentMethod] = useState('upi')
  const [orderPlaced, setOrderPlaced] = useState(false)

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">No items to checkout</h2>
        <Link to="/products" className="text-brand-600 mt-4 inline-block">Browse Products</Link>
      </div>
    )
  }

  if (orderPlaced) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center animate-scale-in">
        <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-brand-600" />
        </div>
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h2>
        <p className="text-gray-500 mb-2">Your order ID is <strong>ORD-2024-006</strong></p>
        <p className="text-sm text-gray-400 mb-8">We'll deliver your fresh items in the selected slot.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/orders/ORD-2024-006"><Button>Track Order</Button></Link>
          <Link to="/products"><Button variant="secondary">Continue Shopping</Button></Link>
        </div>
      </div>
    )
  }

  const steps = ['Address', 'Delivery Slot', 'Payment']

  const handlePlaceOrder = () => {
    setOrderPlaced(true)
    clearCart()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 animate-fade-in">
      <div className="flex items-center gap-3 mb-8">
        <Link to="/cart" className="p-2 rounded-xl hover:bg-gray-100"><ArrowLeft className="w-5 h-5 text-gray-600" /></Link>
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">Checkout</h1>
      </div>

      {/* Steps indicator */}
      <div className="flex items-center gap-2 mb-8 max-w-md">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ${step > i + 1 ? 'bg-brand-600 text-white' : step === i + 1 ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
              {step > i + 1 ? '✓' : i + 1}
            </div>
            <span className={`text-xs font-medium hidden sm:block ${step === i + 1 ? 'text-gray-900' : 'text-gray-400'}`}>{s}</span>
            {i < steps.length - 1 && <div className={`flex-1 h-0.5 ${step > i + 1 ? 'bg-brand-600' : 'bg-gray-200'}`} />}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Step 1: Address */}
          {step === 1 && (
            <div className="animate-slide-up">
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-brand-600" />
                  <h3 className="font-semibold text-gray-900">Delivery Address</h3>
                </div>
                <div className="space-y-3">
                  {addresses.map(addr => (
                    <button
                      key={addr.id}
                      onClick={() => setSelectedAddress(addr.id)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${selectedAddress === addr.id ? 'border-brand-600 bg-brand-50' : 'border-gray-100 hover:border-brand-200'}`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{addr.label}</span>
                        {addr.isDefault && <span className="text-xs text-brand-600 font-medium">Default</span>}
                      </div>
                      <p className="font-semibold text-sm text-gray-900">{addr.name}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{addr.line1}, {addr.line2}</p>
                      <p className="text-sm text-gray-500">{addr.city}, {addr.state} - {addr.pincode}</p>
                      <p className="text-sm text-gray-400 mt-1">{addr.phone}</p>
                    </button>
                  ))}
                </div>
                <Link to="/addresses" className="mt-4 inline-block text-sm font-medium text-brand-600 hover:text-brand-700">
                  + Add New Address
                </Link>
              </div>
              <Button size="lg" className="mt-4 w-full sm:w-auto" onClick={() => setStep(2)}>Continue to Delivery Slot</Button>
            </div>
          )}

          {/* Step 2: Delivery Slot */}
          {step === 2 && (
            <div className="animate-slide-up space-y-4">
              <DeliverySlotPicker onSelect={setSelectedSlot} />
              <div className="flex gap-3">
                <Button variant="secondary" onClick={() => setStep(1)}>Back</Button>
                <Button size="lg" onClick={() => setStep(3)} disabled={!selectedSlot}>Continue to Payment</Button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div className="animate-slide-up">
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Payment Method</h3>
                <div className="space-y-3">
                  {[
                    { id: 'upi', icon: Smartphone, label: 'UPI', desc: 'Google Pay, PhonePe, Paytm' },
                    { id: 'card', icon: CreditCard, label: 'Credit / Debit Card', desc: 'Visa, Mastercard, RuPay' },
                    { id: 'cod', icon: Banknote, label: 'Cash on Delivery', desc: 'Pay when you receive' },
                  ].map(method => (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${paymentMethod === method.id ? 'border-brand-600 bg-brand-50' : 'border-gray-100 hover:border-brand-200'}`}
                    >
                      <method.icon className="w-5 h-5 text-gray-600" />
                      <div>
                        <p className="font-semibold text-sm text-gray-900">{method.label}</p>
                        <p className="text-xs text-gray-500">{method.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <Button variant="secondary" onClick={() => setStep(2)}>Back</Button>
                <Button size="lg" className="flex-1" onClick={handlePlaceOrder}>Place Order</Button>
              </div>
            </div>
          )}
        </div>

        <div>
          <OrderSummary showCheckout={false} />
        </div>
      </div>
    </div>
  )
}
