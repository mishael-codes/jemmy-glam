import { Phone, MapPin, Clock, Calendar, Loader2 } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

export function Contact() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    setLoading(true);
    if(!formData.name || !formData.phone || !formData.service){
      setErrorMessage("Please fill in all the required fields");
      setLoading(false)
      return;
    }
    // Format the WhatsApp message
    const msg = `Hello Jemmy Glam! I'd like to book an appointment.
      Name: ${formData.name}
      Phone: ${formData.phone}
      Service: ${formData.service}
      Notes: ${formData.message}`;

    setTimeout(() => {
      const encodedMsg = encodeURIComponent(msg);
      // Open WhatsApp in a new tab (using +234 for Nigeria assuming 0702... format)
      window.open(`https://wa.me/2349132123854?text=${encodedMsg}`, '_blank');
      setLoading(false)
    }, 500)
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="fade-up">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Look?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Book your appointment today and experience luxury beauty services that exceed your expectations.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Me</h3>
                    <a href="tel:2349132123854" className="text-lg text-primary hover:underline">
                      +234 913 212 3854
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Hours</h3>
                    <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Sat: 1:00 PM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">College of Nursing, Idiaraba, LUTH, Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="bg-linear-to-br from-primary to-pink-400 rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Book Your Appointment
              </h3>
              <p className="mb-8 text-white/90">
                Fill out the form below or call me directly. I'll get back to you within 24 hours.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm">Full Name <span title="This field is required" className="text-black cursor-pointer">*</span></label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm">Phone Number <span title="This field is required" className="text-black cursor-pointer">*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block mb-2 text-sm">Service <span title="This field is required" className="text-black cursor-pointer">*</span></label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                   
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
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <i className="text-black mb-2">{errorMessage}</i>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 font-semibold disabled:cursor-not-allowed ${
                    loading 
                      ? 'bg-primary text-white scale-[0.98] cursor-not-allowed' 
                      : 'bg-white text-primary hover:bg-white/90 active:scale-[0.98]'
                  }`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Opening WhatsApp...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      Request Appointment via WhatsApp
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
