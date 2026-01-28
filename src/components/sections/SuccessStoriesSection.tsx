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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

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

  // Cycling animation effect
  useEffect(() => {
    if (successStories.length === 0) return

    const interval = setInterval(() => {
      // Flash effect: hide for 200ms then show next story
      setIsVisible(false)
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === successStories.length - 1 ? 0 : prevIndex + 1
        )
        setIsVisible(true)
      }, 200)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [successStories.length])

  const currentStory = successStories[currentIndex]

  return (
    <section id="success-stories" className="py-20">
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

        {successStories.length > 0 && currentStory ? (
          <div className="flex justify-center">
            <div
              className={`bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 border-2 border-brand-blue w-full max-w-4xl shadow-sm transition-opacity duration-200 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Circular Image */}
                <div className="relative w-32 h-32 flex-shrink-0">
                  {currentStory.photo ? (
                    <Image
                      src={urlFor(currentStory.photo).width(200).height(200).url()}
                      alt={currentStory.studentName}
                      fill
                      className="rounded-full object-cover border-3 border-brand-blue"
                    />
                  ) : (
                    <div className="w-full h-full bg-brand-silver rounded-full flex items-center justify-center border-3 border-brand-blue">
                      <Award className="h-12 w-12 text-brand-blue" />
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <div className="flex-1 space-y-4 text-center md:text-left">
                  {/* Student Marks */}
                  <div className="border-b-2 border-brand-blue pb-3">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                      <Trophy className="h-5 w-5 text-brand-maroon" />
                      <span className="text-2xl font-bold text-brand-maroon">
                        {currentStory.marks}
                      </span>
                      {currentStory.rank && (
                        <>
                          <span className="text-muted text-lg">•</span>
                          <span className="text-base font-medium text-brand-maroon">
                            Rank {currentStory.rank}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Student Info */}
                  <div className="border-b-2 border-brand-blue pb-3">
                    <h3 className="text-xl font-sans font-semibold text-brand-maroon">
                      {currentStory.studentName}
                    </h3>
                    <p className="text-base text-brand-blue">
                      Class of {currentStory.year}
                    </p>
                  </div>

                  {/* Student Success Story */}
                  <div className="border-b-2 border-brand-blue pb-3">
                    <p className="text-base text-brand-blue italic leading-relaxed">
                      "{currentStory.testimonialQuote}"
                    </p>
                  </div>

                  {/* Student Name and Details (Footer) */}
                  <div className="pt-2">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <Star className="h-5 w-5 text-brand-maroon" />
                      <span className="text-base font-medium text-brand-blue">
                        Verified Success Story
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center mt-6 gap-2">
                {successStories.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? 'bg-brand-maroon' : 'bg-brand-blue bg-opacity-30'
                    }`}
                  />
                ))}
              </div>
            </div>
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