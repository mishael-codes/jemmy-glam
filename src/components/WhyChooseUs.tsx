import { Award, Clock, Heart, Shield } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expert Technicians",
    description: "Certified professionals with years of experience in nail artistry"
  },
  {
    icon: Shield,
    title: "Premium Products",
    description: "We use only the highest quality, salon-grade products"
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Customized services tailored to your unique style and needs"
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Convenient scheduling to fit your busy lifestyle"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-accent/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose It's a Glam?
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the difference of true beauty professionals who care about your satisfaction
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
