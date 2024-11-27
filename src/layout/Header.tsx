import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiHeartFill, RiMenu4Fill, RiCloseFill } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'
import { Tab } from '../types/Header.types'

function Header() {
  const [tabActive, setTabActive] = useState<Tab | null>('Home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const tabs: Tab[] = ['Home', 'Characters']
  const location = useLocation()

  useEffect(() => {
    if (location.pathname) {
      const currentPath = location.pathname.slice(1)
      const matchedTab = tabs.find(
        (tab) => tab.toLowerCase() === currentPath.toLowerCase()
      )
      if (matchedTab) {
        setTabActive(matchedTab)
      } else {
        setTabActive(null)
      }
    }
  }, [location, tabs])

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <>
      <header className="bg-[#121212] text-white p-4 shadow-md relative z-50 overflow-hidden">
        {/* Animated Background Effects */}
        <div className="absolute inset-0">
          {/* Left Red Glow */}
          <div
            className="absolute -left-10 top-1/2 -translate-y-1/2 w-32 h-32 
                        bg-gradient-to-r from-red-600/40 to-red-500/40 
                        rounded-full blur-3xl opacity-20 
                        animate-[pulse_3s_ease-in-out_infinite]"
          />

          {/* Right Red Glow */}
          <div
            className="absolute -right-10 top-1/2 -translate-y-1/2 w-32 h-32 
                        bg-gradient-to-l from-red-600/40 to-red-500/40 
                        rounded-full blur-3xl opacity-20 
                        animate-[pulse_3s_ease-in-out_infinite_1.5s]"
          />

          {/* Moving Light Beam */}
          <div
            className="absolute top-0 left-0 w-full h-full 
                        bg-gradient-to-r from-transparent via-white/5 to-transparent 
                        translate-x-[-100%] animate-[shimmer_8s_infinite]"
          />
        </div>

        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          {/* Logo with Glow Effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative group bg-[#ED1D24] border-2 rounded-sm border-white p-1"
          >
            <h1
              className="text-2xl font-bold text-white relative z-10 
                            transition-all duration-300 group-hover:text-white"
            >
              MARVEL
            </h1>
            <div
              className="absolute inset-0 bg-red-500/30 filter blur-xl 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 tabs tabs-bordered border-white">
            {tabs.map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item !== 'Home' ? `/${item.toLowerCase()}` : '/'}
                  className={`transition duration-300 ${tabActive === item ? 'text-white border-b-2 border-[#ED1D24] inline-block pb-1' : 'text-gray-300 hover:text-white'}`}
                  onClick={() => setTabActive(item)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden lg:hidden p-2 hover:bg-gray-800 rounded-full transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <RiCloseFill size={24} />
              ) : (
                <RiMenu4Fill size={24} />
              )}
            </motion.div>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-black bg-opacity-95 z-40 md:hidden pt-20"
          >
            <div className="flex flex-col items-center p-4 space-y-6">
              {tabs.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className={`text-xl font-medium transition duration-300 ${
                      tabActive === item
                        ? 'text-[#ED1D24]'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    onClick={() => {
                      setTabActive(item)
                      setIsMenuOpen(false)
                    }}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
