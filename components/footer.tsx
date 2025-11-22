export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent">
              <span className="text-sm font-bold text-accent-foreground">DP</span>
            </div>
            <span className="text-sm font-semibold">Dane Peralta Web Development</span>
          </div>

          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">Serving clients in Canada, USA, and Philippines</p>
        </div>
      </div>
    </footer>
  )
}
