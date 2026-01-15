import heroImage from "@/assets/hero-image.webp";

export function HeroSection() {
  return (
    // FIXME: height issue on md screens
    <section
      className="flex flex-col justify-between pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-12 sm:pb-16 md:py-12 lg:min-h-screen"
      aria-label="Hero section"
    >
      <div className="container px-4 sm:px-6 lg:px-0">
        <div className="mb-8 flex flex-col gap-6 sm:gap-8 lg:flex-row sm:items-center sm:justify-between lg:gap-12">
          <h1 className="heading w-full lg:max-w-2xl shrink-0 text-6xl">
            Beautiful Furniture for Your Home
          </h1>
          <p className="paragraph lg:max-w-lg text-base sm:text-lg lg:text-xl">
            Discover our exquisite collection of handcrafted furniture designed
            to bring elegance and comfort to your living space.
          </p>
        </div>
        <img
          src={heroImage}
          alt="Beautiful handcrafted furniture collection for home"
          className="max-h-64 w-full rounded-lg object-cover sm:max-h-96 md:max-h-full md:h-full"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
