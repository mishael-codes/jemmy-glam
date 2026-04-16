import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PriceListModal } from "./components/PriceListModal";

export default function App() {
  const [isPriceListOpen, setIsPriceListOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <Hero onOpenPriceList={() => setIsPriceListOpen(true)} />
        <Services onOpenPriceList={() => setIsPriceListOpen(true)} />
        <Gallery />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />

      <PriceListModal 
        isOpen={isPriceListOpen} 
        onClose={() => setIsPriceListOpen(false)} 
      />
    </div>
  );
}