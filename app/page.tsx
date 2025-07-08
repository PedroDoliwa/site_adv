import Header from "@/components/sections/Herader";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Benefits from "@/components/sections/Benefits";
import Footer from "@/components/sections/Fotter";
import Contact from "@/components/sections/Contact";
import Location from "@/components/sections/Location";
import Hero from "@/components/sections/Hero";

export default function LawFirmWebsite() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}
