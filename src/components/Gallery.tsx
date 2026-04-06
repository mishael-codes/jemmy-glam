const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1772322586754-34c9e6f5be6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwc2Fsb24lMjBtYW5pY3VyZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzc1MzQ4OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "French manicure with glitter accents"
  },
  {
    url: "https://images.unsplash.com/photo-1772322586634-9867476143b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxuYWlsJTIwc2Fsb24lMjBtYW5pY3VyZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzc1MzQ4OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Blue almond-shaped nails with silver tips"
  },
  {
    url: "https://images.unsplash.com/photo-1772322586785-3a34772cbc61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxuYWlsJTIwc2Fsb24lMjBtYW5pY3VyZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzc1MzQ4OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "White nails with purple marbled tips"
  },
  {
    url: "https://images.unsplash.com/photo-1772322586702-73125782bd99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxuYWlsJTIwc2Fsb24lMjBtYW5pY3VyZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzc1MzQ4OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Blue and white ombre nails"
  },
  {
    url: "https://images.unsplash.com/photo-1659391542239-9648f307c0b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxuYWlsJTIwc2Fsb24lMjBtYW5pY3VyZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzc1MzQ4OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Elegant nail art"
  },
  {
    url: "https://images.unsplash.com/photo-1746607242420-12fc2604775d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8bmFpbCUyMHNhbG9uJTIwbWFuaWN1cmUlMjBlbGVnYW50fGVufDF8fHx8MTc3NTM0ODk4OHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Beautiful ombre nails"
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground">
            Browse our portfolio of stunning nail designs and transformations
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
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
