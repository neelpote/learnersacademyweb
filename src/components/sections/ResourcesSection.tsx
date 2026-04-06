'use client'

import { useEffect, useState } from 'react'
import { ResourceDownloadForm } from '../ResourceDownloadForm'
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
  const [downloadForm, setDownloadForm] = useState({
    isOpen: false,
    resourceTitle: '',
    resourceUrl: ''
  })

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const data = await client.fetch(queries.resources)
        
        // Filter to only show resources with PDF files
        const resourcesWithPDFs = data.filter((resource: Resource) => resource.pdfFile?.asset?.url)
        // Temporarily show all resources to debug
        setResources(data.slice(0, 6)) // Show first 6 resources
      } catch (error) {
        console.error('Error fetching resources:', error)
      }
    }
    fetchResources()
  }, [])

  const handleDownloadClick = (resource: Resource) => {
    if (resource.pdfFile?.asset?.url) {
      setDownloadForm({
        isOpen: true,
        resourceTitle: resource.title,
        resourceUrl: resource.pdfFile.asset.url
      })
    } else {
      alert('PDF file not available for this resource. Please contact us or check back later.')
    }
  }

  const closeDownloadForm = () => {
    setDownloadForm({
      isOpen: false,
      resourceTitle: '',
      resourceUrl: ''
    })
  }

  const categoryTitles = {
    'study-material': 'Study Materials',
    'practice-papers': 'Practice Papers',
    'exam-tips': 'Exam Tips',
    'syllabus-guide': 'Syllabus Guides',
  }

  return (
    <section id="resources" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-brand-maroon mb-2" style={{ fontFamily: 'var(--font-sub)' }}>Free Downloads</p>
          <h2 className="text-3xl sm:text-4xl text-brand-maroon mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
            Study Resources
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, color: '#4A4A4A' }}>
            Practice papers, study guides, and exam tips — all free.
          </p>
        </div>

        {resources.length > 0 ? (
          <div className="space-y-3 max-w-3xl mx-auto">
            {resources.map((resource, index) => {
              const IconComponent = categoryIcons[resource.category as keyof typeof categoryIcons] || FileText
              const label = resource.category?.replace(/-/g, ' ') || 'Resource'
              return (
                <div
                  key={resource._id}
                  className="group flex items-center gap-5 p-5 bg-white rounded-xl border-l-4 border-l-brand-maroon border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => handleDownloadClick(resource)}
                >
                  <span className="text-2xl font-bold text-gray-100 w-8 flex-shrink-0 select-none" style={{ fontFamily: 'var(--font-heading)' }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-brand-maroon bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-4 w-4 text-brand-maroon" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-wider text-brand-maroon mb-0.5" style={{ fontFamily: 'var(--font-sub)' }}>{label}</p>
                    <h3 className="text-sm font-semibold text-brand-blue truncate" style={{ fontFamily: 'var(--font-sub)' }}>{resource.title}</h3>
                  </div>
                  <div className="flex items-center gap-1 text-brand-maroon opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                    <Download className="h-4 w-4" />
                    <span className="text-xs font-medium" style={{ fontFamily: 'var(--font-sub)' }}>Get PDF</span>
                  </div>
                </div>
              )
            })}
            <div className="text-center pt-4">
              <a href="/resources" className="text-sm text-brand-maroon font-medium hover:underline" style={{ fontFamily: 'var(--font-sub)' }}>
                View all resources →
              </a>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <FileText className="h-16 w-16 text-muted mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-maroon mb-2">No Resources Yet</h3>
            <p className="text-brand-blue max-w-md mx-auto">
              Resources will appear here once they are added through the Sanity dashboard.
            </p>
          </div>
        )}

        <ResourceDownloadForm
          isOpen={downloadForm.isOpen}
          onClose={closeDownloadForm}
          resourceTitle={downloadForm.resourceTitle}
          resourceUrl={downloadForm.resourceUrl}
        />
      </div>
    </section>
  )
}