import { Button } from "@/components/ui/button"
import { ArrowRight, Code2 } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-16">
      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5">
            <Code2 className="mr-2 h-4 w-4 text-accent" />
            <span className="text-sm text-muted-foreground">Web Development & Software Engineering</span>
          </div>

          <h1 className="mb-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl text-balance">
            Build the web with{" "}
            <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              precision & innovation
            </span>
          </h1>

          <p className="mb-12 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed text-pretty">
            Expert custom website development and software engineering solutions for businesses across Canada, USA, and
            the Philippines. Transform your digital presence with cutting-edge technology.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base">
              <Link href="#contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base border-border hover:bg-secondary bg-transparent"
            >
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>

          <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-8 border-t border-border pt-12 sm:grid-cols-3">
            <div>
              <div className="mb-2 text-3xl font-bold text-foreground">100+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-foreground">3</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
