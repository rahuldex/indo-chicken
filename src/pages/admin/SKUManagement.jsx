import { Plus, Search } from 'lucide-react'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'
import Card from '../../components/ui/Card'
import { products } from '../../data/mockData'

export default function SKUManagement() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-xl font-bold text-gray-900">SKU Management</h2>
          <p className="text-sm text-gray-500">Manage product SKUs and variants</p>
        </div>
        <Button><Plus className="w-4 h-4" /> Generate SKU</Button>
      </div>

      <Card className="p-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Search SKU..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-500" />
        </div>
      </Card>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-gray-500 border-b border-gray-100 bg-gray-50/50">
                <th className="px-5 py-3 font-medium">SKU Code</th>
                <th className="px-5 py-3 font-medium">Product Name</th>
                <th className="px-5 py-3 font-medium">Category</th>
                <th className="px-5 py-3 font-medium">Unit</th>
                <th className="px-5 py-3 font-medium">Barcode</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p.sku} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="px-5 py-3 font-mono text-xs font-medium text-brand-700">{p.sku}</td>
                  <td className="px-5 py-3 text-gray-900">{p.name}</td>
                  <td className="px-5 py-3 capitalize text-gray-600">{p.category}</td>
                  <td className="px-5 py-3 text-gray-600">{p.unit}</td>
                  <td className="px-5 py-3 font-mono text-xs text-gray-400">{p.sku.replace(/-/g, '')}{p.id.toString().padStart(4, '0')}</td>
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
