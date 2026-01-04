import { Navbar } from "./components/Navbar";
import AboutImage from "./assets/about-image.png";
import portofolioImage1 from "./assets/portofolio-image-1.png";
import portofolioImage2 from "./assets/portofolio-image-2.png";
import portofolioImage3 from "./assets/portofolio-image-3.png";

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="hero-section h-screen">
          <div className="container flex flex-col lg:flex-row items-center justify-center h-full px-6 lg:px-0">
            <h1 className="heading font-normal leading-[140%] text-6xl text-white text-center">
              Beautiful Furniture <br /> for Your Home
            </h1>
          </div>
        </section>

        {/* About Section */}
        <section className="py-52">
          <div className="container">
            <div className="flex gap-6">
              {/* Brand Info */}
              <div className="flex flex-col">
                <div className="flex flex-col justify-center max-w-2xl h-96">
                  <h2 className="heading text-4xl mb-4">Carpentiére</h2>
                  <p className="paragraph text-xl max-w-4xl mb-12">
                    We are a design studio focused on creating furniture and
                    interior spaces that feel calm, balanced, and timeless.
                  </p>
                </div>
                <img
                  className="w-full max-w-4xl rounded-lg object-cover"
                  src={AboutImage}
                  alt="About Carpentiére"
                />
              </div>

              {/* Strength Brand */}
              <div className="grid grid-cols-2">
                <div className="border-0 border-r border-t border-b border-gray-200 py-5 px-4 flex flex-col justify-end gap-6 ">
                  <h3 className="heading text-3xl">Our Work</h3>
                  <p className="paragraph text-lg max-w-sm">
                    We create furniture that blends design integrity with
                    everyday comfort — pieces that feel natural, honest, and
                    enduring.
                  </p>
                </div>
                <div className="border-0 border-t border-b border-gray-200 py-5 px-4 flex flex-col justify-end gap-6 ">
                  <h3 className="heading text-3xl">
                    350+ <br /> Project
                  </h3>
                  <p className="paragraph text-lg max-w-sm">
                    Collaborating closely with clients to create spaces that
                    truly reflect their way of living.
                  </p>
                </div>
                <div className="border-0 border-r border-b border-gray-200 py-5 px-4 flex flex-col justify-end gap-6 ">
                  <h3 className="heading text-3xl">
                    350+ <br /> Project
                  </h3>
                  <p className="paragraph text-lg max-w-sm">
                    Collaborating closely with clients to create spaces that
                    truly reflect their way of living.
                  </p>
                </div>
                <div className="border-0 border-b border-gray-200 py-5 px-4 flex flex-col justify-end gap-6">
                  <h3 className="heading text-3xl">
                    350+ <br /> Project
                  </h3>
                  <p className="paragraph text-lg max-w-sm">
                    Collaborating closely with clients to create spaces that
                    truly reflect their way of living.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-52">
          <div className="container">
            <div className="flex items-center justify-between h-128">
              <h2 className="heading text-5xl">Portofolio</h2>
              <p className="paragraph text-xl max-w-lg">
                More than buildings, we design human experiences. Our studio
                crafts thoughtful environments that connect, inspire, and
                resonate for a lifetime.
              </p>
            </div>

            <hr className="absolute h-px border-gray-200 my-28" />
            {/* <div className="">
            </div> */}

            <div className="grid grid-cols-3 gap-4">
              {/* Portfolio items can be added here in the future */}
              <div className="flex flex-col gap-4">
                <img src={portofolioImage1} alt="Portfolio 1" />
                <div className="flex items-center justify-between">
                  <p className="paragraph uppercase tracking-wide">
                    Lorem ipsum
                  </p>
                  <span className="paragraph flex items-center gap-2 uppercase underline underline-offset-8">
                    View Project
                    {/* <ArrowUpRight size={24} /> */}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <img src={portofolioImage2} alt="Portfolio 2" />
                <div className="flex items-center justify-between">
                  <p className="paragraph uppercase tracking-wide">
                    Lorem ipsum
                  </p>
                  <span className="paragraph flex items-center gap-2 uppercase underline underline-offset-8">
                    View Project
                    {/* <ArrowUpRight size={24} /> */}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <img src={portofolioImage3} alt="Portfolio 3" />
                <div className="flex items-center justify-between">
                  <p className="paragraph uppercase tracking-wide">
                    Lorem ipsum
                  </p>
                  <span className="paragraph flex items-center gap-2 uppercase underline underline-offset-8">
                    View Project
                    {/* <ArrowUpRight size={24} /> */}
                  </span>
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
