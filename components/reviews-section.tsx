import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Sarah Mitchell",
    location: "Toronto, ON",
    rating: 5,
    text: "CaptainKleen transformed our home! As a busy mom of three, I never thought I'd find a cleaning service that meets my standards. They're thorough, punctual, and incredibly professional.",
    image: "/images/canadian_woman_portrait.png",
  },
  {
    name: "David Chen",
    location: "Vancouver, BC",
    rating: 5,
    text: "We've tried several cleaning services for our office, but CaptainKleen is by far the best. The family-owned touch really shows in their attention to detail and customer care.",
    image: "/images/12.jpeg",
  },
  {
    name: "Emily Thompson",
    location: "Calgary, AB",
    rating: 5,
    text: "I was hesitant about hiring cleaners, but the team made me feel completely at ease. They treat my home like their own. Highly recommend to anyone in Calgary!",
    image: "/images/13.jpeg",
  },
  {
    name: "Michael Roberts",
    location: "Ottawa, ON",
    rating: 5,
    text: "Outstanding service! They deep cleaned our rental property and it looked brand new. The tenants were thrilled. Worth every penny for the premium package.",
    image: "/images/canadian_man_portrait.png",
  },
  {
    name: "Jennifer Walsh",
    location: "Montreal, QC",
    rating: 5,
    text: "The eco-friendly products they use are a huge plus for our family. No harsh chemical smells, just a fresh, clean home. They've been cleaning for us for over a year now.",
    image: "/images/14.jpeg",
  },
  {
    name: "Robert Kim",
    location: "Edmonton, AB",
    rating: 5,
    text: "Punctual, professional, and meticulous. The team always goes above and beyond. It's clear this family takes pride in their work. Best cleaning service in Edmonton!",
    image: "/images/canadian_woman_portrait.png",
  },
]

export function ReviewsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wide uppercase text-sm">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what families and businesses across Canada have to say about our
            service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-primary/20 mb-3" />

              <p className="text-muted-foreground mb-6 leading-relaxed">"{review.text}"</p>

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img
                  src={review.image || "/placeholder.svg"}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-card border border-border rounded-2xl px-8 py-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">4.9</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">2,500+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">15+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
