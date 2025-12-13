import { MapPin, ChevronRight } from "lucide-react"

const cities = [
  { name: "Armstrong", province: "BC", available: true },
  { name: "Vernon", province: "BC", available: true },
  { name: "Oyama", province: "BC", available: true },
  { name: "Winfield", province: "BC", available: true },
  { name: "Kelowna", province: "BC", available: true },
  { name: "West Kelowna", province: "BC", available: true },
  { name: "Peachland", province: "BC", available: true },
  { name: "Summerland", province: "BC", available: true },
  { name: "Penticton", province: "BC", available: true },
  { name: "Kaleden", province: "BC", available: true },
  { name: "Okanagan Falls", province: "BC", available: true },
];


export function CitiesSection() {
  return (
    <section id="cities" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Service Areas</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Proudly serving across Canada
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            From coast to coast, Maple Clean Co. brings professional cleaning services to your neighborhood. Find us in
            these 10 Canadian cities.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {cities.map((city, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-card/80 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-primary" />
                <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-semibold text-foreground">{city.name}</h3>
              <p className="text-sm text-muted-foreground">{city.province}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Don&apos;t see your city?{" "}
            <a href="#contact" className="text-primary hover:underline font-medium">
              Let us know
            </a>{" "}
            — we&apos;re always expanding!
          </p>
        </div>
      </div>
    </section>
  )
}
