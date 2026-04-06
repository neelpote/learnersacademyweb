'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { client, queries, urlFor } from '@/lib/sanity'
import { GraduationCap, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react'

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
  const [currentPage, setCurrentPage] = useState(0)

  const teachersPerPage = 3
  const totalPages = Math.ceil(teachers.length / teachersPerPage)

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const data = await client.fetch(queries.teachers)
        console.log('Teachers data:', data) // Debug log
        setTeachers(data) // Show all teachers but paginate
        setError(false)
      } catch (error) {
        console.log('Error fetching teachers:', error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchTeachers()
  }, [])

  const currentTeachers = teachers.slice(
    currentPage * teachersPerPage,
    (currentPage + 1) * teachersPerPage
  )

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % Math.ceil(teachers.length / teachersPerPage))
  }

  const prevPage = () => {
    setCurrentPage((prev) => 
      prev === 0 ? Math.ceil(teachers.length / teachersPerPage) - 1 : prev - 1
    )
  }

  return (
    <section id="teachers" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-brand-maroon mb-2" style={{ fontFamily: 'var(--font-sub)' }}>Our Faculty</p>
          <h2 className="text-3xl sm:text-4xl text-brand-maroon mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
            Meet Our Expert Teachers
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, color: '#4A4A4A' }}>
            Highly qualified faculty dedicated to nurturing academic excellence in every student.
          </p>
        </div>

        {!loading && teachers.length > 0 ? (
          <div className="relative">
            <div className="flex justify-center">
              <div className={`grid gap-6 ${
                currentTeachers.length === 1 ? 'grid-cols-1 max-w-sm' :
                currentTeachers.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-2xl' :
                'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl'
              }`}>
                {currentTeachers.map((teacher, index) => (
                  <div
                    key={teacher._id}
                    className="group relative overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-2"
                    style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.07)' }}
                  >
                    {/* Top color bar */}
                    <div className="h-2 bg-brand-maroon w-full" />

                    <div className="p-8">
                      {/* Photo + name side by side */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative w-20 h-20 flex-shrink-0">
                          {teacher.photo ? (
                            <Image
                              src={urlFor(teacher.photo).width(160).height(160).url()}
                              alt={`${teacher.name}`}
                              fill
                              className="rounded-full object-cover"
                              sizes="80px"
                              priority={index < 3}
                            />
                          ) : (
                            <div className="w-full h-full bg-brand-blue bg-opacity-10 rounded-full flex items-center justify-center">
                              <GraduationCap className="h-10 w-10 text-brand-blue" />
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl text-brand-maroon" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                            {teacher.name}
                          </h3>
                          <p className="text-xs uppercase tracking-wider text-brand-blue mt-1" style={{ fontFamily: 'var(--font-sub)' }}>
                            {teacher.subject}
                          </p>
                          <p className="text-xs mt-1" style={{ color: '#4A4A4A', fontFamily: 'var(--font-body)', fontWeight: 300 }}>
                            {teacher.qualification}
                          </p>
                        </div>
                      </div>

                      {/* Philosophy — no box, just a left border accent */}
                      <div className="border-l-2 border-brand-maroon pl-4">
                        <p className="text-sm italic leading-relaxed" style={{ color: '#4A4A4A', fontFamily: 'var(--font-body)', fontWeight: 300 }}>
                          "{teacher.teachingPhilosophy}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls - Only show if more than 3 teachers */}
            {teachers.length > teachersPerPage && (
              <div className="flex items-center justify-center mt-12 gap-6">
                <button
                  onClick={prevPage}
                  className="flex items-center gap-2 bg-brand-maroon text-brand-silver px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
                >
                  <ChevronLeft className="h-5 w-5" />
                  Previous
                </button>

                {/* Page Indicators */}
                <div className="flex gap-2">
                  {Array.from({ length: Math.ceil(teachers.length / teachersPerPage) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        index === currentPage ? 'bg-brand-maroon' : 'bg-brand-blue bg-opacity-30'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextPage}
                  className="flex items-center gap-2 bg-brand-maroon text-brand-silver px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
                >
                  Next
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}

            {/* Teacher Count Display */}
            {teachers.length > teachersPerPage && (
              <div className="text-center mt-6">
                <p className="text-brand-blue">
                  Showing {currentPage * teachersPerPage + 1}-{Math.min((currentPage + 1) * teachersPerPage, teachers.length)} of {teachers.length} teachers
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16">
            {loading ? (
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-brand-maroon mx-auto"></div>
            ) : (
              <div>
                <GraduationCap className="h-16 w-16 text-brand-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-brand-maroon mb-2">No Teachers Available</h3>
                <p className="text-brand-blue max-w-md mx-auto">
                  Teacher profiles will appear here once they are added through the Sanity dashboard.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}