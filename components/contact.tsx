import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            Let's Build Something Great
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Ready to start your project? Get in touch with us today and let's discuss how we can bring your vision to
            life.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
          <Card className="border-border bg-card p-8 text-center">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
              <Phone className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mb-3 text-lg font-semibold">Phone</h3>
            <a href="tel:+639150656260" className="text-muted-foreground transition-colors hover:text-foreground">
              +63 915 065 6260
            </a>
          </Card>

          <Card className="border-border bg-card p-8 text-center">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
              <MapPin className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mb-3 text-lg font-semibold">Address</h3>
            <address className="text-muted-foreground not-italic leading-relaxed">
              9 Stalla Maris Ave.
              <br />
              Maybunga, Pasig City
              <br />
              Philippines
            </address>
          </Card>

          <Card className="border-border bg-card p-8 text-center">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
              <Mail className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mb-3 text-lg font-semibold">Email</h3>
            <a
              href="mailto:dperaltadevelopement@gmail.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              dperaltadevelopement@gmail.com
            </a>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="tel:+639150656260">Call Now</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
