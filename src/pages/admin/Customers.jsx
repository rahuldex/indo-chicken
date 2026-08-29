import { Search } from 'lucide-react'
import Card from '../../components/ui/Card'
import { adminCustomers } from '../../data/mockData'

export default function Customers() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="font-display text-xl font-bold text-gray-900">Customers</h2>
        <p className="text-sm text-gray-500">{adminCustomers.length} registered customers</p>
      </div>

      <Card className="p-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Search customers..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-500" />
        </div>
      </Card>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-gray-500 border-b border-gray-100 bg-gray-50/50">
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Email</th>
                <th className="px-5 py-3 font-medium">Phone</th>
                <th className="px-5 py-3 font-medium">Orders</th>
                <th className="px-5 py-3 font-medium">Total Spent</th>
                <th className="px-5 py-3 font-medium">Joined</th>
              </tr>
            </thead>
            <tbody>
              {adminCustomers.map(c => (
                <tr key={c.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center text-xs font-bold text-brand-700">
                        {c.name.charAt(0)}
                      </div>
                      <span className="font-medium text-gray-900">{c.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-gray-600">{c.email}</td>
                  <td className="px-5 py-3 text-gray-500">{c.phone}</td>
                  <td className="px-5 py-3">{c.orders}</td>
                  <td className="px-5 py-3 font-medium">₹{c.spent.toLocaleString()}</td>
                  <td className="px-5 py-3 text-gray-500">{c.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
