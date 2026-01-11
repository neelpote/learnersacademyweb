'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { client, queries, urlFor } from '@/lib/sanity'
import { Trophy, Star, Award } from 'lucide-react'

interface SuccessStory {
  _id: string
  studentName: string
  photo: any
  marks: string
  rank?: string
  testimonialQuote: string
  year: number
}

export function SuccessStoriesSection() {
  const [successStories, setSuccessStories] = useState<SuccessStory[]>([])

  useEffect(() => {
    const fetchSuccessStories = async () => {
      try {
        const data = await client.fetch(queries.successStories)
        setSuccessStories(data.slice(0, 6)) // Show first 6 stories
      } catch (error) {
        console.error('Error fetching success stories:', error)
      }
    }
    fetchSuccessStories()
  }, [])

  return (
    <section id="success-stories" className="py-20 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Celebrating the achievements of our students who have excelled in their academic journey
            and achieved remarkable results in board examinations.
          </p>
        </div>

        {successStories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div
                key={story._id}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg p-6 border border-blue-200 dark:border-blue-800"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  {story.photo ? (
                    <Image
                      src={urlFor(story.photo).width(150).height(150).url()}
                      alt={story.studentName}
                      fill
                      className="rounded-full object-cover border-4 border-white dark:border-zinc-800"
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center border-4 border-white dark:border-zinc-800">
                      <Award className="h-12 w-12 text-zinc-400" />
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-center gap-2 mb-4">
                  <Trophy className="h-5 w-5 text-yellow-600" />
                  <span className="text-lg font-bold text-blue-600">
                    {story.marks}
                  </span>
                  {story.rank && (
                    <>
                      <span className="text-zinc-400">•</span>
                      <span className="text-sm font-medium text-blue-600">
                        Rank {story.rank}
                      </span>
                    </>
                  )}
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-xl font-sans font-semibold text-foreground mb-1">
                    {story.studentName}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Class of {story.year}
                  </p>
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 border border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 italic">
                      "{story.testimonialQuote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Trophy className="h-16 w-16 text-zinc-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No Success Stories Yet</h3>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
              Success stories will appear here once they are added through the Sanity dashboard.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}