import { Phone, MapPin, Clock, Calendar } from "lucide-react";
import React = require("react");

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Look?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your appointment today and experience luxury beauty services that exceed your expectations.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <a href="tel:7025509900" className="text-lg text-primary hover:underline">
                    (702) 550-9900
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Hours</h3>
                  <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-muted-foreground">Sun: 10:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">Las Vegas, NV</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-pink-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Book Your Appointment
            </h3>
            <p className="mb-8 text-white/90">
              Fill out the form below or call us directly. We'll get back to you within 24 hours.
            </p>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-sm">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="(702) 555-0000"
                />
              </div>

              <div>
                <label htmlFor="service" className="block mb-2 text-sm">Service</label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="" className="text-foreground">Select a service</option>
                  <option value="gel-manicure" className="text-foreground">Gel Manicure</option>
                  <option value="acrylic" className="text-foreground">Acrylic Nails</option>
                  <option value="gel-x" className="text-foreground">Gel X Extensions</option>
                  <option value="pedicure" className="text-foreground">Pedicure</option>
                  <option value="brows" className="text-foreground">Brow Services</option>
                  <option value="waxing" className="text-foreground">Waxing</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm">Additional Notes</label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  placeholder="Any special requests or questions?"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-white text-primary rounded-full hover:bg-white/90 transition-colors flex items-center justify-center gap-2 font-semibold"
              >
                <Calendar className="w-5 h-5" />
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
