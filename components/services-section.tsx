import { Sofa, Layers, Scan, Bed, Armchair, Building2 } from "lucide-react"

const services = [
  {
    icon: Sofa,
    title: "Upholstery Cleaning",
    description:
      "Your upholstery is one of the most used and loved parts of your home and it can also collect dust, spills, odours and unseen allergens over time. CaptainKleen provides specialist upholstery cleaning for sofas, armchairs, sectionals, lounges and fabric furnishings using safe, non-toxic products that are gentle on fibres but tough on dirt. Our process lifts stains and refreshes fabrics while preserving colour and texture.",
  },
  {
    icon: Layers,
    title: "Carpet Cleaning",
    description:
      "Carpets add warmth and style to your home, but daily foot traffic, pets and accidental spills can leave them looking tired and tired sooner than you’d like. At CaptainKleen, our carpet cleaning services go beyond surface vacuuming to extract deep-embedded dirt, allergens and odours. We use advanced cleaning systems with child- and pet-safe solutions that ensure a thorough refresh without harsh chemical residues.",
  },
  {
    icon: Scan,
    title: "Rug Cleaning",
    description:
      "Area rugs and runners can be a focal point in your home, but they’re also magnets for dust, pet hair, spills and microscopic particles that settle deep into fibres. CaptainKleen offers comprehensive rug cleaning for all types of rugs — from everyday synthetics to delicate, patterned pieces, using techniques that gently yet effectively remove debris and restore brightness. With our eco-friendly care, your rugs will look fresher and feel softer.",
  },
  {
    icon: Bed,
    title: "Mattress Cleaning",
    description:
      "A clean mattress isn’t just about appearance; it’s about health and hygiene. Over time, mattresses can harbour allergens, skin cells, dust mites and odours that affect sleep quality. CaptainKleen’s mattress cleaning service lifts deeply embedded particles and refreshes your sleeping surface with safe, thorough cleaning methods that help create a healthier bed environment. Perfect for homes with children, pets or allergy sensitivities.",
  },
  {
    icon: Armchair,
    title: "Chair Cleaning",
    description:
      "Everyday life can leave dining chairs, office chairs and accent seating looking less than their best. CaptainKleen’s chair cleaning services tackle stains, spills and build-up on all styles of upholstered chairs with effective, fabric-safe techniques that lift away dirt and refresh your seating. Whether it’s your home dining set or favourite reading chair, we treat each piece with the same meticulous care families expect.",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description:
      "A clean business environment speaks volumes about your professionalism. CaptainKleen provides reliable commercial cleaning services designed to meet the demands of offices, retail spaces, clinics and commercial facilities. Our services include commercial carpet cleaning, commercial-grade tile and grout restoration, and comprehensive janitorial services that keep your workplace hygienic, presentable and welcoming.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/20 -skew-y-3 transform origin-top-left scale-110" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Speciality</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            What We Clean
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            At CaptainKleen, we specialise in professionally cleaning the surfaces that matter most in your home — from
            soft upholstery to treasured rugs and mattresses. Our expert team uses advanced techniques and eco-friendly
            solutions to remove deep-seated dirt, stains and allergens, leaving your spaces genuinely fresh and
            revitalised.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
