import { CheckCircle2, Sparkles, Shield, Clock, Leaf, Users, CreditCard, Phone } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Family-Owned & Operated",
    description: "Not a franchise — a real family that cares about your home as much as you do.",
  },
  {
    icon: Shield,
    title: "Fully Insured & Bonded",
    description: "Complete peace of mind with comprehensive coverage for your property.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "Safe for your kids, pets, and the environment without compromising clean.",
  },
  {
    icon: CheckCircle2,
    title: "Professional Equipment",
    description: "Steam cleaning machines and industry-leading solutions for superior results.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book online 24/7. Same-day service available in most cities.",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "No hidden fees. Get an instant quote and know exactly what you'll pay.",
  },
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            The CaptainKleen difference
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            We&apos;re not just another cleaning company. We&apos;re your neighbors, committed to making Canadian homes
            sparkle with care and integrity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 border border-primary/30">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                <Phone className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Ready to experience the difference?</h3>
                <p className="text-muted-foreground">
                  Call us anytime: <span className="text-foreground font-medium">+1 (250) 317-8568</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">First clean 20% off for new customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
