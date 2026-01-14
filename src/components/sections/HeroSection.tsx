import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import heroImage from "@/assets/hero-image.webp";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function HeroSection() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const paragraphRef = useRef(null);

  useGSAP(() => {
    // Title animation
    const heroSplit = new SplitText(heroRef.current, { type: "chars, words" });

    gsap.from(heroSplit.words, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
        end: "top 20%",
        once: true,
      },
    });

    // Paragraph animation
    const paragraphSplit = new SplitText(paragraphRef.current, {
      type: "lines",
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 30,
      duration: 1,
      ease: "power3.out",
      stagger: 0.06,
      delay: 0.2,
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 80%",
        end: "top 20%",
        once: true,
      },
    });

    gsap.from(imageRef.current, {
      clipPath: "inset(0 0 100% 0)",
      duration: 1.2,
      ease: "power2.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 85%",
        end: "top 35%",
        once: true,
      },
    });

    return () => {
      heroSplit.revert();
      paragraphSplit.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-32 md:min-h-screen md:h-screen flex flex-col justify-between">
      <div className="container px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col xl:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
          <h1 className="heading text-5xl lg:text-6xl shrink-0 max-w-2xl">
            Beautiful Furniture for Your Home
          </h1>
          <p className="paragraph text-base md:text-lg lg:text-xl max-w-lg">
            Discover our exquisite collection of handcrafted furniture designed
            to bring elegance and comfort to your living space.
          </p>
        </div>
        <img
          src={heroImage}
          alt="Beautiful Furniture"
          className="w-full rounded-lg object-cover  h-98  md:h-full max-h-96 md:max-h-175"
        />
      </div>
    </section>
  );
}
