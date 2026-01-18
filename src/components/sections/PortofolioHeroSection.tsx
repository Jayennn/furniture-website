export function PortofolioHeroSection() {
  return (
    <section className="flex min-h-152 hero-portofolio sm:min-h-180 md:min-h-192 lg:min-h-200">
      <div className="flex flex-col justify-end gap-6 py-0 container px-4 sm:px-6 sm:gap-6 md:flex-col md:gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* heading */}
        <div className="w-full flex flex-col justify-center items-baseline space-y-3 sm:space-y-4">
          <span className="paragraph text-base text-white sm:text-lg lg:text-xl">
            Furniture & Property
          </span>
          <h1 className="heading max-w-md text-4xl text-white sm:text-5xl md:max-w-xl lg:text-6xl">
            We design with the future in mind.
          </h1>
        </div>
        {/* Box */}
        <div className="w-full flex flex-col justify-center space-y-3 px-4 py-6 bg-white sm:px-6 sm:py-8 lg:max-w-lg lg:mt-auto">
          <h2 className="heading text-xl sm:text-2xl">Lorem Ipsum Dolor.</h2>
          <div className="space-y-6">
            <p className="paragraph text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              quia quidem sunt quod praesentium quibusdam quaerat esse.
            </p>
            <button
              className="paragraph flex w-fit items-center gap-2 text-sm transition-opacity underline underline-offset-4 hover:opacity-70 sm:text-base sm:underline-offset-8"
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
