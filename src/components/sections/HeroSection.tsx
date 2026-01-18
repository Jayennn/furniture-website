import heroImage from "@/assets/hero-landing.webp";

export function HeroSection() {
  return (
    <section
      className="flex flex-col justify-center min-h-[55dvh] pt-32 pb-12 hero-landing sm:pt-36 sm:pb-16 md:justify-between md:bg-white! md:bg-none! md:pt-40 md:py-12 lg:pt-44 lg:min-h-48"
      aria-label="Hero section"
    >
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col gap-6 mb-16 sm:gap-8 sm:items-start sm:justify-between lg:flex-row lg:items-center lg:gap-12">
          <h1 className="heading w-full text-4xl text-white shrink-0 sm:text-5xl md:text-[#1A1A1A] lg:max-w-2xl lg:text-6xl">
            Beautiful Furniture for Your Home
          </h1>
          <p className="paragraph max-w-md text-sm text-white sm:text-base md:text-[#1A1A1A] md:text-lg lg:text-xl">
            Discover our exquisite collection of handcrafted furniture designed
            to bring elegance and comfort to your living space.
          </p>
        </div>
        <img
          src={heroImage}
          alt="Beautiful handcrafted furniture collection for home"
          className="hidden w-full max-h-64 rounded-lg object-cover shadow-md sm:max-h-124 md:block md:h-full"
        />
      </div>
    </section>
  );
}
