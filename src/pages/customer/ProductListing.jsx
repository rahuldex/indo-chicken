import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, Grid3X3, List, X } from 'lucide-react'
import ProductCard from '../../components/ProductCard'
import { products, categories } from '../../data/mockData'

export default function ProductListing() {
  const [searchParams] = useSearchParams()
  const categoryParam = searchParams.get('category')
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'all')
  const [sortBy, setSortBy] = useState('popular')
  const [viewMode, setViewMode] = useState('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 500])

  const filtered = useMemo(() => {
    let result = [...products]
    if (activeCategory !== 'all') result = result.filter(p => p.category === activeCategory)
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    switch (sortBy) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break
      case 'price-high': result.sort((a, b) => b.price - a.price); break
      case 'rating': result.sort((a, b) => b.rating - a.rating); break
      default: result.sort((a, b) => b.reviews - a.reviews)
    }
    return result
  }, [activeCategory, sortBy, priceRange])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">All Products</h1>
        <p className="text-gray-500 mt-1">{filtered.length} products found</p>
      </div>

      {/* Category pills */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        <button
          onClick={() => setActiveCategory('all')}
          className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === 'all' ? 'bg-brand-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-200'}`}
        >
          All
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1.5 ${activeCategory === cat.id ? 'bg-brand-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-200'}`}
          >
            <span>{cat.icon}</span> {cat.name}
          </button>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-6 gap-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium hover:border-brand-200 transition-colors lg:hidden"
        >
          <SlidersHorizontal className="w-4 h-4" /> Filters
        </button>
        <div className="flex items-center gap-3 ml-auto">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-500"
          >
            <option value="popular">Most Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
          <div className="hidden sm:flex border border-gray-200 rounded-xl overflow-hidden">
            <button onClick={() => setViewMode('grid')} className={`p-2 ${viewMode === 'grid' ? 'bg-brand-50 text-brand-600' : 'text-gray-400'}`}>
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button onClick={() => setViewMode('list')} className={`p-2 ${viewMode === 'list' ? 'bg-brand-50 text-brand-600' : 'text-gray-400'}`}>
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Sidebar filters - desktop */}
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 p-5 sticky top-24">
            <h3 className="font-semibold text-gray-900 mb-4">Filters</h3>
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-3">Price Range</p>
              <input type="range" min="0" max="500" value={priceRange[1]} onChange={(e) => setPriceRange([0, +e.target.value])} className="w-full accent-brand-600" />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹0</span><span>₹{priceRange[1]}</span>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Availability</p>
              <label className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <input type="checkbox" className="accent-brand-600 rounded" defaultChecked /> In Stock
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="accent-brand-600 rounded" /> On Sale
              </label>
            </div>
          </div>
        </aside>

        {/* Mobile filters drawer */}
        {showFilters && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black/40" onClick={() => setShowFilters(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6 animate-slide-up overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">Filters</h3>
                <button onClick={() => setShowFilters(false)}><X className="w-5 h-5" /></button>
              </div>
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-700 mb-3">Price Range</p>
                <input type="range" min="0" max="500" value={priceRange[1]} onChange={(e) => setPriceRange([0, +e.target.value])} className="w-full accent-brand-600" />
                <div className="flex justify-between text-xs text-gray-500 mt-1"><span>₹0</span><span>₹{priceRange[1]}</span></div>
              </div>
              <button onClick={() => setShowFilters(false)} className="w-full py-3 bg-brand-600 text-white font-medium rounded-xl">Apply Filters</button>
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className={`flex-1 grid gap-4 sm:gap-6 ${viewMode === 'grid' ? 'grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {filtered.length > 0 ? (
            filtered.map(p => <ProductCard key={p.id} product={p} />)
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-500 text-lg">No products found</p>
              <p className="text-sm text-gray-400 mt-1">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
