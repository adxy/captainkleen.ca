"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Heart } from "lucide-react"
import { QuoteModal } from "./quote-modal"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-soft-light" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000020_1px,transparent_1px),linear-gradient(to_bottom,#00000020_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 shadow-sm mb-8 hover:bg-secondary/80 transition-colors cursor-default">
              <span className="text-sm font-medium text-foreground/80">🍁 Proudly Canadian, Family-Owned Since 2008</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
              <span className="text-balance">Your home deserves a </span>
              <span className="text-primary">spotless clean</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
              Professional cleaning services delivered with care. We treat every home like our own, because we know how
              much it means to come back to a fresh, clean space.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-lg group"
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary px-8 py-6 text-lg bg-transparent"
                asChild
              >
                <a href="#pricing">View Pricing</a>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Shield, title: "100% Satisfaction", desc: "Guaranteed or re-clean free" },
                { icon: Clock, title: "Flexible Scheduling", desc: "Book when it suits you" },
                { icon: Heart, title: "Eco-Friendly", desc: "Safe products for your family" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <QuoteModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
