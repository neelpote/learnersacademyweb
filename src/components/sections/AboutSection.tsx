'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Users, Award, BookOpen, Target, Heart, Lightbulb, Globe, Star, ChevronDown, ChevronUp, Trophy, GraduationCap, Sparkles } from 'lucide-react'

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const coreValues = [
    {
      title: "Excellence",
      description: "Our goal is simply to be the best and to continually improve our standards. We accomplish this through focused learning approach, pride of our work, quality controlled programs"
    },
    {
      title: "Innovation",
      description: "Providing an innovative learning experience where our students can excel in their studies"
    },
    {
      title: "Educate",
      description: "We believe that everyone can learn and that all people are to be treated with respect, regardless of their level of education or ability"
    },
    {
      title: "Integrity",
      description: "To honor our commitment and act with responsibility in all our partnerships & relationships"
    },
    {
      title: "Students Satisfaction",
      description: "Striving to meet their aspirations to attain career success and guiding them towards overcoming their problems and difficulties"
    },
    {
      title: "Empower",
      description: "We believe in our students. We believe our students have the capability to achieve their educational and professional goals and we want to be a part of that process"
    }
  ]

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

  const subjects = [
    "Mathematics", "Physics", "Chemistry", "Biology", "English"
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
    <section id="about" className="section-padding">
      <div className="section-container">
        {/* Collapsed Header - Always Visible */}
        <div className="text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group w-full max-w-3xl mx-auto bg-transparent rounded-lg p-8 hover:bg-white hover:bg-opacity-10 transition-all duration-300"
          >
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">
              About The Learners' Academy
            </h2>
            <p className="text-xl text-brand-maroon mb-4 italic font-medium">
              "Learn it the Learners' way!"
            </p>
            <p className="text-base text-brand-blue mb-6 max-w-xl mx-auto">
              Discover our mission, vision, and what makes us unique in education. 
              Founded in 2014, we've been transforming students' lives through innovative teaching methods.
            </p>
            
            <div className="flex items-center justify-center gap-3 text-brand-maroon group-hover:text-brand-blue transition-colors">
              <span className="text-base font-semibold">
                {isExpanded ? 'Show Less' : 'Learn More About Us'}
              </span>
              {isExpanded ? (
                <ChevronUp className="h-6 w-6 transition-transform duration-300" />
              ) : (
                <ChevronDown className="h-6 w-6 transition-transform duration-300 group-hover:translate-y-1" />
              )}
            </div>
          </button>
        </div>

        {/* Expandable Content */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-none opacity-100 mt-12' : 'max-h-0 opacity-0'
        }`}>
          {/* Founder Quote */}
          <div className="text-center mb-12">
            <p className="text-lg max-w-3xl mx-auto italic text-brand-blue">
              "Learning is a never-ending process of life, however if you learn something once, you know it for a lifetime" 
              <br />
              <span className="text-brand-maroon font-semibold">- Dr. HrishiRaje Bhosale, Founder-Owner (CEO)</span>
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-transparent rounded-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-brand-blue rounded-lg mb-4 mx-auto">
                <Target className="h-6 w-6 text-brand-silver" />
              </div>
              <h3 className="text-xl font-sans font-bold text-brand-maroon mb-3 text-center">Our Mission</h3>
              <p className="text-brand-blue leading-relaxed text-center text-sm">
                To bring about a thorough reform in the education system by paving a new path of attitude and learning towards education by using innovative methods of teaching.
              </p>
            </div>

            <div className="bg-transparent rounded-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-brand-maroon rounded-lg mb-4 mx-auto">
                <Award className="h-6 w-6 text-brand-silver" />
              </div>
              <h3 className="text-xl font-sans font-bold text-brand-maroon mb-3 text-center">Our Vision</h3>
              <p className="text-brand-blue leading-relaxed text-center text-sm">
                To be the best and first choice for education while aiming to strengthen society and equip our students with the personal and professional tools necessary to achieve their goals.
              </p>
            </div>
          </div>

          {/* Founder Section */}
          <div className="bg-brand-silver bg-opacity-80 backdrop-blur-sm rounded-lg p-6 mb-16">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-sans font-bold mb-4 text-brand-maroon">Meet Our Founder</h3>
              
              <div className="flex flex-col md:flex-row items-center gap-6 max-w-3xl mx-auto">
                <div className="relative w-32 h-32 flex-shrink-0">
                  <Image
                    src="/DSC_0255 (1).JPG"
                    alt="Dr Hrishi RajeBhosale - Founder"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                
                <div className="flex-1 text-left">
                  <h4 className="text-xl font-sans font-semibold mb-2 text-brand-maroon">Dr. HrishiRaje Bhosale</h4>
                  <p className="text-base text-brand-blue mb-3 font-medium">The Futuristic Visionary behind The Learners' Academy</p>
                  
                  <div className="space-y-2 text-brand-blue text-sm">
                    <div>
                      <p className="font-semibold">Qualifications:</p>
                      <p>• PH.D (PHYSICS) University of Maryland, USA</p>
                      <p>• M.SC (PHYSICS) University of Pune, India</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">Experience:</p>
                      <p>More than 14 years of teaching experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-12">
            <h3 className="text-2xl font-sans font-bold text-center mb-8 text-brand-maroon">Our Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-brand-silver bg-opacity-80 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="text-base font-sans font-semibold text-brand-maroon mb-2">{value.title}</h4>
                  <p className="text-brand-blue text-xs leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Goals & Objectives */}
          <div className="bg-brand-silver bg-opacity-80 backdrop-blur-sm rounded-lg p-8 mb-20">
            <h3 className="text-3xl font-sans font-bold text-center mb-8 text-brand-maroon">Our Goals & Objectives</h3>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div>
                <h4 className="text-xl font-semibold text-brand-maroon mb-2">Our Vision</h4>
                <p className="text-brand-blue">To be a leading professional institution that exemplifies career success through enabling knowledge excellence and developing holistic global citizen.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-brand-maroon mb-2">Strategic Objectives</h4>
                <p className="text-brand-blue">Bring about a thorough reform in the education system by paving a new path of attitude and learning towards education. This was done specially by using innovative methods of teaching.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-brand-maroon mb-2">Focus Areas</h4>
                <p className="text-brand-blue">Mathematics, Physics, Chemistry, Biology and English. Conceptual as well as real life explanations.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-brand-maroon mb-2">Your Dream Solution</h4>
                <p className="text-brand-blue">Student is honed to be a complete global citizen as there is focused guidance on/about health, environment, education, morals, politics, and patriotism.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-brand-maroon mb-2">Our Commitments</h4>
                <p className="text-brand-blue">Highly Qualified Faculty, Positive Learning Process, State of the Art premises, Interactive Learning and Optimal Batch Sizes, Continuous Evaluation</p>
              </div>
            </div>
          </div>

          {/* The Learners' Way */}
          <div className="mb-20">
            <h3 className="text-3xl font-sans font-bold text-center mb-8 text-brand-maroon">The Learners' Way</h3>
            <div className="bg-brand-silver bg-opacity-80 backdrop-blur-sm rounded-lg p-8">
              <p className="text-brand-blue leading-relaxed text-center max-w-4xl mx-auto italic">
                A Learner is a person who always keeps on learning. He/She never thinks that the knowledge that he/she has is enough. He/She never gives up, no matter how difficult the subject is. He/She strives to beat himself/herself, every single time. Calling oneself 'A Learner' always keeps one humble, ready to change, ready to accept other points of views, flexible and open to all the ideas.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <h3 className="text-3xl font-sans font-bold text-center mb-12 text-brand-maroon">Why Choose Us</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="flex items-center justify-center w-16 h-16 bg-brand-blue rounded-lg mb-4 mx-auto">
                    <feature.icon className="h-8 w-8 text-brand-silver" />
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

          {/* Faculty Section */}
          <div className="text-center">
            <h3 className="text-3xl font-sans font-bold text-brand-maroon mb-8">Our Dedicated Faculty</h3>
            <div className="bg-brand-silver border-2 border-brand-blue rounded-lg p-8 max-w-4xl mx-auto">
              <p className="text-brand-blue leading-relaxed mb-6">
                Our teaching team consists of qualified graduates and post-graduates in their specialized subjects, with extensive classroom experience. Faculty with post graduation with a desire to learn ensures the best modern teaching aids and great interactive and counseling skills.
              </p>
              <p className="text-brand-blue leading-relaxed">
                Their commitment to The Learners' Academy is proven by the fact that all our teachers have been with us from inception. Our team grows each year, and so does our dedication and solidarity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
