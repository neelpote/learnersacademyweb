'use client'

import { useEffect, useState } from 'react'
import { rateLimitedFetch, queries } from '@/lib/sanity'
import { clientRateLimit } from '@/lib/rateLimit'

interface SuccessStory {
  _id: string
  studentName: string
  marks: string
  rank?: string
  year: number
}

export function ResultsTicker() {
  const [successStories, setSuccessStories] = useState<SuccessStory[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchSuccessStories = async () => {
      setIsLoading(true)
      
      // Check client-side rate limit
      if (!clientRateLimit.check('success_stories', 5, 60 * 1000)) {
        const waitTime = Math.ceil(clientRateLimit.getRemainingTime('success_stories') / 1000)
        console.warn(`Rate limited. Wait ${waitTime} seconds before fetching again.`)
        setIsLoading(false)
        return
      }
      
      try {
        const stories = await rateLimitedFetch(queries.successStories)
        if (stories && stories.length > 0) {
          setSuccessStories(stories.slice(0, 10)) // Show top 10 results from Sanity
        } else {
          // Only use sample data if no Sanity data exists
          setSuccessStories([
            { _id: '1', studentName: 'Rahul Sharma', marks: '95.2%', rank: '3', year: 2024 },
            { _id: '2', studentName: 'Priya Patel', marks: '97.8%', rank: '1', year: 2024 },
            { _id: '3', studentName: 'Arjun Singh', marks: '94.6%', rank: '5', year: 2023 },
          ])
        }
      } catch (error) {
        console.error('Error fetching success stories:', error)
        // Only use sample data if there's an error
        setSuccessStories([
          { _id: '1', studentName: 'Rahul Sharma', marks: '95.2%', rank: '3', year: 2024 },
          { _id: '2', studentName: 'Priya Patel', marks: '97.8%', rank: '1', year: 2024 },
          { _id: '3', studentName: 'Arjun Singh', marks: '94.6%', rank: '5', year: 2023 },
        ])
      } finally {
        setIsLoading(false)
      }
    }

    fetchSuccessStories()
  }, [])

  if (isLoading) {
    return (
      <div className="results-ticker py-3 overflow-hidden relative z-50 h-12 flex items-center">
        <div className="text-center w-full">
          <span className="text-sm font-medium font-body">🏆 Loading our top achievers...</span>
        </div>
      </div>
    )
  }

  if (successStories.length === 0) {
    return (
      <div className="results-ticker py-3 overflow-hidden relative z-50 h-12 flex items-center">
        <div className="text-center w-full">
          <span className="text-sm font-medium font-body">🏆 Add success stories in Sanity Studio to showcase your top achievers!</span>
        </div>
      </div>
    )
  }

  // Create the ticker content
  const tickerContent = successStories.map((story) => (
    `${story.studentName} scored ${story.marks}${story.rank ? ` (Rank ${story.rank})` : ''} • Class of ${story.year}`
  )).join(' | ')

  return (
    <div className="results-ticker py-3 overflow-hidden relative z-50 h-12 flex items-center">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-sm font-medium inline-block font-body">
          🏆 CELEBRATING OUR TOP ACHIEVERS: {tickerContent} • {tickerContent} • 
        </span>
      </div>
    </div>
  )
}