import { CheckCircle2, Sparkles, Shield, Clock, Leaf, Users, CreditCard, Phone } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Family-Owned & Personally Invested",
    description:
      "As a family-run business, we take pride in every home and workspace we care for. Our reputation matters, and we focus on building long-term relationships with our clients.",
  },
  {
    icon: Users,
    title: "Professional, Trained Team",
    description:
      "Our cleaners are skilled, experienced, and fully trained in the latest cleaning techniques. Equipped with professional tools and knowledge, they ensure every service is delivered consistently.",
  },
  {
    icon: Shield,
    title: "Clean with Confidence - Fully Insured & Bonded",
    description:
      "All our services are fully insured and bonded, giving you complete peace of mind. Whether it’s your home, office, or treasured belongings, everything is protected.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Cleaning Products",
    description:
      "We prioritise both cleanliness and the health of your home. That’s why we use eco-friendly, non-toxic cleaning products that are safe for children, pets, and sensitive surfaces.",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "No hidden fees, no surprises — just clear, honest pricing for every service.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "We provide flexible scheduling options to fit your lifestyle and business needs, including recurring services, one-time deep cleans, and emergency appointments.",
  },
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            The CaptainKleen difference
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            At CaptainKleen, we don’t just clean — we elevate the spaces you live and work in. Our family-run team
            brings professionalism, trust, and a personal touch to every service, ensuring your home or office shines
            with care and precision. Here’s why Canadians choose CaptainKleen:
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
