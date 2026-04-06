'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BookDemoForm } from "@/components/BookDemoForm"
import { ChevronDown, ChevronUp, CheckCircle, MapPin, Clock, Users } from 'lucide-react'

const faqs = [
  { question: "Which boards do you teach?", answer: "We teach students from CBSE, ICSE, and SSC boards from Class 7 to Class 10." },
  { question: "Do you teach both CBSE and ICSE students?", answer: "Yes. Our teaching approach supports students from all major school boards." },
  { question: "What is the batch size?", answer: "We maintain small batch sizes to ensure every student receives proper attention." },
  { question: "Do you provide personal attention to students?", answer: "Yes. Teachers closely monitor student progress and provide individual support whenever necessary." },
  { question: "Where is The Learners' Academy located?", answer: "The Learners' Academy is located in Baner, Pune, and is easily accessible for students from Baner, Aundh, Pashan, Balewadi, and nearby areas." },
]

export default function BestTuitionClassesBanerPage() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false)

  return (
    <div className="min-h-screen relative z-10">
      <Header onBookDemo={() => setIsDemoFormOpen(true)} />
      <main className="min-h-screen pt-20 relative z-20">

        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-brand-silver to-white z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg overflow-hidden mb-12">
              <Image
                src="/best-tuition-classes-baner-classroom.png"
                alt="Small batch tuition class at The Learners' Academy Baner Pune"
                width={1200} height={500}
                className="rounded-lg w-full max-h-[450px] object-cover"
              />
            </div>
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-sans font-bold text-brand-maroon mb-6">
                Best Tuition Classes in Baner
              </h1>
              <p className="text-xl text-brand-blue max-w-4xl mx-auto mb-8">
                Expert coaching for Class 7–10 CBSE, ICSE & SSC students with small batches, concept-based learning, and proven academic results. Join The Learners' Academy in Baner, Pune.
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
                <h2 className="text-3xl font-sans font-bold text-brand-maroon mb-6">Best Tuition Classes in Baner</h2>
                <p className="text-brand-blue mb-4">Parents want their children to perform well in school, but many students struggle with difficult subjects, lack of focus, or ineffective study habits. Large classrooms in schools often make it difficult for teachers to give individual attention to every student. As a result, students may fall behind and lose confidence in subjects like mathematics and science.</p>
                <p className="text-brand-blue mb-4">The Learners' Academy provides structured academic support for students who need clarity, discipline, and confidence in their studies. Recognized by many parents as one of the best tuition classes in Baner, our academy focuses on strong fundamentals, conceptual understanding, and consistent practice.</p>
                <p className="text-brand-blue">We teach students from Class 7 to Class 10 across CBSE, ICSE, and SSC boards, helping them build strong academic foundations with experienced teachers, small batches, and regular assessments.</p>
              </div>
              <div className="bg-brand-silver bg-opacity-50 rounded-lg p-6">
                <Image
                  src="/students-studying-tuition-class-baner.png"
                  alt="Students studying in small batch tuition class in Baner"
                  width={600} height={400}
                  className="rounded-lg w-full max-h-[300px] object-cover"
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
                { emoji: '🎓', title: 'Experienced Teachers', desc: 'Our teachers have extensive experience guiding school students and simplifying complex academic topics.' },
                { emoji: '💡', title: 'Concept-Based Learning', desc: 'We focus on helping students understand concepts clearly rather than simply memorizing answers.' },
                { emoji: '👥', title: 'Small Batch Sizes', desc: 'Limited batch sizes allow teachers to interact closely with each student and track their progress.' },
                { emoji: '🎯', title: 'Personal Attention', desc: 'Students receive individualized guidance to help them overcome academic challenges.' },
                { emoji: '📝', title: 'Regular Tests and Practice', desc: 'Frequent assessments ensure that students stay consistent with their studies and exam preparation.' },
                { emoji: '📈', title: 'Proven Academic Improvement', desc: 'Many students who enroll in our best tuition classes in Baner show clear improvement in their marks and confidence.' },
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
              <p className="text-xl text-brand-blue max-w-3xl mx-auto">Structured academic coaching designed specifically for school students</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { emoji: '🧪', title: 'Class 7 Tuition', desc: 'Students develop strong foundations in mathematics and science while building disciplined study habits.' },
                { emoji: '⚗️', title: 'Class 8 Tuition', desc: 'This stage focuses on strengthening core concepts and preparing students for advanced academic topics.' },
                { emoji: '🔭', title: 'Class 9 Coaching', desc: 'Students learn more advanced subjects and require deeper conceptual clarity to succeed in exams.' },
                { emoji: '🧬', title: 'Class 10 Board Preparation', desc: 'Focused preparation for board examinations, helping students master important topics and practice exam questions.' },
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
              <p className="text-xl text-brand-blue max-w-3xl mx-auto">A structured and practical teaching approach that focuses on real learning</p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <Image
                src="/Gemini_Generated_Image_50q7wy50q7wy50q7.png"
                alt="Structured teaching method at The Learners' Academy Baner"
                width={800} height={450}
                className="rounded-lg w-full max-h-[400px] object-cover mb-8"
              />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {[
                  { emoji: '💡', label: 'Concept Clarity', desc: 'Every chapter begins with clear explanations so students understand the logic behind the topic.' },
                  { emoji: '📚', label: 'Step-by-Step Learning', desc: 'Students learn how to solve problems methodically instead of guessing answers.' },
                  { emoji: '❓', label: 'Doubt Solving Sessions', desc: 'Teachers encourage students to ask questions and ensure every doubt is addressed.' },
                  { emoji: '✏️', label: 'Regular Practice', desc: 'Consistent practice helps reinforce learning and improve accuracy.' },
                  { emoji: '📋', label: 'Periodic Tests', desc: 'Frequent tests help evaluate student progress and prepare them for school exams.' },
                  { emoji: '🏆', label: 'Exam Preparation Strategy', desc: 'Students are guided on how to manage time and write answers effectively during exams.' },
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
                <p className="text-brand-blue mb-6">Our coaching programs are ideal for students who:</p>
                <ul className="space-y-4">
                  {[
                    'Need help understanding difficult academic concepts',
                    'Want to improve their marks in school exams',
                    'Need structured guidance and disciplined study habits',
                    'Want to strengthen their fundamentals in mathematics and science',
                    'Are preparing for Class 10 board exams',
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
                <Image
                  src="/student-learning-with-teacher.png"
                  alt="Student receiving personal attention in tuition class Baner"
                  width={600} height={400}
                  className="rounded-lg w-full max-h-[350px] object-cover"
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
              <p className="text-xl text-brand-blue max-w-3xl mx-auto">Students attending our best tuition classes in Baner experience several important academic benefits</p>
            </div>
            <div className="bg-white rounded-lg p-8 mb-8">
              <Image
                src="/maths-academic-improvement.jpg.png"
                alt="Students improving academic performance through tuition classes"
                width={800} height={450}
                className="rounded-lg w-full max-h-[400px] object-contain"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { emoji: '🧠', title: 'Strong Academic Foundations', desc: 'Students develop clear understanding of concepts, reducing confusion and mistakes.' },
                { emoji: '📊', title: 'Better Exam Performance', desc: 'Regular practice and testing help students score higher in school exams.' },
                { emoji: '⏰', title: 'Improved Study Discipline', desc: 'Students develop consistent study habits and time management skills.' },
                { emoji: '💪', title: 'Increased Confidence', desc: 'As students begin mastering difficult subjects, their confidence improves significantly.' },
                { emoji: '🎯', title: 'Better Board Exam Preparation', desc: 'Students preparing for Class 10 benefit from structured revision and targeted practice.' },
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
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">Trusted Tuition Classes Near Baner, Aundh, Pashan & Balewadi</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-brand-silver bg-opacity-50 rounded-lg p-6">
                <Image
                  src="/tuition-classroom-baner-pune2.jpg"
                  alt="Tuition classroom environment at The Learners' Academy Baner Pune"
                  width={600} height={400}
                  className="rounded-lg w-full max-h-[350px] object-cover"
                />
              </div>
              <div>
                <p className="text-brand-blue mb-6">The Learners' Academy is conveniently located in Baner, Pune, making it easily accessible for students from nearby areas such as Aundh, Pashan, Balewadi, and other parts of Pune. Our academy has become a trusted choice for families across these neighborhoods.</p>
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
                src="/Gemini_Generated_Image_hxf7iahxf7iahxf7.png"
                alt="Contact The Learners' Academy Baner tuition classes"
                width={800} height={450}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold mb-6" style={{ color: 'white' }}>Join The Learners' Academy Today</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: 'white' }}>Give your child the advantage of structured learning and expert guidance at The Learners' Academy.</p>
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
              <p className="text-xl text-brand-blue">Best Tuition Classes in Baner – The Learners' Academy</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => <FAQItem key={i} question={faq.question} answer={faq.answer} />)}
            </div>
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.thelearnersacademy.in" }, { "@type": "ListItem", "position": 2, "name": "Best Tuition Classes Baner", "item": "https://www.thelearnersacademy.in/best-tuition-classes-baner" }] }) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Course", "name": "Best Tuition Classes in Baner", "description": "Expert coaching for Class 7-10 CBSE, ICSE and SSC students with small batches and personalized attention in Baner, Pune.", "url": "https://www.thelearnersacademy.in/best-tuition-classes-baner", "provider": { "@type": "Organization", "name": "The Learners' Academy", "url": "https://www.thelearnersacademy.in" }, "educationalLevel": "Class 7 to Class 10", "teaches": ["Mathematics", "Science", "Physics", "Chemistry", "Biology"], "inLanguage": "en-IN", "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "onsite", "location": { "@type": "Place", "name": "The Learners' Academy", "address": "302, Tejas Eternity, Balewadi Phata, Baner, Pune 411045" } } }) }} />
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
