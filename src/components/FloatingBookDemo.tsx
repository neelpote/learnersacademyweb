'use client'

import { Calendar } from 'lucide-react'

interface FloatingBookDemoProps {
  onBookDemo: () => void
}

export function FloatingBookDemo({ onBookDemo }: FloatingBookDemoProps) {
  return (
    <button
      onClick={onBookDemo}
      className="fixed bottom-20 left-4 md:hidden z-40 bg-brand-maroon hover:bg-opacity-90 text-brand-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-maroon focus:ring-opacity-50 flex items-center gap-2"
      aria-label="Book Demo"
    >
      <Calendar className="h-5 w-5" />
      <span className="font-medium text-sm">Book Demo</span>
    </button>
  )
}