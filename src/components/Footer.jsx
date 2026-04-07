import { Link } from 'react-router-dom'
import { Globe, Mail, Phone, MapPin, Share2, Link as LinkIcon, Users, Camera, PlayCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <Globe size={20} className="text-navy-950" />
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white">SiddhivinayakOverseas</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted immigration partner for over 15 years. We've helped 50,000+ clients achieve their dreams of living, working, and studying abroad.
            </p>
            <div className="flex gap-3">
              {[Share2, LinkIcon, Users, Camera, PlayCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-gold-400 hover:border-gold-400/30 transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {['Work Permit', 'Study Visa', 'Job Assistance', 'PR Application', 'Family Visa', 'Business Visa'].map(s => (
                <li key={s}><a href="#" className="text-slate-400 hover:text-gold-400 text-sm transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Countries</h4>
            <ul className="space-y-2.5">
              {['Canada', 'Australia', 'Germany', 'United Kingdom', 'USA', 'New Zealand'].map(c => (
                <li key={c}><a href="#" className="text-slate-400 hover:text-gold-400 text-sm transition-colors">{c}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin size={15} className="text-gold-400 mt-0.5 flex-shrink-0" />
                123 Immigration Tower, Toronto, Canada M5H 2N2
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <Phone size={15} className="text-gold-400 flex-shrink-0" />
                +1 (800) 555-VISA
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <Mail size={15} className="text-gold-400 flex-shrink-0" />
                info@globalvisapro.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2026 SiddhivinayakOverseas. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
              <a key={l} href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
