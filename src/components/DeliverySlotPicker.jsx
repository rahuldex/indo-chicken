import { useState } from 'react'
import { Clock } from 'lucide-react'
import { deliverySlots } from '../data/mockData'

export default function DeliverySlotPicker({ selected, onSelect }) {
  const [active, setActive] = useState(selected || null)

  const handleSelect = (slot) => {
    if (!slot.available) return
    setActive(slot.id)
    onSelect?.(slot)
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-brand-600" />
        <h3 className="font-semibold text-gray-900">Select Delivery Slot</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {deliverySlots.map(slot => (
          <button
            key={slot.id}
            onClick={() => handleSelect(slot)}
            disabled={!slot.available}
            className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
              active === slot.id
                ? 'border-brand-600 bg-brand-50 shadow-sm'
                : slot.available
                  ? 'border-gray-100 hover:border-brand-200 hover:bg-gray-50'
                  : 'border-gray-100 opacity-50 cursor-not-allowed'
            }`}
          >
            <p className={`text-sm font-semibold ${active === slot.id ? 'text-brand-700' : 'text-gray-900'}`}>
              {slot.label}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">{slot.time}</p>
            {!slot.available && <p className="text-xs text-red-500 mt-1">Fully booked</p>}
          </button>
        ))}
      </div>
    </div>
  )
}
