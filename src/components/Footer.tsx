import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              It's a Glam
            </h3>
            <p className="text-white/70 text-sm">
              Your premier destination for luxury nail and beauty services in Las Vegas.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#services" className="hover:text-primary transition-colors">Gel Manicure</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Acrylic Nails</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Gel X Extensions</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Pedicure</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Brow Services</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Waxing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Book Now</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:7025509900" className="hover:text-primary transition-colors">
                  (702) 550-9900
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Las Vegas, NV</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@itsaglam.com" className="hover:text-primary transition-colors">
                  info@itsaglam.com
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                {/* <Instagram className="w-4 h-4" /> */}
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                {/* <Facebook className="w-4 h-4" /> */}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-white/50">
          <p>&copy; 2026 Jemmy Glam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
