'use client'

import { useState, useEffect } from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BookDemoForm } from "@/components/BookDemoForm"
import { WelcomePopup } from "@/components/WelcomePopup"
import { ResultsTicker } from "@/components/ResultsTicker"
import { AboutSection } from "@/components/sections/AboutSection"
import { CoursesSection } from "@/components/sections/CoursesSection"
import { TeachersSection } from "@/components/sections/TeachersSection"
import { SuccessStoriesSection } from "@/components/sections/SuccessStoriesSection"
import { BlogSection } from "@/components/sections/BlogSection"
import { ResourcesSection } from "@/components/sections/ResourcesSection"
import { Button } from "@/components/ui/Button"
import {
  Users,
  Trophy,
  BookOpen,
  Star,
  ArrowRight,
  Sparkles,
  Target,
  Award,
  Download
} from "lucide-react"

export default function Home() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false)
  const [isWelcomePopupOpen, setIsWelcomePopupOpen] = useState(false)

  useEffect(() => {
    // Show welcome popup immediately when page loads
    setIsWelcomePopupOpen(true)
  }, [])

  const features = [
    {
      icon: Users,
      title: "Expert Teachers",
      description: "Highly qualified educators with years of experience",
      color: "text-brand-blue"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Complete syllabus coverage for all major boards",
      color: "text-brand-blue"
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "Consistent top rankings and excellent board results",
      color: "text-brand-blue"
    },
    {
      icon: Star,
      title: "Personalized Attention",
      description: "Small batch sizes ensuring individual focus",
      color: "text-brand-blue"
    }
  ]

  const stats = [
    { number: "500+", label: "Students Taught", icon: Users },
    { number: "95%", label: "Success Rate", icon: Target },
    { number: "50+", label: "Top Rankers", icon: Award },
    { number: "8+", label: "Years Experience", icon: Sparkles }
  ]

  return (
    <div className="min-h-screen bg-brand-silver overflow-x-hidden">
      <div className="relative z-10 bg-transparent">
        <ResultsTicker />
        <Header onBookDemo={() => setIsDemoFormOpen(true)} />
      </div>

      <main className="relative z-10 bg-transparent">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-32">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-brand-silver border-2 border-brand-blue rounded-lg px-6 py-3 mb-8 animate-fade-in">
              <Sparkles className="h-5 w-5 text-brand-maroon" />
              <span className="text-sm font-medium text-brand-blue font-body">Transform Your Future Today</span>
            </div>

            <h1 className="text-hero mb-8 animate-fade-in-up animate-delay-100">
              <span className="font-heading text-brand-maroon">Unlock Your</span>
              <br />
              <span className="text-brand-maroon font-heading">Academic Potential</span>
            </h1>

            <p className="text-lead mb-12 max-w-4xl mx-auto font-body text-brand-blue animate-fade-in-up animate-delay-200">
              Join The Learners' Academy and experience personalized learning with expert teachers,
              proven methodologies, and outstanding results for classes 6-12.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animate-delay-300">
              <button
                onClick={() => setIsDemoFormOpen(true)}
                className="btn-primary text-lg px-10 py-4 flex items-center gap-2"
              >
                <Sparkles className="h-5 w-5" />
                Start Your Journey
              </button>
              <button
                className="btn-secondary text-lg px-10 py-4 flex items-center gap-2"
                onClick={() => {
                  const element = document.querySelector('#courses')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Explore Courses
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                className="btn-secondary text-lg px-10 py-4 flex items-center gap-2"
                onClick={() => {
                  const element = document.querySelector('#resources')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                <Download className="h-5 w-5" />
                Free Resources
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="text-center mb-20">
              <h2 className="text-display mb-6 text-brand-maroon">
                Why Choose
                <span className="text-brand-maroon"> The Learners' Academy?</span>
              </h2>
              <p className="text-subtitle max-w-3xl mx-auto text-brand-blue">
                We provide everything you need to excel in your academic journey with modern teaching methods and personalized attention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="icon-container">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-title mb-3">{feature.title}</h3>
                  <p className="text-body">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-brand-maroon">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="stats-card bg-brand-maroon border-brand-silver">
                  <div className="mb-4">
                    <stat.icon className="h-12 w-12 text-brand-silver mx-auto" />
                  </div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-silver mb-2">
                    {stat.number}
                  </div>
                  <div className="text-brand-silver font-medium text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Sections with improved spacing */}
        <div className="space-y-0">
          <CoursesSection />
          <TeachersSection />
          <SuccessStoriesSection />
          <BlogSection />
          <ResourcesSection />
          <AboutSection />
        </div>

        {/* Final CTA Section */}
        <section className="section-padding">
          <div className="section-container text-center">
            <h2 className="text-display mb-6 text-brand-maroon">
              Ready to Start Your
              <span className="text-brand-maroon"> Success Story?</span>
            </h2>
            <p className="text-subtitle mb-10 max-w-3xl mx-auto text-brand-blue">
              Join hundreds of students who have achieved their academic goals with our proven teaching methods and personalized approach.
            </p>
            <button
              onClick={() => setIsDemoFormOpen(true)}
              className="btn-primary text-lg px-10 py-4 flex items-center gap-2 mx-auto"
            >
              <Trophy className="h-5 w-5" />
              Book Your Free Demo Now
            </button>
          </div>
        </section>
      </main>

      <div className="relative z-10 bg-transparent">
        <Footer />
      </div>
      <WelcomePopup
        isOpen={isWelcomePopupOpen}
        onClose={() => setIsWelcomePopupOpen(false)}
        onBookDemo={() => setIsDemoFormOpen(true)}
      />
      <BookDemoForm
        isOpen={isDemoFormOpen}
        onClose={() => setIsDemoFormOpen(false)}
      />
    </div>
  )
}
