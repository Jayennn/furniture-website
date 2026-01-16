import { useRef } from "react";
import heroImage from "@/assets/assets.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TextReveal from "../animation/TextReveal";

gsap.registerPlugin(useGSAP);

export function HeroSection() {
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // scale timeline
    const scaleTl = gsap.timeline();

    scaleTl.to(imgRef.current, {
      scale: 1,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "center center",
    });
  });

  return (
    <section
      className="hero-landing md:bg-white! md:bg-none! flex flex-col justify-center md:justify-between pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-12 sm:pb-16 md:py-12 min-h-[55dvh] lg:min-h-48"
      aria-label="Hero section"
    >
      <div className="container px-4 sm:px-6 lg:px-0">
        <div className="mb-16 flex flex-col gap-6 sm:gap-8 lg:flex-row sm:items-center sm:justify-between lg:gap-12">
          <TextReveal>
            <h1 className="text-white md:text-[#1A1A1A] heading w-full lg:max-w-2xl shrink-0 text-6xl">
              Beautiful Furniture for Your Home
            </h1>
          </TextReveal>
          <TextReveal>
            <p className="text-white md:text-[#1A1A1A] paragraph lg:max-w-lg text-lg lg:text-xl">
              Discover our exquisite collection of handcrafted furniture
              designed to bring elegance and comfort to your living space.
            </p>
          </TextReveal>
        </div>
        <img
          ref={imgRef}
          src={heroImage}
          alt="Beautiful handcrafted furniture collection for home"
          className="hidden md:block shadow-md max-h-64 w-full rounded-lg object-cover sm:max-h-124 md:h-full "
          // loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
