import { Calendar } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Hero({ onOpenPriceList }: { onOpenPriceList?: () => void }) {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-secondary via-white to-accent/30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="fade-up">
            <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/50 rounded-full border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-accent-foreground">Professional Nail & Beauty Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Elevate Your{" "}
              <span className="bg-linear-to-r from-primary to-pink-400 bg-clip-text text-transparent">
                Beauty
              </span>
              <br />
              Experience
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Indulge in luxury nail care and beauty treatments. I bring your vision to life with precision and personalized care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 animate-pulse"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </a>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onOpenPriceList?.();
                }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary/20 text-foreground rounded-full hover:bg-secondary transition-colors"
              >
                View Price List
              </button>
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
          </ScrollReveal>

          <ScrollReveal animation="fade-in" delay={300}>
            <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <img
                src="hero-1.jpeg"
                alt="Elegant nail design"
                className="rounded-2xl shadow-xl object-cover h-64 w-full"
                loading="lazy"
              />
              <img
                src="hero-2.jpeg"
                alt="Professional manicure"
                className="rounded-2xl shadow-xl object-cover h-64 w-full mt-8"
                loading="lazy"
              />
            </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
