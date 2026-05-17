import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/5 bg-background py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo Wordmark */}
          <div>
            <Link
              href="/"
              className="font-serif text-2xl font-medium tracking-tight text-foreground transition-colors hover:text-primary"
            >
              Boxerhof
            </Link>
            <p className="mt-1 text-sm text-foreground/50">
              Hundepension Bad Oeynhausen
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <Link
              href="/impressum"
              className="text-sm text-foreground/60 transition-colors hover:text-foreground"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-sm text-foreground/60 transition-colors hover:text-foreground"
            >
              Datenschutz
            </Link>
            <Link
              href="/agb"
              className="text-sm text-foreground/60 transition-colors hover:text-foreground"
            >
              AGB
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-foreground/40">
            &copy; {currentYear} Manuela Büscher
          </p>
        </div>
      </div>
    </footer>
  );
}
