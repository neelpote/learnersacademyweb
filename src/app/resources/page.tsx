'use client'

import { useEffect, useState } from 'react'
import { FileText, Download, BookOpen, Target, GraduationCap, ArrowRight } from 'lucide-react'
import { client, queries } from '@/lib/sanity'
import { ResourceDownloadForm } from '@/components/ResourceDownloadForm'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

interface Resource {
  _id: string
  title: string
  description: string
  pdfFile: { asset: { url: string } }
  slug: { current: string }
  category: string
}

const categoryIcons = {
  'study-material': BookOpen,
  'practice-papers': FileText,
  'exam-tips': Target,
  'syllabus-guide': GraduationCap,
}

const categoryLabels: Record<string, string> = {
  'study-material': 'Study Material',
  'practice-papers': 'Practice Paper',
  'exam-tips': 'Exam Tips',
  'syllabus-guide': 'Syllabus Guide',
}

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([])
  const [loading, setLoading] = useState(true)
  const [downloadForm, setDownloadForm] = useState({ isOpen: false, resourceTitle: '', resourceUrl: '' })

  useEffect(() => {
    client.fetch(queries.resources)
      .then(data => setResources(data))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const handleDownload = (resource: Resource) => {
    if (resource.pdfFile?.asset?.url) {
      setDownloadForm({ isOpen: true, resourceTitle: resource.title, resourceUrl: resource.pdfFile.asset.url })
    } else {
      alert('PDF not available. Please contact us.')
    }
  }

  return (
    <>
      <Header onBookDemo={() => {}} />
      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-16">
            <p className="text-sm font-medium text-brand-maroon mb-2 uppercase tracking-widest" style={{ fontFamily: 'var(--font-sub)' }}>Free Downloads</p>
            <h1 className="text-4xl sm:text-5xl text-brand-maroon mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
              Study Resources
            </h1>
            <p className="text-lg max-w-2xl" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, color: '#4A4A4A' }}>
              Curated study materials, practice papers, and exam guides — all free to download.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-maroon mx-auto"></div>
            </div>
          ) : resources.length > 0 ? (
            <div className="space-y-4">
              {resources.map((resource, index) => {
                const Icon = categoryIcons[resource.category as keyof typeof categoryIcons] || FileText
                const label = categoryLabels[resource.category] || 'Resource'
                return (
                  <div
                    key={resource._id}
                    className="group flex items-center gap-6 p-6 bg-white rounded-xl border border-gray-100 hover:border-brand-maroon transition-all duration-300 cursor-pointer"
                    style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
                    onClick={() => handleDownload(resource)}
                  >
                    {/* Number */}
                    <span className="text-3xl font-bold text-gray-100 w-10 flex-shrink-0 select-none" style={{ fontFamily: 'var(--font-heading)' }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg bg-brand-maroon bg-opacity-10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-brand-maroon" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs uppercase tracking-wider text-brand-maroon font-medium" style={{ fontFamily: 'var(--font-sub)' }}>{label}</span>
                      </div>
                      <h2 className="text-base font-semibold text-brand-blue truncate" style={{ fontFamily: 'var(--font-sub)' }}>{resource.title}</h2>
                      <p className="text-sm text-gray-400 mt-0.5 truncate" style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}>{resource.description}</p>
                    </div>

                    {/* Download CTA */}
                    <div className="flex items-center gap-2 text-brand-maroon opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                      <Download className="h-4 w-4" />
                      <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-sub)' }}>Download</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-400" style={{ fontFamily: 'var(--font-body)' }}>No resources available yet.</p>
            </div>
          )}

          <p className="text-center text-sm mt-12" style={{ color: '#4A4A4A', fontFamily: 'var(--font-body)', fontWeight: 300 }}>
            All resources are designed by expert teachers following the latest CBSE curriculum.
          </p>
        </div>

        <ResourceDownloadForm
          isOpen={downloadForm.isOpen}
          onClose={() => setDownloadForm({ isOpen: false, resourceTitle: '', resourceUrl: '' })}
          resourceTitle={downloadForm.resourceTitle}
          resourceUrl={downloadForm.resourceUrl}
        />
      </main>
      <Footer />
    </>
  )
}
