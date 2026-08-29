export default function Input({ label, error, icon: Icon, className = '', ...props }) {
  return (
    <div className={className}>
      {label && <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>}
      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />}
        <input
          className={`w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none placeholder:text-gray-400 ${Icon ? 'pl-10' : ''} ${error ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''}`}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}
