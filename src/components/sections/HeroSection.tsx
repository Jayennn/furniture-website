import AboutImage from "@/assets/about-image.png";

export function HeroSection() {
  return (
    <section className="hero-section min-h-screen md:h-screen flex items-center">
      <div className="container flex flex-col lg:flex-row items-center justify-center h-full px-4 sm:px-6 lg:px-0 py-12 md:py-0">
        <h1 className="heading font-normal leading-[130%] sm:leading-[140%] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center">
          Beautiful Furniture <br /> for Your Home
        </h1>
      </div>
    </section>
  );
}
