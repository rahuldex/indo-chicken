import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import StickyCartBar from './StickyCartBar'

export default function CustomerLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-20 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <StickyCartBar />
    </div>
  )
}
