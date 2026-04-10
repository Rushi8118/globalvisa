import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Mail } from 'lucide-react'
import toast from 'react-hot-toast'
import { resetPassword } from '../lib/supabaseClient'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await resetPassword(email)
      if (error) throw error
      setSubmitted(true)
      toast.success('Recovery email sent! Check your inbox.')
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
          <h1 className="text-3xl font-display font-bold gradient-text mb-2">Reset Password</h1>
          <p className="text-slate-400 mb-8">Enter your email to receive password reset instructions</p>

          {submitted ? (
            <div className="text-center">
              <div className="mb-4 text-green-400">
                <Mail className="w-12 h-12 mx-auto" />
              </div>
              <p className="text-white mb-6">Password reset email has been sent to {email}</p>
              <Link to="/login">
                <button className="btn-primary w-full">Back to Login</button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-white mb-2 block text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="input-field"
                />
              </div>
              <button type="submit" disabled={loading} className="btn-primary w-full">
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
          )}

          <div className="mt-6 pt-6 border-t border-white/10">
            <Link to="/login" className="flex items-center text-gold-500 hover:text-gold-400 transition">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Login
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
