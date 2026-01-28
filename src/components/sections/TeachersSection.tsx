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
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">
            Meet Our Expert Teachers
          </h2>
          <p className="text-xl text-brand-blue max-w-3xl mx-auto">
            Our highly qualified and experienced faculty members are dedicated to nurturing 
            academic excellence and helping every student reach their full potential.
          </p>
        </div>

        {!loading && teachers.length > 0 ? (
          <div className="relative">
            {/* Teachers Grid - Always centered regardless of number */}
            <div className="flex justify-center">
              <div className={`grid gap-8 ${
                currentTeachers.length === 1 ? 'grid-cols-1 max-w-sm' :
                currentTeachers.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-2xl' :
                'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl'
              }`}>
                {currentTeachers.map((teacher, index) => (
                  <div
                    key={teacher._id}
                    className="bg-brand-silver bg-opacity-80 backdrop-blur-sm rounded-xl p-8 border border-brand-blue hover:border-brand-maroon transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="relative w-40 h-40 mx-auto mb-6">
                      {teacher.photo ? (
                        <Image
                          src={urlFor(teacher.photo).width(250).height(250).url()}
                          alt={`${teacher.name} - ${teacher.subject} Teacher at The Learners' Academy`}
                          fill
                          className="rounded-full object-cover border-4 border-brand-blue"
                          sizes="(max-width: 768px) 160px, 160px"
                          priority={index < 3}
                        />
                      ) : (
                        <div className="w-full h-full bg-brand-blue bg-opacity-20 rounded-full flex items-center justify-center border-4 border-brand-blue">
                          <GraduationCap className="h-20 w-20 text-brand-blue" />
                        </div>
                      )}
                    </div>

                    <div className="text-center">
                      <h3 className="text-2xl font-sans font-bold text-brand-maroon mb-3">
                        {teacher.name}
                      </h3>
                      
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <BookOpen className="h-5 w-5 text-brand-blue" />
                        <span className="text-brand-blue font-semibold text-lg">{teacher.subject}</span>
                      </div>
                      
                      <p className="text-base text-brand-blue mb-6 leading-relaxed">
                        {teacher.qualification}
                      </p>
                      
                      <div className="bg-white bg-opacity-50 rounded-lg p-6 border border-brand-blue">
                        <p className="text-base text-brand-blue italic leading-relaxed">
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