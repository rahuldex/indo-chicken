import { Download, TrendingUp } from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import { salesData, adminStats, products, formatPrice } from '../../data/mockData'

export default function SalesReports() {
  const topProducts = [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 5)

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-xl font-bold text-gray-900">Sales Reports</h2>
          <p className="text-sm text-gray-500">Analytics and performance insights</p>
        </div>
        <Button variant="secondary"><Download className="w-4 h-4" /> Export Report</Button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Revenue', value: formatPrice(adminStats.revenue.month), sub: 'This month' },
          { label: 'Total Orders', value: adminStats.orders.month, sub: 'This month' },
          { label: 'Avg Order Value', value: formatPrice(Math.round(adminStats.revenue.month / adminStats.orders.month)), sub: 'This month' },
          { label: 'Growth', value: `+${adminStats.revenue.growth}%`, sub: 'vs last month' },
        ].map(stat => (
          <Card key={stat.label} className="p-5">
            <p className="text-xs text-gray-500">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            <p className="text-xs text-brand-600 mt-0.5 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> {stat.sub}
            </p>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-5">
          <h3 className="font-semibold text-gray-900 mb-4">Monthly Revenue</h3>
          <div className="flex items-end gap-2 h-52">
            {salesData.map(d => {
              const maxRev = Math.max(...salesData.map(s => s.revenue))
              const height = (d.revenue / maxRev) * 100
              return (
                <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-[9px] text-gray-400">{(d.revenue / 100000).toFixed(0)}L</span>
                  <div className="w-full relative" style={{ height: `${height}%` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-600 to-brand-400 rounded-t-md" />
                  </div>
                  <span className="text-[10px] text-gray-500 font-medium">{d.month}</span>
                </div>
              )
            })}
          </div>
        </Card>

        <Card className="p-5">
          <h3 className="font-semibold text-gray-900 mb-4">Monthly Orders</h3>
          <div className="flex items-end gap-2 h-52">
            {salesData.map(d => {
              const maxOrders = Math.max(...salesData.map(s => s.orders))
              const height = (d.orders / maxOrders) * 100
              return (
                <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-[9px] text-gray-400">{d.orders}</span>
                  <div className="w-full relative" style={{ height: `${height}%` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-md" />
                  </div>
                  <span className="text-[10px] text-gray-500 font-medium">{d.month}</span>
                </div>
              )
            })}
          </div>
        </Card>
      </div>

      <Card className="overflow-hidden">
        <div className="p-5 border-b border-gray-50">
          <h3 className="font-semibold text-gray-900">Top Selling Products</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-gray-500 border-b border-gray-50">
                <th className="px-5 py-3 font-medium">#</th>
                <th className="px-5 py-3 font-medium">Product</th>
                <th className="px-5 py-3 font-medium">SKU</th>
                <th className="px-5 py-3 font-medium">Reviews</th>
                <th className="px-5 py-3 font-medium">Rating</th>
                <th className="px-5 py-3 font-medium">Revenue Est.</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((p, i) => (
                <tr key={p.id} className="border-b border-gray-50">
                  <td className="px-5 py-3 font-bold text-gray-400">{i + 1}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <img src={p.image} alt="" className="w-8 h-8 rounded-lg object-cover" />
                      <span className="font-medium text-gray-900">{p.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 font-mono text-xs text-gray-500">{p.sku}</td>
                  <td className="px-5 py-3">{p.reviews}</td>
                  <td className="px-5 py-3">⭐ {p.rating}</td>
                  <td className="px-5 py-3 font-medium">{formatPrice(p.price * p.reviews)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
