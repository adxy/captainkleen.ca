import { Users, MapPin, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              A family tradition of cleanliness
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              What started in our small Toronto home in 2008 has grown into a trusted cleaning service across 10
              Canadian cities. We&apos;re the Petersons — a family that believes a clean space is the foundation of a
              happy home.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Every member of our team is trained by us and shares our values: integrity, attention to detail, and
              genuine care for our clients. When you book with Maple Clean Co., you&apos;re not just getting a cleaning
              service — you&apos;re becoming part of our extended family.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "15+", label: "Years in Business" },
                { number: "50K+", label: "Happy Customers" },
                { number: "10", label: "Cities Served" },
                { number: "100%", label: "Canadian Owned" },
              ].map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl bg-secondary overflow-hidden">
                  <img
                    src="/professional-cleaning-team-smiling-wearing-blue-un.jpg"
                    alt="Our professional cleaning team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <Users className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-foreground mb-1">Family Values</h4>
                  <p className="text-sm text-muted-foreground">Built on trust and care</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <MapPin className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-foreground mb-1">Locally Operated</h4>
                  <p className="text-sm text-muted-foreground">Serving Canadian communities</p>
                </div>
                <div className="aspect-[4/5] rounded-2xl bg-secondary overflow-hidden">
                  <img
                    src="/clean-modern-living-room-interior-bright-daylight.jpg"
                    alt="Clean modern living space"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-primary text-primary-foreground shadow-xl">
              <div className="flex items-center gap-3">
                <Award className="w-10 h-10" />
                <div>
                  <div className="font-bold text-lg">Top Rated</div>
                  <div className="text-sm opacity-90">4.9 ★ on Google</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
