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
            className="group w-full max-w-4xl mx-auto card p-12 hover:border-brand-maroon transition-all duration-300 shadow-lg"
          >
            <h2 className="text-4xl sm:text-5xl font-sans font-bold text-brand-maroon mb-6">
              About The Learners' Academy
            </h2>
            <p className="text-2xl text-brand-maroon mb-6 italic font-medium">
              "Learn it the Learners' way!"
            </p>
            <p className="text-lg text-brand-blue mb-8 max-w-2xl mx-auto">
              Discover our mission, vision, and what makes us unique in education. 
              Founded in 2014, we've been transforming students' lives through innovative teaching methods.
            </p>
            
            <div className="flex items-center justify-center gap-3 text-brand-maroon group-hover:text-brand-blue transition-colors">
              <span className="text-lg font-semibold">
                {isExpanded ? 'Show Less' : 'Learn More About Us'}
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
          {/* Founder Quote */}
          <div className="text-center mb-16">
            <p className="text-xl max-w-4xl mx-auto italic text-brand-blue">
              "Learning is a never-ending process of life, however if you learn something once, you know it for a lifetime" 
              <br />
              <span className="text-brand-maroon font-semibold">- Dr. HrishiRaje Bhosale, Founder-Owner (CEO)</span>
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="card p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-brand-blue rounded-lg mb-6 mx-auto">
                <Target className="h-8 w-8 text-brand-silver" />
              </div>
              <h3 className="text-2xl font-sans font-bold text-brand-maroon mb-4 text-center">Our Mission</h3>
              <p className="text-brand-blue leading-relaxed text-center">
                To bring about a thorough reform in the education system by paving a new path of attitude and learning towards education by using innovative methods of teaching.
              </p>
            </div>

            <div className="card p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-brand-maroon rounded-lg mb-6 mx-auto">
                <Award className="h-8 w-8 text-brand-silver" />
              </div>
              <h3 className="text-2xl font-sans font-bold text-brand-maroon mb-4 text-center">Our Vision</h3>
              <p className="text-brand-blue leading-relaxed text-center">
                To be the best and first choice for education while aiming to strengthen society and equip our students with the personal and professional tools necessary to achieve their goals.
              </p>
            </div>
          </div>

          {/* Founder Section */}
          <div className="bg-brand-silver border-2 border-brand-blue rounded-lg p-8 mb-20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-sans font-bold mb-6 text-brand-maroon">Meet Our Founder</h3>
              
              <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
                <div className="relative w-48 h-48 flex-shrink-0 md:ml-20">
                  <Image
                    src="/DSC_0255 (1).JPG"
                    alt="Dr Hrishi RajeBhosale - Founder"
                    fill
                    className="object-cover rounded-lg border-4 border-brand-blue"
                  />
                </div>
                
                <div className="flex-1 text-left">
                  <h4 className="text-2xl font-sans font-semibold mb-2 text-brand-maroon">Dr. HrishiRaje Bhosale</h4>
                  <p className="text-lg text-brand-blue mb-4 font-medium">The Futuristic Visionary behind The Learners' Academy</p>
                  
                  <div className="space-y-3 text-brand-blue">
                    <div>
                      <p className="font-semibold">Qualifications:</p>
                      <p className="text-sm">• PH.D (PHYSICS) University of Maryland, USA</p>
                      <p className="text-sm">• M.SC (PHYSICS) University of Pune, India</p>
                      <p className="text-sm">• B.SC (PHYSICS) University of Pune, India</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">Teaching Experience:</p>
                      <p className="text-sm">Professor at The Learners' Academy, Pune</p>
                      <p className="text-sm">More than 14 years of teaching experience</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">Skill Set:</p>
                      <p className="text-sm">Serious Physicist, a Mathematician, a Teacher, a Motivator & Most Importantly a Futuristic Guide & Mentor</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">Achievements:</p>
                      <p className="text-sm">• PH.D (PHYSICS) from USA</p>
                      <p className="text-sm">• Avid sailor at heart, having won various competitions at various levels in Sailing & Boat Rowing</p>
                      <p className="text-sm">• Naval NCC, C-Certificate with A grade</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h3 className="text-3xl font-sans font-bold text-center mb-12 text-brand-maroon">Our Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-brand-silver rounded-lg p-6 border-2 border-brand-blue">
                  <h4 className="text-xl font-sans font-semibold text-brand-maroon mb-3">{value.title}</h4>
                  <p className="text-brand-blue text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Goals & Objectives */}
          <div className="bg-brand-silver border-2 border-brand-blue rounded-lg p-8 mb-20">
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
            <div className="bg-brand-silver border-2 border-brand-blue rounded-lg p-8">
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

          {/* What We Cover */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="card-elevated p-8">
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

            <div className="card-elevated p-8">
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

            <div className="card-elevated p-8">
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
          <div className="bg-brand-silver border-2 border-brand-blue rounded-lg p-8 mb-20">
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
          <div className="bg-brand-silver border-2 border-brand-blue rounded-lg p-8 mb-20">
            <h3 className="text-3xl font-sans font-bold text-center mb-8 text-brand-maroon">Additional Benefits Once You Enroll</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {additionalBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Star className="h-6 w-6 mt-1 flex-shrink-0 text-brand-maroon" />
                  <span className="text-brand-blue">{benefit}</span>
                </div>
              ))}
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
