"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { QuoteModal } from "./quote-modal"
import { Sparkles, Home, Sofa, Grid3X3, Building2, Info } from "lucide-react"

// Pricing data extracted from Markate booking widget
const pricingData = {
  residentialCarpet: {
    title: "Residential Carpet Cleaning",
    icon: Home,
    note: "Minimum Call Out Fee: $120",
    items: [
      {
        title: "Regular Room",
        description: "Up to 150 sq ft (an average sized bedroom) standard steam cleaning.",
        price: 60,
        unit: "each",
      },
      {
        title: "Medium Sized Room",
        description: "150 to 250 sq ft room. Best suited to small living rooms or master bedrooms.",
        price: 90,
        unit: "each",
      },
      {
        title: "Large Room",
        description: "250 to 350 sq ft. Best suited for rec rooms, living room / dining room combo or large living rooms.",
        price: 120,
        unit: "each",
      },
      {
        title: "Stairs",
        description: "A standard set of stairs (13 to 16 steps) with landing included.",
        price: 60,
        unit: "each",
      },
      {
        title: "Average Hallway",
        description: "Best suited for average sized homes.",
        price: 40,
        unit: "each",
      },
      {
        title: "Walk-In Closet",
        description: "$20 - $40 dependent on size.",
        price: 20,
        unit: "each",
        priceNote: "starting at",
      },
      {
        title: "Area Rug Steam Cleaning",
        description: "$1 per sq ft. Example: 8x10 = $80.",
        price: 40,
        unit: "each",
        priceNote: "starting at",
      },
    ],
  },
  upholstery: {
    title: "Upholstery Steam Cleaning",
    icon: Sofa,
    note: "Get a quote for final price.",
    items: [
      {
        title: "Accent Chair",
        description: "Professional steam cleaning for accent chairs.",
        price: 50,
        unit: "each",
      },
      {
        title: "Upholstered Dining Chair (Back & Bottom)",
        description: "Complete cleaning for dining chairs with upholstered back and seat.",
        price: 20,
        unit: "each",
      },
      {
        title: "Upholstered Dining Chair (Bottom Only)",
        description: "Seat cushion cleaning only.",
        price: 15,
        unit: "each",
      },
      {
        title: "Rocker Recliner",
        description: "Deep cleaning for rocker recliners.",
        price: 70,
        unit: "each",
      },
      {
        title: "Loveseat",
        description: "2 seats. Add $15 per removable cushion.",
        price: 120,
        unit: "each",
      },
      {
        title: "3 Seat Sofa",
        description: "Add $15 per removable cushion.",
        price: 150,
        unit: "each",
      },
      {
        title: "4 Seat Couch",
        description: "Add $15 per removable cushion.",
        price: 180,
        unit: "each",
      },
      {
        title: "5 Seat Couch (or Sectional)",
        description: "Add $15 per removable cushion.",
        price: 210,
        unit: "each",
      },
      {
        title: "6 Seat Sectional",
        description: "Add $15 per removable cushion. Specialty materials may vary.",
        price: 240,
        unit: "each",
      },
      {
        title: "Chaise",
        description: "Professional chaise lounge cleaning.",
        price: 120,
        unit: "each",
      },
      {
        title: "Ottoman",
        description: "Ottoman steam cleaning service.",
        price: 30,
        unit: "each",
      },
      {
        title: "Single/Double Mattress",
        description: "Deep steam cleaning for mattresses.",
        price: 60,
        unit: "each",
      },
      {
        title: "Queen/King Mattress",
        description: "Deep steam cleaning for larger mattresses.",
        price: 99,
        unit: "each",
      },
      {
        title: "Outdoor Cushion",
        description: "$20 to $30 dependent on size.",
        price: 20,
        unit: "each",
        priceNote: "starting at",
      },
      {
        title: "Removable Couch Cushion",
        description: "Individual cushion cleaning.",
        price: 15,
        unit: "each",
      },
    ],
  },
  tileAndGrout: {
    title: "Tile & Grout Cleaning",
    icon: Grid3X3,
    note: "Get a quote for final price.",
    items: [
      {
        title: "Residential Tile & Grout Cleaning",
        description: "Restore your tile and grout to its original beauty with our truck-mounted steam cleaning machine, power-scrubber, and industry leading cleaning solution.",
        price: 1,
        unit: "sq. ft.",
      },
    ],
  },
  commercial: {
    title: "Commercial Cleaning",
    icon: Building2,
    note: "Contact for On-Site Quoting",
    items: [
      {
        title: "Carpet Cleaning",
        description: "Professional commercial carpet cleaning services.",
        price: null,
        unit: null,
        contactForQuote: true,
      },
      {
        title: "Tile & Grout Cleaning",
        description: "Commercial-grade tile and grout restoration.",
        price: null,
        unit: null,
        contactForQuote: true,
      },
      {
        title: "Janitorial Services",
        description: "Comprehensive janitorial solutions for your business.",
        price: null,
        unit: null,
        contactForQuote: true,
      },
    ],
  },
}

const categories = [
  { key: "residentialCarpet", ...pricingData.residentialCarpet },
  { key: "upholstery", ...pricingData.upholstery },
  { key: "tileAndGrout", ...pricingData.tileAndGrout },
  { key: "commercial", ...pricingData.commercial },
]

export function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("residentialCarpet")

  const currentCategory = categories.find((c) => c.key === activeCategory)!

  return (
    <>
      <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              Transparent Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Professional Cleaning at{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                Honest Prices
              </span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              No hidden fees. Browse our complete service catalog with upfront pricing for carpet, upholstery, tile, and commercial cleaning.
            </p>
          </div>


          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === category.key
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-card border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.title}</span>
                  <span className="sm:hidden">{category.title.split(" ")[0]}</span>
                </button>
              )
            })}
          </div>

          {/* Pricing Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {currentCategory.items.map((item, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Price Badge */}
                <div className="absolute -top-3 -right-3">
                  {false ? (
                    <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs font-bold shadow-lg">
                      Contact Us
                    </div>
                  ) : (
                    <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm font-bold shadow-lg">
                      ${item.price}
                      <span className="text-xs opacity-80">/{item.unit}</span>
                    </div>
                  )}
                </div>

                <div className="pr-8">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Ready to get started?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Get a personalized quote for your cleaning needs
                </p>
              </div>
              <Button
                onClick={() => setIsModalOpen(true)}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 whitespace-nowrap"
              >
                Get a Free Quote
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-xl bg-card/50 border border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Phone:</span> 250-212-5430
              </p>
            </div>
            <div className="p-4 rounded-xl bg-card/50 border border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Email:</span> kelownaproclean@gmail.com
              </p>
            </div>
            <div className="p-4 rounded-xl bg-card/50 border border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Service Area:</span> Kelowna & Surrounding
              </p>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
