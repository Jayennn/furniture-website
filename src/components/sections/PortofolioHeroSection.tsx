import TextReveal from "../animation/TextReveal";

export function PortofolioHeroSection() {
  return (
    <section className="min-h-152 sm:min-h-180 md:min-h-192 lg:min-h-200 hero-portofolio flex">
      <div className="flex flex-col md:flex-col lg:flex-row lg:items-center justify-end lg:justify-between container px-4 sm:px-6 lg:px-0 gap-6 md:gap-8 py-0">
        {/* heading */}
        <div className="w-full flex flex-col justify-center items-baseline space-y-3 sm:space-y-4">
          <TextReveal>
            <span className="paragraph text-white text-base sm:text-lg lg:text-xl">
              Furniture & Property
            </span>
          </TextReveal>
          <TextReveal>
            <h1 className="max-w-md md:max-w-xl heading text-white text-4xl sm:text-5xl lg:text-6xl">
              We design with the future in mind.
            </h1>
          </TextReveal>
        </div>
        {/* Box */}
        <div className="w-full lg:max-w-lg lg:mt-auto flex flex-col justify-center space-y-3 bg-white px-4 sm:px-6 py-6 sm:py-8">
          <TextReveal start="top 90%">
            <h2 className="heading text-xl sm:text-2xl">Lorem Ipsum Dolor.</h2>
          </TextReveal>
          <div className="space-y-6">
            <TextReveal start="top 90%">
              <p className="paragraph text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                quia quidem sunt quod praesentium quibusdam quaerat esse.
              </p>
            </TextReveal>
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
  );
}
