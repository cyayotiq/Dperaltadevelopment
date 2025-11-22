import { Card } from "@/components/ui/card"
import { Globe, Code, Database, Smartphone, Zap, Shield } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom websites built with modern technologies. Responsive, fast, and optimized for search engines.",
  },
  {
    icon: Code,
    title: "Software Engineering",
    description: "Full-stack development solutions tailored to your business needs. Scalable and maintainable code.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Robust database architecture and optimization. Ensuring data integrity and performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Beautiful interfaces that work seamlessly across all devices. User experience at the forefront.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast loading times and smooth interactions. Every millisecond matters.",
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description: "Ongoing support and security updates. Your digital assets protected 24/7.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            Comprehensive Digital Solutions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            From concept to deployment, we handle every aspect of your web development needs with expertise and
            precision.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
