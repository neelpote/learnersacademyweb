'use client'

import { useEffect, useState } from 'react'
import { FileText, Download, BookOpen, Target, GraduationCap } from 'lucide-react'
import { client, queries } from '@/lib/sanity'
import { ResourceDownloadForm } from '@/components/ResourceDownloadForm'

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

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([])
  const [loading, setLoading] = useState(true)
  const [downloadForm, setDownloadForm] = useState({
    isOpen: false,
    resourceTitle: '',
    resourceUrl: ''
  })

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const data = await client.fetch(queries.resources)
        setResources(data) // Show all resources
      } catch (error) {
        console.error('Error fetching resources:', error)
      } finally {
        setLoading(false)
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
      alert('PDF file not available for this resource. Please contact us.')
    }
  }

  const closeDownloadForm = () => {
    setDownloadForm({
      isOpen: false,
      resourceTitle: '',
      resourceUrl: ''
    })
  }

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-sans font-bold text-brand-maroon mb-4">
            Free Resources
          </h1>
          <p className="text-xl text-brand-blue max-w-3xl mx-auto">
            Download our comprehensive collection of study materials, practice papers, and exam guides to enhance your learning experience and boost your performance.
          </p>
        </div>

        {!loading && resources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => {
              const IconComponent = categoryIcons[resource.category as keyof typeof categoryIcons] || FileText
              const colorClass = categoryColors[resource.category as keyof typeof categoryColors] || 'bg-brand-blue text-brand-silver'
              
              return (
                <div
                  key={resource._id}
                  className="bg-brand-silver bg-opacity-80 backdrop-blur-sm rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors flex flex-col"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`rounded-lg p-2 ${colorClass} flex-shrink-0`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h2 className="text-lg font-sans font-semibold text-brand-maroon">
                      {resource.title}
                    </h2>
                  </div>
                  
                  <p className="text-brand-blue text-sm mb-6 flex-grow">
                    {resource.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-brand-blue">
                      <FileText className="h-4 w-4" />
                      <span>PDF Format</span>
                    </div>
                    
                    <button
                      onClick={() => handleDownloadClick(resource)}
                      className="w-full bg-brand-maroon text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        ) : loading ? (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-brand-maroon mx-auto"></div>
            <p className="mt-4 text-brand-blue">Loading resources...</p>
          </div>
        ) : (
          <div className="text-center py-16">
            <FileText className="h-16 w-16 text-brand-blue mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-maroon mb-2">No Resources Available</h3>
            <p className="text-brand-blue max-w-md mx-auto">
              Resources will appear here once they are added through the Sanity dashboard.
            </p>
          </div>
        )}

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-brand-blue mb-4">
            Need more resources? Contact us for additional study materials.
          </p>
          <p className="text-sm text-muted">
            * All resources are designed by expert teachers following the latest CBSE curriculum.
          </p>
        </div>
      </div>

      <ResourceDownloadForm
        isOpen={downloadForm.isOpen}
        onClose={closeDownloadForm}
        resourceTitle={downloadForm.resourceTitle}
        resourceUrl={downloadForm.resourceUrl}
      />
    </main>
  )
}
