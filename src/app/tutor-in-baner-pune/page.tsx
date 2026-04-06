'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BookDemoForm } from "@/components/BookDemoForm"
import { ChevronDown, ChevronUp, CheckCircle, MapPin, Clock, Users } from 'lucide-react'

const faqs = [
  { question: "Which boards do you teach?", answer: "We teach students from CBSE, ICSE, and SSC boards from Class 7 to Class 10." },
  { question: "Do you teach CBSE and ICSE students?", answer: "Yes. Our coaching programs are designed to support students from all major school boards." },
  { question: "What is the batch size?", answer: "We maintain small batch sizes to ensure every student receives individual attention." },
  { question: "Do you provide personal attention to students?", answer: "Yes. Teachers closely monitor student progress and provide additional support wherever required." },
  { question: "Where is The Learners' Academy located?", answer: "The Learners' Academy is located in Baner, Pune, and is easily accessible for students from Baner, Aundh, Pashan, Balewadi, and surrounding areas." },
]

export default function TutorInBanerPunePage() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false)

  return (
    <div className="min-h-screen relative z-10">
      <Header onBookDemo={() => setIsDemoFormOpen(true)} />
      <main className="min-h-screen pt-20 relative z-20">

        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-brand-silver to-white z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg overflow-hidden mb-12">
              <Image src="/tutor-in-baner-pune-classroom.png" alt="Tutor teaching students at The Learners' Academy Baner Pune" width={1200} height={500} className="rounded-lg w-full max-h-[450px] object-contain" />
            </div>
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-sans font-bold text-brand-maroon mb-6">Tutor in Baner Pune</h1>
              <p className="text-xl text-brand-blue max-w-4xl mx-auto mb-8">
                Expert tutoring for Class 7–10 CBSE, ICSE & SSC students with personalized attention, concept-based learning, and proven results. The Learners' Academy, Baner, Pune.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:8605468382" className="bg-brand-maroon px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2" style={{ color: 'white' }}>📞 Call: 86054 68382</a>
                <a href="/contact" className="border-2 border-brand-maroon px-8 py-3 rounded-lg font-medium" style={{ color: '#800000' }}>Book Free Demo</a>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-sans font-bold text-brand-maroon mb-6">Tutor in Baner Pune</h2>
                <p className="text-brand-blue mb-4">Many students struggle in school not because they lack ability, but because they need more personal guidance than a large classroom can provide. When difficult topics in mathematics and science are not understood properly, students may lose confidence and begin falling behind in their studies.</p>
                <p className="text-brand-blue mb-4">At The Learners' Academy, we provide experienced and supportive Tutor in Baner Pune services designed to help students build confidence and improve academic performance. Our academy focuses on structured learning, concept clarity, and regular practice.</p>
                <p className="text-brand-blue">We teach students from Class 7 to Class 10 across CBSE, ICSE, and SSC boards, offering personalized attention in small batches.</p>
              </div>
              <div className="bg-brand-silver bg-opacity-50 rounded-lg p-6">
                <Image src="/teacher-helping-student-baner.png" alt="Tutor helping student understand maths concept in Baner" width={600} height={400} className="rounded-lg w-full max-h-[300px] object-contain" />
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
                { emoji: '🎓', title: 'Experienced Teachers', desc: 'Our tutors have strong academic backgrounds and extensive experience teaching school students.' },
                { emoji: '💡', title: 'Concept-Based Learning', desc: 'Students are taught to understand the logic behind concepts instead of memorizing answers.' },
                { emoji: '👥', title: 'Small Batch Sizes', desc: 'Limited class sizes ensure that teachers can focus on each student\'s learning progress.' },
                { emoji: '🎯', title: 'Personal Attention', desc: 'Teachers monitor each student\'s performance and provide additional support where necessary.' },
                { emoji: '📝', title: 'Regular Practice and Tests', desc: 'Frequent assignments and assessments help students remain consistent in their preparation.' },
                { emoji: '📈', title: 'Proven Academic Results', desc: 'Many students who study with our Tutor in Baner Pune programs show clear improvement in both marks and confidence.' },
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
              <p className="text-xl text-brand-blue max-w-3xl mx-auto">Structured academic support across multiple classes and subjects</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { emoji: '🧪', title: 'Class 7 Tuition', desc: 'Students strengthen their understanding of core subjects while developing better study discipline.' },
                { emoji: '⚗️', title: 'Class 8 Coaching', desc: 'Students begin preparing for more advanced academic topics and improve their conceptual clarity.' },
                { emoji: '🔭', title: 'Class 9 Tuition', desc: 'Focused guidance in mathematics and science to prepare for higher academic expectations.' },
                { emoji: '🧬', title: 'Class 10 Board Preparation', desc: 'Effective board exam preparation through regular practice and targeted revision.' },
              ].map((item) => (
                <div key={item.title} className="bg-brand-silver bg-opacity-80 rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors text-center">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="text-lg font-sans font-semibold text-brand-maroon mb-2">{item.title}</h3>
                  <p className="text-brand-blue text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-brand-blue">Subjects covered: <strong>Mathematics</strong> and <strong>Science (Physics, Chemistry, Biology)</strong></p>
            </div>
          </div>
        </section>

        {/* Teaching Method */}
        <section className="py-20 bg-brand-silver bg-opacity-30 relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">Our Teaching Method</h2>
              <p className="text-xl text-brand-blue max-w-3xl mx-auto">Teaching designed to make learning clear, structured, and effective</p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <Image src="/Gemini_Generated_Image_50q7wy50q7wy50q7.png" alt="Structured tutoring method at The Learners' Academy Baner Pune" width={800} height={450} className="rounded-lg w-full max-h-[400px] object-cover mb-8" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {[
                  { emoji: '💡', label: 'Concept Clarity', desc: 'Teachers begin each topic by explaining the fundamental concepts in a simple and understandable way.' },
                  { emoji: '✏️', label: 'Guided Practice', desc: 'Students solve problems step by step with teacher guidance.' },
                  { emoji: '❓', label: 'Doubt Solving Sessions', desc: 'Students are encouraged to ask questions and clear all doubts during class.' },
                  { emoji: '📋', label: 'Regular Assignments', desc: 'Practice exercises reinforce understanding and improve accuracy.' },
                  { emoji: '📊', label: 'Periodic Testing', desc: 'Frequent tests help evaluate student progress and identify areas needing improvement.' },
                  { emoji: '🏆', label: 'Exam Preparation Strategy', desc: 'Students are taught how to manage time and present answers effectively in exams.' },
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
                <p className="text-brand-blue mb-6">Our tutoring programs are ideal for students who:</p>
                <ul className="space-y-4">
                  {[
                    'Need extra academic guidance outside school',
                    'Find mathematics or science difficult to understand',
                    'Want to improve their marks in school exams',
                    'Need structured study support and discipline',
                    'Are preparing for Class 10 board examinations',
                    'Prefer learning in small batches with personal attention',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-brand-blue">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-brand-silver bg-opacity-50 rounded-lg p-6">
                <Image src="/student-learning-with-tutor.png" alt="Student receiving personal tutoring guidance in Baner" width={600} height={400} className="rounded-lg w-full max-h-[350px] object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Results & Benefits */}
        <section className="py-20 bg-brand-silver bg-opacity-30 relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">Results & Benefits</h2>
              <p className="text-xl text-brand-blue max-w-3xl mx-auto">Students studying with our Tutor in Baner Pune program gain several academic advantages</p>
            </div>
            <div className="bg-white rounded-lg p-8 mb-8">
              <Image
                src="/science-academic-improvement.png"
                alt="Students improving academic performance through tutoring"
                width={800} height={450}
                className="rounded-lg w-full max-h-[400px] object-contain"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { emoji: '🧠', title: 'Stronger Conceptual Understanding', desc: 'Students learn the reasoning behind concepts, which reduces confusion.' },
                { emoji: '📊', title: 'Improved Exam Performance', desc: 'Regular practice helps students perform better in school exams.' },
                { emoji: '⏰', title: 'Better Study Discipline', desc: 'Students develop effective study habits and time management skills.' },
                { emoji: '💪', title: 'Increased Confidence', desc: 'As students begin understanding difficult topics, their confidence improves significantly.' },
                { emoji: '🎯', title: 'Better Board Exam Preparation', desc: 'Structured revision and testing help students prepare effectively for board exams.' },
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
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">Trusted Tutor Near Baner, Aundh, Pashan & Balewadi</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-brand-silver bg-opacity-50 rounded-lg p-6">
                <Image src="/tutor-classroom-baner-pune.webp" alt="Small batch tutoring classroom at The Learners' Academy Baner Pune" width={600} height={400} className="rounded-lg w-full max-h-[350px] object-cover" />
              </div>
              <div>
                <p className="text-brand-blue mb-6">The Learners' Academy is located in Baner, Pune, making it convenient for students living in nearby areas such as Aundh, Pashan, Balewadi, and other parts of Pune. Our academy has become a trusted choice for families across these areas.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-brand-maroon flex-shrink-0" /><span className="text-brand-blue">302, Tejas Eternity, Balewadi Phata, Baner, Pune - 411045</span></div>
                  <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-brand-maroon flex-shrink-0" /><span className="text-brand-blue">Flexible batch timings to suit your schedule</span></div>
                  <div className="flex items-center gap-3"><Users className="h-5 w-5 text-brand-maroon flex-shrink-0" /><span className="text-brand-blue">Small batch sizes for personalized attention</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-brand-maroon relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-8">
              <Image src="/tutor-contact-banner-baner.png" alt="Contact The Learners' Academy tutoring services in Baner Pune" width={800} height={450} className="rounded-lg w-full h-auto" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold mb-6" style={{ color: 'white' }}>Join The Learners' Academy Today</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: 'white' }}>Give your child the advantage of expert guidance and structured learning at The Learners' Academy.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:8605468382" style={{ backgroundColor: '#800000', color: 'white', padding: '12px 32px', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', border: '2px solid white' }}>📞 Call: 86054 68382</a>
              <a href="/contact" style={{ border: '2px solid white', color: 'white', padding: '12px 32px', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>Book Free Demo Class</a>
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
              <p className="text-xl text-brand-blue">Tutor in Baner Pune – The Learners' Academy</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => <FAQItem key={i} question={faq.question} answer={faq.answer} />)}
            </div>
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.thelearnersacademy.in" }, { "@type": "ListItem", "position": 2, "name": "Tutor in Baner Pune", "item": "https://www.thelearnersacademy.in/tutor-in-baner-pune" }] }) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Course", "name": "Tutor in Baner Pune", "description": "Expert tutoring for Class 7-10 CBSE, ICSE and SSC students with personalized attention and concept-based learning in Baner, Pune.", "url": "https://www.thelearnersacademy.in/tutor-in-baner-pune", "provider": { "@type": "Organization", "name": "The Learners' Academy", "url": "https://www.thelearnersacademy.in" }, "educationalLevel": "Class 7 to Class 10", "teaches": ["Mathematics", "Science", "Physics", "Chemistry", "Biology"], "inLanguage": "en-IN", "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "onsite", "location": { "@type": "Place", "name": "The Learners' Academy", "address": "302, Tejas Eternity, Balewadi Phata, Baner, Pune 411045" } } }) }} />
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
