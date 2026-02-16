import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WhyUsSection } from "@/components/why-us-section"
import { BentoGallery } from "@/components/bento-gallery"
import { ReviewsSection } from "@/components/reviews-section"
import { PricingSection } from "@/components/pricing-section"
import { CitiesSection } from "@/components/cities-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ServicesSection } from "@/components/services-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyUsSection />
      <ServicesSection />
      <BentoGallery />
      <ReviewsSection />
      <PricingSection />
      <CitiesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
