import { useState } from 'react'
import { Search, Filter } from 'lucide-react'
import Badge from '../../components/ui/Badge'
import Card from '../../components/ui/Card'
import { adminOrders, formatPrice } from '../../data/mockData'

const statusColors = {
  pending: 'gray', processing: 'default', confirmed: 'default',
  out_for_delivery: 'offer', delivered: 'success',
}

export default function AdminOrders() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? adminOrders : adminOrders.filter(o => o.status === filter)

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="font-display text-xl font-bold text-gray-900">Orders</h2>
        <p className="text-sm text-gray-500">Manage and fulfill customer orders</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Search orders..." className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-500" />
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {['all', 'pending', 'processing', 'out_for_delivery', 'delivered'].map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${filter === s ? 'bg-brand-600 text-white' : 'bg-white text-gray-600 border border-gray-200'}`}
            >
              {s === 'all' ? 'All' : s.replace(/_/g, ' ')}
            </button>
          ))}
        </div>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-gray-500 border-b border-gray-100 bg-gray-50/50">
                <th className="px-5 py-3 font-medium">Order ID</th>
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Phone</th>
                <th className="px-5 py-3 font-medium">Items</th>
                <th className="px-5 py-3 font-medium">Total</th>
                <th className="px-5 py-3 font-medium">Slot</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(order => (
                <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="px-5 py-3 font-medium text-gray-900">{order.id}</td>
                  <td className="px-5 py-3 text-gray-600">{order.customer}</td>
                  <td className="px-5 py-3 text-gray-500">{order.phone}</td>
                  <td className="px-5 py-3">{order.items}</td>
                  <td className="px-5 py-3 font-medium">{formatPrice(order.total)}</td>
                  <td className="px-5 py-3 text-gray-500">{order.slot}</td>
                  <td className="px-5 py-3"><Badge variant={statusColors[order.status]}>{order.status.replace(/_/g, ' ')}</Badge></td>
                  <td className="px-5 py-3 text-gray-500">{order.date}</td>
                  <td className="px-5 py-3">
                    <select className="text-xs border border-gray-200 rounded-lg px-2 py-1 outline-none focus:border-brand-500">
                      <option>Update Status</option>
                      <option>Confirmed</option>
                      <option>Processing</option>
                      <option>Out for Delivery</option>
                      <option>Delivered</option>
                      <option>Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
