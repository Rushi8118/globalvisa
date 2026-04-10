import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Briefcase, GraduationCap, Globe, ArrowRight, Star, CheckCircle,
  Users, Award, Clock, Phone, Shield, Sparkles, ChevronRight, MessageCircle
} from 'lucide-react'
import Globe3D from '../components/Globe3D'

const stats = [
  { number: '50,000+', label: 'Successful Clients', suffix: '' },
  { number: '98', label: 'Approval Rate', suffix: '%' },
  { number: '45+', label: 'Countries Served', suffix: '' },
  { number: '15+', label: 'Years Experience', suffix: '' },
]

const services = [
  {
    icon: Briefcase,
    title: 'Work Permit',
    desc: 'Navigate complex work permit applications with our expert guidance. From documentation to final approval.',
    features: ['Expert Documentation', 'Fast Processing', '24/7 Support'],
    link: '/services/work-permit',
  },
  {
    icon: GraduationCap,
    title: 'Study Visa',
    desc: 'Turn your academic dreams into reality. Study at top universities worldwide with our comprehensive support.',
    features: ['University Selection', 'Visa Processing', 'Pre-Departure Help'],
    link: '/services/study-visa',
  },
  {
    icon: Globe,
    title: 'Immigration',
    desc: 'Start a new chapter with permanent residency support. Expert guidance for PR applications and citizenship.',
    features: ['PR Applications', 'Family Sponsorship', 'Citizenship Support'],
    link: '/services/job-assistance',
  },
]

const countries = [
  { name: 'Canada', flag: 'CA', visas: '12 Visa Types', popular: 'Express Entry', path: '/countries/canada' },
  { name: 'Australia', flag: 'AU', visas: '10 Visa Types', popular: 'Skilled Migration', path: '/countries/australia' },
  { name: 'Germany', flag: 'DE', visas: '8 Visa Types', popular: 'EU Blue Card', path: '/countries/germany' },
  { name: 'UK', flag: 'UK', visas: '9 Visa Types', popular: 'Skilled Worker', path: '/countries/uk' },
  { name: 'USA', flag: 'US', visas: '15 Visa Types', popular: 'H-1B Visa', path: '/countries/usa' },
]

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Software Engineer',
    country: 'India to Canada',
    image: 'PS',
    rating: 5,
    text: 'SiddhivinayakOverseas made my dream of working in Canada a reality. The team was incredibly knowledgeable and supportive throughout the entire process.',
    visa: 'Express Entry PR',
  },
  {
    name: 'Ahmed Al-Rashid',
    role: 'Data Scientist',
    country: 'UAE to Germany',
    image: 'AR',
    rating: 5,
    text: 'I got my EU Blue Card in just 3 months! The consultants knew exactly what documents were needed and guided me flawlessly.',
    visa: 'EU Blue Card',
  },
  {
    name: 'Chen Wei',
    role: 'Business Analyst',
    country: 'China to Australia',
    image: 'CW',
    rating: 5,
    text: 'From student visa to permanent residency, they were with me every step. They genuinely care about their clients\' success.',
    visa: 'Skilled Migration',
  },
]

const trustedBy = [
  'TechCorp', 'GlobalBank', 'InnovateCo', 'FutureTech', 'DataDrive', 'CloudScale'
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

function AnimatedSection({ children, className = '', delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
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
    <div className="bg-navy-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Animated orbs */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                  <Sparkles size={14} className="text-accent" />
                  <span className="text-sm text-slate-300">Trusted by 50,000+ clients worldwide</span>
                </div>
                
                {/* Headline */}
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                  Your Gateway to a{' '}
                  <span className="relative">
                    <span className="gradient-text">Global Future</span>
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                      <path d="M2 10C50 4 150 2 298 10" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/>
                      <defs>
                        <linearGradient id="paint0_linear" x1="2" y1="10" x2="298" y2="10">
                          <stop stopColor="#f59e0b"/>
                          <stop offset="1" stopColor="#fbbf24"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg">
                  Expert immigration consulting for work permits, study visas, and permanent residency. We turn your international dreams into reality with a 98% approval success rate.
                </p>
                
                {/* CTAs */}
                <div className="flex flex-wrap gap-4 mb-12">
                  <Link to="/programs">
                    <button className="group px-8 py-4 bg-accent hover:bg-accent-light text-navy-950 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 flex items-center gap-2">
                      Start Your Journey
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  <Link to="/contact">
                    <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2">
                      <Phone size={18} />
                      Free Consultation
                    </button>
                  </Link>
                </div>
                
                {/* Trust indicators */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                  {[
                    { icon: Shield, text: 'Certified Experts' },
                    { icon: Clock, text: 'Fast Processing' },
                    { icon: CheckCircle, text: 'No Hidden Fees' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <item.icon size={16} className="text-accent/70" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right - Globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/20 to-accent/10 blur-3xl" />
                
                {/* Globe */}
                <Globe3D />

                {/* Floating cards */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 -left-4 bg-navy-900/80 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                      <CheckCircle size={20} className="text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Visa Approved</div>
                      <div className="text-xs text-slate-500">Canada PR - Just now</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-20 -right-4 bg-navy-900/80 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-xl"
                >
                  <div className="text-xs text-slate-500 mb-1">Average Processing</div>
                  <div className="text-2xl font-display font-bold text-white">8-12 weeks</div>
                  <div className="text-xs text-accent mt-1">Express Track Available</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
      </section>

      {/* Trusted By - Logo Marquee */}
      <section className="py-16 border-y border-white/5 bg-navy-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm text-slate-500 uppercase tracking-wider">Trusted by leading companies worldwide</p>
          </div>
          <div className="flex items-center justify-center gap-12 flex-wrap opacity-40">
            {trustedBy.map((company) => (
              <div key={company} className="text-xl font-display font-semibold text-slate-400">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center p-8 rounded-2xl bg-white/[0.02] border border-white/5"
                >
                  <div className="stat-number text-white mb-2">
                    {stat.number}<span className="text-accent">{stat.suffix}</span>
                  </div>
                  <div className="text-slate-500 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <span className="text-sm text-secondary">Our Services</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Comprehensive Immigration Solutions
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              We provide end-to-end support for all your immigration needs, ensuring a smooth and successful journey.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link to={service.link} className="block h-full">
                  <div className="group h-full p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 hover:bg-white/[0.04]">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon size={24} className="text-secondary" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                          <CheckCircle size={14} className="text-accent/60" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    {/* Link */}
                    <div className="flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                      Learn More <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="text-sm text-accent">Popular Destinations</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Explore Immigration Pathways
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Discover opportunities across the world{"'"}s most sought-after destinations.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {countries.map((country, i) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Link to={country.path}>
                  <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white/5 flex items-center justify-center text-lg font-bold text-slate-400 group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                      {country.flag}
                    </div>
                    <h3 className="font-semibold text-white mb-1">{country.name}</h3>
                    <p className="text-xs text-slate-500 mb-3">{country.visas}</p>
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-xs text-secondary">
                      {country.popular}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us + Contact Form */}
      <section className="py-24 bg-gradient-to-b from-navy-950 to-navy-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Why Choose Us */}
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <span className="text-sm text-accent">Why Choose Us</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                The Trusted Choice for{' '}
                <span className="gradient-text">Immigration</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-10 text-lg">
                With over 15 years of experience, our team of certified immigration consultants has helped thousands achieve their international dreams.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Award, title: 'ICCRC Certified Consultants', desc: 'All our consultants are fully certified and regulated' },
                  { icon: Clock, title: 'Fast Processing Times', desc: 'We streamline applications for the quickest turnarounds' },
                  { icon: Users, title: 'Dedicated Case Manager', desc: 'Personal attention for every application from start to finish' },
                  { icon: Shield, title: '98% Approval Rate', desc: 'Industry-leading success rate across all visa categories' },
                ].map((feature) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon size={22} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-sm text-slate-500">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right - Contact Form */}
            <AnimatedSection delay={0.2}>
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                <h3 className="font-display text-2xl font-bold text-white mb-2">Free Consultation</h3>
                <p className="text-slate-500 text-sm mb-8">Get expert advice on your immigration journey</p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="label">Full Name</label>
                    <input 
                      className="input-glass" 
                      placeholder="John Smith" 
                      value={formData.name} 
                      onChange={e => setFormData({...formData, name: e.target.value})} 
                      required 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="label">Email</label>
                      <input 
                        className="input-glass" 
                        type="email" 
                        placeholder="john@email.com" 
                        value={formData.email} 
                        onChange={e => setFormData({...formData, email: e.target.value})} 
                        required 
                      />
                    </div>
                    <div>
                      <label className="label">Phone</label>
                      <input 
                        className="input-glass" 
                        placeholder="+1 234 567 890" 
                        value={formData.phone} 
                        onChange={e => setFormData({...formData, phone: e.target.value})} 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="label">Service Needed</label>
                    <select 
                      className="input-glass" 
                      value={formData.service} 
                      onChange={e => setFormData({...formData, service: e.target.value})} 
                      required
                    >
                      <option value="">Select a service...</option>
                      <option value="work-permit">Work Permit</option>
                      <option value="study-visa">Study Visa</option>
                      <option value="immigration">Immigration / PR</option>
                      <option value="job-assistance">Job Assistance</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">Message (Optional)</label>
                    <textarea 
                      className="input-glass" 
                      rows="4" 
                      placeholder="Tell us about your situation..." 
                      value={formData.message} 
                      onChange={e => setFormData({...formData, message: e.target.value})} 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-4 bg-accent hover:bg-accent-light text-navy-950 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
                  >
                    {submitted ? 'Request Sent!' : 'Book Free Consultation'}
                  </button>
                </form>
                <p className="text-xs text-slate-600 text-center mt-4">
                  No commitment required. Response within 2 hours.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <span className="text-sm text-secondary">Client Success Stories</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Hear From Our Clients
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Join thousands of satisfied clients who trusted us with their immigration journey.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/5"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary/30 to-accent/30 flex items-center justify-center text-sm font-semibold text-white">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-xs text-slate-500">{testimonial.country}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-xs text-accent">
                    {testimonial.visa}
                  </span>
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={14} fill="#f59e0b" className="text-accent" />
                  ))}
                </div>
                
                {/* Text */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-navy-950 to-accent/5" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to Begin Your{' '}
              <span className="gradient-text">Immigration Journey?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Join 50,000+ successful clients who trusted SiddhivinayakOverseas with their future. Get your free assessment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/programs">
                <button className="group px-8 py-4 bg-accent hover:bg-accent-light text-navy-950 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 flex items-center gap-2 mx-auto">
                  Start Free Assessment
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <a href="tel:+18005558472">
                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2 mx-auto">
                  <Phone size={18} />
                  Call Us Now
                </button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/18005558472" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-btn"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={24} fill="white" className="text-white" />
      </a>
    </div>
  )
}
