import { useState } from 'react'
import { Clock, Plus } from 'lucide-react'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'
import Card from '../../components/ui/Card'
import { deliverySlots } from '../../data/mockData'

export default function DeliverySlots() {
  const [slots, setSlots] = useState(deliverySlots)

  const toggleSlot = (id) => {
    setSlots(prev => prev.map(s => s.id === id ? { ...s, available: !s.available } : s))
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-xl font-bold text-gray-900">Delivery Slots</h2>
          <p className="text-sm text-gray-500">Configure available delivery time slots</p>
        </div>
        <Button><Plus className="w-4 h-4" /> Add Slot</Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {slots.map(slot => (
          <Card key={slot.id} className={`p-5 ${!slot.available ? 'opacity-60' : ''}`}>
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-brand-600" />
              </div>
              <Badge variant={slot.available ? 'success' : 'danger'}>
                {slot.available ? 'Active' : 'Disabled'}
              </Badge>
            </div>
            <h3 className="font-semibold text-gray-900">{slot.label}</h3>
            <p className="text-sm text-gray-500 mt-0.5">{slot.time}</p>
            <button
              onClick={() => toggleSlot(slot.id)}
              className={`mt-4 w-full py-2 text-xs font-medium rounded-lg transition-colors ${slot.available ? 'bg-red-50 text-red-600 hover:bg-red-100' : 'bg-brand-50 text-brand-600 hover:bg-brand-100'}`}
            >
              {slot.available ? 'Disable Slot' : 'Enable Slot'}
            </button>
          </Card>
        ))}
      </div>
    </div>
  )
}
