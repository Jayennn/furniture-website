import { Navbar } from "@/components/Navbar";
import ctaImage from "@/assets/cta-image.webp";
import {
  AboutSection,
  HeroSection,
  PortofolioSection,
} from "@/components/sections";

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

        {/* Space Section */}

        {/* Call To Action Section */}
        <section className="py-8 sm:py-16 lg:py-20">
          <div className="container px-4 sm:px-6 lg:px-0">
            <div
              className="rounded-lg min-h-80 sm:h-96 lg:h-164 relative bg-cover bg-center bg-no-repeat overflow-hidden flex items-center justify-center"
              style={{ backgroundImage: `url(${ctaImage})` }}
            >
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 sm:px-6 text-center">
                <h2 className="heading uppercase text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white mb-4 lg:mb-6 leading-tight">
                  Make Your Space Feel Complete
                </h2>

                <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-6">
                  <p className="paragraph text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-2xl lg:max-w-3xl">
                    Let us help you create a space defined by comfort, balance,
                    and timeless furniture, designed to belong naturally in your
                    everyday life.
                  </p>
                  <button className="text-white cursor-pointer paragraph text-xs sm:text-sm md:text-base lg:text-lg flex items-center gap-2 uppercase underline decoration-white/50 underline-offset-4 sm:underline-offset-8 hover:decoration-white transition-all">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
