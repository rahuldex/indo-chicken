const variants = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-sm shadow-brand-600/20',
  secondary: 'bg-white text-brand-700 border border-brand-200 hover:bg-brand-50',
  outline: 'bg-transparent text-gray-700 border border-gray-200 hover:bg-gray-50',
  danger: 'bg-red-500 text-white hover:bg-red-600',
  offer: 'bg-offer text-white hover:bg-offer-dark shadow-sm shadow-orange-500/20',
  ghost: 'bg-transparent text-gray-600 hover:bg-gray-100',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm rounded-lg',
  md: 'px-5 py-2.5 text-sm rounded-xl',
  lg: 'px-6 py-3 text-base rounded-xl',
  icon: 'p-2.5 rounded-xl',
}

export default function Button({ children, variant = 'primary', size = 'md', className = '', disabled, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
