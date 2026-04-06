'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BookDemoForm } from "@/components/BookDemoForm"
import { ChevronDown, ChevronUp, CheckCircle, MapPin, Clock, Users } from 'lucide-react'

const faqs = [
  { question: "Which boards do you teach?", answer: "We teach students from CBSE, ICSE, and SSC boards from Class 7 to Class 10." },
  { question: "Do you teach both CBSE and ICSE students?", answer: "Yes. Our coaching programs support students from all major school boards." },
  { question: "What is the batch size?", answer: "We maintain small batch sizes so that every student receives proper attention." },
  { question: "Do you provide personal attention to students?", answer: "Yes. Teachers regularly track student progress and provide individual guidance wherever needed." },
  { question: "Where is The Learners' Academy located?", answer: "The Learners' Academy is located in Baner, Pune, and is easily accessible for students from Baner, Aundh, Pashan, Balewadi, and surrounding areas." },
]

export default function Class10MathsCoachingPage() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false)

  return (
    <div className="min-h-screen relative z-10">
      <Header onBookDemo={() => setIsDemoFormOpen(true)} />
      <main className="min-h-screen pt-20 relative z-20">

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-brand-silver to-white z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg overflow-hidden mb-12">
              <Image
                src="/class10-maths-coaching-baner-classroom.png"
                alt="Class 10 maths coaching classroom at The Learners' Academy Baner Pune"
                width={1200} height={500}
                className="rounded-lg w-full max-h-[450px] object-contain"
              />
            </div>
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-sans font-bold text-brand-maroon mb-6">
                Class 10 Maths Coaching Pune
              </h1>
              <p className="text-xl text-brand-blue max-w-4xl mx-auto mb-8">
                Expert Class 10 Mathematics coaching in Baner with concept-based learning, small batches, and proven board exam preparation. Join The Learners' Academy today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:8605468382" className="bg-brand-maroon px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2" style={{ color: 'white' }}>
                  📞 Call: 86054 68382
                </a>
                <a href="/contact" className="border-2 border-brand-maroon px-8 py-3 rounded-lg font-medium" style={{ color: '#800000' }}>
                  Book Free Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-sans font-bold text-brand-maroon mb-6">Class 10 Maths Coaching Pune</h2>
                <p className="text-brand-blue mb-4">Class 10 is one of the most important academic years for students. Mathematics plays a major role in board exam results, yet many students find topics like algebra, trigonometry, and geometry difficult to master. Without proper guidance, students often lose confidence and struggle to score well.</p>
                <p className="text-brand-blue mb-4">At The Learners' Academy, we offer structured Class 10 Maths Coaching Pune students can rely on for strong conceptual understanding and effective exam preparation. Our coaching program focuses on building mathematical clarity, improving problem-solving ability, and preparing students thoroughly for board examinations.</p>
                <p className="text-brand-blue">Located in Baner, Pune, our academy provides a focused learning environment where students from CBSE, ICSE, and SSC boards receive personalized attention through small batch sizes, regular testing, and expert guidance.</p>
              </div>
              <div className="bg-brand-silver bg-opacity-50 rounded-lg p-6">
                <Image
                  src="/class10-maths-student-study.png"
                  alt="Class 10 student solving mathematics problems in coaching class Baner"
                  width={600} height={400}
                  className="rounded-lg w-full max-h-[300px] object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-brand-silver bg-opacity-30 relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">Why Choose The Learners' Academy</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { emoji: '🎓', title: 'Experienced Teachers', desc: 'Our teachers have extensive experience teaching Class 10 mathematics and preparing students for board examinations.' },
                { emoji: '💡', title: 'Concept-Based Learning', desc: 'We focus on building a deep understanding of mathematical concepts instead of rote memorization.' },
                { emoji: '👥', title: 'Small Batch Sizes', desc: 'Limited batch sizes ensure every student receives sufficient attention and guidance.' },
                { emoji: '🎯', title: 'Personal Attention', desc: 'Teachers carefully track student progress and help them overcome their weak areas.' },
                { emoji: '📝', title: 'Regular Practice Tests', desc: 'Frequent assessments help students become comfortable with board exam patterns.' },
                { emoji: '📈', title: 'Proven Academic Results', desc: 'Many students who enroll in our Class 10 Maths Coaching Pune program show noticeable improvement in their scores and confidence.' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="text-xl font-sans font-semibold text-brand-maroon mb-3">{item.title}</h3>
                  <p className="text-brand-blue">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Offered */}
        <section className="py-20 relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">Courses Offered</h2>
              <p className="text-xl text-brand-blue max-w-3xl mx-auto">Structured coaching designed specifically for school students</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { emoji: '🧮', title: 'Class 10 Mathematics Coaching', desc: 'Complete syllabus including algebra, trigonometry, coordinate geometry, statistics, and geometry. Students practice a variety of exam-style questions to build confidence.' },
                { emoji: '📐', title: 'Class 9 Mathematics Foundation', desc: 'Strong preparation begins early. Our Class 9 program helps students develop the mathematical skills needed for Class 10 success.' },
                { emoji: '🔬', title: 'Science Coaching for Class 9 & 10', desc: 'In addition to mathematics, we guide students in physics, chemistry, and biology to support overall academic performance.' },
              ].map((item) => (
                <div key={item.title} className="bg-brand-silver bg-opacity-80 rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="text-lg font-sans font-semibold text-brand-maroon mb-2">{item.title}</h3>
                  <p className="text-brand-blue text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Method */}
        <section className="py-20 bg-brand-silver bg-opacity-30 relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">Our Teaching Method</h2>
              <p className="text-xl text-brand-blue max-w-3xl mx-auto">A systematic and student-friendly method for board exam success</p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <Image
                src="/Gemini_Generated_Image_50q7wy50q7wy50q7.png"
                alt="Structured Class 10 maths coaching method at The Learners' Academy"
                width={800} height={450}
                className="rounded-lg w-full max-h-[400px] object-cover mb-8"
              />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {[
                  { emoji: '💡', label: 'Concept Clarity', desc: 'Each chapter begins with a detailed explanation of core concepts so students understand the logic behind formulas.' },
                  { emoji: '✏️', label: 'Step-by-Step Problem Solving', desc: 'Students learn how to approach complex problems systematically.' },
                  { emoji: '❓', label: 'Doubt Clearing Sessions', desc: 'Teachers dedicate time for individual doubt solving so students never remain confused.' },
                  { emoji: '📋', label: 'Regular Tests & Assignments', desc: 'Frequent practice tests help students identify mistakes and improve performance.' },
                  { emoji: '🏆', label: 'Board Exam Strategy', desc: 'Students learn how to manage time during exams and present answers clearly to score higher marks.' },
                ].map((step) => (
                  <div key={step.label} className="text-center p-4">
                    <div className="text-4xl mb-3">{step.emoji}</div>
                    <h3 className="font-semibold text-brand-maroon mb-2">{step.label}</h3>
                    <p className="text-brand-blue text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Join */}
        <section className="py-20 relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-sans font-bold text-brand-maroon mb-6">Who Should Join</h2>
                <p className="text-brand-blue mb-6">Our coaching program is ideal for students who:</p>
                <ul className="space-y-4">
                  {[
                    'Want to improve their mathematics scores in Class 10',
                    'Need help understanding difficult topics such as trigonometry and algebra',
                    'Are preparing for board examinations',
                    'Want structured guidance and disciplined study habits',
                    'Prefer learning in small batches with individual attention',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-brand-blue">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-brand-silver bg-opacity-50 rounded-lg p-6">
                <Image
                  src="/class10-student-solving-maths.png"
                  alt="Class 10 student preparing for maths board exam in tuition class"
                  width={600} height={400}
                  className="rounded-lg w-full max-h-[350px] object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results & Benefits */}
        <section className="py-20 bg-brand-silver bg-opacity-30 relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">Results & Benefits</h2>
              <p className="text-xl text-brand-blue max-w-3xl mx-auto">Students attending our Class 10 Maths Coaching Pune program experience several academic advantages</p>
            </div>
            <div className="bg-white rounded-lg p-8 mb-8">
              <Image
                src="/maths-academic-improvement.jpg.png"
                alt="Students improving Class 10 maths scores through coaching"
                width={800} height={450}
                className="rounded-lg w-full max-h-[400px] object-contain"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { emoji: '🧠', title: 'Strong Mathematical Foundations', desc: 'Students develop clear conceptual understanding, which reduces confusion and mistakes.' },
                { emoji: '📊', title: 'Higher Board Exam Scores', desc: 'Regular practice and exam-focused preparation help students perform better in board examinations.' },
                { emoji: '🔍', title: 'Improved Problem-Solving Skills', desc: 'Students learn logical thinking and step-by-step problem-solving techniques.' },
                { emoji: '💪', title: 'Increased Confidence', desc: 'As students begin solving challenging problems independently, their confidence grows.' },
                { emoji: '🎯', title: 'Better Exam Preparation', desc: 'Through consistent practice and structured revision, students become fully prepared for their Class 10 board exams.' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="text-lg font-sans font-semibold text-brand-maroon mb-2">{item.title}</h3>
                  <p className="text-brand-blue text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Trust */}
        <section className="py-20 relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">Trusted Class 10 Maths Coaching Near Baner, Aundh, Pashan & Balewadi</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-brand-silver bg-opacity-50 rounded-lg p-6">
                <Image
                  src="/maths-coaching-classroom-baner-pune.png"
                  alt="Small batch maths coaching classroom in Baner Pune"
                  width={600} height={400}
                  className="rounded-lg w-full max-h-[350px] object-contain"
                />
              </div>
              <div>
                <p className="text-brand-blue mb-6">The Learners' Academy is conveniently located in Baner, Pune, making it easily accessible for students from nearby areas such as Aundh, Pashan, Balewadi, and other parts of Pune. Our academy has become a trusted choice for families across these areas because of our structured learning approach and experienced faculty.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-brand-maroon flex-shrink-0" />
                    <span className="text-brand-blue">302, Tejas Eternity, Balewadi Phata, Baner, Pune - 411045</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-brand-maroon flex-shrink-0" />
                    <span className="text-brand-blue">Flexible batch timings to suit your schedule</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-brand-maroon flex-shrink-0" />
                    <span className="text-brand-blue">Small batch sizes for personalized attention</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-brand-maroon relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-8">
              <Image
                src="/class10-maths-coaching-contact-banner.png"
                alt="Contact The Learners' Academy for Class 10 maths coaching in Pune"
                width={800} height={450}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold mb-6" style={{ color: 'white' }}>Join The Learners' Academy Today</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: 'white' }}>Help your child build strong mathematical skills and achieve success in their Class 10 board exams.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:8605468382" style={{ backgroundColor: '#800000', color: 'white', padding: '12px 32px', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', border: '2px solid white' }}>
                📞 Call: 86054 68382
              </a>
              <a href="/contact" style={{ border: '2px solid white', color: 'white', padding: '12px 32px', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
                Book Free Demo Class
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center gap-2"><span>📞</span><span style={{ color: 'white' }}>86054 68382</span></div>
              <div className="flex items-center justify-center gap-2"><span>✉️</span><span style={{ color: 'white' }}>info@learnersacademy.com</span></div>
              <div className="flex items-center justify-center gap-2"><span>📍</span><span style={{ color: 'white' }}>Baner, Pune</span></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-brand-silver bg-opacity-30 relative z-30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-brand-blue">Class 10 Maths Coaching Pune – The Learners' Academy</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => <FAQItem key={i} question={faq.question} answer={faq.answer} />)}
            </div>
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.thelearnersacademy.in" }, { "@type": "ListItem", "position": 2, "name": "Class 10 Maths Coaching Pune", "item": "https://www.thelearnersacademy.in/class-10-maths-coaching-pune" }] }) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Course", "name": "Class 10 Maths Coaching Pune", "description": "Specialized Class 10 Mathematics board exam preparation with concept-based learning in Baner, Pune.", "url": "https://www.thelearnersacademy.in/class-10-maths-coaching-pune", "provider": { "@type": "Organization", "name": "The Learners' Academy", "url": "https://www.thelearnersacademy.in" }, "educationalLevel": "Class 10", "teaches": ["Mathematics", "Algebra", "Trigonometry", "Geometry", "Statistics"], "inLanguage": "en-IN", "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "onsite", "location": { "@type": "Place", "name": "The Learners' Academy", "address": "302, Tejas Eternity, Balewadi Phata, Baner, Pune 411045" } } }) }} />
        </section>

      </main>
      <Footer />
      <BookDemoForm isOpen={isDemoFormOpen} onClose={() => setIsDemoFormOpen(false)} />
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="bg-white rounded-lg border border-brand-blue hover:border-brand-maroon transition-colors">
      <button className="w-full px-6 py-4 text-left flex items-center justify-between" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="font-semibold text-brand-maroon pr-4">{question}</h3>
        {isOpen ? <ChevronUp className="h-5 w-5 text-brand-maroon flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-brand-maroon flex-shrink-0" />}
      </button>
      {isOpen && <div className="px-6 pb-4"><p className="text-brand-blue leading-relaxed">{answer}</p></div>}
    </div>
  )
}
