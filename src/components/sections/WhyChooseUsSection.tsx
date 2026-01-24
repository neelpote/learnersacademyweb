'use client'

import { useState } from 'react'
import { Heart, Users, Lightbulb, Globe, ChevronDown, ChevronUp, BookOpen, Trophy } from 'lucide-react'

export function WhyChooseUsSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const features = [
    {
      icon: Heart,
      title: "Positive Learning Process",
      description: "Facilitating and nurturing the positive learning process for each child"
    },
    {
      icon: Users,
      title: "Optimal Batch Size",
      description: "Small classes ensuring individual attention for every student"
    },
    {
      icon: Lightbulb,
      title: "Innovative Teaching",
      description: "Tried and tested teaching techniques and innovative aids"
    },
    {
      icon: Globe,
      title: "State-of-the-art Classrooms",
      description: "Modern facilities designed for comfortable learning"
    }
  ]

  const boards = [
    "IB", "IGCSE", "ICSE", "CBSE", "MSBSHSE", "State Board"
  ]

  const competitiveExams = [
    "JEE", "NEET", "NDA", "MH-CET", "KVPY", "NTSE", "NSO", "IEO", "IMO"
  ]

  const additionalBenefits = [
    "Vacation Batches (Summer & Diwali Break)",
    "Full Syllabus Test Series (Board Pattern)",
    "JEE/NEET/NDA/MH-CET/KVPY Coaching",
    "INO/NTSE/NSO/IOS/IEO/IMO Coaching",
    "Career Guidance",
    "Guest Lectures, Workshops & Seminars"
  ]

  return (
    <section id="why-choose-us" className="py-20 bg-transparent relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Collapsed Header - Always Visible */}
        <div className="text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group w-full max-w-4xl mx-auto bg-white bg-opacity-60 backdrop-blur-sm rounded-lg p-12 hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-4xl sm:text-5xl font-sans font-bold text-brand-maroon mb-6">
              Why Choose The Learners' Academy?
            </h2>
            <p className="text-lg text-brand-blue mb-8 max-w-2xl mx-auto">
              Discover what makes us unique in education. We provide everything you need to excel 
              in your academic journey with modern teaching methods and personalized attention.
            </p>
            
            <div className="flex items-center justify-center gap-3 text-brand-maroon group-hover:text-brand-blue transition-colors">
              <span className="text-lg font-semibold">
                {isExpanded ? 'Show Less' : 'Learn More About Our Approach'}
              </span>
              {isExpanded ? (
                <ChevronUp className="h-7 w-7 transition-transform duration-300" />
              ) : (
                <ChevronDown className="h-7 w-7 transition-transform duration-300 group-hover:translate-y-1" />
              )}
            </div>
          </button>
        </div>

        {/* Expandable Content */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-none opacity-100 mt-12' : 'max-h-0 opacity-0'
        }`}>
          {/* Main Features */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 hover:bg-white hover:bg-opacity-50 hover:backdrop-blur-sm hover:shadow-md rounded-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-brand-blue rounded-full mb-4 mx-auto">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-sans font-semibold text-brand-maroon mb-3 text-center">{feature.title}</h4>
                  <p className="text-brand-blue text-center">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-lg text-brand-blue font-medium">Our Specialties:</p>
              <p className="text-brand-blue">Specializes in Mathematics, Physics, Chemistry, Biology and English</p>
            </div>
          </div>

          {/* What We Cover */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-8 shadow-sm">
              <h4 className="text-xl font-sans font-bold text-brand-maroon mb-6 text-center">Boards Covered</h4>
              <div className="space-y-3">
                {boards.map((board, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-brand-blue flex-shrink-0" />
                    <span className="text-brand-blue">{board}</span>
                  </div>
                ))}
                <p className="text-sm text-brand-blue mt-4">7th to 12th Standards</p>
              </div>
            </div>

            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-8 shadow-sm">
              <h4 className="text-xl font-sans font-bold text-brand-maroon mb-6 text-center">Competitive Exams</h4>
              <div className="space-y-3">
                {competitiveExams.map((exam, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Trophy className="h-5 w-5 text-brand-maroon flex-shrink-0" />
                    <span className="text-brand-blue">{exam}</span>
                  </div>
                ))}
                <p className="text-sm text-brand-blue mt-4">7th to 9th & 11th to 12th Standards</p>
              </div>
            </div>

            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-8 shadow-sm">
              <h4 className="text-xl font-sans font-bold text-brand-maroon mb-6 text-center">Spoken English</h4>
              <div className="space-y-3 text-brand-blue">
                <p className="flex items-start gap-2"><span className="font-semibold">1.</span> Phonetics, pronunciation</p>
                <p className="flex items-start gap-2"><span className="font-semibold">2.</span> Basic reading & writing skills</p>
                <p className="flex items-start gap-2"><span className="font-semibold">3.</span> Overcoming stage fear</p>
                <p className="flex items-start gap-2"><span className="font-semibold">4.</span> Acquiring confidence</p>
                <p className="flex items-start gap-2"><span className="font-semibold">5.</span> Effective conversation</p>
                <p className="flex items-start gap-2"><span className="font-semibold">6.</span> & much more...</p>
              </div>
            </div>
          </div>

          {/* Test Series */}
          <div className="bg-white bg-opacity-50 backdrop-blur-sm rounded-lg p-8 shadow-sm mb-20">
            <h3 className="text-3xl font-sans font-bold text-center mb-8 text-brand-maroon">Test Series</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-brand-maroon">ICSE/CBSE/State Board</h4>
                <ul className="space-y-2 text-sm text-brand-blue">
                  <li>• 3 month long TEST SERIES for 10th and 12th standards</li>
                  <li>• Covered for 10th CBSE/ICSE/SB & 12th CBSE/SB</li>
                  <li>• Series held for 8 weeks covering 6 papers for each subject</li>
                  <li>• Subjects: Math, Physics, Chemistry, Biology, English, Hindi, Marathi</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-brand-maroon">Particulars</h4>
                <ul className="space-y-2 text-sm text-brand-blue">
                  <li>• <span className="font-semibold">Time Period:</span> 2nd week of November to last week of January</li>
                  <li>• <span className="font-semibold">Duration:</span> 8 weeks</li>
                  <li>• <span className="font-semibold">No of Test Papers:</span> 6 for each subject</li>
                  <li>• <span className="font-semibold">Seats Available:</span> 20</li>
                  <li>• <span className="font-semibold">Personal feedback provided for each test series</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-8 shadow-sm">
            <h3 className="text-3xl font-sans font-bold text-center mb-8 text-brand-maroon">Additional Benefits Once You Enroll</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {additionalBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-maroon rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-brand-blue">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}