export default function Card({ children, className = '', hover = false, ...props }) {
  return (
    <div
      className={`bg-white rounded-2xl border border-gray-100 shadow-sm ${hover ? 'hover:shadow-md hover:border-brand-100 transition-all duration-300' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
