import { Link } from 'react-router-dom'
import { User, Mail, Phone, MapPin, Package, Heart, Settings, ChevronRight, LogOut } from 'lucide-react'

const menuItems = [
  { icon: Package, label: 'My Orders', to: '/orders', desc: 'Track & reorder' },
  { icon: MapPin, label: 'Addresses', to: '/addresses', desc: 'Manage delivery addresses' },
  { icon: Heart, label: 'Wishlist', to: '#', desc: 'Saved items' },
  { icon: Settings, label: 'Settings', to: '#', desc: 'Notifications & preferences' },
]

export default function Profile() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 animate-fade-in">
      <h1 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-8">My Profile</h1>

      {/* Profile card */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center">
            <User className="w-8 h-8 text-brand-600" />
          </div>
          <div className="flex-1">
            <h2 className="font-display text-xl font-bold text-gray-900">Rahul Sharma</h2>
            <p className="text-sm text-gray-500">Member since Jan 2024</p>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-brand-600 border border-brand-200 rounded-xl hover:bg-brand-50 transition-colors">
            Edit
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">rahul@email.com</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">+91 98765 43210</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { label: 'Orders', value: '12' },
          { label: 'Saved', value: '₹8,450' },
          { label: 'Wishlist', value: '5' },
        ].map(stat => (
          <div key={stat.label} className="bg-white rounded-2xl border border-gray-100 p-4 text-center shadow-sm">
            <p className="font-display text-xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Menu */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {menuItems.map((item, i) => (
          <Link
            key={item.label}
            to={item.to}
            className={`flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors ${i < menuItems.length - 1 ? 'border-b border-gray-50' : ''}`}
          >
            <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
              <item.icon className="w-5 h-5 text-brand-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm text-gray-900">{item.label}</p>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300" />
          </Link>
        ))}
      </div>

      <button className="w-full mt-4 flex items-center justify-center gap-2 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-colors">
        <LogOut className="w-4 h-4" /> Logout
      </button>

      <div className="mt-6 text-center">
        <Link to="/admin" className="text-xs text-gray-400 hover:text-gray-600">Admin Panel →</Link>
      </div>
    </div>
  )
}
