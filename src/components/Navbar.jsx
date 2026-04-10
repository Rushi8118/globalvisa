import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe, ChevronDown, User, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { signOut as supabaseSignOut } from '../lib/supabaseClient'

const services = [
  { name: 'Work Permit', path: '/services/work-permit' },
  { name: 'Study Visa', path: '/services/study-visa' },
  { name: 'Job Assistance', path: '/services/job-assistance' },
]

const countries = [
  { name: 'Canada', path: '/countries/canada' },
  { name: 'Australia', path: '/countries/australia' },
  { name: 'Germany', path: '/countries/germany' },
  { name: 'United Kingdom', path: '/countries/uk' },
  { name: 'USA', path: '/countries/usa' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdown, setDropdown] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()
  const { user } = useAuth()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdown(null)
  }, [location])

  const handleSignOut = async () => {
    await supabaseSignOut()
    navigate('/')
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-dark py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <Globe size={20} className="text-navy-950" />
              </div>
              <div>
                <span className="font-display text-lg font-700 text-white leading-none">SiddhivinayakOverseas</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="nav-link">Home</Link>
              
              {/* Services Dropdown */}
              <div className="relative" onMouseEnter={() => setDropdown('services')} onMouseLeave={() => setDropdown(null)}>
                <button className="nav-link flex items-center gap-1">
                  Services <ChevronDown size={14} className={`transition-transform ${dropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {dropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-8 left-0 glass-dark rounded-xl p-2 min-w-48 shadow-2xl"
                    >
                      {services.map(s => (
                        <Link key={s.path} to={s.path} className="block px-4 py-2.5 text-sm text-slate-300 hover:text-gold-400 hover:bg-white/5 rounded-lg transition-colors">
                          {s.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Countries Dropdown */}
              <div className="relative" onMouseEnter={() => setDropdown('countries')} onMouseLeave={() => setDropdown(null)}>
                <button className="nav-link flex items-center gap-1">
                  Countries <ChevronDown size={14} className={`transition-transform ${dropdown === 'countries' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {dropdown === 'countries' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-8 left-0 glass-dark rounded-xl p-2 min-w-48 shadow-2xl"
                    >
                      {countries.map(c => (
                        <Link key={c.path} to={c.path} className="block px-4 py-2.5 text-sm text-slate-300 hover:text-gold-400 hover:bg-white/5 rounded-lg transition-colors">
                          {c.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/programs" className="nav-link">Programs</Link>
              <Link to="/blog" className="nav-link">Blog</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-3">
              {user ? (
                <div className="flex items-center gap-3">
                  <Link to="/dashboard" className="nav-link flex items-center gap-1.5">
                    <User size={15} /> Dashboard
                  </Link>
                  <button onClick={handleSignOut} className="nav-link flex items-center gap-1.5 text-red-400">
                    <LogOut size={15} /> Sign Out
                  </button>
                </div>
              ) : (
                <>
                  <Link to="/login" className="nav-link">Login</Link>
                  <Link to="/signup">
                    <button className="btn-primary text-sm px-6 py-2.5">Get Started</button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile toggle */}
            <button className="lg:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 z-40 glass-dark pt-20 px-6 pb-6 overflow-y-auto lg:hidden"
          >
            <div className="space-y-4">
              <Link to="/" className="block text-lg text-slate-200 font-medium py-2 border-b border-white/10">Home</Link>
              <div>
                <div className="text-xs font-semibold text-gold-400 uppercase tracking-widest mb-2">Services</div>
                {services.map(s => (
                  <Link key={s.path} to={s.path} className="block py-2 text-slate-300 pl-3">{s.name}</Link>
                ))}
              </div>
              <div>
                <div className="text-xs font-semibold text-gold-400 uppercase tracking-widest mb-2">Countries</div>
                {countries.map(c => (
                  <Link key={c.path} to={c.path} className="block py-2 text-slate-300 pl-3">{c.name}</Link>
                ))}
              </div>
              <Link to="/programs" className="block text-lg text-slate-200 font-medium py-2 border-b border-white/10">Programs</Link>
              <Link to="/blog" className="block text-lg text-slate-200 font-medium py-2 border-b border-white/10">Blog</Link>
              <Link to="/contact" className="block text-lg text-slate-200 font-medium py-2 border-b border-white/10">Contact</Link>
              {user ? (
                <>
                  <Link to="/dashboard" className="block text-lg text-slate-200 font-medium py-2">Dashboard</Link>
                  <button onClick={handleSignOut} className="w-full text-left text-red-400 py-2">Sign Out</button>
                </>
              ) : (
                <div className="flex gap-3 pt-4">
                  <Link to="/login" className="flex-1 btn-outline text-center py-3 rounded-lg border border-white/20 text-white">Login</Link>
                  <Link to="/signup" className="flex-1"><button className="btn-primary w-full">Sign Up</button></Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
