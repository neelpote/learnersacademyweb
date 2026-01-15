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
    <section id="teachers" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">
            Meet Our Expert Teachers
          </h2>
          <p className="text-xl text-brand-blue max-w-3xl mx-auto">
            Our highly qualified and experienced faculty members are dedicated to nurturing 
            academic excellence and helping every student reach their full potential.
          </p>
        </div>

        {!loading && teachers.length > 0 ? (
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-8 min-w-max">
              {teachers.map((teacher) => (
                <div
                  key={teacher._id}
                  className="bg-brand-silver rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors w-80 flex-shrink-0"
                >
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    {teacher.photo ? (
                      <img
                        src={urlFor(teacher.photo).width(200).height(200).url()}
                        alt={teacher.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-brand-silver rounded-full flex items-center justify-center">
                        <GraduationCap className="h-16 w-16 text-muted" />
                      </div>
                    )}
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-sans font-semibold text-brand-maroon mb-2">
                      {teacher.name}
                    </h3>
                    
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <BookOpen className="h-4 w-4 text-brand-blue" />
                      <span className="text-brand-blue font-medium">{teacher.subject}</span>
                    </div>
                    
                    <p className="text-sm text-muted mb-4">
                      {teacher.qualification}
                    </p>
                    
                    <div className="bg-brand-silver rounded-lg p-4 border border-brand-blue">
                      <p className="text-sm text-brand-blue italic">
                        "{teacher.teachingPhilosophy}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center">
            {loading ? (
              <div className="py-16">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-brand-maroon mx-auto"></div>
                <p className="mt-4 text-brand-blue">Loading teachers...</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-brand-maroon mb-2">
                  {error ? 'Sample Teachers' : 'No teachers available'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {sampleTeachers.map((teacher, index) => (
                    <div
                      key={index}
                      className="bg-brand-silver rounded-lg p-6 border border-brand-blue"
                    >
                      <div className="relative w-32 h-32 mx-auto mb-6">
                        <div className="w-full h-full bg-brand-silver rounded-full flex items-center justify-center">
                          <GraduationCap className="h-16 w-16 text-muted" />
                        </div>
                      </div>

                      <div className="text-center">
                        <h3 className="text-xl font-sans font-semibold text-brand-maroon mb-2">
                          {teacher.name}
                        </h3>
                        
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <BookOpen className="h-4 w-4 text-brand-blue" />
                          <span className="text-brand-blue font-medium">{teacher.subject}</span>
                        </div>
                        
                        <p className="text-sm text-muted mb-4">
                          {teacher.qualification}
                        </p>
                        
                        <div className="bg-brand-silver rounded-lg p-4 border border-brand-blue">
                          <p className="text-sm text-brand-blue italic">
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