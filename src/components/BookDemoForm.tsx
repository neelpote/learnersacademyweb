'use client'

import { useState } from 'react'
import { Button } from './ui/Button'
import { X } from 'lucide-react'

interface BookDemoFormProps {
  isOpen: boolean
  onClose: () => void
}

export function BookDemoForm({ isOpen, onClose }: BookDemoFormProps) {
  const [formData, setFormData] = useState({
    studentName: '',
    phone: '',
    class: '',
    subject: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [lastSubmitTime, setLastSubmitTime] = useState(0)
  const [submitCount, setSubmitCount] = useState(0)
  const [cooldownEnd, setCooldownEnd] = useState(0)

  // Rate limiting constants
  const SUBMIT_COOLDOWN = 30000 // 30 seconds between submissions
  const MAX_SUBMISSIONS_PER_HOUR = 10 // Maximum 10 submissions per hour
  const HOUR_IN_MS = 60 * 60 * 1000

  // Check rate limits
  const checkRateLimit = () => {
    const now = Date.now()
    
    // Check cooldown period
    if (now < cooldownEnd) {
      const remainingSeconds = Math.ceil((cooldownEnd - now) / 1000)
      alert(`Please wait ${remainingSeconds} seconds before submitting again.`)
      return false
    }

    // Check hourly limit
    const submissionsKey = 'demo_submissions'
    const storedSubmissions = localStorage.getItem(submissionsKey)
    let submissions = []
    
    if (storedSubmissions) {
      submissions = JSON.parse(storedSubmissions).filter(
        (timestamp: number) => now - timestamp < HOUR_IN_MS
      )
    }

    if (submissions.length >= MAX_SUBMISSIONS_PER_HOUR) {
      alert('You have reached the maximum number of demo requests per hour. Please try again later.')
      return false
    }

    return true
  }

  // Update rate limit tracking
  const updateRateLimit = () => {
    const now = Date.now()
    
    // Set cooldown
    setCooldownEnd(now + SUBMIT_COOLDOWN)
    
    // Update hourly tracking
    const submissionsKey = 'demo_submissions'
    const storedSubmissions = localStorage.getItem(submissionsKey)
    let submissions = []
    
    if (storedSubmissions) {
      submissions = JSON.parse(storedSubmissions).filter(
        (timestamp: number) => now - timestamp < HOUR_IN_MS
      )
    }
    
    submissions.push(now)
    localStorage.setItem(submissionsKey, JSON.stringify(submissions))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Check rate limits
    if (!checkRateLimit()) {
      return
    }
    
    setIsSubmitting(true)

    try {
      // Add honeypot field for spam protection
      const submissionData = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        from_name: 'The Learners Academy Website',
        ...formData,
        subject: formData.subject || 'New Demo Booking Request', // Use form subject or default
        _honeypot: '', // Honeypot field for spam protection
        _captcha: false, // Disable captcha for now
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ studentName: '', phone: '', class: '', subject: '' })
        updateRateLimit()
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-brand-silver rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-blue hover:text-brand-maroon transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-2xl font-sans font-semibold text-brand-maroon mb-6">
          Book a Free Demo
        </h2>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="text-brand-maroon text-5xl mb-4">✓</div>
            <h3 className="text-xl font-semibold text-brand-maroon mb-2">Thank You!</h3>
            <p className="text-brand-blue mb-6">
              We'll contact you soon to schedule your free demo class.
            </p>
            <Button onClick={onClose}>Close</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="studentName" className="block text-sm font-medium text-brand-maroon mb-2">
                Student Name *
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-brand-blue rounded-lg bg-brand-silver text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-maroon"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-brand-maroon mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-brand-blue rounded-lg bg-brand-silver text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-maroon"
              />
            </div>

            <div>
              <label htmlFor="class" className="block text-sm font-medium text-brand-maroon mb-2">
                Class *
              </label>
              <select
                id="class"
                name="class"
                value={formData.class}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-brand-blue rounded-lg bg-brand-silver text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-maroon"
              >
                <option value="">Select Class</option>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
              </select>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-brand-maroon mb-2">
                Subject of Interest
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g., Mathematics, Physics, Chemistry"
                className="w-full px-3 py-2 border border-brand-blue rounded-lg bg-brand-silver text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-maroon"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" disabled={isSubmitting} className="flex-1">
                {isSubmitting ? 'Submitting...' : 'Book Demo'}
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}