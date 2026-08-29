import { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [coupon, setCoupon] = useState(null)
  const [pincode, setPincode] = useState('')
  const [pincodeValid, setPincodeValid] = useState(null)

  const addToCart = useCallback((product, qty = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i)
      }
      return [...prev, { ...product, qty }]
    })
  }, [])

  const removeFromCart = useCallback((productId) => {
    setItems(prev => prev.filter(i => i.id !== productId))
  }, [])

  const updateQty = useCallback((productId, qty) => {
    if (qty <= 0) {
      setItems(prev => prev.filter(i => i.id !== productId))
    } else {
      setItems(prev => prev.map(i => i.id === productId ? { ...i, qty } : i))
    }
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const cartCount = items.reduce((sum, i) => sum + i.qty, 0)
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const deliveryFee = subtotal >= 499 ? 0 : 40
  const discount = coupon ? (coupon.type === 'flat' ? coupon.discount : Math.round(subtotal * coupon.discount / 100)) : 0
  const total = Math.max(0, subtotal + deliveryFee - discount)

  return (
    <CartContext.Provider value={{
      items, addToCart, removeFromCart, updateQty, clearCart,
      cartCount, subtotal, deliveryFee, discount, total,
      coupon, setCoupon, pincode, setPincode, pincodeValid, setPincodeValid,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
