import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-brand-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">🐔</span>
              </div>
              <span className="font-display font-bold text-lg text-white">Indo Chicken</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Farm-fresh chicken and eggs delivered to your doorstep. Hygienically processed, never frozen.
            </p>
            <div className="flex gap-3 mt-4">
              {['FB', 'IG', 'X'].map((label, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-600 transition-colors text-xs font-bold">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Products', 'My Orders', 'Track Order', 'About Us', 'FAQs'].map(item => (
                <li key={item}><a href="#" className="hover:text-brand-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              {['Fresh Chicken', 'Farm Eggs', 'Marinated', 'Combo Packs'].map(item => (
                <li key={item}><Link to="/products" className="hover:text-brand-400 transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-brand-400" /> 1800-123-4567</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-brand-400" /> hello@indochicken.com</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-brand-400 mt-0.5" /> 123, Food Park, Sector 18, Noida, UP 201301</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; 2024 Indo Chicken. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
