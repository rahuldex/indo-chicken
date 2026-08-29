import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'

export default function Login() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 animate-fade-in">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🐔</span>
          </div>
          <h1 className="font-display text-2xl font-bold text-gray-900">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            {isLogin ? 'Sign in to your Indo Chicken account' : 'Join us for fresh chicken & eggs'}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
          {/* Toggle */}
          <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${isLogin ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'}`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${!isLogin ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'}`}
            >
              Register
            </button>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <>
                <Input label="Full Name" placeholder="Enter your name" icon={User} />
                <Input label="Phone Number" placeholder="+91 98765 43210" icon={Phone} type="tel" />
              </>
            )}
            <Input label="Email Address" placeholder="you@email.com" icon={Mail} type="email" />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  className="w-full rounded-xl border border-gray-200 bg-white pl-10 pr-10 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" className="accent-brand-600 rounded" /> Remember me
                </label>
                <a href="#" className="text-brand-600 font-medium hover:text-brand-700">Forgot password?</a>
              </div>
            )}

            <Button type="submit" size="lg" className="w-full">
              {isLogin ? 'Sign In' : 'Create Account'}
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div>
            <div className="relative flex justify-center text-xs"><span className="bg-white px-3 text-gray-400">or continue with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
              <img src="https://www.google.com/favicon.ico" alt="" className="w-4 h-4" /> Google
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
              📱 OTP Login
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button onClick={() => setIsLogin(!isLogin)} className="text-brand-600 font-medium hover:text-brand-700">
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  )
}
