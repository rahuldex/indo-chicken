import { Link } from 'react-router-dom'
import { ArrowRight, Truck, Shield, Clock, Star, ChevronRight } from 'lucide-react'
import ProductCard from '../../components/ProductCard'
import { heroImage } from '../../utils/productImages'
import PincodeChecker from '../../components/PincodeChecker'
import { products, categories } from '../../data/mockData'

export default function Home() {
  const featured = products.filter(p => p.tags?.includes('Best Seller')).slice(0, 4)
  const deals = products.filter(p => p.mrp > p.price).slice(0, 4)

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-300 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="animate-slide-up">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-semibold mb-4">
                🌿 Farm Fresh Daily
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Fresh Chicken &<br />Farm Eggs
              </h1>
              <p className="text-brand-100 text-lg mb-8 max-w-md">
                Hygienically processed, never frozen. Delivered to your doorstep within hours.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-700 font-semibold rounded-xl hover:bg-brand-50 transition-colors shadow-lg">
                  Shop Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/products?category=combo" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                  View Combos
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative animate-scale-in">
              <img
                src={heroImage}
                alt="Fresh Chicken"
                className="rounded-3xl shadow-2xl shadow-brand-900/30"
              />
              <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span className="font-bold">4.8</span>
                  <span className="text-sm text-gray-500">2,000+ reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Truck, title: 'Same Day Delivery', desc: 'Order before 2 PM' },
              { icon: Shield, title: '100% Hygienic', desc: 'FSSAI certified' },
              { icon: Clock, title: 'Fresh Daily', desc: 'Never frozen' },
              { icon: Star, title: '4.8 Rating', desc: '2000+ happy customers' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3">
                <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">Shop by Category</h2>
          <Link to="/products" className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.id}`}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-70 group-hover:opacity-80 transition-opacity`} />
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                <span className="text-2xl mb-1">{cat.icon}</span>
                <h3 className="font-display font-bold text-lg">{cat.name}</h3>
                <p className="text-sm text-white/80">{cat.count} products</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Pincode checker */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="max-w-lg mx-auto">
          <PincodeChecker />
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">Best Sellers</h2>
              <p className="text-gray-500 mt-1">Most loved by our customers</p>
            </div>
            <Link to="/products" className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Deals banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-gradient-to-r from-offer to-red-500 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="relative max-w-lg">
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-4">LIMITED TIME</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">Up to 30% Off</h2>
            <p className="text-orange-100 mb-6">On selected chicken cuts and egg trays. Use code <strong>FRESH50</strong> at checkout.</p>
            <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-offer font-semibold rounded-xl hover:bg-orange-50 transition-colors">
              Grab the Deal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Today's Deals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Today's Deals</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {deals.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  )
}
