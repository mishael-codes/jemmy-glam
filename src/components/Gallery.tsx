const galleryImages = [
  {
    url: "src/assets/work-1.jpeg",
    alt: "Nail art of a anime girl with pink hair and slightly red eyes"
  },
  {
    url: "src/assets/work-2.jpeg",
    alt: "Elegant nail art"
  },
  {
    url: "src/assets/work-3.jpeg",
    alt: "White tips on nude nails"
  },
  {
    url: "src/assets/work-4.jpeg",
    alt: "Bold leopard print design with white/blue tips and nude-coloured nails"
  },
  {
    url: "src/assets/work-5.jpeg",
    alt: "Elegant nude nails with white tips"
  },
  {
    url: "src/assets/work-6.jpeg",
    alt: "Beautiful red-tipped nails"
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Work
          </h2>
          <p className="text-lg text-muted-foreground">
            Browse my portfolio of stunning nail designs and transformations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
