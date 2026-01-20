import heroImage from "@/assets/hero-landing.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { TextReveal } from "../common";

export function HeroSection() {
  useGSAP(() => {
    const heroSplit = new SplitText(".hero-heading", { type: "chars, lines" });
    const paragraphSplit = new SplitText(".hero-paragraph", {
      type: "lines",
      mask: "lines",
      linesClass: "line++",
    });

    gsap.from(heroSplit.lines, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
    });

    gsap.from(paragraphSplit.lines, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
      delay: 0.3,
    });

    return () => {
      heroSplit.revert();
      paragraphSplit.revert();
    };
  }, []);

  return (
    <section
      className="flex flex-col justify-center min-h-[26rem] hero-landing pt-32 pb-12 sm:pt-36 sm:pb-16 md:justify-between md:bg-white! md:bg-none! md:pt-40 md:py-12 lg:pt-44 lg:min-h-48"
      aria-label="Hero section"
    >
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col gap-6 mb-16 sm:gap-8 sm:items-start sm:justify-between lg:flex-row lg:items-center lg:gap-12">
          <TextReveal asChild>
            <h1 className="heading hero-heading w-full text-4xl text-white shrink-0 sm:text-5xl md:text-[#1A1A1A] lg:max-w-2xl lg:text-6xl">
              Furniture & Interiors
            </h1>
          </TextReveal>
          <TextReveal asChild>
            <p className="paragraph hero-paragraph max-w-md text-sm text-white sm:text-base md:text-[#1A1A1A] md:text-lg lg:text-xl">
              Crafting timeless furniture collections and interior environments
              that blend artistic vision with sustainable craftsmanship.
            </p>
          </TextReveal>
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
