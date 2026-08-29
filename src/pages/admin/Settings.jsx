import { Store, Bell, CreditCard, Truck, Shield } from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import Input from '../../components/ui/Input'

export default function Settings() {
  return (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      <div>
        <h2 className="font-display text-xl font-bold text-gray-900">Settings</h2>
        <p className="text-sm text-gray-500">Manage store configuration</p>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-2 mb-5">
          <Store className="w-5 h-5 text-brand-600" />
          <h3 className="font-semibold text-gray-900">Store Information</h3>
        </div>
        <div className="space-y-4">
          <Input label="Store Name" defaultValue="Indo Chicken" />
          <Input label="Store Email" defaultValue="hello@indochicken.com" />
          <Input label="Phone Number" defaultValue="1800-123-4567" />
          <Input label="Address" defaultValue="123, Food Park, Sector 18, Noida, UP 201301" />
          <Button>Save Changes</Button>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-2 mb-5">
          <Truck className="w-5 h-5 text-brand-600" />
          <h3 className="font-semibold text-gray-900">Delivery Settings</h3>
        </div>
        <div className="space-y-4">
          <Input label="Free Delivery Threshold (₹)" defaultValue="499" type="number" />
          <Input label="Delivery Fee (₹)" defaultValue="40" type="number" />
          <Input label="Minimum Order Amount (₹)" defaultValue="99" type="number" />
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" className="accent-brand-600 rounded" defaultChecked /> Enable same-day delivery
          </label>
          <Button>Save Changes</Button>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-2 mb-5">
          <CreditCard className="w-5 h-5 text-brand-600" />
          <h3 className="font-semibold text-gray-900">Payment Settings</h3>
        </div>
        <div className="space-y-3">
          {['UPI Payments', 'Credit/Debit Cards', 'Cash on Delivery', 'Wallet Payments'].map(method => (
            <label key={method} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <span className="text-sm text-gray-700">{method}</span>
              <input type="checkbox" className="accent-brand-600 rounded" defaultChecked />
            </label>
          ))}
          <Button className="mt-2">Save Changes</Button>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-2 mb-5">
          <Bell className="w-5 h-5 text-brand-600" />
          <h3 className="font-semibold text-gray-900">Notifications</h3>
        </div>
        <div className="space-y-3">
          {['New order alerts', 'Low stock alerts', 'Customer registration', 'Daily sales report'].map(n => (
            <label key={n} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <span className="text-sm text-gray-700">{n}</span>
              <input type="checkbox" className="accent-brand-600 rounded" defaultChecked />
            </label>
          ))}
        </div>
      </Card>
    </div>
  )
}
