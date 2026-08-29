import { TrendingUp, ShoppingBag, Users, Package, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import { adminStats, adminOrders, salesData, formatPrice } from '../../data/mockData'

export default function Dashboard() {
  const stats = [
    { label: "Today's Revenue", value: formatPrice(adminStats.revenue.today), change: '+12.5%', up: true, icon: TrendingUp, color: 'bg-brand-50 text-brand-600' },
    { label: "Today's Orders", value: adminStats.orders.today, change: '+8.2%', up: true, icon: ShoppingBag, color: 'bg-blue-50 text-blue-600' },
    { label: 'Total Customers', value: adminStats.customers.total.toLocaleString(), change: '+5.1%', up: true, icon: Users, color: 'bg-purple-50 text-purple-600' },
    { label: 'Low Stock Items', value: adminStats.products.lowStock, change: '-2', up: false, icon: Package, color: 'bg-orange-50 text-orange-600' },
  ]

  const statusColors = {
    pending: 'gray', processing: 'default', confirmed: 'default',
    out_for_delivery: 'offer', delivered: 'success',
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="font-display text-xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-sm text-gray-500">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(stat => (
          <Card key={stat.label} className="p-5">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <span className={`flex items-center gap-0.5 text-xs font-semibold ${stat.up ? 'text-brand-600' : 'text-red-500'}`}>
                {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Revenue chart (CSS bars) */}
        <Card className="lg:col-span-2 p-5">
          <h3 className="font-semibold text-gray-900 mb-4">Revenue Overview</h3>
          <div className="flex items-end gap-3 h-48">
            {salesData.map(d => {
              const maxRev = Math.max(...salesData.map(s => s.revenue))
              const height = (d.revenue / maxRev) * 100
              return (
                <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-[10px] text-gray-400 font-medium">{(d.revenue / 100000).toFixed(1)}L</span>
                  <div className="w-full bg-brand-100 rounded-t-lg relative" style={{ height: `${height}%` }}>
                    <div className="absolute inset-0 bg-brand-500 rounded-t-lg opacity-80 hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-xs text-gray-500 font-medium">{d.month}</span>
                </div>
              )
            })}
          </div>
        </Card>

        {/* Quick stats */}
        <Card className="p-5">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
          <div className="space-y-4">
            {[
              { label: 'Weekly Revenue', value: formatPrice(adminStats.revenue.week) },
              { label: 'Monthly Revenue', value: formatPrice(adminStats.revenue.month) },
              { label: 'Pending Orders', value: adminStats.orders.pending },
              { label: 'New Customers', value: adminStats.customers.new },
              { label: 'Out of Stock', value: adminStats.products.outOfStock },
            ].map(item => (
              <div key={item.label} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                <span className="text-sm text-gray-500">{item.label}</span>
                <span className="text-sm font-semibold text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent orders */}
      <Card className="overflow-hidden">
        <div className="p-5 border-b border-gray-50 flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">Recent Orders</h3>
          <a href="/admin/orders" className="text-sm text-brand-600 font-medium hover:text-brand-700">View All</a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-gray-500 border-b border-gray-50">
                <th className="px-5 py-3 font-medium">Order ID</th>
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Items</th>
                <th className="px-5 py-3 font-medium">Total</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {adminOrders.map(order => (
                <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="px-5 py-3 font-medium text-gray-900">{order.id}</td>
                  <td className="px-5 py-3 text-gray-600">{order.customer}</td>
                  <td className="px-5 py-3 text-gray-600">{order.items}</td>
                  <td className="px-5 py-3 font-medium">{formatPrice(order.total)}</td>
                  <td className="px-5 py-3"><Badge variant={statusColors[order.status]}>{order.status.replace(/_/g, ' ')}</Badge></td>
                  <td className="px-5 py-3 text-gray-500">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
