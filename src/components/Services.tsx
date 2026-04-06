import { Sparkles, Hand, Scissors, Eye } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const services = [
  {
    icon: Hand,
    title: "Gel Manicure",
    description: "Long-lasting gel polish that stays flawless for weeks. Perfect shine and durability.",
    price: "2000"
  },
  {
    icon: Sparkles,
    title: "Acrylic Nails",
    description: "Strong, beautiful acrylic extensions customized to your desired length and shape.",
    price: "6000"
  },
  {
    icon: Sparkles,
    title: "Gel X Extensions",
    description: "The latest in nail extension technology. Lightweight, natural-looking, and damage-free.",
    price: "2500"
  },
  {
    icon: Hand,
    title: "Pedicure",
    description: "Relaxing spa pedicure with massage, exfoliation, and polish of your choice.",
    price: "2000"
  },
  {
    icon: Eye,
    title: "Brow Services",
    description: "Professional brow shaping and tinting to frame your face perfectly.",
    price: "1000"
  },
  {
    icon: Scissors,
    title: "Waxing",
    description: "Professional waxing services for smooth, hair-free skin that lasts.",
    price: "5000"
  }
];

export function Services({ onOpenPriceList }: { onOpenPriceList?: () => void }) {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/50 rounded-full border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-accent-foreground">My Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Premium Beauty Services
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience excellence with my comprehensive range of professional nail and beauty treatments
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal
                key={index}
                animation="fade-up"
                delay={index * 100}
                className="group bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="text-primary font-semibold">From &#8358;{service.price}</div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 text-center flex justify-center">
          <ScrollReveal animation="fade-up">
            <button
              onClick={(e) => {
                e.preventDefault();
                onOpenPriceList?.();
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-md"
            >
              View Price List
            </button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
