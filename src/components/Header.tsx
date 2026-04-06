import { Phone } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-semibold bg-linear-to-r from-primary to-pink-400 bg-clip-text text-transparent">
              <span className="font-allura text-3xl md:text-4xl mr-1">Jemmy</span> <span className="text-black">Glam</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground/70 hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#gallery" className="text-foreground/70 hover:text-foreground transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <a
            href="tel:7025509900"
            className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </div>
    </header>
  );
}
