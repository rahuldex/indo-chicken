import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, MapPin, Clock, Phone, CheckCircle } from 'lucide-react'
import Badge from '../../components/ui/Badge'
import { orders, formatPrice } from '../../data/mockData'

const statusConfig = {
  delivered: { label: 'Delivered', variant: 'success' },
  out_for_delivery: { label: 'Out for Delivery', variant: 'offer' },
  processing: { label: 'Processing', variant: 'default' },
}

export default function OrderTracking() {
  const { id } = useParams()
  const order = orders.find(o => o.id === id) || orders[1]
  const status = statusConfig[order.status] || statusConfig.processing

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 animate-fade-in">
      <div className="flex items-center gap-3 mb-8">
        <Link to="/orders" className="p-2 rounded-xl hover:bg-gray-100"><ArrowLeft className="w-5 h-5 text-gray-600" /></Link>
        <div>
          <h1 className="font-display text-xl sm:text-2xl font-bold text-gray-900">Order Tracking</h1>
          <p className="text-sm text-gray-500">{order.id}</p>
        </div>
        <Badge variant={status.variant} className="ml-auto">{status.label}</Badge>
      </div>

      {/* Tracking timeline */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-6">
        <h3 className="font-semibold text-gray-900 mb-6">Delivery Status</h3>
        <div className="relative">
          {order.tracking.map((step, i) => (
            <div key={i} className="flex gap-4 pb-8 last:pb-0 relative">
              {i < order.tracking.length - 1 && (
                <div className={`absolute left-[15px] top-8 w-0.5 h-full ${step.done ? 'bg-brand-600' : 'bg-gray-200'}`} />
              )}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 ${step.done ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                {step.done ? <CheckCircle className="w-4 h-4" /> : <div className="w-2 h-2 rounded-full bg-gray-300" />}
              </div>
              <div className="pt-1">
                <p className={`font-semibold text-sm ${step.done ? 'text-gray-900' : 'text-gray-400'}`}>{step.status}</p>
                {step.time && <p className="text-xs text-gray-500 mt-0.5">{step.time}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order details */}
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-brand-600" />
            <h3 className="font-semibold text-sm text-gray-900">Delivery Address</h3>
          </div>
          <p className="text-sm text-gray-600">{order.address}</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4 text-brand-600" />
            <h3 className="font-semibold text-sm text-gray-900">Delivery Slot</h3>
          </div>
          <p className="text-sm text-gray-600">{order.slot}</p>
        </div>
      </div>

      {/* Items */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-4">Order Items</h3>
        <div className="space-y-3">
          {order.items.map((item, i) => (
            <div key={i} className="flex justify-between text-sm">
              <span className="text-gray-700">{item.name} × {item.qty}</span>
              <span className="font-medium">{formatPrice(item.price * item.qty)}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between">
          <span className="font-semibold text-gray-900">Total</span>
          <span className="font-bold text-lg">{formatPrice(order.total)}</span>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
          <Phone className="w-4 h-4" /> Need help? Call <a href="tel:18001234567" className="text-brand-600 font-medium">1800-123-4567</a>
        </p>
      </div>
    </div>
  )
}
