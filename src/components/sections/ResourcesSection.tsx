'use client'

import { useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import { client, queries } from '@/lib/sanity'
import { Download, FileText, BookOpen, Target, GraduationCap } from 'lucide-react'

interface Resource {
  _id: string
  title: string
  description: string
  pdfFile: {
    asset: {
      url: string
    }
  }
  slug: { current: string }
  category: string
}

const categoryIcons = {
  'study-material': BookOpen,
  'practice-papers': FileText,
  'exam-tips': Target,
  'syllabus-guide': GraduationCap,
}

const categoryColors = {
  'study-material': 'bg-brand-blue text-brand-silver',
  'practice-papers': 'bg-brand-maroon text-brand-silver',
  'exam-tips': 'bg-brand-blue text-brand-silver',
  'syllabus-guide': 'bg-brand-maroon text-brand-silver',
}

export function ResourcesSection() {
  const [resources, setResources] = useState<Resource[]>([])

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const data = await client.fetch(queries.resources)
        setResources(data.slice(0, 6)) // Show first 6 resources
      } catch (error) {
        console.error('Error fetching resources:', error)
      }
    }
    fetchResources()
  }, [])

  const categoryTitles = {
    'study-material': 'Study Materials',
    'practice-papers': 'Practice Papers',
    'exam-tips': 'Exam Tips',
    'syllabus-guide': 'Syllabus Guides',
  }

  return (
    <section id="resources" className="py-20 bg-brand-silver">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">
            Free Resources
          </h2>
          <p className="text-xl text-brand-blue max-w-3xl mx-auto">
            Download our comprehensive collection of study materials, practice papers, 
            and exam guides to enhance your learning experience and boost your performance.
          </p>
        </div>

        {resources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const IconComponent = categoryIcons[resource.category as keyof typeof categoryIcons] || FileText
              const colorClass = categoryColors[resource.category as keyof typeof categoryColors] || 'bg-zinc-100 dark:bg-zinc-100 text-zinc-600'
              
              return (
                <div
                  key={resource._id}
                  className="bg-brand-silver rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`rounded-lg p-2 ${colorClass} flex-shrink-0`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-sans font-semibold text-foreground mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <FileText className="h-4 w-4" />
                      <span>PDF Format</span>
                    </div>
                    
                    <Button
                      size="sm"
                      onClick={() => {
                        if (resource.pdfFile?.asset?.url) {
                          // Create a proper download link
                          const link = document.createElement('a')
                          link.href = resource.pdfFile.asset.url
                          link.download = `${resource.title}.pdf`
                          link.target = '_blank'
                          document.body.appendChild(link)
                          link.click()
                          document.body.removeChild(link)
                        } else {
                          alert('PDF file not available. Please contact us for this resource.')
                        }
                      }}
                      className="flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <FileText className="h-16 w-16 text-zinc-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Sample Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[
                { title: 'Class 10 Math Formula Sheet', description: 'Complete collection of important formulas for Class 10 Mathematics board exam preparation.', category: 'study-material' },
                { title: 'Physics Practice Papers', description: 'Set of 5 practice papers for Class 12 Physics with detailed solutions and marking scheme.', category: 'practice-papers' },
                { title: 'Board Exam Success Tips', description: 'Expert tips and strategies to excel in board examinations and achieve top scores.', category: 'exam-tips' },
              ].map((resource, index) => {
                const IconComponent = categoryIcons[resource.category as keyof typeof categoryIcons] || FileText
                const colorClass = categoryColors[resource.category as keyof typeof categoryColors] || 'bg-zinc-100 dark:bg-zinc-100 text-zinc-600'
                
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-white rounded-lg p-6 border border-zinc-200 dark:border-zinc-200"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`rounded-lg p-2 ${colorClass} flex-shrink-0`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-sans font-semibold text-foreground mb-2">
                          {resource.title}
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <FileText className="h-4 w-4" />
                        <span>PDF Format</span>
                      </div>
                      
                      <Button
                        size="sm"
                        onClick={() => {
                          // For demo purposes, show an alert
                          alert('This is a sample resource. Add real PDF files through Sanity Studio to enable downloads!')
                        }}
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}