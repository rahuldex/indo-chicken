import { useState } from 'react'
import { Plus, MapPin, Trash2 } from 'lucide-react'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'
import Card from '../../components/ui/Card'
import Input from '../../components/ui/Input'
import { serviceablePincodes } from '../../data/mockData'

export default function ServiceablePincodes() {
  const [pincodes, setPincodes] = useState(serviceablePincodes)
  const [newPin, setNewPin] = useState('')

  const addPincode = () => {
    if (newPin.length === 6 && !pincodes.includes(newPin)) {
      setPincodes([...pincodes, newPin])
      setNewPin('')
    }
  }

  const removePincode = (pin) => {
    setPincodes(pincodes.filter(p => p !== pin))
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-xl font-bold text-gray-900">Serviceable Pincodes</h2>
          <p className="text-sm text-gray-500">{pincodes.length} pincodes configured</p>
        </div>
      </div>

      <Card className="p-5">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-brand-600" /> Add New Pincode
        </h3>
        <div className="flex gap-3 max-w-md">
          <input
            type="text"
            maxLength={6}
            placeholder="Enter 6-digit pincode"
            value={newPin}
            onChange={(e) => setNewPin(e.target.value.replace(/\D/g, ''))}
            className="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500"
          />
          <Button onClick={addPincode} disabled={newPin.length !== 6}>
            <Plus className="w-4 h-4" /> Add
          </Button>
        </div>
      </Card>

      <Card className="p-5">
        <h3 className="font-semibold text-gray-900 mb-4">Active Pincodes</h3>
        <div className="flex flex-wrap gap-2">
          {pincodes.map(pin => (
            <div key={pin} className="flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-xl px-3 py-2 group">
              <MapPin className="w-3.5 h-3.5 text-brand-600" />
              <span className="text-sm font-mono font-medium text-brand-700">{pin}</span>
              <Badge variant="success" className="!text-[10px]">Active</Badge>
              <button onClick={() => removePincode(pin)} className="p-0.5 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
