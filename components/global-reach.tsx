import { Card } from "@/components/ui/card"
import { MapPin } from "lucide-react"

const regions = [
  {
    name: "Canada",
    description: "Serving businesses across all provinces with localized expertise and support.",
  },
  {
    name: "United States",
    description: "Coast-to-coast coverage for US-based clients seeking innovative digital solutions.",
  },
  {
    name: "Philippines",
    description: "Local presence in the Philippines for personalized service and regional insights.",
  },
]

export function GlobalReach() {
  return (
    <section id="global-reach" className="border-t border-border bg-secondary/30 py-24 px-4 sm:py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            Global Reach, Local Expertise
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            We proudly serve clients across three countries, bringing world-class web development to your doorstep.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {regions.map((region, index) => (
            <Card
              key={index}
              className="border-border bg-card p-8 text-center transition-all hover:border-accent/50 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">{region.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{region.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
