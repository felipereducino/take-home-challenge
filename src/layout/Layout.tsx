import { Outlet } from 'react-router-dom'
import Header from './Header'
import MobileNavbar from './MobileNavBar'

function Layout() {
  return (
    <div className="flex h-screen bg-[#121212] text-white overflow-hidden">
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden pb-[70px] md:pb-0">
          <Outlet />
        </main>
        <MobileNavbar />
      </div>
    </div>
  )
}

export default Layout
