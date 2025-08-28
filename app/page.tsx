
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";

import Technology from "./components/Technology";
import Testimonials from "./components/Testimonals";
import WhyChooseUs from "./components/WhyChooseUs";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <main>
      
      <Hero/>
      <About/>
      <Services/>
      <WhyChooseUs />
      <Technology />
      <Testimonials />
      <CallToAction/>
      
    </main>
  );
}
