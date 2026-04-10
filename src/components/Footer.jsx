import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowRight, ArrowUpRight } from 'lucide-react'

const services = [
  { name: 'Work Permit', path: '/services/work-permit' },
  { name: 'Study Visa', path: '/services/study-visa' },
  { name: 'Job Assistance', path: '/services/job-assistance' },
  { name: 'PR Application', path: '/programs' },
  { name: 'Family Visa', path: '/programs' },
]

const countries = [
  { name: 'Canada', path: '/countries/canada' },
  { name: 'Australia', path: '/countries/australia' },
  { name: 'Germany', path: '/countries/germany' },
  { name: 'United Kingdom', path: '/countries/uk' },
  { name: 'USA', path: '/countries/usa' },
]

const company = [
  { name: 'About Us', path: '/about' },
  { name: 'Our Team', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
  { name: 'Careers', path: '/careers' },
]

const socials = [
  { name: 'LinkedIn', url: '#' },
  { name: 'Twitter', url: '#' },
  { name: 'Facebook', url: '#' },
  { name: 'Instagram', url: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5">
      {/* Newsletter Section */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Stay updated on immigration news
              </h3>
              <p className="text-slate-500 text-sm">
                Get the latest visa updates, policy changes, and immigration tips delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-72 px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-accent/50 transition-colors"
              />
              <button className="px-6 py-3 bg-accent hover:bg-accent-light text-navy-950 font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 whitespace-nowrap">
                Subscribe <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                <span className="text-navy-950 font-bold text-lg font-display">S</span>
              </div>
              <span className="font-display text-lg font-semibold text-white">SiddhivinayakOverseas</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted immigration partner for over 15 years. We&apos;ve helped 50,000+ clients achieve their dreams of living and working abroad.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:info@siddhivinayakoverseas.com" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors">
                <Mail size={16} className="text-accent/60" />
                info@siddhivinayakoverseas.com
              </a>
              <a href="tel:+18005558472" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors">
                <Phone size={16} className="text-accent/60" />
                +1 (800) 555-VISA
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin size={16} className="text-accent/60 mt-0.5 flex-shrink-0" />
                123 Immigration Tower, Toronto, Canada M5H 2N2
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-sm text-slate-500 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm">Countries</h4>
            <ul className="space-y-3">
              {countries.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-sm text-slate-500 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-sm text-slate-500 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm">Follow Us</h4>
            <ul className="space-y-3">
              {socials.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.url} 
                    className="text-sm text-slate-500 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {item.name}
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm">
              2026 SiddhivinayakOverseas. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-sm text-slate-600 hover:text-slate-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-slate-600 hover:text-slate-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-slate-600 hover:text-slate-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
