'use client'

import { Check, Star, Crown, Award } from 'lucide-react'

interface PricingSectionProps {
  onBookDemo?: () => void
}

export function PricingSection({ onBookDemo }: PricingSectionProps) {
  const plans = [
    {
      name: "Silver",
      icon: Award,
      price: "₹8,000",
      period: "/month",
      description: "Perfect for getting started with quality education",
      features: [
        "Group classes (15-20 students)",
        "Basic study materials",
        "Monthly assessments",
        "Email support",
        "Standard curriculum coverage"
      ],
      subjects: ["Mathematics", "Physics", "Chemistry"],
      color: "border-gray-400",
      bgColor: "bg-transparent",
      iconColor: "text-gray-600",
      buttonStyle: "btn-secondary"
    },
    {
      name: "Gold",
      icon: Star,
      price: "₹12,000",
      period: "/month",
      description: "Most popular choice for serious students",
      features: [
        "Small batch classes (8-12 students)",
        "Premium study materials + practice papers",
        "Weekly assessments + doubt sessions",
        "WhatsApp support",
        "Advanced curriculum + competitive exam prep",
        "Monthly parent-teacher meetings"
      ],
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English"],
      color: "border-yellow-400",
      bgColor: "bg-transparent",
      iconColor: "text-yellow-600",
      buttonStyle: "btn-primary",
      popular: true
    },
    {
      name: "Diamond",
      icon: Crown,
      price: "₹18,000",
      period: "/month",
      description: "Premium experience with personalized attention",
      features: [
        "Mini batch classes (4-6 students)",
        "Complete study package + test series",
        "Daily doubt clearing sessions",
        "24/7 phone + WhatsApp support",
        "Full competitive exam preparation",
        "Weekly parent-teacher meetings",
        "One-on-one mentoring sessions",
        "Career guidance & counseling"
      ],
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Additional Languages"],
      color: "border-blue-400",
      bgColor: "bg-transparent",
      iconColor: "text-blue-600",
      buttonStyle: "btn-primary"
    }
  ]

  return (
    <section id="courses" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">
            Choose Your Learning Plan
          </h2>
          <p className="text-xl text-brand-blue max-w-3xl mx-auto">
            Select the perfect plan that matches your learning goals and budget. 
            All plans include expert teachers and proven methodologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-lg p-8 ${plan.bgColor} border-2 border-brand-blue hover:border-brand-maroon hover:shadow-lg transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-brand-maroon ring-opacity-50 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-maroon text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4`}>
                  <plan.icon className={`h-8 w-8 ${plan.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-brand-maroon mb-2">{plan.name}</h3>
                <p className="text-brand-blue text-sm mb-4">{plan.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-brand-maroon mb-3">Subjects Covered:</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {plan.subjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-brand-blue text-white px-2 py-1 rounded"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-brand-maroon mb-3">What's Included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-brand-blue text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full ${plan.buttonStyle} text-center`}
                onClick={() => {
                  if (onBookDemo) {
                    onBookDemo()
                  }
                }}
              >
                Choose {plan.name} Plan
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-brand-blue mb-4">
            Need a custom plan? Contact us for personalized pricing.
          </p>
          <p className="text-sm text-muted">
            * All prices are per student per month. Additional subjects available on request.
          </p>
        </div>
      </div>
    </section>
  )
}