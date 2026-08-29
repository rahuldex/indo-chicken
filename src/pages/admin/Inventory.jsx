import { AlertTriangle, Package, TrendingDown } from 'lucide-react'
import Badge from '../../components/ui/Badge'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { products } from '../../data/mockData'

export default function Inventory() {
  const lowStock = products.filter(p => p.stock > 0 && p.stock <= 10)
  const outOfStock = products.filter(p => p.stock === 0)
  const inStock = products.filter(p => p.stock > 10)

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="font-display text-xl font-bold text-gray-900">Inventory</h2>
        <p className="text-sm text-gray-500">Monitor and manage stock levels</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card className="p-5 text-center">
          <Package className="w-6 h-6 text-brand-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-900">{inStock.length}</p>
          <p className="text-xs text-gray-500">In Stock</p>
        </Card>
        <Card className="p-5 text-center">
          <AlertTriangle className="w-6 h-6 text-orange-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-orange-600">{lowStock.length}</p>
          <p className="text-xs text-gray-500">Low Stock</p>
        </Card>
        <Card className="p-5 text-center">
          <TrendingDown className="w-6 h-6 text-red-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-red-600">{outOfStock.length}</p>
          <p className="text-xs text-gray-500">Out of Stock</p>
        </Card>
      </div>

      {outOfStock.length > 0 && (
        <Card className="overflow-hidden">
          <div className="p-4 bg-red-50 border-b border-red-100">
            <h3 className="font-semibold text-red-700 text-sm flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Out of Stock ({outOfStock.length})
            </h3>
          </div>
          <div className="divide-y divide-gray-50">
            {outOfStock.map(p => (
              <div key={p.id} className="flex items-center justify-between px-5 py-3">
                <div className="flex items-center gap-3">
                  <img src={p.image} alt="" className="w-8 h-8 rounded-lg object-cover" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{p.name}</p>
                    <p className="text-xs text-gray-400 font-mono">{p.sku}</p>
                  </div>
                </div>
                <Button size="sm" variant="secondary">Restock</Button>
              </div>
            ))}
          </div>
        </Card>
      )}

      {lowStock.length > 0 && (
        <Card className="overflow-hidden">
          <div className="p-4 bg-orange-50 border-b border-orange-100">
            <h3 className="font-semibold text-orange-700 text-sm flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Low Stock Alert ({lowStock.length})
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs text-gray-500 border-b border-gray-50">
                  <th className="px-5 py-3 font-medium">Product</th>
                  <th className="px-5 py-3 font-medium">SKU</th>
                  <th className="px-5 py-3 font-medium">Current Stock</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {lowStock.map(p => (
                  <tr key={p.id} className="border-b border-gray-50">
                    <td className="px-5 py-3 font-medium text-gray-900">{p.name}</td>
                    <td className="px-5 py-3 font-mono text-xs text-gray-500">{p.sku}</td>
                    <td className="px-5 py-3 text-orange-600 font-semibold">{p.stock}</td>
                    <td className="px-5 py-3"><Badge variant="offer">Low Stock</Badge></td>
                    <td className="px-5 py-3"><Button size="sm" variant="secondary">Restock</Button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      <Card className="overflow-hidden">
        <div className="p-4 border-b border-gray-50">
          <h3 className="font-semibold text-gray-900 text-sm">All Inventory</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-gray-500 border-b border-gray-50 bg-gray-50/50">
                <th className="px-5 py-3 font-medium">Product</th>
                <th className="px-5 py-3 font-medium">SKU</th>
                <th className="px-5 py-3 font-medium">Stock</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="px-5 py-3 font-medium text-gray-900">{p.name}</td>
                  <td className="px-5 py-3 font-mono text-xs text-gray-500">{p.sku}</td>
                  <td className="px-5 py-3 font-semibold">{p.stock}</td>
                  <td className="px-5 py-3">
                    <Badge variant={p.stock === 0 ? 'danger' : p.stock <= 10 ? 'offer' : 'success'}>
                      {p.stock === 0 ? 'Out of Stock' : p.stock <= 10 ? 'Low' : 'In Stock'}
                    </Badge>
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
