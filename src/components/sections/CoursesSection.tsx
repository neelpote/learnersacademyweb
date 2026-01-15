'use client'

import { useEffect, useState } from 'react'
import { client, queries } from '@/lib/sanity'
import { BookOpen, Users, Clock } from 'lucide-react'

interface Course {
  _id: string
  title: string
  gradeLevel: string
  subject: string
  syllabus: string[]
  slug: { current: string }
}

export function CoursesSection() {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await client.fetch(queries.courses)
        setCourses(data.slice(0, 6)) // Show first 6 courses
        setError(false)
      } catch (error) {
        console.log('Using sample data - Sanity not connected yet')
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchCourses()
  }, [])

  const groupedCourses = courses.reduce((acc, course) => {
    const grade = course.gradeLevel
    if (!acc[grade]) {
      acc[grade] = []
    }
    acc[grade].push(course)
    return acc
  }, {} as Record<string, Course[]>)

  return (
    <section id="courses" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">
            Our Courses
          </h2>
          <p className="text-xl text-brand-blue max-w-3xl mx-auto">
            Comprehensive curriculum designed to help students excel in their academic journey.
            Choose from our wide range of subjects for classes 6-12.
          </p>
        </div>

        {!loading && courses.length > 0 ? (
          <div className="space-y-12">
            {Object.entries(groupedCourses).map(([grade, gradeCourses]) => (
              <div key={grade}>
                <h3 className="text-2xl font-sans font-bold text-brand-maroon mb-6 capitalize">
                  {grade.replace('-', ' ')}
                </h3>

                <div className="overflow-x-auto pb-4">
                  <div className="flex gap-6 min-w-max">
                    {gradeCourses.map((course) => (
                      <div
                        key={course._id}
                        className="bg-brand-silver rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors w-80 flex-shrink-0"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-brand-blue rounded-lg p-2">
                            <BookOpen className="h-6 w-6 text-brand-silver" />
                          </div>
                          <div>
                            <h4 className="text-xl font-sans font-semibold text-brand-maroon">
                              {course.subject}
                            </h4>
                            <p className="text-sm text-muted capitalize">
                              {course.gradeLevel.replace('-', ' ')}
                            </p>
                          </div>
                        </div>

                        <p className="text-brand-blue mb-4">
                          {course.title}
                        </p>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted">
                            <Users className="h-4 w-4" />
                            <span>Small batch size</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted">
                            <Clock className="h-4 w-4" />
                            <span>Flexible timings</span>
                          </div>
                        </div>

                        {course.syllabus.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-brand-blue">
                            <p className="text-sm font-medium text-brand-maroon mb-2">Topics covered:</p>
                            <div className="flex flex-wrap gap-1">
                              {course.syllabus.slice(0, 3).map((topic, index) => (
                                <span
                                  key={index}
                                  className="text-xs bg-brand-blue text-brand-silver px-2 py-1 rounded"
                                >
                                  {topic}
                                </span>
                              ))}
                              {course.syllabus.length > 3 && (
                                <span className="text-xs text-muted">
                                  +{course.syllabus.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <BookOpen className="h-16 w-16 text-muted mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-maroon mb-2">No Courses Yet</h3>
            <p className="text-brand-blue max-w-md mx-auto">
              Courses will appear here once they are added through the Sanity dashboard.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}