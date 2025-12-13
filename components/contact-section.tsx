import { Mail, Phone, Clock, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Contact Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Get in touch with our team
            </h2>
            <p className="text-lg text-muted-foreground mb-10 text-pretty">
              Have questions? Need a custom quote? Our friendly team is here to help. Reach out and we&apos;ll get back
              to you within 24 hours.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  content: "(888) 555-CLEAN",
                  subtitle: "Mon-Sat, 8am-8pm EST",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "hello@captainkleen.ca",
                  subtitle: "We reply within 24 hours",
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  content: "Mon-Sat: 8am-8pm",
                  subtitle: "Sunday: By appointment",
                },
                {
                  icon: MapPin,
                  title: "Headquarters",
                  content: "123 Maple Street",
                  subtitle: "Toronto, ON M5V 1A1",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{item.title}</h4>
                    <p className="text-foreground">{item.content}</p>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-secondary overflow-hidden">
              <img src="/images/canadian_office.png" alt="Our office" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 p-6 rounded-xl bg-card border border-border shadow-xl">
              <p className="text-lg font-medium text-foreground mb-2">&quot;We treat your home like our own&quot;</p>
              <p className="text-sm text-muted-foreground">— The Peterson Family</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
