import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent">
              <span className="text-lg font-bold text-accent-foreground">DP</span>
            </div>
            <span className="hidden text-lg font-semibold sm:inline-block">Dane Peralta Development</span>
          </Link>

          <nav className="hidden items-center space-x-6 md:flex">
            <Link href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Services
            </Link>
            <Link
              href="#global-reach"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Global Reach
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </Link>
          </nav>

          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
