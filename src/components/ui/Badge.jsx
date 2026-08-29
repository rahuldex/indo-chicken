export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-brand-100 text-brand-700',
    offer: 'bg-orange-100 text-orange-700',
    danger: 'bg-red-100 text-red-700',
    success: 'bg-green-100 text-green-700',
    gray: 'bg-gray-100 text-gray-600',
    dark: 'bg-gray-800 text-white',
  }
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
