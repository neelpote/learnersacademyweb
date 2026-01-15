'use client'

import Image from 'next/image'
import { X, Sparkles } from 'lucide-react'
import { Button } from './ui/Button'

interface WelcomePopupProps {
  isOpen: boolean
  onClose: () => void
  onBookDemo: () => void
}

export function WelcomePopup({ isOpen, onClose, onBookDemo }: WelcomePopupProps) {
  if (!isOpen) return null

  const handleBookDemo = () => {
    onClose()
    onBookDemo()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-brand-silver rounded-lg max-w-lg w-full p-8 relative border-2 border-brand-blue">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-blue hover:text-brand-maroon transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6">
            <Image
              src="/academy Logo - Background Removed.png"
              alt="The Learners' Academy Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>

          <h2 className="text-3xl font-sans font-bold text-brand-maroon mb-4">
            Welcome to The Learners' Academy!
          </h2>

          <p className="text-lg text-brand-blue mb-6">
            Transform your academic journey with expert teachers and personalized learning for classes 6-12.
          </p>

          <div className="bg-brand-blue/5 border border-brand-blue rounded-lg p-4 mb-6">
            <p className="text-brand-blue font-medium">
              🎓 Expert Teachers • 📚 Comprehensive Curriculum • 🏆 Proven Results
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleBookDemo}
              className="flex-1 text-lg py-3"
            >
              Book Free Demo
            </Button>
            <Button 
              variant="outline"
              onClick={onClose}
              className="flex-1 text-lg py-3"
            >
              Explore Website
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
