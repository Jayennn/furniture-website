import heroImage from "@/assets/hero-landing.webp";

export function HeroSection() {
  return (
    <section
      className="hero-landing md:bg-white! md:bg-none! flex flex-col justify-center md:justify-between pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-12 sm:pb-16 md:py-12 min-h-[55dvh] lg:min-h-48 landscape:pt-4 landscape:pb-4 landscape:min-h-auto"
      aria-label="Hero section"
    >
      <div className="container px-4 sm:px-6 lg:px-0">
        <div className="mb-16 flex flex-col gap-6 sm:gap-8 lg:flex-row sm:items-start lg:items-center sm:justify-between lg:gap-12">
          <h1 className="text-white md:text-[#1A1A1A] heading w-full lg:max-w-2xl shrink-0 text-4xl sm:text-5xl lg:text-6xl">
            Beautiful Furniture for Your Home
          </h1>
          <p className="max-w-md text-white md:text-[#1A1A1A] paragraph text-sm md:text-lg lg:text-xl">
            Discover our exquisite collection of handcrafted furniture designed
            to bring elegance and comfort to your living space.
          </p>
        </div>
        <img
          src={heroImage}
          alt="Beautiful handcrafted furniture collection for home"
          className="hidden md:block shadow-md max-h-64 w-full rounded-lg object-cover sm:max-h-124 md:h-full "
        />
      </div>
    </section>
  );
}
