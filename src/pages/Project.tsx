import projectImage from "../assets/project.png";
import projectImage2 from "../assets/project2.webp";
export default function Project() {
  return (
    <main>
      <section className="min-h-[38rem] sm:min-h-[45rem] md:min-h-[48rem] lg:min-h-[38rem] hero-portofolio flex">
        <div className="flex flex-col justify-center md:flex-col lg:flex-row lg:items-center md:justify-end lg:justify-between container px-4 sm:px-6 lg:px-0 gap-6 md:gap-8 py-0">
          {/* heading */}
          <div className="flex flex-col justify-center items-baseline space-y-3 sm:space-y-4">
            <span className="paragraph text-white text-base sm:text-lg lg:text-xl">
              Furniture & Property
            </span>
            <h1 className="max-w-sm md:max-w-xl heading text-white text-4xl sm:text-5xl lg:text-6xl">
              We design with the future in mind.
            </h1>
          </div>
          {/* Box */}
          <div className="w-full lg:max-w-lg lg:mt-auto flex flex-col justify-center space-y-3 bg-white px-4 sm:px-6 py-6 sm:py-8">
            <h2 className="heading text-xl sm:text-2xl">Lorem Ipsum Dolor.</h2>
            <div className="space-y-6">
              <p className="paragraph text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                quia quidem sunt quod praesentium quibusdam quaerat esse.
              </p>
              <button
                className="paragraph flex w-fit items-center gap-2 text-sm sm:text-base underline underline-offset-4 transition-opacity hover:opacity-70 sm:underline-offset-8"
                aria-label="Contact us"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-18 sm:py-20 md:py-32 lg:py-48">
        <div className="container px-4 sm:px-6 lg:px-0">
          <div className="mb-12 flex flex-col gap-8 sm:gap-12 lg:mb-20 lg:gap-16">
            <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
              <h2 className="heading shrink-0 text-3xl sm:text-4xl lg:text-6xl">
                Portofolio
              </h2>
              <p className="paragraph text-sm sm:text-base md:max-w-lg md:text-lg lg:text-xl">
                More than buildings, we design human experiences. Our studio
                crafts thoughtful environments that connect, inspire, and
                resonate for a lifetime.
              </p>
            </div>
            <hr className="border-gray-200" />
          </div>
          <div className="grid grid-cols-1 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <>
                {/* Item */}
                <article key={index} role="article">
                  {/* Image */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 h-64 sm:h-80 md:h-96 lg:h-full overflow-x-auto md:overflow-hidden">
                    <img
                      className="col-span-2 object-cover w-full h-full"
                      src={projectImage}
                      alt="Functional and elegant design for productive work environments"
                    />
                    <img
                      className="col-span-1 object-cover w-full h-full"
                      src={projectImage2}
                      alt="Functional and elegant design for productive work environments"
                    />
                  </div>
                </article>

                {/* Description */}
                <div className="space-y-4 sm:space-y-5">
                  <div className="flex flex-row items-center justify-between gap-3 sm:gap-4">
                    <h3 className="heading uppercase text-lg sm:text-xl md:text-2xl">
                      Luxury Bedroom
                    </h3>
                    <button
                      className="paragraph flex w-fit items-center gap-2 text-sm sm:text-base md:text-lg uppercase underline underline-offset-4 transition-opacity hover:opacity-70 sm:underline-offset-8 whitespace-nowrap"
                      aria-label="View Detail"
                    >
                      View Detail
                      {/* <ArrowUpRight strokeWidth={2} /> */}
                    </button>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-start md:items-center justify-between gap-4">
                    <div className="flex flex-col space-y-0.5">
                      <p className="paragraph text-xs sm:text-sm tracking-wide text-[#A4A4A4]">
                        Category
                      </p>
                      <p className="paragraph text-base sm:text-lg">
                        Interior Design
                      </p>
                    </div>

                    <p className="max-w-3xl paragraph text-sm sm:text-base md:text-lg text-justify">
                      More than buildings, we design human experiences. Our
                      studio crafts thoughtful environments that connect,
                      inspire, and resonate for a lifetime.
                    </p>
                  </div>
                </div>

                <hr className="last:hidden border-gray-200" />
              </>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
