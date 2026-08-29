import { Plus, Edit2, Trash2 } from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import { categories } from '../../data/mockData'

export default function AdminCategories() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-xl font-bold text-gray-900">Categories</h2>
          <p className="text-sm text-gray-500">Manage product categories</p>
        </div>
        <Button><Plus className="w-4 h-4" /> Add Category</Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map(cat => (
          <Card key={cat.id} hover className="overflow-hidden">
            <div className="aspect-[16/10] relative">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-60`} />
              <span className="absolute top-3 left-3 text-2xl">{cat.icon}</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">{cat.name}</h3>
              <p className="text-sm text-gray-500 mt-0.5">{cat.count} products</p>
              <div className="flex gap-2 mt-3">
                <button className="flex-1 py-1.5 text-xs font-medium text-brand-600 bg-brand-50 rounded-lg hover:bg-brand-100 transition-colors flex items-center justify-center gap-1">
                  <Edit2 className="w-3 h-3" /> Edit
                </button>
                <button className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
