import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FlagshipProduct from "./components/FlagshipProduct";
import IdealClients from "./components/IdealClients";
import WhyMe from "./components/WhyMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0C1B2E]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FlagshipProduct />
      <IdealClients />
      <WhyMe />
      <Contact />
      <Footer />
    </main>
  );
}
