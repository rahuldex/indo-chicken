import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import CustomerLayout from './components/layout/CustomerLayout'
import AdminLayout from './components/layout/AdminLayout'

import Home from './pages/customer/Home'
import ProductListing from './pages/customer/ProductListing'
import ProductDetails from './pages/customer/ProductDetails'
import Cart from './pages/customer/Cart'
import Checkout from './pages/customer/Checkout'
import Login from './pages/customer/Login'
import MyOrders from './pages/customer/MyOrders'
import OrderTracking from './pages/customer/OrderTracking'
import Profile from './pages/customer/Profile'
import AddressManagement from './pages/customer/AddressManagement'

import Dashboard from './pages/admin/Dashboard'
import Products from './pages/admin/Products'
import Categories from './pages/admin/Categories'
import SKUManagement from './pages/admin/SKUManagement'
import Inventory from './pages/admin/Inventory'
import AdminOrders from './pages/admin/AdminOrders'
import Customers from './pages/admin/Customers'
import ServiceablePincodes from './pages/admin/ServiceablePincodes'
import DeliverySlots from './pages/admin/DeliverySlots'
import AdminCoupons from './pages/admin/AdminCoupons'
import SalesReports from './pages/admin/SalesReports'
import Settings from './pages/admin/Settings'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<CustomerLayout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<ProductListing />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="login" element={<Login />} />
            <Route path="orders" element={<MyOrders />} />
            <Route path="orders/:id" element={<OrderTracking />} />
            <Route path="profile" element={<Profile />} />
            <Route path="addresses" element={<AddressManagement />} />
          </Route>

          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="categories" element={<Categories />} />
            <Route path="sku" element={<SKUManagement />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="customers" element={<Customers />} />
            <Route path="pincodes" element={<ServiceablePincodes />} />
            <Route path="delivery-slots" element={<DeliverySlots />} />
            <Route path="coupons" element={<AdminCoupons />} />
            <Route path="reports" element={<SalesReports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
