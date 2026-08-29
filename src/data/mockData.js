export const categories = [
  { id: 'chicken', name: 'Fresh Chicken', icon: '🍗', count: 24, color: 'from-brand-500 to-brand-700', image: '/images/categories/chicken.jpg' },
  { id: 'eggs', name: 'Farm Eggs', icon: '🥚', count: 12, color: 'from-amber-400 to-orange-500', image: '/images/categories/eggs.jpg' },
  { id: 'marinated', name: 'Marinated', icon: '🌶️', count: 8, color: 'from-red-400 to-red-600', image: '/images/categories/marinated.jpg' },
  { id: 'combo', name: 'Combo Packs', icon: '📦', count: 6, color: 'from-purple-400 to-purple-600', image: '/images/categories/combo.jpg' },
]

export const products = [
  {
    id: 1, sku: 'CHK-BRST-500', name: 'Boneless Chicken Breast', category: 'chicken',
    image: '/images/products/chicken-breast.jpg',
    mrp: 320, price: 249, unit: '500g', stock: 45, rating: 4.8, reviews: 234,
    description: 'Premium boneless chicken breast, freshly cut and hygienically packed. Perfect for grilling, stir-fry, or curries.',
    tags: ['Best Seller', 'Fresh Cut'], weight: '500g', shelfLife: '2 days refrigerated',
  },
  {
    id: 2, sku: 'CHK-LEGS-1KG', name: 'Chicken Drumsticks', category: 'chicken',
    image: '/images/products/chicken-drumsticks.jpg',
    mrp: 280, price: 199, unit: '1kg', stock: 32, rating: 4.6, reviews: 189,
    description: 'Juicy chicken drumsticks, ideal for frying, baking, or tandoori preparations.',
    tags: ['Popular'], weight: '1kg', shelfLife: '2 days refrigerated',
  },
  {
    id: 3, sku: 'CHK-WHOLE-1KG', name: 'Whole Chicken (Skinless)', category: 'chicken',
    image: '/images/products/whole-chicken.jpg',
    mrp: 350, price: 279, unit: '1kg', stock: 18, rating: 4.7, reviews: 156,
    description: 'Farm-fresh whole chicken, skinless and cleaned. Great for roasting or family meals.',
    tags: ['Family Pack'], weight: '1kg', shelfLife: '2 days refrigerated',
  },
  {
    id: 4, sku: 'CHK-MINC-500', name: 'Chicken Keema (Minced)', category: 'chicken',
    image: '/images/products/chicken-keema.jpg',
    mrp: 260, price: 189, unit: '500g', stock: 28, rating: 4.5, reviews: 98,
    description: 'Finely minced chicken keema, perfect for kebabs, curries, and momos.',
    tags: [], weight: '500g', shelfLife: '1 day refrigerated',
  },
  {
    id: 5, sku: 'EGG-BRN-12', name: 'Brown Farm Eggs', category: 'eggs',
    image: '/images/products/brown-eggs.jpg',
    mrp: 120, price: 89, unit: '12 pcs', stock: 120, rating: 4.9, reviews: 412,
    description: 'Free-range brown eggs from happy hens. Rich in protein and omega-3.',
    tags: ['Best Seller', 'Organic'], weight: '12 pcs', shelfLife: '15 days',
  },
  {
    id: 6, sku: 'EGG-WHT-30', name: 'White Eggs (Tray)', category: 'eggs',
    image: '/images/products/white-eggs.jpg',
    mrp: 220, price: 169, unit: '30 pcs', stock: 85, rating: 4.7, reviews: 267,
    description: 'Fresh white eggs in a convenient 30-piece tray. Great value for families.',
    tags: ['Value Pack'], weight: '30 pcs', shelfLife: '15 days',
  },
  {
    id: 7, sku: 'EGG-ORG-6', name: 'Organic Country Eggs', category: 'eggs',
    image: '/images/products/organic-eggs.jpg',
    mrp: 90, price: 72, unit: '6 pcs', stock: 60, rating: 4.8, reviews: 145,
    description: 'Certified organic country eggs with deep orange yolks and superior taste.',
    tags: ['Premium', 'Organic'], weight: '6 pcs', shelfLife: '12 days',
  },
  {
    id: 8, sku: 'MAR-TAND-500', name: 'Tandoori Chicken Marinade', category: 'marinated',
    image: '/images/products/tandoori.jpg',
    mrp: 340, price: 269, unit: '500g', stock: 22, rating: 4.6, reviews: 87,
    description: 'Pre-marinated tandoori chicken with authentic spices. Ready to cook.',
    tags: ['Ready to Cook'], weight: '500g', shelfLife: '2 days refrigerated',
  },
  {
    id: 9, sku: 'MAR-PERI-500', name: 'Peri Peri Chicken', category: 'marinated',
    image: '/images/products/peri-peri.jpg',
    mrp: 360, price: 289, unit: '500g', stock: 15, rating: 4.5, reviews: 64,
    description: 'Spicy peri peri marinated chicken pieces. Grill or pan-fry for best results.',
    tags: ['Spicy'], weight: '500g', shelfLife: '2 days refrigerated',
  },
  {
    id: 10, sku: 'CMB-FAM-1', name: 'Family Combo Pack', category: 'combo',
    image: '/images/products/combo-pack.jpg',
    mrp: 599, price: 449, unit: 'pack', stock: 10, rating: 4.9, reviews: 178,
    description: '1kg chicken curry cut + 12 brown eggs + 500g keema. Perfect family starter pack.',
    tags: ['Best Value', 'Combo'], weight: '2.5kg total', shelfLife: '2 days refrigerated',
  },
  {
    id: 11, sku: 'CHK-CURR-1KG', name: 'Chicken Curry Cut', category: 'chicken',
    image: '/images/products/curry-cut.jpg',
    mrp: 290, price: 219, unit: '1kg', stock: 0, rating: 4.4, reviews: 203,
    description: 'Traditional curry cut pieces with bone. Ideal for Indian curries.',
    tags: [], weight: '1kg', shelfLife: '2 days refrigerated',
  },
  {
    id: 12, sku: 'CHK-WING-500', name: 'Chicken Wings', category: 'chicken',
    image: '/images/products/chicken-wings.jpg',
    mrp: 240, price: 179, unit: '500g', stock: 38, rating: 4.6, reviews: 112,
    description: 'Fresh chicken wings, perfect for BBQ, frying, or buffalo wings.',
    tags: ['Party Favorite'], weight: '500g', shelfLife: '2 days refrigerated',
  },
]

export const serviceablePincodes = ['110001', '110002', '110003', '110016', '110017', '110019', '110020', '110025', '110030', '400001', '400002', '560001', '560034', '560038']

export const deliverySlots = [
  { id: 1, label: 'Morning', time: '7:00 AM – 10:00 AM', available: true },
  { id: 2, label: 'Late Morning', time: '10:00 AM – 1:00 PM', available: true },
  { id: 3, label: 'Afternoon', time: '1:00 PM – 4:00 PM', available: true },
  { id: 4, label: 'Evening', time: '4:00 PM – 7:00 PM', available: false },
  { id: 5, label: 'Night', time: '7:00 PM – 9:00 PM', available: true },
]

export const coupons = [
  { code: 'FRESH50', discount: 50, type: 'flat', minOrder: 299, description: '₹50 off on orders above ₹299' },
  { code: 'EGG20', discount: 20, type: 'percent', minOrder: 199, description: '20% off on egg products' },
  { code: 'WELCOME100', discount: 100, type: 'flat', minOrder: 499, description: '₹100 off for new customers' },
]

export const orders = [
  {
    id: 'ORD-2024-001', date: '2024-08-25', status: 'delivered', total: 687,
    items: [{ name: 'Boneless Chicken Breast', qty: 2, price: 249 }, { name: 'Brown Farm Eggs', qty: 1, price: 89 }],
    address: '42, Green Park, New Delhi - 110016', slot: 'Morning (7-10 AM)',
    tracking: [
      { status: 'Order Placed', time: 'Aug 25, 7:30 AM', done: true },
      { status: 'Confirmed', time: 'Aug 25, 7:35 AM', done: true },
      { status: 'Packed', time: 'Aug 25, 8:00 AM', done: true },
      { status: 'Out for Delivery', time: 'Aug 25, 8:45 AM', done: true },
      { status: 'Delivered', time: 'Aug 25, 9:15 AM', done: true },
    ],
  },
  {
    id: 'ORD-2024-002', date: '2024-08-27', status: 'out_for_delivery', total: 449,
    items: [{ name: 'Family Combo Pack', qty: 1, price: 449 }],
    address: '15, Sector 12, Noida - 201301', slot: 'Late Morning (10-1 PM)',
    tracking: [
      { status: 'Order Placed', time: 'Aug 27, 9:00 AM', done: true },
      { status: 'Confirmed', time: 'Aug 27, 9:05 AM', done: true },
      { status: 'Packed', time: 'Aug 27, 9:30 AM', done: true },
      { status: 'Out for Delivery', time: 'Aug 27, 10:15 AM', done: true },
      { status: 'Delivered', time: '', done: false },
    ],
  },
  {
    id: 'ORD-2024-003', date: '2024-08-28', status: 'processing', total: 368,
    items: [{ name: 'Chicken Drumsticks', qty: 1, price: 199 }, { name: 'Organic Country Eggs', qty: 1, price: 72 }, { name: 'Chicken Wings', qty: 1, price: 97 }],
    address: '8, MG Road, Bangalore - 560001', slot: 'Afternoon (1-4 PM)',
    tracking: [
      { status: 'Order Placed', time: 'Aug 28, 11:00 AM', done: true },
      { status: 'Confirmed', time: 'Aug 28, 11:05 AM', done: true },
      { status: 'Packed', time: '', done: false },
      { status: 'Out for Delivery', time: '', done: false },
      { status: 'Delivered', time: '', done: false },
    ],
  },
]

export const addresses = [
  { id: 1, label: 'Home', name: 'Rahul Sharma', phone: '+91 98765 43210', line1: '42, Green Park Extension', line2: 'Near Metro Station', city: 'New Delhi', state: 'Delhi', pincode: '110016', isDefault: true },
  { id: 2, label: 'Office', name: 'Rahul Sharma', phone: '+91 98765 43210', line1: 'Tower B, 5th Floor', line2: 'Cyber Hub, DLF Phase 3', city: 'Gurugram', state: 'Haryana', pincode: '122002', isDefault: false },
]

export const adminStats = {
  revenue: { today: 45230, week: 312450, month: 1245600, growth: 12.5 },
  orders: { today: 34, week: 245, month: 1023, pending: 8 },
  customers: { total: 3456, new: 89, active: 1234 },
  products: { total: 50, lowStock: 5, outOfStock: 2 },
}

export const adminOrders = [
  { id: 'ORD-2024-003', customer: 'Priya Patel', phone: '9876543210', items: 3, total: 368, status: 'processing', date: '2024-08-28', slot: 'Afternoon' },
  { id: 'ORD-2024-002', customer: 'Amit Kumar', phone: '9123456789', items: 1, total: 449, status: 'out_for_delivery', date: '2024-08-27', slot: 'Late Morning' },
  { id: 'ORD-2024-001', customer: 'Rahul Sharma', phone: '9876543210', items: 2, total: 687, status: 'delivered', date: '2024-08-25', slot: 'Morning' },
  { id: 'ORD-2024-004', customer: 'Sneha Reddy', phone: '9988776655', items: 4, total: 892, status: 'pending', date: '2024-08-28', slot: 'Evening' },
  { id: 'ORD-2024-005', customer: 'Vikram Singh', phone: '9112233445', items: 2, total: 518, status: 'confirmed', date: '2024-08-28', slot: 'Morning' },
]

export const adminCustomers = [
  { id: 1, name: 'Rahul Sharma', email: 'rahul@email.com', phone: '9876543210', orders: 12, spent: 8450, joined: '2024-01-15' },
  { id: 2, name: 'Priya Patel', email: 'priya@email.com', phone: '9123456789', orders: 8, spent: 5230, joined: '2024-03-22' },
  { id: 3, name: 'Amit Kumar', email: 'amit@email.com', phone: '9988776655', orders: 15, spent: 12340, joined: '2023-11-08' },
  { id: 4, name: 'Sneha Reddy', email: 'sneha@email.com', phone: '9112233445', orders: 5, spent: 2890, joined: '2024-06-30' },
]

export const salesData = [
  { month: 'Mar', revenue: 890000, orders: 780 },
  { month: 'Apr', revenue: 920000, orders: 810 },
  { month: 'May', revenue: 1050000, orders: 920 },
  { month: 'Jun', revenue: 980000, orders: 870 },
  { month: 'Jul', revenue: 1120000, orders: 980 },
  { month: 'Aug', revenue: 1245600, orders: 1023 },
]

export function getDiscount(mrp, price) {
  return Math.round(((mrp - price) / mrp) * 100)
}

export function formatPrice(amount) {
  return `₹${amount.toLocaleString('en-IN')}`
}
