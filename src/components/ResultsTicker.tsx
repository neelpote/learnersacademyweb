'use client'

import { useEffect, useState } from 'react'
import { client, queries } from '@/lib/sanity'

interface SuccessStory {
  _id: string
  studentName: string
  marks: string
  rank?: string
  year: number
}

export function ResultsTicker() {
  const [successStories, setSuccessStories] = useState<SuccessStory[]>([])

  useEffect(() => {
    const fetchSuccessStories = async () => {
      try {
        const stories = await client.fetch(queries.successStories)
        setSuccessStories(stories.slice(0, 10)) // Show top 10 results
      } catch (error) {
        // Use sample data when Sanity is not available
        setSuccessStories([
          { _id: '1', studentName: 'Rahul Sharma', marks: '95.2%', rank: '3', year: 2024 },
          { _id: '2', studentName: 'Priya Patel', marks: '97.8%', rank: '1', year: 2024 },
          { _id: '3', studentName: 'Arjun Singh', marks: '94.6%', rank: '5', year: 2023 },
          { _id: '4', studentName: 'Sneha Gupta', marks: '96.4%', rank: '2', year: 2024 },
          { _id: '5', studentName: 'Vikram Kumar', marks: '93.8%', rank: '7', year: 2023 },
        ])
      }
    }

    fetchSuccessStories()
  }, [])

  if (successStories.length === 0) return null

  return (
    <div className="bg-foreground text-background py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-sm font-medium">
          🎉 TOP RANKERS: {' '}
          {successStories.map((story, index) => (
            <span key={story._id}>
              {story.studentName} - {story.marks}
              {story.rank && ` (Rank ${story.rank})`}
              {index < successStories.length - 1 && ' • '}
            </span>
          ))}
          {' • '}
        </span>
      </div>
    </div>
  )
}