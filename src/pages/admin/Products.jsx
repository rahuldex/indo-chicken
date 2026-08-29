import { useState } from 'react'
import { Plus, Search, Edit2, Trash2, MoreVertical } from 'lucide-react'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'
import Card from '../../components/ui/Card'
import { products, getDiscount, formatPrice } from '../../data/mockData'

export default function AdminProducts() {
  const [search, setSearch] = useState('')

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.sku.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-xl font-bold text-gray-900">Products</h2>
          <p className="text-sm text-gray-500">{products.length} products total</p>
        </div>
        <Button><Plus className="w-4 h-4" /> Add Product</Button>
      </div>

      <Card className="p-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-500"
          />
        </div>
      </Card>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-gray-500 border-b border-gray-100 bg-gray-50/50">
                <th className="px-5 py-3 font-medium">Product</th>
                <th className="px-5 py-3 font-medium">SKU</th>
                <th className="px-5 py-3 font-medium">Category</th>
                <th className="px-5 py-3 font-medium">MRP</th>
                <th className="px-5 py-3 font-medium">Price</th>
                <th className="px-5 py-3 font-medium">Discount</th>
                <th className="px-5 py-3 font-medium">Stock</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <img src={p.image} alt="" className="w-10 h-10 rounded-lg object-cover" />
                      <span className="font-medium text-gray-900 max-w-[160px] truncate">{p.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 font-mono text-xs text-gray-500">{p.sku}</td>
                  <td className="px-5 py-3 capitalize text-gray-600">{p.category}</td>
                  <td className="px-5 py-3 text-gray-400 line-through">{formatPrice(p.mrp)}</td>
                  <td className="px-5 py-3 font-medium">{formatPrice(p.price)}</td>
                  <td className="px-5 py-3"><Badge variant="offer">{getDiscount(p.mrp, p.price)}%</Badge></td>
                  <td className="px-5 py-3">
                    <span className={p.stock === 0 ? 'text-red-500 font-medium' : p.stock <= 10 ? 'text-orange-500 font-medium' : 'text-gray-600'}>
                      {p.stock}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <Badge variant={p.stock === 0 ? 'danger' : 'success'}>{p.stock === 0 ? 'Out of Stock' : 'Active'}</Badge>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 text-gray-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg"><Edit2 className="w-4 h-4" /></button>
                      <button className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                    </div>
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
