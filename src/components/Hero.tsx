import { Calendar } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-secondary via-white to-accent/30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/50 rounded-full border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-accent-foreground">Professional Nail & Beauty Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Elevate Your{" "}
              <span className="bg-linear-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                Beauty
              </span>
              <br />
              Experience
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Indulge in luxury nail care and beauty treatments. Our expert technicians bring your vision to life with precision and care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary/20 text-foreground rounded-full hover:bg-secondary transition-colors"
              >
                View Services
              </a>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-2xl md:text-3xl font-semibold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-2xl md:text-3xl font-semibold text-primary">5★</div>
                <div className="text-sm text-muted-foreground">Client Rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1772322586754-34c9e6f5be6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwc2Fsb24lMjBtYW5pY3VyZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzc1MzQ4OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Elegant nail design"
                className="rounded-2xl shadow-xl object-cover h-64 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1772322586785-3a34772cbc61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxuYWlsJTIwc2Fsb24lMjBtYW5pY3VyZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzc1MzQ4OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional manicure"
                className="rounded-2xl shadow-xl object-cover h-64 w-full mt-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
