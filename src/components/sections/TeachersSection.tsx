'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { client, queries, urlFor } from '@/lib/sanity'
import { GraduationCap, BookOpen } from 'lucide-react'

interface Teacher {
  _id: string
  name: string
  photo: any
  qualification: string
  subject: string
  teachingPhilosophy: string
}

export function TeachersSection() {
  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const data = await client.fetch(queries.teachers)
        console.log('Teachers data:', data) // Debug log
        setTeachers(data.slice(0, 6)) // Show first 6 teachers
        setError(false)
      } catch (error) {
        console.log('Using sample data - Sanity error:', error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchTeachers()
  }, [])

  // Sample data when Sanity is not available
  const sampleTeachers = [
    { name: 'Dr. Sarah Johnson', subject: 'Mathematics', qualification: 'Ph.D. in Mathematics, 15+ years experience', philosophy: 'Making complex concepts simple and engaging for every student.' },
    { name: 'Prof. Michael Chen', subject: 'Physics', qualification: 'M.Sc. Physics, IIT Graduate', philosophy: 'Connecting theoretical knowledge with real-world applications.' },
    { name: 'Ms. Priya Sharma', subject: 'Chemistry', qualification: 'M.Sc. Chemistry, Gold Medalist', philosophy: 'Building strong fundamentals through practical understanding.' },
  ]

  return (
    <section id="teachers" className="py-20 bg-white dark:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-foreground mb-4">
            Meet Our Expert Teachers
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Our highly qualified and experienced faculty members are dedicated to nurturing 
            academic excellence and helping every student reach their full potential.
          </p>
        </div>

        {!loading && teachers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher) => (
              <div
                key={teacher._id}
                className="bg-zinc-50 dark:bg-zinc-50 rounded-lg p-6 border border-zinc-200 dark:border-zinc-200 hover:border-blue-300 dark:hover:border-blue-300 transition-colors"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  {teacher.photo ? (
                    <img
                      src={urlFor(teacher.photo).width(200).height(200).url()}
                      alt={teacher.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-16 w-16 text-zinc-400" />
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-sans font-semibold text-foreground mb-2">
                    {teacher.name}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-600 font-medium">{teacher.subject}</span>
                  </div>
                  
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                    {teacher.qualification}
                  </p>
                  
                  <div className="bg-white dark:bg-white rounded-lg p-4 border border-zinc-200 dark:border-zinc-200">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 italic">
                      "{teacher.teachingPhilosophy}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            {loading ? (
              <div className="py-16">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">Loading teachers...</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {error ? 'Sample Teachers' : 'No teachers available'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {sampleTeachers.map((teacher, index) => (
                    <div
                      key={index}
                      className="bg-zinc-50 dark:bg-zinc-50 rounded-lg p-6 border border-zinc-200 dark:border-zinc-200"
                    >
                      <div className="relative w-32 h-32 mx-auto mb-6">
                        <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center">
                          <GraduationCap className="h-16 w-16 text-zinc-400" />
                        </div>
                      </div>

                      <div className="text-center">
                        <h3 className="text-xl font-sans font-semibold text-foreground mb-2">
                          {teacher.name}
                        </h3>
                        
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <BookOpen className="h-4 w-4 text-blue-600" />
                          <span className="text-blue-600 font-medium">{teacher.subject}</span>
                        </div>
                        
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                          {teacher.qualification}
                        </p>
                        
                        <div className="bg-white dark:bg-white rounded-lg p-4 border border-zinc-200 dark:border-zinc-200">
                          <p className="text-sm text-zinc-600 dark:text-zinc-400 italic">
                            "{teacher.philosophy}"
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  )
}