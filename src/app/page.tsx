'use client'

import { useState } from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BookDemoForm } from "@/components/BookDemoForm"
import { ResultsTicker } from "@/components/ResultsTicker"
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
  Award
} from "lucide-react"

export default function Home() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false)

  const features = [
    {
      icon: Users,
      title: "Expert Teachers",
      description: "Highly qualified educators with years of experience",
      color: "text-blue-600"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Complete syllabus coverage for all major boards",
      color: "text-green-600"
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "Consistent top rankings and excellent board results",
      color: "text-yellow-600"
    },
    {
      icon: Star,
      title: "Personalized Attention",
      description: "Small batch sizes ensuring individual focus",
      color: "text-purple-600"
    }
  ]

  const stats = [
    { number: "500+", label: "Students Taught", icon: Users },
    { number: "95%", label: "Success Rate", icon: Target },
    { number: "50+", label: "Top Rankers", icon: Award },
    { number: "8+", label: "Years Experience", icon: Sparkles }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden">
      <Header onBookDemo={() => setIsDemoFormOpen(true)} />
      <ResultsTicker />
      
      <main>
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-light dark:bg-gradient-to-br dark:from-gray-900 dark:to-black">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-brand-red/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-gray-200/50 dark:border-gray-700/50">
                <Sparkles className="h-5 w-5 text-brand-red animate-pulse" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Transform Your Future Today</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="text-foreground">Unlock Your</span>
                <br />
                <span className="text-gradient-brand animate-pulse-slow">Academic Potential</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
                Join The Learners' Academy and experience personalized learning with expert teachers, 
                proven methodologies, and outstanding results for classes 6-12.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  onClick={() => setIsDemoFormOpen(true)}
                  className="text-xl px-12 py-6 bg-gradient-brand hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse-slow"
                >
                  <Sparkles className="mr-2 h-6 w-6" />
                  Start Your Journey
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-xl px-12 py-6 border-2 hover:bg-gradient-brand hover:text-white hover:border-transparent transition-all duration-300"
                  onClick={() => {
                    const element = document.querySelector('#courses')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  Explore Courses
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-brand rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 via-transparent to-brand-blue/5"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 animate-fade-in-up">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Why Choose 
                <span className="text-gradient-brand"> The Learners' Academy?</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                We provide everything you need to excel in your academic journey with modern teaching methods and personalized attention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group text-center animate-fade-in-up hover-lift"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <feature.icon className={`h-10 w-10 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-brand rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-red transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gradient-brand relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="mb-4">
                    <stat.icon className="h-12 w-12 text-white/80 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-white/90 font-medium text-lg">
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
        </div>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-brand-red/20 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-brand-blue/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Ready to Start Your 
                <span className="text-gradient-brand"> Success Story?</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                Join hundreds of students who have achieved their academic goals with our proven teaching methods and personalized approach.
              </p>
              <Button 
                size="lg"
                onClick={() => setIsDemoFormOpen(true)}
                className="text-xl px-12 py-6 bg-gradient-brand hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse-slow"
              >
                <Trophy className="mr-2 h-6 w-6" />
                Book Your Free Demo Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BookDemoForm 
        isOpen={isDemoFormOpen} 
        onClose={() => setIsDemoFormOpen(false)} 
      />
    </div>
  )
}
