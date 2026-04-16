import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-linear-to-r from-primary to-pink-400 bg-clip-text text-transparent leading-relaxed">
              <span className="font-allura text-3xl mr-1">Jemmy</span> Glam
            </h3>
            <p className="text-white/70 text-sm">
              Your premier destination for luxury nail and beauty services at the College of Nursing, Idiaraba, LUTH, Lagos, Nigeria.
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
                  +234 913 212 3854
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>College of Nursing, Idiaraba, LUTH, Lagos, Nigeria</span>
              </li>
              {/* <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:[EMAIL_ADDRESS]" className="hover:text-primary transition-colors">
                  [EMAIL_ADDRESS]
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-white/50">
          <p>&copy; 2026 <span className="font-allura text-base">Jemmy</span> Glam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
