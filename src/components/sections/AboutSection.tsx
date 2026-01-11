'use client'

import { useState } from 'react'
import { Users, Award, BookOpen, Target, Heart, Lightbulb, Globe, Star, ChevronDown, ChevronUp } from 'lucide-react'

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const features = [
    {
      icon: Heart,
      title: "Interactive Learning",
      description: "Engaging methods that make learning enjoyable and effective"
    },
    {
      icon: Users,
      title: "Optimal Batch Size",
      description: "Small classes ensuring individual attention for every student"
    },
    {
      icon: Lightbulb,
      title: "Conceptual Tutoring",
      description: "Deep understanding through innovative teaching techniques"
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
    "ICSE", "CBSE", "State Board", "MSBSHSE"
  ]

  const competitiveExams = [
    "JEE", "NEET", "NDA", "MH-CET", "KVPY", "NTSE", "NSO", "IEO", "IMO"
  ]

  const freeServices = [
    "Vacation Batches (Summer & Diwali Break)",
    "Full Syllabus Test Series (Board Pattern)",
    "JEE/NEET/NDA/MH-CET/KVPY Coaching",
    "INO/NTSE/NSO/IOS/IEO/IMO Coaching",
    "Career Guidance"
  ]

  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        {/* Collapsed Header - Always Visible */}
        <div className="text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group w-full max-w-2xl mx-auto card p-8 hover:border-academic-maroon transition-all duration-300"
          >
            <h2 className="text-display mb-4">
              About <span className="text-academic-maroon">The Learners' Academy</span>
            </h2>
            <p className="text-subtitle text-academic-maroon mb-4">
              "Learn it the Learners' way!"
            </p>
            <p className="text-body mb-6">
              Discover our mission, vision, and what makes us unique in education
            </p>
            
            <div className="flex items-center justify-center gap-2 text-academic-maroon group-hover:text-academic-teal transition-colors">
              <span className="text-body font-medium">
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
          <div className="text-center mb-16">
            <p className="text-lead max-w-4xl mx-auto italic">
              "Learning is a never-ending process of life, however if you learn something once, you know it for a lifetime" 
              <br />
              <span className="text-academic-maroon font-medium">- Dr Hrishi RajeBhosale, Founder-Owner</span>
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="card p-8">
              <div className="icon-container mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-title mb-4">Our Mission</h3>
              <p className="text-body leading-relaxed">
                Established in 2014, The Learners' Academy was founded with a mission to bring about thorough reform 
                in the education system by paving a new path of attitude and learning towards education through 
                innovative teaching methods.
              </p>
            </div>

            <div className="card p-8">
              <div className="icon-container mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-title mb-4">Our Vision</h3>
              <p className="text-body leading-relaxed">
                More than a traditional coaching center, we strive to be a fertile learning environment and 
                counselling center, honing students to become complete global citizens with guidance on health, 
                environment, education, morals, politics, and patriotism.
              </p>
            </div>
          </div>

          {/* Founder Section */}
          <div className="bg-matte-silver border-2 border-academic-teal rounded-lg p-8 mb-20">
            <div className="text-center mb-8">
              <h3 className="text-headline mb-4 text-academic-maroon">Meet Our Founder</h3>
              <div className="max-w-3xl mx-auto">
                <h4 className="text-title mb-4">Dr Hrishi RajeBhosale</h4>
                <p className="text-body leading-relaxed">
                  A serious Physicist, Motivator, and most importantly a 'Futuristic Guide and Teacher' who 
                  strongly believes in making the learning process FUN for students. Dr. Bhosale leads our 
                  academy with the philosophy that learning should be engaging, effective, and enjoyable.
                </p>
              </div>
            </div>
          </div>

          {/* The Learners' Way */}
          <div className="mb-20">
            <h3 className="text-headline text-center mb-12 font-heading">
              The <span className="text-gradient-sunset">Learners' Way</span>
            </h3>
            <div className="bg-soft-cream rounded-3xl p-8">
              <p className="text-body font-body leading-relaxed text-center max-w-4xl mx-auto">
                A Learner is a person who always keeps on learning. He never thinks that the knowledge he has is enough. 
                He never gives up, no matter how difficult the subject is. He strives to beat himself, every single time. 
                Calling oneself 'A Learner' always keeps one humble, ready to change, ready to accept other points of view, 
                flexible and open to all ideas.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-20">
            <h3 className="text-headline text-center mb-12 font-heading">Our Salient Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="icon-container icon-container-orange">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-title mb-3 font-heading">{feature.title}</h4>
                  <p className="text-body font-body">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Subjects & Boards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="card-elevated p-8">
              <h4 className="text-title mb-6 font-heading text-center">Subjects We Specialize In</h4>
              <div className="space-y-3">
                {subjects.map((subject, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-primary-orange" />
                    <span className="text-body font-body">{subject}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-elevated p-8">
              <h4 className="text-title mb-6 font-heading text-center">Boards We Cover</h4>
              <div className="space-y-3">
                {boards.map((board, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-accent-orange" />
                    <span className="text-body font-body">{board}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-elevated p-8">
              <h4 className="text-title mb-6 font-heading text-center">Competitive Exams</h4>
              <div className="space-y-3">
                {competitiveExams.map((exam, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-warm-brown" />
                    <span className="text-body font-body">{exam}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Free Services */}
          <div className="bg-primary-orange text-white rounded-3xl p-8 mb-20">
            <h3 className="text-headline text-center mb-8 font-heading">FREE Services Once You Enroll</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {freeServices.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Star className="h-6 w-6 mt-1 flex-shrink-0" />
                  <span className="text-body font-body">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Spoken English Section */}
          <div className="card-elevated p-8 mb-20">
            <h3 className="text-headline mb-6 font-heading text-center">
              Special Program: <span className="text-gradient-sunset">Spoken English</span>
            </h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-body font-body leading-relaxed mb-6">
                After thorough research and analysis, we identified that the basic hindrance for learning English 
                in our area is limited participation from certain groups of society. Today, English is considered 
                an international language, yet many people struggle with speaking, reading, and writing in English.
              </p>
              <p className="text-body font-body leading-relaxed">
                To help overcome this hindrance, The Learners' Academy offers a comprehensive Spoken English Course. 
                We believe in teaching functional English with very small class sizes to ensure quality. Our courses 
                have been transforming lives across various age groups, from school children to management professionals.
              </p>
            </div>
          </div>

          {/* Faculty Section */}
          <div className="text-center">
            <h3 className="text-headline mb-8 font-heading">Our Dedicated Faculty</h3>
            <div className="bg-soft-cream rounded-3xl p-8 max-w-4xl mx-auto">
              <p className="text-body font-body leading-relaxed mb-6">
                Our teaching team consists of qualified graduates and post-graduates in their specialized subjects, 
                with extensive classroom experience. Our in-house training programs ensure they have the best modern 
                teaching aids and great interactive and counseling skills.
              </p>
              <p className="text-body font-body leading-relaxed">
                Their commitment to The Learners' Academy is proven by the fact that all our teachers have been 
                with us from inception. Our team grows each year, and so does our dedication and solidarity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}