import { Plus, Tag } from 'lucide-react'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'
import Card from '../../components/ui/Card'
import { coupons } from '../../data/mockData'

export default function AdminCoupons() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-xl font-bold text-gray-900">Coupons</h2>
          <p className="text-sm text-gray-500">Manage discount coupons and offers</p>
        </div>
        <Button><Plus className="w-4 h-4" /> Create Coupon</Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {coupons.map(coupon => (
          <Card key={coupon.code} className="p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-offer/5 rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="flex items-center gap-2 mb-3">
              <Tag className="w-5 h-5 text-offer" />
              <Badge variant="offer">{coupon.type === 'flat' ? `₹${coupon.discount} OFF` : `${coupon.discount}% OFF`}</Badge>
            </div>
            <h3 className="font-mono font-bold text-lg text-gray-900">{coupon.code}</h3>
            <p className="text-sm text-gray-500 mt-1">{coupon.description}</p>
            <p className="text-xs text-gray-400 mt-2">Min. order: ₹{coupon.minOrder}</p>
            <div className="flex gap-2 mt-4">
              <button className="flex-1 py-2 text-xs font-medium text-brand-600 bg-brand-50 rounded-lg hover:bg-brand-100">Edit</button>
              <button className="flex-1 py-2 text-xs font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100">Delete</button>
            </div>
          </Card>
        ))}
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-gray-500 border-b border-gray-100 bg-gray-50/50">
                <th className="px-5 py-3 font-medium">Code</th>
                <th className="px-5 py-3 font-medium">Type</th>
                <th className="px-5 py-3 font-medium">Discount</th>
                <th className="px-5 py-3 font-medium">Min Order</th>
                <th className="px-5 py-3 font-medium">Usage</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {coupons.map(c => (
                <tr key={c.code} className="border-b border-gray-50">
                  <td className="px-5 py-3 font-mono font-bold text-brand-700">{c.code}</td>
                  <td className="px-5 py-3 capitalize">{c.type}</td>
                  <td className="px-5 py-3 font-medium">{c.type === 'flat' ? `₹${c.discount}` : `${c.discount}%`}</td>
                  <td className="px-5 py-3">₹{c.minOrder}</td>
                  <td className="px-5 py-3 text-gray-500">{Math.floor(Math.random() * 100 + 20)} uses</td>
                  <td className="px-5 py-3"><Badge variant="success">Active</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
