import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, User, LogOut, ArrowRight } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { signOut as supabaseSignOut } from '../lib/supabaseClient'

const services = [
  { name: 'Work Permit', path: '/services/work-permit', desc: 'Navigate complex work permit applications' },
  { name: 'Study Visa', path: '/services/study-visa', desc: 'Turn your academic dreams into reality' },
  { name: 'Job Assistance', path: '/services/job-assistance', desc: 'Expert career guidance worldwide' },
]

const countries = [
  { name: 'Canada', path: '/countries/canada', flag: 'CA' },
  { name: 'Australia', path: '/countries/australia', flag: 'AU' },
  { name: 'Germany', path: '/countries/germany', flag: 'DE' },
  { name: 'United Kingdom', path: '/countries/uk', flag: 'UK' },
  { name: 'USA', path: '/countries/usa', flag: 'US' },
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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-3 bg-navy-950/80 backdrop-blur-xl border-b border-white/5' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <span className="text-navy-950 font-bold text-lg font-display">S</span>
                </div>
                <div className="absolute -inset-1 rounded-xl bg-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-lg font-semibold text-white tracking-tight">SiddhivinayakOverseas</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              <NavLink to="/">Home</NavLink>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setDropdown('services')} 
                onMouseLeave={() => setDropdown(null)}
              >
                <button className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 rounded-lg hover:bg-white/5">
                  Services 
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-200 ${dropdown === 'services' ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {dropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute top-full left-0 mt-2 w-72 bg-navy-950/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden"
                    >
                      <div className="p-2">
                        {services.map((s, i) => (
                          <Link 
                            key={s.path} 
                            to={s.path}
                            className="block p-3 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-sm font-medium text-white group-hover:text-accent-light transition-colors">
                                  {s.name}
                                </div>
                                <div className="text-xs text-slate-500 mt-0.5">{s.desc}</div>
                              </div>
                              <ArrowRight size={14} className="text-slate-600 group-hover:text-accent-light group-hover:translate-x-1 transition-all" />
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-white/5 p-3 bg-white/[0.02]">
                        <Link to="/programs" className="text-xs text-slate-500 hover:text-accent-light transition-colors flex items-center gap-1">
                          View all programs <ArrowRight size={12} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Countries Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setDropdown('countries')} 
                onMouseLeave={() => setDropdown(null)}
              >
                <button className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 rounded-lg hover:bg-white/5">
                  Countries 
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-200 ${dropdown === 'countries' ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {dropdown === 'countries' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute top-full left-0 mt-2 w-56 bg-navy-950/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden"
                    >
                      <div className="p-2">
                        {countries.map((c) => (
                          <Link 
                            key={c.path} 
                            to={c.path}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-xs font-semibold text-slate-400 group-hover:bg-accent/10 group-hover:text-accent-light transition-colors">
                              {c.flag}
                            </div>
                            <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{c.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink to="/programs">Programs</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-3">
              {user ? (
                <div className="flex items-center gap-2">
                  <Link 
                    to="/dashboard" 
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                  >
                    <User size={16} /> Dashboard
                  </Link>
                  <button 
                    onClick={handleSignOut} 
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-400 hover:text-red-300 transition-colors rounded-lg hover:bg-red-500/10"
                  >
                    <LogOut size={16} /> Sign Out
                  </button>
                </div>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    Sign in
                  </Link>
                  <Link to="/signup">
                    <button className="px-5 py-2.5 bg-white text-navy-950 text-sm font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 hover:shadow-lg hover:shadow-white/10">
                      Get Started
                    </button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile toggle */}
            <button 
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-white hover:bg-white/10 transition-colors" 
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            
            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] bg-navy-950 border-l border-white/5 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display text-lg font-semibold text-white">Menu</span>
                  <button 
                    onClick={() => setMobileOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-white hover:bg-white/10 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Links */}
                <div className="space-y-1">
                  <MobileLink to="/" onClick={() => setMobileOpen(false)}>Home</MobileLink>
                  
                  <div className="py-3">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">Services</div>
                    {services.map(s => (
                      <MobileLink key={s.path} to={s.path} onClick={() => setMobileOpen(false)} sub>
                        {s.name}
                      </MobileLink>
                    ))}
                  </div>

                  <div className="py-3">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">Countries</div>
                    {countries.map(c => (
                      <MobileLink key={c.path} to={c.path} onClick={() => setMobileOpen(false)} sub>
                        {c.name}
                      </MobileLink>
                    ))}
                  </div>

                  <MobileLink to="/programs" onClick={() => setMobileOpen(false)}>Programs</MobileLink>
                  <MobileLink to="/blog" onClick={() => setMobileOpen(false)}>Blog</MobileLink>
                  <MobileLink to="/contact" onClick={() => setMobileOpen(false)}>Contact</MobileLink>
                </div>

                {/* Auth buttons */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  {user ? (
                    <div className="space-y-2">
                      <Link 
                        to="/dashboard" 
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2 w-full px-4 py-3 text-sm font-medium text-white bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                      >
                        <User size={18} /> Dashboard
                      </Link>
                      <button 
                        onClick={() => { handleSignOut(); setMobileOpen(false); }}
                        className="flex items-center gap-2 w-full px-4 py-3 text-sm font-medium text-red-400 bg-red-500/10 rounded-xl hover:bg-red-500/20 transition-colors"
                      >
                        <LogOut size={18} /> Sign Out
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Link 
                        to="/login" 
                        onClick={() => setMobileOpen(false)}
                        className="block w-full px-4 py-3 text-center text-sm font-medium text-white bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                      >
                        Sign in
                      </Link>
                      <Link 
                        to="/signup" 
                        onClick={() => setMobileOpen(false)}
                        className="block w-full px-4 py-3 text-center text-sm font-semibold text-navy-950 bg-accent rounded-xl hover:bg-accent-light transition-colors"
                      >
                        Get Started
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ to, children }) {
  const location = useLocation()
  const isActive = location.pathname === to
  
  return (
    <Link 
      to={to}
      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
        isActive 
          ? 'text-white bg-white/5' 
          : 'text-slate-400 hover:text-white hover:bg-white/5'
      }`}
    >
      {children}
    </Link>
  )
}

function MobileLink({ to, children, onClick, sub }) {
  const location = useLocation()
  const isActive = location.pathname === to
  
  return (
    <Link 
      to={to}
      onClick={onClick}
      className={`block px-3 py-2.5 text-sm font-medium rounded-xl transition-colors ${
        sub ? 'pl-6 text-slate-400 hover:text-white hover:bg-white/5' : ''
      } ${
        isActive 
          ? 'text-white bg-white/5' 
          : sub ? '' : 'text-slate-300 hover:text-white hover:bg-white/5'
      }`}
    >
      {children}
    </Link>
  )
}
