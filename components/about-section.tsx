import { Users, MapPin, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              More than just a cleaning service
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              We are a family-owned and operated cleaning service, built on strong values, honest work, and long-term
              relationships with our clients. What began as a small, humble, hands-on operation in Kelowna has grown
              into a professional cleaning company serving multiple Canadian communities, without losing the personal
              touch that sets us apart. Since inception in 2008, we have been serving 10 Canadian cities with equal zeal
              and precision. From everyday home cleaning to specialised carpet and upholstery cleaning, CaptainKleen is
              trusted by families, homeowners, tenants, and businesses across Canada for reliable results and
              personalised service. Our immense experience and expertise in the cleaning services arena, and our ability
              to provide superior quality output have given enormous confidence to our clients, who in turn advocates
              our work among their circle.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Every home and workspace we clean is treated with the same care and respect we would give our own. Our
              clients value us not only for our results, but for our reliability, transparency, and commitment to doing
              the job right, every single time.
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
                    src="/images/cleaning_team.png"
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
                    src="/images/canadian_living_room.png"
                    alt="Clean modern living space"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-0 sm:-left-6 p-4 rounded-xl bg-primary text-primary-foreground shadow-xl w-[calc(100%-2rem)] sm:w-auto mx-4 sm:mx-0">
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
