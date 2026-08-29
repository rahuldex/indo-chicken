import { Link } from 'react-router-dom'
import { Package, ChevronRight, Clock } from 'lucide-react'
import Badge from '../../components/ui/Badge'
import { orders, formatPrice } from '../../data/mockData'

const statusConfig = {
  delivered: { label: 'Delivered', variant: 'success' },
  out_for_delivery: { label: 'Out for Delivery', variant: 'offer' },
  processing: { label: 'Processing', variant: 'default' },
  pending: { label: 'Pending', variant: 'gray' },
  confirmed: { label: 'Confirmed', variant: 'default' },
  cancelled: { label: 'Cancelled', variant: 'danger' },
}

export default function MyOrders() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 animate-fade-in">
      <h1 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-2">My Orders</h1>
      <p className="text-gray-500 mb-8">Track and manage your orders</p>

      <div className="space-y-4">
        {orders.map(order => {
          const status = statusConfig[order.status] || statusConfig.pending
          return (
            <div key={order.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-4 sm:p-5 border-b border-gray-50 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{order.id}</p>
                  <p className="text-xs text-gray-500 mt-0.5">Placed on {order.date}</p>
                </div>
                <Badge variant={status.variant}>{status.label}</Badge>
              </div>
              <div className="p-4 sm:p-5">
                <div className="space-y-2 mb-4">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">{item.name} × {item.qty}</span>
                      <span className="font-medium text-gray-900">{formatPrice(item.price * item.qty)}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Slot: {order.slot}</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                  <div>
                    <span className="text-xs text-gray-500">Total</span>
                    <p className="font-bold text-gray-900">{formatPrice(order.total)}</p>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      to={`/orders/${order.id}`}
                      className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-brand-600 bg-brand-50 rounded-xl hover:bg-brand-100 transition-colors"
                    >
                      <Package className="w-4 h-4" /> Track
                    </Link>
                    <button className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                      Reorder
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
