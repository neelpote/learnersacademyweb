import { createPageMetadata } from '@/lib/metadata'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const metadata = createPageMetadata({
  title: 'Contact The Learners’ Academy in Baner',
  description:
    'Contact The Learners’ Academy in Baner, Pune for Classes 7–12 tuition, Maths and Science coaching, board exam preparation, current batches, and a free demo.',
  path: '/contact',
  imageAlt: 'Contact The Learners’ Academy in Baner, Pune',
})

export default function ContactPage() {
  return (
    <>
    <Header />
    <main className="min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-sans font-bold text-brand-maroon mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-brand-blue max-w-3xl mx-auto">
            Get in touch with us for expert coaching and academic guidance for classes 7-12
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-brand-silver bg-opacity-80 backdrop-blur-sm rounded-lg p-8 border border-brand-blue">
              <h2 className="text-2xl font-sans font-bold text-brand-maroon mb-6">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="font-semibold text-brand-maroon mb-1">Phone</h3>
                    <a href="tel:+918605468382" className="text-brand-blue hover:text-brand-maroon transition-colors">
                      +91-86054 68382
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="text-3xl">✉️</div>
                  <div>
                    <h3 className="font-semibold text-brand-maroon mb-1">Email</h3>
                    <a href="mailto:info@learnersacademy.com" className="text-brand-blue hover:text-brand-maroon transition-colors">
                      info@learnersacademy.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-brand-maroon mb-1">Address</h3>
                    <p className="text-brand-blue">
                      302, Tejas Eternity, Balewadi Phata<br />
                      Baner, Pune - 411045<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🕐</div>
                  <div>
                    <h3 className="font-semibold text-brand-maroon mb-1">Business Hours</h3>
                    <p className="text-brand-blue">
                      Monday - Saturday: 8:00 AM - 8:00 PM<br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-brand-silver bg-opacity-80 backdrop-blur-sm rounded-lg p-4 border border-brand-blue">
              <h2 className="text-xl font-sans font-bold text-brand-maroon mb-4">
                Find Us
              </h2>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.204365811385!2d73.7802709756218!3d18.56482296782019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2becf090221b1%3A0x97e6046e98cf5651!2sTHE%20LEARNERS&#39;%20ACADEMY!5e0!3m2!1sen!2sin!4v1772872998167!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Learners' Academy Location - 302, Tejas Eternity, Balewadi Phata, Baner, Pune"
                  className="w-full h-full"
                ></iframe>
              </div>
              <a 
                href="https://www.google.com/maps/place/THE+LEARNERS'+ACADEMY/@18.5648229,73.7802709,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2becf090221b1:0x97e6046e98cf5651!8m2!3d18.5648229!4d73.7802709!16s%2Fg%2F11y3g5zy0q"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-brand-maroon hover:text-brand-blue transition-colors text-sm font-medium"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-brand-silver bg-opacity-80 backdrop-blur-sm rounded-lg p-8 border border-brand-blue">
            <h2 className="text-2xl font-sans font-bold text-brand-maroon mb-6">
              Book a Free Demo
            </h2>
            
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
              <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value="New Demo Booking from Contact Page" />
              <input type="hidden" name="from_name" value="The Learners Academy Website" />
              
              <div>
                <label htmlFor="studentName" className="block text-sm font-medium text-brand-maroon mb-2">
                  Student Name *
                </label>
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  required
                  className="w-full px-3 py-2 border border-brand-blue rounded-lg bg-white text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-maroon"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-maroon mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="Enter 10-digit mobile number"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  className="w-full px-3 py-2 border border-brand-blue rounded-lg bg-white text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-maroon"
                />
              </div>

              <div>
                <label htmlFor="class" className="block text-sm font-medium text-brand-maroon mb-2">
                  Class *
                </label>
                <select
                  id="class"
                  name="class"
                  required
                  className="w-full px-3 py-2 border border-brand-blue rounded-lg bg-white text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-maroon"
                >
                  <option value="">Select Class</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                </select>
              </div>

              <div>
                <label htmlFor="subjects" className="block text-sm font-medium text-brand-maroon mb-2">
                  Subjects of Interest *
                </label>
                <input
                  type="text"
                  id="subjects"
                  name="subjects"
                  required
                  placeholder="e.g., Mathematics, Physics, Chemistry"
                  className="w-full px-3 py-2 border border-brand-blue rounded-lg bg-white text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-maroon"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-maroon mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Any specific requirements or questions?"
                  className="w-full px-3 py-2 border border-brand-blue rounded-lg bg-white text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-maroon resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-maroon text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all font-medium"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}
