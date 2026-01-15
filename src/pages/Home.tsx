import {
  AboutSection,
  HeroSection,
  PortofolioSection,
  CtaSection,
} from "@/components/sections";

export default function Home() {
  return (
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
  );
}
