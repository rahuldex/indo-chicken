import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, Package, FolderTree, Barcode, Warehouse, ShoppingBag,
  Users, MapPin, Clock, Tag, BarChart3, Settings, Menu, X, ChevronLeft, LogOut
} from 'lucide-react'

const navItems = [
  { to: '/admin', icon: LayoutDashboard, label: 'Dashboard', end: true },
  { to: '/admin/products', icon: Package, label: 'Products' },
  { to: '/admin/categories', icon: FolderTree, label: 'Categories' },
  { to: '/admin/sku', icon: Barcode, label: 'SKU Management' },
  { to: '/admin/inventory', icon: Warehouse, label: 'Inventory' },
  { to: '/admin/orders', icon: ShoppingBag, label: 'Orders' },
  { to: '/admin/customers', icon: Users, label: 'Customers' },
  { to: '/admin/pincodes', icon: MapPin, label: 'Serviceable Pincodes' },
  { to: '/admin/delivery-slots', icon: Clock, label: 'Delivery Slots' },
  { to: '/admin/coupons', icon: Tag, label: 'Coupons' },
  { to: '/admin/reports', icon: BarChart3, label: 'Sales Reports' },
  { to: '/admin/settings', icon: Settings, label: 'Settings' },
]

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const isActive = (path, end) => {
    if (end) return location.pathname === path
    return location.pathname.startsWith(path)
  }

  const Sidebar = () => (
    <div className="flex flex-col h-full">
      <div className="p-5 border-b border-gray-100">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
            <span className="text-sm">🐔</span>
          </div>
          <div>
            <span className="font-display font-bold text-sm text-gray-900">Indo Chicken</span>
            <span className="block text-[10px] text-brand-600 font-medium">Admin Panel</span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {navItems.map(item => (
          <Link
            key={item.to}
            to={item.to}
            onClick={() => setSidebarOpen(false)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              isActive(item.to, item.end)
                ? 'bg-brand-50 text-brand-700'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <item.icon className="w-4 h-4 shrink-0" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-3 border-t border-gray-100">
        <Link to="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
          <ChevronLeft className="w-4 h-4" />
          Back to Store
        </Link>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors mt-1">
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="hidden lg:flex w-64 bg-white border-r border-gray-100 flex-col fixed h-full z-30">
        <Sidebar />
      </aside>

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-xl animate-slide-up">
            <button onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4 p-1">
              <X className="w-5 h-5" />
            </button>
            <Sidebar />
          </aside>
        </div>
      )}

      <div className="flex-1 lg:ml-64">
        <header className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-gray-100 px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="font-display font-semibold text-gray-900 text-sm sm:text-base">
              {navItems.find(n => isActive(n.to, n.end))?.label || 'Admin'}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500 hidden sm:block">Admin User</span>
            <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center text-sm font-semibold text-brand-700">A</div>
          </div>
        </header>
        <main className="p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
