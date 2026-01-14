import { Navbar } from "@/components/Navbar";
import {
  AboutSection,
  HeroSection,
  PortofolioSection,
  CtaSection,
} from "@/components/sections";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Portfolio Section */}
        <PortofolioSection />

        {/* Call To Action Section */}
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
