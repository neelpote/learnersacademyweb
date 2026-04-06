'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BookDemoForm } from "@/components/BookDemoForm"
import { 
  Calculator, 
  Users, 
  Target, 
  BookOpen, 
  Award, 
  Clock,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Brain,
  UserCheck,
  ClipboardCheck,
  TrendingUp
} from 'lucide-react'

export default function MathsTuitionBanerPage() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false)
  
  const faqs = [
    {
      question: "Which classes do you provide Maths tuition for?",
      answer: "The Learners' Academy provides Maths tuition for students from Class 7 to Class 10. Our coaching focuses on strengthening fundamentals, improving problem-solving skills, and preparing students for school examinations and board exams."
    },
    {
      question: "Which school boards do you teach?",
      answer: "We teach students from CBSE, ICSE, and SSC (Maharashtra Board). Our teaching approach focuses on concept clarity, which helps students adapt easily to the requirements of different school boards."
    },
    {
      question: "What makes The Learners' Academy different from other Maths tuition classes in Baner?",
      answer: "Our Maths Tuition in Baner focuses on concept-based learning, small batch sizes, and personalized attention. Students receive structured guidance, regular tests, and doubt-solving sessions that help them improve both understanding and exam performance."
    },
    {
      question: "What is the batch size at The Learners' Academy?",
      answer: "We maintain small batch sizes to ensure that every student receives proper attention from the teacher. This allows us to monitor individual progress and provide targeted support wherever needed."
    },
    {
      question: "Do you provide personal attention to each student?",
      answer: "Yes. One of the key advantages of joining The Learners' Academy is individual attention. Teachers closely track each student's performance and help them overcome their weak areas through guided practice and doubt-clearing sessions."
    },
    {
      question: "Do you conduct regular tests and assessments?",
      answer: "Yes. We conduct regular tests and practice assessments to evaluate student progress. These tests help students become familiar with exam patterns and identify areas that require improvement."
    },
    {
      question: "Do you provide coaching for Class 10 board exams?",
      answer: "Yes. Our Class 10 Maths coaching program is designed specifically for board exam preparation. We focus on important concepts, frequently asked questions, exam strategies, and time management techniques to help students score higher marks."
    },
    {
      question: "Is Maths tuition really helpful for students who struggle with the subject?",
      answer: "Yes. Many students struggle with mathematics because they do not fully understand the underlying concepts. Our teaching method focuses on clarifying concepts step by step, which helps students overcome confusion and build confidence in solving problems."
    },
    {
      question: "Where is The Learners' Academy located?",
      answer: "The Learners' Academy is located in Baner, Pune. Our institute is easily accessible for students from nearby areas such as Aundh, Pashan, Balewadi, and other parts of Pune."
    },
    {
      question: "How can parents contact The Learners' Academy for Maths tuition in Baner?",
      answer: "Parents can contact The Learners' Academy directly to learn about batch timings, course details, and admissions. Call us: 86054 68382. Our team will be happy to guide you and help your child start their journey toward stronger mathematical skills."
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
              src="/maths-tuition-baner-classroom.jpeg"
              alt="Maths tuition class at The Learners' Academy Baner Pune"
              width={1200}
              height={500}
              className="rounded-lg w-full max-h-[450px] object-cover"
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl text-brand-maroon mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
              Best Maths Tuition Classes in Baner, Pune
            </h1>
            <p className="text-xl max-w-4xl mx-auto mb-8" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, color: '#4A4A4A' }}>
              Expert Mathematics coaching for Class 7-10 with concept-based learning, small batch sizes, and proven results. Join The Learners' Academy for comprehensive Maths tuition in Baner.
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
                Why Choose Maths Tuition at The Learners' Academy?
              </h2>
              <p className="text-brand-blue mb-6">
                Mathematics is a subject that builds upon itself - each concept forms the foundation for the next. At The Learners' Academy in Baner, we understand this fundamental principle and have designed our Maths tuition program to ensure students develop a strong conceptual foundation.
              </p>
              <p className="text-brand-blue mb-6">
                Our experienced teachers use proven methodologies to make complex mathematical concepts simple and understandable. Whether your child is struggling with basic arithmetic or advanced algebra, our personalized approach ensures every student receives the attention they need to excel.
              </p>
            </div>
            <div className="bg-brand-silver bg-opacity-50 rounded-lg p-6">
              <Image
                src="/student-solving-maths-baner.jpeg"
                alt="Student learning mathematics with teacher guidance in Baner tuition class"
                width={600}
                height={400}
                className="rounded-lg w-full h-auto"
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
              Why Choose The Learners' Academy for Maths Tuition?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-sans font-semibold text-brand-maroon mb-3">
                Experienced Teachers
              </h3>
              <p className="text-brand-blue">
                Our qualified mathematics teachers have years of experience in teaching CBSE, ICSE, and SSC curricula with proven track records.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-sans font-semibold text-brand-maroon mb-3">
                Concept Learning
              </h3>
              <p className="text-brand-blue">
                We focus on building strong conceptual foundations rather than rote learning, ensuring students understand the 'why' behind every solution.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-sans font-semibold text-brand-maroon mb-3">
                Small Batches
              </h3>
              <p className="text-brand-blue">
                Limited batch sizes ensure personalized attention for every student, allowing teachers to address individual learning needs effectively.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-sans font-semibold text-brand-maroon mb-3">
                Personal Attention
              </h3>
              <p className="text-brand-blue">
                Individual doubt-solving sessions and personalized feedback help students overcome their specific challenges in mathematics.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-sans font-semibold text-brand-maroon mb-3">
                Tests & Assessment
              </h3>
              <p className="text-brand-blue">
                Regular tests and practice sessions help students become familiar with exam patterns and improve their problem-solving speed.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-sans font-semibold text-brand-maroon mb-3">
                Academic Improvement
              </h3>
              <p className="text-brand-blue">
                Structured learning approach leads to significant improvement in marks, confidence, and overall mathematical understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Offered Section */}
      <section className="py-20 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">
              Maths Coaching Classes We Offer
            </h2>
            <p className="text-xl text-brand-blue max-w-3xl mx-auto">
              Comprehensive mathematics coaching for different classes and boards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-brand-silver bg-opacity-80 rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors text-center">
              <div className="bg-brand-maroon text-white rounded-lg p-3 w-fit mx-auto mb-4">
                <Calculator className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-sans font-semibold text-brand-maroon mb-2">
                Class 7 Maths
              </h3>
              <p className="text-brand-blue text-sm">
                Foundation building with integers, fractions, algebra basics, and geometry fundamentals.
              </p>
            </div>

            <div className="bg-brand-silver bg-opacity-80 rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors text-center">
              <div className="bg-brand-maroon text-white rounded-lg p-3 w-fit mx-auto mb-4">
                <Calculator className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-sans font-semibold text-brand-maroon mb-2">
                Class 8 Maths
              </h3>
              <p className="text-brand-blue text-sm">
                Advanced concepts including rational numbers, linear equations, and mensuration.
              </p>
            </div>

            <div className="bg-brand-silver bg-opacity-80 rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors text-center">
              <div className="bg-brand-maroon text-white rounded-lg p-3 w-fit mx-auto mb-4">
                <Calculator className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-sans font-semibold text-brand-maroon mb-2">
                Class 9 Maths
              </h3>
              <p className="text-brand-blue text-sm">
                Pre-board preparation with polynomials, coordinate geometry, and statistics.
              </p>
            </div>

            <div className="bg-brand-silver bg-opacity-80 rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors text-center">
              <div className="bg-brand-maroon text-white rounded-lg p-3 w-fit mx-auto mb-4">
                <Calculator className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-sans font-semibold text-brand-maroon mb-2">
                Class 10 Maths
              </h3>
              <p className="text-brand-blue text-sm">
                Board exam focused coaching with trigonometry, probability, and advanced algebra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Method Section */}
      <section className="py-20 bg-brand-silver bg-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">
              Our Teaching Method - 5 Step Learning Process
            </h2>
            <p className="text-xl text-brand-blue max-w-3xl mx-auto">
              Structured approach to mathematics learning that ensures concept clarity and exam success
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <Image
              src="/Gemini_Generated_Image_50q7wy50q7wy50q7.png"
              alt="Structured maths learning process at The Learners Academy"
              width={800}
              height={450}
              className="rounded-lg w-full h-auto mb-8"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="bg-brand-blue text-white rounded-lg p-4 mb-4">
                  <BookOpen className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="font-semibold text-brand-maroon mb-2">Concept</h3>
                <p className="text-brand-blue text-sm">Clear explanation of mathematical concepts with real-world examples</p>
              </div>

              <div className="text-center">
                <div className="bg-brand-maroon text-white rounded-lg p-4 mb-4">
                  <Calculator className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="font-semibold text-brand-maroon mb-2">Practice</h3>
                <p className="text-brand-blue text-sm">Guided practice sessions with step-by-step problem solving</p>
              </div>

              <div className="text-center">
                <div className="bg-brand-blue text-white rounded-lg p-4 mb-4">
                  <CheckCircle className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="font-semibold text-brand-maroon mb-2">Doubts</h3>
                <p className="text-brand-blue text-sm">Individual doubt clearing sessions for personalized support</p>
              </div>

              <div className="text-center">
                <div className="bg-brand-maroon text-white rounded-lg p-4 mb-4">
                  <Award className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="font-semibold text-brand-maroon mb-2">Tests</h3>
                <p className="text-brand-blue text-sm">Regular assessments to track progress and exam preparation</p>
              </div>

              <div className="text-center">
                <div className="bg-brand-blue text-white rounded-lg p-4 mb-4">
                  <Target className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="font-semibold text-brand-maroon mb-2">Exam Strategy</h3>
                <p className="text-brand-blue text-sm">Time management and exam techniques for better performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Join Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-brand-silver bg-opacity-50 rounded-lg p-6">
              <Image
                src="/maths-student-practice-class.jpg.png"
                alt="Student practicing mathematics in tuition class"
                width={600}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-sans font-bold text-brand-maroon mb-6">
                Who Should Join Our Maths Tuition?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-brand-blue">Students who find mathematics challenging and want to build strong foundations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-brand-blue">Students preparing for Class 10 board examinations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-brand-blue">Students who want to improve their problem-solving skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-brand-blue">Students seeking personalized attention and doubt clearing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-brand-blue">Students from CBSE, ICSE, and SSC boards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Benefits Section */}
      <section className="py-20 bg-brand-silver bg-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">
              Results & Benefits
            </h2>
            <p className="text-xl text-brand-blue max-w-3xl mx-auto">
              See the transformation in your child's mathematical abilities and academic performance
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <Image
              src="/maths-academic-improvement.jpg.png"
              alt="Students improving maths scores with structured coaching"
              width={800}
              height={450}
              className="rounded-lg w-full h-auto mb-8"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center">
                <h3 className="text-2xl font-sans font-bold text-brand-maroon mb-6">Before</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-brand-blue">Confusion with mathematical concepts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-brand-blue">Low confidence in problem solving</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-brand-blue">Poor exam performance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-brand-blue">Fear of mathematics</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-sans font-bold text-brand-maroon mb-6">After</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600"></CheckCircle>
                    <span className="text-brand-blue">Clear understanding of concepts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600"></CheckCircle>
                    <span className="text-brand-blue">Improved problem-solving skills</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600"></CheckCircle>
                    <span className="text-brand-blue">Better exam scores (85%+ improvement)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600"></CheckCircle>
                    <span className="text-brand-blue">Confidence in mathematics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Trust Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">
              Trusted by Baner, Aundh & Pashan Families
            </h2>
            <p className="text-xl text-brand-blue max-w-3xl mx-auto">
              Located in the heart of Baner, we serve students from nearby areas with quality mathematics education
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-brand-silver bg-opacity-50 rounded-lg p-6">
              <Image
                src="/tuition-classroom-baner-pune.jpg"
                alt="Classroom environment at The Learners Academy Baner Pune"
                width={600}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div>
              <p className="text-brand-blue mb-6">
                The Learners' Academy has been serving the Baner community for years, helping hundreds of students excel in mathematics. Our convenient location makes us easily accessible for families from Baner, Aundh, Pashan, and Balewadi.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-brand-maroon" />
                  <span className="text-brand-blue">302, Tejas Eternity, Balewadi Phata, Baner, Pune - 411045</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-brand-maroon" />
                  <span className="text-brand-blue">Flexible batch timings to suit your schedule</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-brand-maroon" />
                  <span className="text-brand-blue">Small batch sizes for personalized attention</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-brand-maroon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-8">
            <Image
              src="/Gemini_Generated_Image_hxf7iahxf7iahxf7.png"
              alt="Contact The Learners Academy for maths tuition in Baner"
              width={800}
              height={450}
              className="rounded-lg w-full h-auto"
            />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white mb-6">
            Ready to Transform Your Child's Math Skills?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Join hundreds of students who have improved their mathematics performance at The Learners' Academy
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:8605468382"
              className="bg-white text-brand-maroon px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5 text-brand-maroon" />
              Call: 86054 68382
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-brand-maroon transition-colors font-medium"
            >
              Book Free Demo Class
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              <span>86054 68382</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="h-5 w-5" />
              <span>info@learnersacademy.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Baner, Pune</span>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-brand-silver bg-opacity-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-brand-blue">
              Maths Tuition in Baner – The Learners' Academy
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
        
        {/* FAQ Schema Markup */}
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.thelearnersacademy.in" },
            { "@type": "ListItem", "position": 2, "name": "Maths Tuition Baner", "item": "https://www.thelearnersacademy.in/maths-tuition-baner" }
          ]
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Maths Tuition in Baner, Pune",
          "description": "Expert Mathematics coaching for Class 7-10 CBSE, ICSE and SSC students in Baner, Pune with small batches and personalized attention.",
          "url": "https://www.thelearnersacademy.in/maths-tuition-baner",
          "provider": {
            "@type": "Organization",
            "name": "The Learners' Academy",
            "url": "https://www.thelearnersacademy.in",
            "address": { "@type": "PostalAddress", "addressLocality": "Baner", "addressRegion": "Pune", "addressCountry": "IN" }
          },
          "educationalLevel": "Class 7 to Class 10",
          "teaches": ["Mathematics", "Algebra", "Trigonometry", "Geometry"],
          "inLanguage": "en-IN",
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "onsite",
            "location": { "@type": "Place", "name": "The Learners' Academy", "address": "302, Tejas Eternity, Balewadi Phata, Baner, Pune 411045" }
          }
        })}} />
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
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-brand-maroon flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-brand-maroon flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-brand-blue leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}