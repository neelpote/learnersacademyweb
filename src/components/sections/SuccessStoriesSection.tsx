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
    <section id="success-stories" className="py-20 bg-brand-silver">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-brand-blue max-w-3xl mx-auto">
            Celebrating the achievements of our students who have excelled in their academic journey
            and achieved remarkable results in board examinations.
          </p>
        </div>

        {successStories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div
                key={story._id}
                className="bg-brand-silver rounded-lg p-6 border border-brand-blue"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  {story.photo ? (
                    <Image
                      src={urlFor(story.photo).width(150).height(150).url()}
                      alt={story.studentName}
                      fill
                      className="rounded-full object-cover border-4 border-brand-silver"
                    />
                  ) : (
                    <div className="w-full h-full bg-brand-silver rounded-full flex items-center justify-center border-4 border-brand-silver">
                      <Award className="h-12 w-12 text-muted" />
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-center gap-2 mb-4">
                  <Trophy className="h-5 w-5 text-brand-maroon" />
                  <span className="text-lg font-bold text-brand-blue">
                    {story.marks}
                  </span>
                  {story.rank && (
                    <>
                      <span className="text-muted">•</span>
                      <span className="text-sm font-medium text-brand-maroon">
                        Rank {story.rank}
                      </span>
                    </>
                  )}
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-xl font-sans font-semibold text-brand-maroon mb-1">
                    {story.studentName}
                  </h3>
                  <p className="text-sm text-muted">
                    Class of {story.year}
                  </p>
                </div>

                <div className="bg-brand-silver rounded-lg p-4 border border-brand-blue">
                  <div className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-brand-maroon mt-1 flex-shrink-0" />
                    <p className="text-sm text-brand-blue italic">
                      "{story.testimonialQuote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Trophy className="h-16 w-16 text-muted mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-maroon mb-2">No Success Stories Yet</h3>
            <p className="text-brand-blue max-w-md mx-auto">
              Success stories will appear here once they are added through the Sanity dashboard.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}