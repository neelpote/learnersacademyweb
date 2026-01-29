'use client'

import { useState, useEffect } from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BookDemoForm } from "@/components/BookDemoForm"
import { WelcomePopup } from "@/components/WelcomePopup"
import { ResultsTicker } from "@/components/ResultsTicker"
import { FloatingBookDemo } from "@/components/FloatingBookDemo"
import { PricingSection } from "@/components/sections/PricingSection"
import { TeachersSection } from "@/components/sections/TeachersSection"
import { SuccessStoriesSection } from "@/components/sections/SuccessStoriesSection"
import { BlogSection } from "@/components/sections/BlogSection"
import { ResourcesSection } from "@/components/sections/ResourcesSection"
import { AboutSection } from "@/components/sections/AboutSection"

import {
  Users,
  Trophy,
  ArrowRight,
  Sparkles,
  Target,
  Award,
  Download,
  Heart,
  Lightbulb
} from "lucide-react"

export default function Home() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false)
  const [isWelcomePopupOpen, setIsWelcomePopupOpen] = useState(false)

  useEffect(() => {
    // Show welcome popup immediately when page loads
    setIsWelcomePopupOpen(true)
  }, [])

  const stats = [
    { number: "1000+", label: "Students Taught", icon: Users },
    { number: "100%", label: "Board Passing Rate", icon: Target },
    { number: "100+", label: "Top Rankers", icon: Award },
    { number: "15+", label: "Years Experience", icon: Sparkles }
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="relative z-10 bg-transparent">
        <ResultsTicker />
        <Header onBookDemo={() => setIsDemoFormOpen(true)} />
      </div>

      <main className="relative z-20 bg-transparent pt-32">
        {/* Hero Section */}
        <section id="home" className="relative min-h-[50vh] flex items-center justify-center pt-12 pb-4">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-brand-silver rounded-lg px-6 py-3 mb-4 animate-fade-in">
              <Sparkles className="h-5 w-5 text-brand-maroon" />
              <span className="text-base font-medium text-brand-blue font-body">Transform Your Future Today</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up animate-delay-100">
              <span className="font-heading text-brand-maroon">Unlock Your</span>
              <br />
              <span className="text-brand-maroon font-heading">Academic Potential</span>
            </h1>

            <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto font-body text-brand-blue animate-fade-in-up animate-delay-200">
              Join The Learners' Academy and experience personalized learning with expert teachers,
              proven methodologies, and outstanding results for classes 7-12.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-300">
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

        {/* Why Choose Us Section - Transparent with Animation Visible */}
        <section className="py-20 bg-transparent relative z-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">
                Why Choose The Learners' Academy?
              </h2>
              <p className="text-xl text-brand-blue max-w-3xl mx-auto">
                Discover what makes us unique in education with our proven teaching methods and personalized approach.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-transparent rounded-lg p-8 hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-brand-blue rounded-full mb-6 mx-auto">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-sans font-bold text-brand-maroon mb-4 text-center">
                  Positive Learning Process
                </h3>
                <p className="text-brand-blue text-center">
                  Facilitating and nurturing the positive learning process for each child with innovative teaching methods.
                </p>
              </div>

              <div className="bg-transparent rounded-lg p-8 hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-brand-blue rounded-full mb-6 mx-auto">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-sans font-bold text-brand-maroon mb-4 text-center">
                  Optimal Batch Size
                </h3>
                <p className="text-brand-blue text-center">
                  Small classes ensuring individual attention for every student with personalized guidance.
                </p>
              </div>

              <div className="bg-transparent rounded-lg p-8 hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-brand-blue rounded-full mb-6 mx-auto">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-sans font-bold text-brand-maroon mb-4 text-center">
                  Innovative Teaching
                </h3>
                <p className="text-brand-blue text-center">
                  Tried and tested teaching techniques with innovative aids and modern learning approaches.
                </p>
              </div>

              <div className="bg-transparent rounded-lg p-8 hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-brand-blue rounded-full mb-6 mx-auto">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-sans font-bold text-brand-maroon mb-4 text-center">
                  Proven Results
                </h3>
                <p className="text-brand-blue text-center">
                  Consistent top rankings and excellent board results with 95% success rate across all programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-brand-maroon bg-opacity-95 backdrop-blur-sm">
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
          <PricingSection onBookDemo={() => setIsDemoFormOpen(true)} />
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
      <FloatingBookDemo onBookDemo={() => setIsDemoFormOpen(true)} />
    </div>
  )
}
