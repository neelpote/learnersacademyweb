'use client'

import { useState } from 'react'
import { Button } from './ui/Button'
import { X, Download } from 'lucide-react'

interface ResourceDownloadFormProps {
  isOpen: boolean
  onClose: () => void
  resourceTitle: string
  resourceUrl: string
}

export function ResourceDownloadForm({ isOpen, onClose, resourceTitle, resourceUrl }: ResourceDownloadFormProps) {
  const [formData, setFormData] = useState({
    studentName: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Submit form data to Web3Forms
      const submissionData = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        from_name: 'The Learners Academy Website',
        ...formData,
        resource_downloaded: resourceTitle,
        subject: `Resource Download Request - ${resourceTitle}`,
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
        setFormData({ studentName: '', phone: '' })
        
        // Start download after successful form submission
        setTimeout(() => {
          console.log('Starting download:', { resourceTitle, resourceUrl })
          const link = document.createElement('a')
          link.href = resourceUrl
          link.download = `${resourceTitle}.pdf`
          link.target = '_blank'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        }, 1000) // Small delay to show success message
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow digits
    const value = e.target.value.replace(/\D/g, '')
    setFormData(prev => ({
      ...prev,
      phone: value
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

        <div className="flex items-center gap-3 mb-6">
          <div className="bg-brand-maroon text-brand-silver rounded-lg p-2">
            <Download className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-sans font-semibold text-brand-maroon">
              Download Resource
            </h2>
            <p className="text-sm text-brand-blue">
              {resourceTitle}
            </p>
          </div>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="text-brand-maroon text-5xl mb-4">✓</div>
            <h3 className="text-xl font-semibold text-brand-maroon mb-2">Download Started!</h3>
            <p className="text-brand-blue mb-6">
              Your download should begin shortly. Thank you for providing your details.
            </p>
            <Button onClick={onClose}>Close</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-sm text-brand-blue mb-4">
              Please provide your details to download this resource:
            </p>

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
                onChange={handlePhoneChange}
                required
                placeholder="Enter 10-digit mobile number"
                maxLength={10}
                className="w-full px-3 py-2 border border-brand-blue rounded-lg bg-brand-silver text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-maroon"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" disabled={isSubmitting} className="flex-1">
                {isSubmitting ? 'Processing...' : 'Download PDF'}
              </Button>
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}