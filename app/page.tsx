import "./dental-polish.css";
import DentalMotion from "@/components/ui/DentalMotion";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <DentalMotion><main className="dental-polish min-h-screen bg-surface-dark text-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </main></DentalMotion>
  );
}
