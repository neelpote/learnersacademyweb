'use client'

import React, { useState } from 'react'
import { Check, Star, Crown, Award, ChevronLeft, ChevronRight, Bookmark } from 'lucide-react'

interface PricingSectionProps {
  onBookDemo?: () => void
}

export function PricingSection({ onBookDemo }: PricingSectionProps) {
  const [currentPlan, setCurrentPlan] = useState(1) // 0: Silver, 1: Gold, 2: Diamond

  const plans = [
    {
      name: "Silver",
      icon: Award,
      description: "Basic plan for budget-conscious students",
      features: [
        "Minimum 20 students per batch",
        "Batches held only on Fridays and Saturday",
        "4 hr tutoring per week",
        "Email Support",
        "One test per month",
        "3 final board exam tests"
      ],
      subjects: ["Mathematics", "Physics", "Chemistry"],
      iconColor: "text-gray-600",
      bgColor: "bg-transparent",
      borderColor: "border-gray-300"
    },
    {
      name: "Gold",
      icon: Star,
      description: "Most popular choice for serious students",
      features: [
        "Maximum 10 students per batch",
        "8hr tutoring per week",
        "Extra coaching during summer and winter vacations",
        "7 am to 7 pm WhatsApp Support",
        "Tests every two weeks",
        "5 final board tests"
      ],
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English"],
      iconColor: "text-yellow-600",
      bgColor: "bg-transparent",
      borderColor: "border-yellow-400",
      popular: true
    },
    {
      name: "Diamond",
      icon: Crown,
      description: "Premium experience with personalized attention",
      features: [
        "Maximum 5 students per batch",
        "10hr tutoring per week",
        "Extra coaching for competitive exams",
        "Extra coaching during summer and winter vacations",
        "One on one Doubt solving sessions",
        "24/7 Phone support",
        "Weekly tests",
        "8 final board tests",
        "Monthly PTMs",
        "Personalised feedback sessions and counselling"
      ],
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Additional Languages"],
      iconColor: "text-blue-600",
      bgColor: "bg-transparent",
      borderColor: "border-blue-400"
    }
  ]

  const nextPlan = () => {
    setCurrentPlan((prev) => (prev + 1) % plans.length)
  }

  const prevPlan = () => {
    setCurrentPlan((prev) => (prev - 1 + plans.length) % plans.length)
  }

  return (
    <section id="pricing" className="py-20">
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

        {/* Desktop View - All Plans */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-lg p-6 border-2 ${plan.borderColor} hover:border-brand-maroon transition-all duration-300 h-full flex flex-col ${
                plan.popular ? 'ring-2 ring-brand-maroon ring-opacity-30' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-brand-maroon text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Bookmark className="h-3 w-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4 border-2 ${plan.borderColor}`}>
                  <plan.icon className={`h-8 w-8 ${plan.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-brand-maroon mb-2">{plan.name}</h3>
                <p className="text-brand-blue text-sm mb-4">{plan.description}</p>
              </div>

              <div className="mb-8 flex-grow">
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
                className="w-full btn-primary text-center mt-auto"
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

        {/* Mobile View - Single Plan with Navigation */}
        <div className="md:hidden">
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={prevPlan}
                className="flex items-center gap-2 px-4 py-2 bg-brand-maroon text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
                {plans[(currentPlan - 1 + plans.length) % plans.length].name}
              </button>
              
              <div className="flex gap-2">
                {plans.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentPlan ? 'bg-brand-maroon' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextPlan}
                className="flex items-center gap-2 px-4 py-2 bg-brand-maroon text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                {plans[(currentPlan + 1) % plans.length].name}
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Current Plan Display */}
            <div className="relative rounded-lg p-6 border-2 border-brand-blue min-h-[600px] flex flex-col">
              {plans[currentPlan].popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-brand-maroon text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Bookmark className="h-3 w-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4 border-2 ${plans[currentPlan].borderColor}`}>
                  {React.createElement(plans[currentPlan].icon, { className: `h-8 w-8 ${plans[currentPlan].iconColor}` })}
                </div>
                <h3 className="text-2xl font-bold text-brand-maroon mb-2">{plans[currentPlan].name}</h3>
                <p className="text-brand-blue text-sm mb-4">{plans[currentPlan].description}</p>
              </div>

              <div className="mb-8 flex-grow">
                <h4 className="font-semibold text-brand-maroon mb-3">What's Included:</h4>
                <ul className="space-y-3">
                  {plans[currentPlan].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-brand-blue text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className="w-full btn-primary text-center mt-auto"
                onClick={() => {
                  if (onBookDemo) {
                    onBookDemo()
                  }
                }}
              >
                Choose {plans[currentPlan].name} Plan
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-brand-blue mb-4">
            Need a custom plan? Contact us for personalized pricing.
          </p>
          <p className="text-sm text-muted">
            * All plans include expert teachers and proven methodologies.
          </p>
        </div>
      </div>
    </section>
  )
}