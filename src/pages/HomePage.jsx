import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Briefcase, GraduationCap, Globe, ArrowRight, Star, CheckCircle,
  Users, Award, Clock, MapPin, Phone, ChevronRight, Play, MessageCircle
} from 'lucide-react'
import Globe3D from '../components/Globe3D'

const stats = [
  { number: '50K+', label: 'Successful Clients' },
  { number: '98%', label: 'Approval Rate' },
  { number: '45+', label: 'Countries Served' },
  { number: '15+', label: 'Years Experience' },
]

const services = [
  {
    icon: Briefcase,
    title: 'Work Permit',
    desc: 'Navigate complex work permit applications with our expert guidance. We handle everything from documentation to follow-up.',
    color: 'from-gold-500 to-orange-500',
    badge: 'Most Popular',
    link: '/services/work-permit',
  },
  {
    icon: GraduationCap,
    title: 'Study Visa',
    desc: 'Turn your academic dreams into reality. Study at top universities worldwide with our comprehensive student visa service.',
    color: 'from-teal-500 to-cyan-400',
    badge: 'Fast Track',
    link: '/services/study-visa',
  },
  {
    icon: Globe,
    title: 'Immigration',
    desc: 'Start a new chapter in your life with permanent residency support. Expert guidance for PR applications and citizenship.',
    color: 'from-indigo-500 to-purple-500',
    badge: 'Premium',
    link: '/services/job-assistance',
  },
]

const countries = [
  { name: 'Canada', flag: '🇨🇦', visas: '12 Visa Types', popular: 'Express Entry', path: '/countries/canada' },
  { name: 'Australia', flag: '🇦🇺', visas: '10 Visa Types', popular: 'Skilled Migration', path: '/countries/australia' },
  { name: 'Germany', flag: '🇩🇪', visas: '8 Visa Types', popular: 'EU Blue Card', path: '/countries/germany' },
  { name: 'UK', flag: '🇬🇧', visas: '9 Visa Types', popular: 'Skilled Worker', path: '/countries/uk' },
  { name: 'USA', flag: '🇺🇸', visas: '15 Visa Types', popular: 'H-1B Visa', path: '/countries/usa' },
]

const testimonials = [
  {
    name: 'Priya Sharma',
    country: 'India → Canada',
    photo: '👩‍💼',
    rating: 5,
    text: 'SiddhivinayakOverseas made my dream of working in Canada a reality. The team was incredibly knowledgeable and supportive throughout the entire process.',
    visa: 'Express Entry PR',
  },
  {
    name: 'Ahmed Al-Rashid',
    country: 'UAE → Germany',
    photo: '👨‍💻',
    rating: 5,
    text: 'I got my EU Blue Card in just 3 months! The consultants knew exactly what documents were needed and guided me flawlessly through the process.',
    visa: 'EU Blue Card',
  },
  {
    name: 'Chen Wei',
    country: 'China → Australia',
    photo: '👨‍🎓',
    rating: 5,
    text: 'From student visa to permanent residency, SiddhivinayakOverseas was with me every step. They genuinely care about their clients\' success.',
    visa: 'Skilled Migration',
  },
]

const blogs = [
  {
    title: 'Canada Express Entry 2025: Complete Guide to Points System',
    category: 'Immigration News',
    date: 'Jan 15, 2025',
    readTime: '8 min read',
    color: 'from-gold-500/20 to-orange-500/10',
  },
  {
    title: 'Germany\'s Skilled Immigration Act: What It Means for You',
    category: 'Visa Guide',
    date: 'Jan 10, 2025',
    readTime: '6 min read',
    color: 'from-teal-500/20 to-cyan-500/10',
  },
  {
    title: 'Top 10 In-Demand Jobs in Australia 2025',
    category: 'Job Market',
    date: 'Jan 5, 2025',
    readTime: '5 min read',
    color: 'from-indigo-500/20 to-purple-500/10',
  },
]

function AnimatedSection({ children, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div>
      {/* ─── Hero ─── */}
      <section className="hero-bg min-h-screen flex items-center relative overflow-hidden pt-20">
        <div className="dot-pattern absolute inset-0 opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="badge badge-gold mb-6">
                  <Star size={10} fill="currentColor" /> Trusted by 50,000+ Clients Worldwide
                </div>
                <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                  Your Gateway to a{' '}
                  <span className="gradient-text">Global Future</span>
                </h1>
                <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                  Expert immigration consulting for work permits, study visas, and permanent residency. We turn your international dreams into reality with 98% approval success.
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                  <Link to="/programs">
                    <button className="btn-primary flex items-center gap-2">
                      Explore Programs <ArrowRight size={16} />
                    </button>
                  </Link>
                  <Link to="/contact">
                    <button className="btn-outline flex items-center gap-2">
                      <Play size={14} fill="currentColor" /> Free Consultation
                    </button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  {['No Hidden Fees', 'Certified Experts', '24/7 Support'].map(f => (
                    <span key={f} className="flex items-center gap-1.5">
                      <CheckCircle size={14} className="text-teal-400" /> {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <div className="w-full aspect-square max-w-lg mx-auto relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 to-teal-500/20 blur-3xl" />
                <Globe3D />
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 -left-4 glass rounded-xl p-3 hidden lg:block"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">✓</div>
                  <div>
                    <div className="text-xs font-semibold text-white">Visa Approved!</div>
                    <div className="text-xs text-slate-400">Canada PR • 2 min ago</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-16 -right-4 glass rounded-xl p-3 hidden lg:block"
              >
                <div className="text-xs text-slate-400 mb-1">Processing Time</div>
                <div className="text-lg font-bold text-white font-display">8-12 weeks</div>
                <div className="text-xs text-teal-400">Express Track Available</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-950 to-transparent" />
      </section>

      {/* ─── Stats ─── */}
      <section className="py-16 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass rounded-2xl p-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="stat-number">{s.number}</div>
                  <div className="text-slate-400 text-sm mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="section-pad bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="badge badge-teal mx-auto mb-4">Our Services</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Comprehensive immigration services tailored to your unique needs and goals.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl p-6 relative overflow-hidden group cursor-pointer"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${s.color} opacity-10 rounded-full -mr-8 -mt-8 group-hover:opacity-20 transition-opacity`} />
                <div className="badge badge-gold mb-4 text-xs">{s.badge}</div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4`}>
                  <s.icon size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{s.desc}</p>
                <Link to={s.link}>
                  <button className="flex items-center gap-2 text-gold-400 text-sm font-semibold hover:gap-3 transition-all">
                    Learn More <ArrowRight size={15} />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Countries ─── */}
      <section className="section-pad" style={{ background: 'linear-gradient(180deg, #07061a 0%, #0d1030 50%, #07061a 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="badge badge-purple mx-auto mb-4">Destinations</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              Popular <span className="gradient-text">Countries</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Explore immigration opportunities across the world's most sought-after destinations.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {countries.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <Link to={c.path}>
                  <div className="glass rounded-2xl p-5 text-center group cursor-pointer h-full">
                    <div className="text-5xl mb-3">{c.flag}</div>
                    <div className="text-white font-semibold mb-1">{c.name}</div>
                    <div className="text-xs text-slate-500 mb-2">{c.visas}</div>
                    <div className="badge badge-teal text-xs mx-auto">{c.popular}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="section-pad bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="badge badge-gold mb-4">Why Us</div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
                The Trusted Choice for{' '}
                <span className="gradient-text">50,000+ Clients</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                With over 15 years of experience, our team of certified immigration consultants has helped thousands of families, professionals, and students achieve their international dreams.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Award, title: 'ICCRC Certified Consultants', desc: 'All our consultants are fully certified and regulated' },
                  { icon: Clock, title: 'Fast Processing Times', desc: 'We streamline applications for the quickest turnarounds' },
                  { icon: Users, title: 'Dedicated Case Manager', desc: 'Personal attention for every application from start to finish' },
                  { icon: CheckCircle, title: '98% Approval Rate', desc: 'Industry-leading success rate across all visa categories' },
                ].map((f) => (
                  <div key={f.title} className="flex gap-4 p-4 glass rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                      <f.icon size={18} className="text-gold-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{f.title}</div>
                      <div className="text-slate-400 text-sm">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="glass rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-500/20 to-teal-500/10 rounded-full -mr-12 -mt-12 blur-2xl" />
                <h3 className="font-display text-2xl font-bold text-white mb-6">Free Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="label">Full Name</label>
                    <input className="input-glass" placeholder="John Smith" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="label">Email</label>
                      <input className="input-glass" type="email" placeholder="john@email.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
                    </div>
                    <div>
                      <label className="label">Phone</label>
                      <input className="input-glass" placeholder="+1 234 567 890" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                    </div>
                  </div>
                  <div>
                    <label className="label">Service Needed</label>
                    <select className="input-glass" value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} required>
                      <option value="">Select service...</option>
                      <option value="work-permit">Work Permit</option>
                      <option value="study-visa">Study Visa</option>
                      <option value="immigration">Immigration / PR</option>
                      <option value="job-assistance">Job Assistance</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">Message (Optional)</label>
                    <textarea className="input-glass" rows="3" placeholder="Tell us about your situation..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    {submitted ? '✓ Request Sent!' : 'Book Free Consultation'}
                  </button>
                </form>
                <p className="text-xs text-slate-500 text-center mt-3">No commitment required • Response within 2 hours</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="section-pad" style={{ background: 'linear-gradient(180deg, #07061a 0%, #0d1030 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="badge badge-teal mx-auto mb-4">Testimonials</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              Client <span className="gradient-text">Success Stories</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 relative"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500/30 to-teal-500/30 flex items-center justify-center text-2xl">
                      {t.photo}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-slate-500 text-xs">{t.country}</div>
                    </div>
                  </div>
                  <div className="badge badge-gold text-xs">{t.visa}</div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={12} fill="#f59e0b" className="text-gold-500" />
                  ))}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">"{t.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Blog ─── */}
      <section className="section-pad bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex items-end justify-between mb-12">
            <div>
              <div className="badge badge-purple mb-4">Latest News</div>
              <h2 className="font-display text-4xl font-bold text-white">
                Immigration <span className="gradient-text">Insights</span>
              </h2>
            </div>
            <Link to="/blog" className="hidden md:flex items-center gap-2 text-gold-400 font-semibold hover:gap-3 transition-all text-sm">
              View All <ArrowRight size={15} />
            </Link>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`glass rounded-2xl overflow-hidden cursor-pointer group`}
              >
                <div className={`h-40 bg-gradient-to-br ${b.color} relative`}>
                  <div className="absolute inset-0 dot-pattern" />
                  <div className="absolute bottom-4 left-4">
                    <span className="badge badge-gold text-xs">{b.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold mb-3 leading-snug group-hover:text-gold-400 transition-colors">
                    {b.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>{b.date}</span>
                    <span>•</span>
                    <span>{b.readTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-navy-950 to-teal-900/30" />
        <div className="dot-pattern absolute inset-0" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <AnimatedSection>
            <div className="badge badge-gold mx-auto mb-6">Start Today</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Begin Your{' '}
              <span className="gradient-text">Immigration Journey?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-lg mx-auto">
              Join 50,000+ successful clients who trusted SiddhivinayakOverseas with their future. Get your free assessment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/programs">
                <button className="btn-primary flex items-center gap-2 mx-auto">
                  Start Free Assessment <ArrowRight size={16} />
                </button>
              </Link>
              <a href="tel:+18005558472">
                <button className="btn-outline flex items-center gap-2 mx-auto">
                  <Phone size={16} /> Call Now
                </button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WhatsApp */}
      <a href="https://wa.me/18005558472" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
        <MessageCircle size={28} fill="white" className="text-white" />
      </a>
    </div>
  )
}
