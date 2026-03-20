'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BookDemoForm } from "@/components/BookDemoForm"
import { Phone, ChevronDown, ChevronUp, CheckCircle, MapPin, Clock, Users } from 'lucide-react'

export default function ScienceTuitionBanerPage() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false)

  const faqs = [
    {
      question: "Which classes do you provide Science tuition for?",
      answer: "The Learners' Academy provides Science tuition for students from Class 7 to Class 10. Our coaching covers Physics, Chemistry, and Biology with a focus on concept clarity, practical understanding, and board exam preparation."
    },
    {
      question: "Which school boards do you teach for Science?",
      answer: "We teach students from CBSE, ICSE, and SSC (Maharashtra Board). Our teaching approach is tailored to the specific requirements of each board, ensuring students are well-prepared for their respective examinations."
    },
    {
      question: "What makes The Learners' Academy different for Science tuition in Baner?",
      answer: "Our Science tuition in Baner focuses on concept-based learning with real-life examples and practical demonstrations. Small batch sizes, personalized attention, and regular assessments help students build strong scientific understanding and perform better in exams."
    },
    {
      question: "Do you cover Physics, Chemistry, and Biology separately?",
      answer: "Yes. Our Science coaching covers all three branches — Physics, Chemistry, and Biology — as per the school curriculum. Each topic is taught with clarity, supported by diagrams, experiments, and real-world examples to make learning engaging and effective."
    },
    {
      question: "Do you provide personal attention to each student?",
      answer: "Yes. One of the key advantages of joining The Learners' Academy is individual attention. Teachers closely monitor each student's progress and provide targeted support to help them overcome weak areas through guided practice and doubt-clearing sessions."
    },
    {
      question: "Do you conduct regular tests and assessments for Science?",
      answer: "Yes. We conduct regular chapter-wise tests and practice assessments to evaluate student progress. These tests help students become familiar with exam patterns and identify areas that need improvement before the actual board exams."
    },
    {
      question: "Do you provide coaching for Class 10 Science board exams?",
      answer: "Yes. Our Class 10 Science coaching is specifically designed for board exam preparation. We focus on important concepts, frequently asked questions, diagram practice, and exam strategies to help students score higher marks."
    },
    {
      question: "Is Science tuition helpful for students who find the subject difficult?",
      answer: "Yes. Many students struggle with Science because they try to memorise without understanding. Our teaching method focuses on building conceptual clarity step by step, using real-life examples and practical demonstrations that make Science easier to understand and remember."
    },
    {
      question: "Where is The Learners' Academy located?",
      answer: "The Learners' Academy is located in Baner, Pune. Our institute is easily accessible for students from nearby areas such as Aundh, Pashan, Balewadi, and other parts of Pune."
    },
    {
      question: "How can parents contact The Learners' Academy for Science tuition in Baner?",
      answer: "Parents can contact The Learners' Academy directly to learn about batch timings, course details, and admissions. Call us: 86054 68382. Our team will be happy to guide you and help your child start their journey toward stronger scientific understanding."
    }
  ]

  return (
    <div className="min-h-screen relative z-10">
      <Header onBookDemo={() => setIsDemoFormOpen(true)} />

      <main className="min-h-screen pt-20 relative z-20">

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-brand-silver to-white z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg overflow-hidden mb-12">
              <Image
                src="/polotno.jpeg"
                alt="Science tuition class at The Learners' Academy Baner Pune"
                width={1200}
                height={500}
                className="rounded-lg w-full max-h-[450px] object-cover"
              />
            </div>
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-sans font-bold text-brand-maroon mb-6">
                Best Science Tuition Classes in Baner, Pune
              </h1>
              <p className="text-xl text-brand-blue max-w-4xl mx-auto mb-8">
                Expert Science coaching for Class 7-10 with concept-based learning, practical demonstrations, small batch sizes, and proven results. Join The Learners' Academy for comprehensive Science tuition in Baner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:8605468382"
                  className="bg-brand-maroon px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-medium flex items-center justify-center gap-2"
                  style={{ color: 'white' }}
                >
                  📞 Call: 86054 68382
                </a>
                <a
                  href="/contact"
                  className="border-2 border-brand-maroon px-8 py-3 rounded-lg hover:bg-brand-maroon transition-colors font-medium"
                  style={{ color: '#800000' }}
                >
                  Book Free Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-sans font-bold text-brand-maroon mb-6">
                  Science Tuition in Baner
                </h2>
                <p className="text-brand-blue mb-6">
                  Science is a fascinating subject, but many students struggle when concepts become complex. Topics like physics formulas, chemical reactions, and biological processes can feel overwhelming if they are not explained clearly. As a result, students often begin memorizing answers instead of truly understanding the subject.
                </p>
                <p className="text-brand-blue mb-6">
                  At The Learners' Academy, we provide structured and concept-focused Science Tuition in Baner that helps students understand how science actually works. Our teachers break down complicated ideas into simple explanations and practical examples that students can easily grasp.
                </p>
                <p className="text-brand-blue">
                  We teach students from Class 7 to Class 10 studying in CBSE, ICSE, and SSC boards, ensuring they build strong scientific fundamentals. With small batch sizes, regular testing, and personalized guidance, our Science Tuition in Baner helps students improve both their academic performance and their confidence in science.
                </p>
              </div>
              <div className="bg-brand-silver bg-opacity-50 rounded-lg p-6">
                <Image
                  src="/students-learning-science-baner.png"
                  alt="Students learning science concepts at tuition class in Baner"
                  width={600}
                  height={400}
                  className="rounded-lg w-full max-h-[280px] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-brand-silver bg-opacity-30 relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">
                Why Choose The Learners' Academy for Science Tuition?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-sans font-semibold text-brand-maroon mb-3">Experienced Teachers</h3>
                <p className="text-brand-blue">Our teachers have years of experience teaching physics, chemistry, and biology to middle and secondary school students.</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-sans font-semibold text-brand-maroon mb-3">Concept-Based Learning</h3>
                <p className="text-brand-blue">Students are taught to understand scientific principles rather than memorize textbook answers.</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-sans font-semibold text-brand-maroon mb-3">Small Batch Sizes</h3>
                <p className="text-brand-blue">Limited students per class allow teachers to focus on each student's learning progress.</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-sans font-semibold text-brand-maroon mb-3">Personal Attention</h3>
                <p className="text-brand-blue">Teachers regularly track student performance and provide additional support wherever needed.</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-sans font-semibold text-brand-maroon mb-3">Regular Tests and Practice</h3>
                <p className="text-brand-blue">Frequent assessments help students stay prepared and identify weak areas early.</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-sans font-semibold text-brand-maroon mb-3">Proven Academic Improvement</h3>
                <p className="text-brand-blue">Many students who join our Science Tuition in Baner show noticeable improvement in their school results and subject confidence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Offered Section */}
        <section className="py-20 relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">
                Science Coaching Classes We Offer
              </h2>
              <p className="text-xl text-brand-blue max-w-3xl mx-auto">
                Comprehensive Science coaching covering Physics, Chemistry, and Biology for different classes and boards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { class: 'Class 7 Science Tuition', emoji: '🧪', desc: 'Students learn the fundamentals of scientific thinking, including basic physics, chemistry, and biology concepts.' },
                { class: 'Class 8 Science Coaching', emoji: '⚗️', desc: 'At this level, students begin understanding more complex topics such as force, energy, chemical reactions, and life processes.' },
                { class: 'Class 9 Science Tuition', emoji: '🔭', desc: 'Class 9 introduces advanced scientific concepts. Our program focuses on conceptual clarity and problem-solving skills.' },
                { class: 'Class 10 Science Board Preparation', emoji: '🧬', desc: 'Board exam preparation requires systematic study and practice. Our Science Tuition in Baner helps students master important chapters and prepare effectively.' },
              ].map((item) => (
                <div key={item.class} className="bg-brand-silver bg-opacity-80 rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors text-center">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="text-lg font-sans font-semibold text-brand-maroon mb-2">{item.class}</h3>
                  <p className="text-brand-blue text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Method Section */}
        <section className="py-20 bg-brand-silver bg-opacity-30 relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">
                Our Teaching Method – 6 Step Learning Process
              </h2>
              <p className="text-xl text-brand-blue max-w-3xl mx-auto">
                A structured approach that ensures concept clarity and exam success in Science
              </p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <Image
                src="/Gemini_Generated_Image_50q7wy50q7wy50q7.png"
                alt="Structured science teaching method at The Learners' Academy"
                width={800}
                height={450}
                className="rounded-lg w-full max-h-[400px] object-cover mb-8"
              />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                {[
                  { emoji: '💡', label: 'Concept Explanation', desc: 'Every topic begins with clear explanations so students understand the core scientific idea' },
                  { emoji: '🌍', label: 'Real-Life Examples', desc: 'Teachers connect concepts to real-world situations, making science more interesting' },
                  { emoji: '✏️', label: 'Guided Practice', desc: 'Students practice numerical problems and theory questions with teacher support' },
                  { emoji: '❓', label: 'Doubt Solving', desc: 'Dedicated time is provided for students to ask questions and clarify doubts' },
                  { emoji: '📋', label: 'Regular Testing', desc: 'Frequent tests ensure students stay on track and build exam readiness' },
                  { emoji: '🏆', label: 'Exam Strategy', desc: 'Students learn how to write structured answers and manage time effectively' },
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

        {/* Who Should Join Section */}
        <section className="py-20 relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-sans font-bold text-brand-maroon mb-6">
                  Who Should Join Our Science Tuition?
                </h2>
                <ul className="space-y-4">
                  {[
                    'Find science concepts difficult to understand',
                    'Want to improve their marks in school exams',
                    'Need structured guidance and disciplined study habits',
                    'Want better conceptual understanding of physics, chemistry, and biology',
                    'Are preparing for Class 10 board exams',
                    'Prefer small batches with personal attention',
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
                  src="/science-classroom-baner-pune.webp"
                  alt="Student studying science concepts in tuition class Baner"
                  width={600}
                  height={400}
                  className="rounded-lg w-full max-h-[350px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results & Benefits Section */}
        <section className="py-20 bg-brand-silver bg-opacity-30 relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">
                Results & Benefits
              </h2>
              <p className="text-xl text-brand-blue max-w-3xl mx-auto">
                Students attending our Science Tuition in Baner gain several academic advantages
              </p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <Image
                src="/science-academic-improvement.png"
                alt="Students improving science performance through coaching"
                width={800}
                height={450}
                className="rounded-lg w-full max-h-[400px] object-contain mb-8"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-sans font-bold text-brand-maroon mb-6 text-center">Before</h3>
                  <ul className="space-y-3">
                    {['Confusion with scientific concepts', 'Memorising without understanding', 'Poor exam performance', 'Fear of Science diagrams and formulas'].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                        <span className="text-brand-blue">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-sans font-bold text-brand-maroon mb-6 text-center">After</h3>
                  <ul className="space-y-3">
                    {['Clear understanding of Physics, Chemistry & Biology', 'Confident problem-solving and diagram work', 'Better exam scores (85%+ improvement)', 'Strong analytical and scientific thinking'].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-brand-blue">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Trust Section */}
        <section className="py-20 relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">
                Trusted by Baner, Aundh & Pashan Families
              </h2>
              <p className="text-xl text-brand-blue max-w-3xl mx-auto">
                Located in the heart of Baner, we serve students from nearby areas with quality Science education
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-brand-silver bg-opacity-50 rounded-lg p-6">
                <Image
                  src="/tuition-classroom-baner-pune.jpg"
                  alt="Science coaching classroom at The Learners' Academy Baner Pune"
                  width={600}
                  height={400}
                  className="rounded-lg w-full max-h-[350px] object-cover"
                />
              </div>
              <div>
                <p className="text-brand-blue mb-6">
                  The Learners' Academy has been serving the Baner community for years, helping hundreds of students excel in Science. Our convenient location makes us easily accessible for families from Baner, Aundh, Pashan, and Balewadi.
                </p>
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

        {/* Call to Action Section */}
        <section className="py-20 bg-brand-maroon relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-8">
              <Image
                src="/Gemini_Generated_Image_xhjmlyxhjmlyxhjm.png"
                alt="Contact The Learners' Academy for science tuition in Baner"
                width={800}
                height={450}
                className="rounded-lg w-full h-auto"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl font-sans font-bold mb-6" style={{ color: 'white' }}>
              Ready to Transform Your Child's Science Skills?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: 'white' }}>
              Join hundreds of students who have improved their Science performance at The Learners' Academy
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:8605468382"
                style={{ backgroundColor: '#800000', color: 'white', padding: '12px 32px', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', border: '2px solid white' }}
              >
                📞 Call: 86054 68382
              </a>
              <a
                href="/contact"
                style={{ border: '2px solid white', color: 'white', padding: '12px 32px', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
              >
                Book Free Demo Class
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ color: 'white' }}>
              <div className="flex items-center justify-center gap-2">
                <span>📞</span>
                <span style={{ color: 'white' }}>86054 68382</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>✉️</span>
                <span style={{ color: 'white' }}>info@learnersacademy.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>📍</span>
                <span style={{ color: 'white' }}>Baner, Pune</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-brand-silver bg-opacity-30 relative z-30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-brand-blue">
                Science Tuition in Baner – The Learners' Academy
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                }))
              })
            }}
          />
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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="bg-white rounded-lg border border-brand-blue hover:border-brand-maroon transition-colors">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold text-brand-maroon pr-4">{question}</h3>
        {isOpen
          ? <ChevronUp className="h-5 w-5 text-brand-maroon flex-shrink-0" />
          : <ChevronDown className="h-5 w-5 text-brand-maroon flex-shrink-0" />
        }
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-brand-blue leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}
