import { Navbar } from "./components/Navbar";
import AboutImage from "./assets/about-image.png";
import portofolioImage1 from "./assets/portofolio-image-1.png";
import portofolioImage2 from "./assets/portofolio-image-2.png";
import portofolioImage3 from "./assets/portofolio-image-3.png";
import portofolioImage4 from "./assets/portofolio-image-4.png";
import ctaImage from "./assets/cta-image.jpg";
import { ArrowLeft, ArrowRight } from "lucide-react";

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="hero-section min-h-screen md:h-screen flex items-center">
          <div className="container w-full flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-0 py-12 md:py-0">
            <h1 className="heading font-normal leading-[130%] sm:leading-[140%] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center">
              Beautiful Furniture <br /> for Your Home
            </h1>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 sm:py-20 md:py-32 lg:py-52">
          <div className="container px-4 sm:px-6 lg:px-0">
            <div className="flex flex-col xl:flex-row gap-6 lg:gap-12">
              {/* Brand Info */}
              <div className="flex flex-col w-full xl:w-1/2">
                <div className="flex flex-col justify-center max-w-2xl h-auto lg:h-96 mb-6 lg:mb-0">
                  <h2 className="heading text-2xl sm:text-3xl lg:text-4xl mb-4">
                    Carpentiére
                  </h2>
                  <p className="paragraph text-base sm:text-lg lg:text-xl max-w-4xl mb-8 lg:mb-12">
                    We are a design studio focused on creating furniture and
                    interior spaces that feel calm, balanced, and timeless.
                  </p>
                </div>
                <img
                  className="w-full rounded-lg object-cover"
                  src={AboutImage}
                  alt="About Carpentiére"
                />
              </div>

              {/* Strength Brand */}
              <div className="grid grid-cols-2">
                <div className="border-0 border-r border-t border-b border-gray-200 py-5 px-4 flex flex-col justify-end gap-6 ">
                  <h3 className="heading text-xl sm:text-2xl">Our Work</h3>
                  <p className="paragraph text-base sm:text-lg max-w-sm">
                    We create furniture that blends design integrity with
                    everyday comfort — pieces that feel natural, honest, and
                    enduring.
                  </p>
                </div>
                <div className="border-0 border-t border-b border-gray-200 py-5 px-4 flex flex-col justify-end gap-6 ">
                  <h3 className="heading text-xl sm:text-2xl">
                    350+ <br /> Project
                  </h3>
                  <p className="paragraph text-base sm:text-lg max-w-sm">
                    Collaborating closely with clients to create spaces that
                    truly reflect their way of living.
                  </p>
                </div>
                <div className="border-0 border-r border-b border-gray-200 py-5 px-4 flex flex-col justify-end gap-6 ">
                  <h3 className="heading text-xl sm:text-2xl">
                    350+ <br /> Project
                  </h3>
                  <p className="paragraph text-base sm:text-lg max-w-sm">
                    Collaborating closely with clients to create spaces that
                    truly reflect their way of living.
                  </p>
                </div>
                <div className="border-0 border-b border-gray-200 py-5 px-4 flex flex-col justify-end gap-6">
                  <h3 className="heading text-xl sm:text-2xl">
                    350+ <br /> Project
                  </h3>
                  <p className="paragraph text-base sm:text-lg max-w-sm">
                    Collaborating closely with clients to create spaces that
                    truly reflect their way of living.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-12 sm:py-20 md:py-32 lg:py-52">
          <div className="container px-4 sm:px-6 lg:px-0">
            <div className="flex flex-col gap-8 sm:gap-12 lg:flex-row lg:items-center lg:justify-between mb-12 lg:mb-20 lg:h-128">
              <h2 className="heading text-3xl sm:text-4xl lg:text-5xl shrink-0">
                Portofolio
              </h2>
              <p className="paragraph text-base sm:text-lg lg:text-xl max-w-lg">
                More than buildings, we design human experiences. Our studio
                crafts thoughtful environments that connect, inspire, and
                resonate for a lifetime.
              </p>
            </div>

            {/* Item Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-12 lg:mb-20">
              {/* Portfolio Item 1 */}
              <div className="flex flex-col gap-4">
                <img
                  src={portofolioImage1}
                  alt="Portfolio 1"
                  className="w-full rounded-lg object-cover"
                />
                <div className="flex flex-row items-center justify-between gap-4">
                  <p className="paragraph text-base sm:text-lg uppercase tracking-wide">
                    Lorem ipsum
                  </p>
                  <button className="cursor-pointer paragraph text-base sm:text-lg flex items-center gap-2 uppercase underline decoration-[#3D3029]/50 underline-offset-8 shrink-0">
                    View Project
                  </button>
                </div>
              </div>

              {/* Portfolio Item 2 */}
              <div className="flex flex-col gap-4">
                <img
                  src={portofolioImage2}
                  alt="Portfolio 2"
                  className="w-full rounded-lg object-cover"
                />
                <div className="flex flex-row items-center justify-between gap-4">
                  <p className="paragraph text-base sm:text-lg uppercase tracking-wide">
                    Lorem ipsum
                  </p>
                  <button className="cursor-pointer paragraph text-base sm:text-lg flex items-center gap-2 uppercase underline decoration-[#3D3029]/50 underline-offset-8 shrink-0">
                    View Project
                  </button>
                </div>
              </div>

              {/* Portfolio Item 3 */}
              <div className="flex flex-col gap-4">
                <img
                  src={portofolioImage3}
                  alt="Portfolio 3"
                  className="w-full rounded-lg object-cover"
                />
                <div className="flex flex-row items-center justify-between gap-4">
                  <p className="paragraph text-base sm:text-lg uppercase tracking-wide">
                    Lorem ipsum
                  </p>
                  <button className="cursor-pointer paragraph text-base sm:text-lg flex items-center gap-2 uppercase underline decoration-[#3D3029]/50 underline-offset-8 shrink-0">
                    View Project
                  </button>
                </div>
              </div>
            </div>

            {/* Button Section */}
            <div className="flex justify-center items-center gap-8 sm:gap-12">
              <button className="cursor-pointer p-2 hover:opacity-70 transition">
                <ArrowLeft
                  size={24}
                  strokeWidth={1}
                  className="sm:w-7 sm:h-7"
                />
              </button>
              <button className="cursor-pointer p-2 hover:opacity-70 transition">
                <ArrowRight
                  size={24}
                  strokeWidth={1}
                  className="sm:w-7 sm:h-7"
                />
              </button>
            </div>
          </div>
        </section>

        {/* Space Section */}
        <section className="py-12 sm:py-20 md:py-32 lg:py-52">
          <div className="container px-4 sm:px-6 lg:px-0">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2">
                <h2 className="heading uppercase text-2xl sm:text-3xl lg:text-4xl">
                  Space we shape
                </h2>

                <div className="flex flex-col gap-6 sm:gap-8 mt-6 lg:mt-8">
                  <p className="paragraph text-base sm:text-lg max-w-3xl text-justify">
                    Each space is shaped with intention — where proportion,
                    material, and light come together to create a calm and
                    balanced living environment. Our furniture is designed to
                    belong naturally within a space, enhancing how it feels,
                    moves, and is experienced every day.
                  </p>
                  <button className="cursor-pointer paragraph text-base sm:text-lg flex items-center gap-2 uppercase underline decoration-[#3D3029]/50 underline-offset-8 w-fit hover:opacity-70 transition">
                    View Project
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <img
                  className="w-full rounded-lg object-cover"
                  src={portofolioImage4}
                  alt="Portofolio 4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call To Action Section */}
        <section className="py-8 sm:py-16 lg:py-52 px-4 sm:px-6">
          <div
            className="w-full rounded-lg h-80 sm:h-96 lg:h-164 relative bg-cover bg-center bg-no-repeat overflow-hidden flex items-center justify-center max-w-full lg:max-w-none"
            style={{ backgroundImage: `url(${ctaImage})` }}
          >
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 sm:px-6 text-center">
              <h2 className="heading uppercase text-2xl sm:text-3xl lg:text-5xl text-white mb-4 lg:mb-6 leading-tight">
                Make Your Space Feel Complete
              </h2>

              <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-6">
                <p className="paragraph text-white text-sm sm:text-base lg:text-xl max-w-2xl lg:max-w-3xl">
                  Let us help you create a space defined by comfort, balance,
                  and timeless furniture, designed to belong naturally in your
                  everyday life.
                </p>
                <button className="text-white cursor-pointer paragraph text-xs sm:text-sm lg:text-lg flex items-center gap-2 uppercase underline decoration-white/50 underline-offset-8 hover:decoration-white transition-all">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
