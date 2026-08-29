import { useState } from 'react'
import { MapPin, Plus, Edit2, Trash2, Check } from 'lucide-react'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import { addresses } from '../../data/mockData'

export default function AddressManagement() {
  const [showForm, setShowForm] = useState(false)
  const [addrs, setAddrs] = useState(addresses)

  const setDefault = (id) => {
    setAddrs(prev => prev.map(a => ({ ...a, isDefault: a.id === id })))
  }

  const removeAddress = (id) => {
    setAddrs(prev => prev.filter(a => a.id !== id))
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">My Addresses</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your delivery addresses</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} size="sm">
          <Plus className="w-4 h-4" /> Add New
        </Button>
      </div>

      {showForm && (
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-6 animate-slide-up">
          <h3 className="font-semibold text-gray-900 mb-4">Add New Address</h3>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowForm(false) }}>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="Full Name" placeholder="Your name" />
              <Input label="Phone" placeholder="+91 98765 43210" type="tel" />
            </div>
            <Input label="Address Line 1" placeholder="House no., Street" />
            <Input label="Address Line 2" placeholder="Landmark, Area" />
            <div className="grid sm:grid-cols-3 gap-4">
              <Input label="City" placeholder="City" />
              <Input label="State" placeholder="State" />
              <Input label="Pincode" placeholder="110016" maxLength={6} />
            </div>
            <div className="flex gap-1 bg-gray-100 rounded-xl p-1 w-fit">
              {['Home', 'Office', 'Other'].map(label => (
                <button key={label} type="button" className="px-4 py-1.5 text-sm font-medium rounded-lg hover:bg-white transition-colors first:bg-white first:shadow-sm">
                  {label}
                </button>
              ))}
            </div>
            <div className="flex gap-3 pt-2">
              <Button type="submit">Save Address</Button>
              <Button variant="secondary" type="button" onClick={() => setShowForm(false)}>Cancel</Button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-4">
        {addrs.map(addr => (
          <div key={addr.id} className={`bg-white rounded-2xl border-2 p-5 shadow-sm transition-all ${addr.isDefault ? 'border-brand-600' : 'border-gray-100'}`}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-brand-600" />
                <span className="text-xs font-bold bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{addr.label}</span>
                {addr.isDefault && (
                  <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-0.5 rounded flex items-center gap-1">
                    <Check className="w-3 h-3" /> Default
                  </span>
                )}
              </div>
              <div className="flex gap-1">
                <button className="p-1.5 text-gray-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button onClick={() => removeAddress(addr.id)} className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <p className="font-semibold text-gray-900 text-sm">{addr.name}</p>
            <p className="text-sm text-gray-600 mt-1">{addr.line1}, {addr.line2}</p>
            <p className="text-sm text-gray-600">{addr.city}, {addr.state} - {addr.pincode}</p>
            <p className="text-sm text-gray-400 mt-1">{addr.phone}</p>
            {!addr.isDefault && (
              <button onClick={() => setDefault(addr.id)} className="mt-3 text-sm font-medium text-brand-600 hover:text-brand-700">
                Set as Default
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
