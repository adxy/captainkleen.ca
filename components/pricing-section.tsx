"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import { QuoteModal } from "./quote-modal"

const plans = [
  {
    name: "Standard Clean",
    price: 149,
    description: "Perfect for regular maintenance cleaning",
    features: [
      "All rooms dusted & vacuumed",
      "Kitchen surfaces sanitized",
      "Bathrooms deep cleaned",
      "Floors mopped",
      "Trash removal",
      "Beds made & linens tidied",
    ],
    popular: false,
  },
  {
    name: "Deep Clean",
    price: 249,
    description: "Comprehensive cleaning for a fresh start",
    features: [
      "Everything in Standard Clean",
      "Inside appliances cleaned",
      "Baseboards & trim wiped",
      "Light fixtures dusted",
      "Window sills cleaned",
      "Cabinet fronts wiped down",
      "Door handles sanitized",
    ],
    popular: true,
  },
  {
    name: "Move In/Out",
    price: 349,
    description: "Leave it spotless for the next chapter",
    features: [
      "Everything in Deep Clean",
      "Inside all cabinets & drawers",
      "Oven & fridge deep clean",
      "Garage sweep (if applicable)",
      "Wall spot cleaning",
      "Closet cleaning",
      "Final walkthrough included",
    ],
    popular: false,
  },
]

export function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="pricing" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Pricing</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              No hidden fees. No surprises. Just honest pricing for quality cleaning services. Prices shown are starting
              rates for a 2-bedroom home.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular
                    ? "bg-card border-primary shadow-xl shadow-primary/10 scale-105"
                    : "bg-card border-border hover:border-primary/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground ml-2">starting</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80 text-foreground"
                  }`}
                >
                  Get a Quote
                </Button>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Need something custom? We offer tailored cleaning packages for offices, Airbnbs, and special events.{" "}
            <button onClick={() => setIsModalOpen(true)} className="text-primary hover:underline">
              Contact us
            </button>{" "}
            for details.
          </p>
        </div>
      </section>

      <QuoteModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
