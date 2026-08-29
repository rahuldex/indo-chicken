import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingCart, User, Menu, X, MapPin } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import PincodeChecker from '../PincodeChecker'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { cartCount } = useCart()
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/orders', label: 'My Orders' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      <div className="bg-brand-700 text-white text-xs py-1.5 px-4 text-center">
        <span>🎉 Free delivery on orders above ₹499 | Use code <strong>FRESH50</strong> for ₹50 off</span>
      </div>

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 gap-4">
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-9 h-9 bg-brand-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">🐔</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display font-bold text-lg text-gray-900 leading-none">Indo Chicken</span>
                <span className="block text-[10px] text-brand-600 font-medium -mt-0.5">Fresh & Hygienic</span>
              </div>
            </Link>

            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search chicken, eggs, combos..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all"
                />
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-1 bg-gray-50 rounded-xl px-3 py-1.5 border border-gray-100">
              <PincodeChecker compact />
            </div>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive(link.to) ? 'text-brand-700 bg-brand-50' : 'text-gray-600 hover:text-brand-600 hover:bg-gray-50'}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-1">
              <button onClick={() => setSearchOpen(!searchOpen)} className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <Link to="/profile" className="p-2 rounded-xl hover:bg-gray-100 transition-colors hidden sm:block">
                <User className="w-5 h-5 text-gray-600" />
              </Link>
              <Link to="/cart" className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-offer text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-scale-in">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors">
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {searchOpen && (
            <div className="md:hidden pb-3 animate-slide-up">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-brand-500"
                  autoFocus
                />
              </div>
            </div>
          )}
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white animate-slide-up">
            <nav className="px-4 py-3 space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-3 py-2.5 text-sm font-medium rounded-xl ${isActive(link.to) ? 'text-brand-700 bg-brand-50' : 'text-gray-600'}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/profile" onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 text-sm font-medium rounded-xl text-gray-600">
                My Profile
              </Link>
              <Link to="/login" onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 text-sm font-medium rounded-xl text-gray-600">
                Login / Register
              </Link>
              <div className="px-3 py-2 flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-brand-600" />
                <PincodeChecker compact />
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
