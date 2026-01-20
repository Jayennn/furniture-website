import AboutImage from "@/assets/about-image.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { TextReveal } from "../common";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function AboutSection() {
  const brandStrengthRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!brandStrengthRef.current) return;

    const cards = brandStrengthRef.current.querySelectorAll(
      "[data-strength-card]",
    );

    gsap.from(cards, {
      opacity: 0,
      y: 50,
      duration: 0.7,
      ease: "power4.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: brandStrengthRef.current,
        start: "top 50%",
        once: true,
      },
    });
  });

  return (
    <section
      className="py-12 sm:py-20 md:py-32 lg:py-48"
      aria-label="About Carpentiére"
    >
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col gap-6 lg:gap-12 xl:flex-row">
          {/* Brand Info */}
          <div className="flex w-full flex-col xl:w-1/2">
            <div className="flex h-auto flex-col justify-center mb-6 space-y-4 lg:mb-0 lg:h-96">
              <TextReveal asChild>
                <h2 className="heading text-4xl tracking-[4%] sm:text-5xl lg:text-6xl">
                  Bethany Furniture
                </h2>
              </TextReveal>
              <TextReveal asChild>
                <p className="paragraph text-sm mb-8 md:text-lg lg:mb-12 lg:text-xl">
                  We are a design studio focused on creating furniture and
                  interior spaces that feel calm, balanced, and timeless.
                </p>
              </TextReveal>
            </div>
            <img
              className="w-full rounded-lg object-cover"
              src={AboutImage}
              alt="Carpentiére design studio workspace showcasing furniture craftsmanship"
              // loading="lazy"
              // decoding="async"
            />
          </div>

          {/* Strength Brand */}
          <div
            ref={brandStrengthRef}
            className="grid w-full grid-cols-2 xl:w-1/2"
          >
            {/* Our Work */}
            <div
              data-strength-card
              className="flex flex-col justify-end gap-4 px-3 py-5 border-0 border-r border-t border-b border-gray-200 sm:gap-6 sm:px-4"
              role="article"
            >
              <h3 className="heading text-lg sm:text-2xl lg:text-3xl">
                Our Work
              </h3>
              <p className="paragraph max-w-sm text-sm sm:text-base lg:text-lg">
                We create furniture that blends design integrity with everyday
                comfort — pieces that feel natural, honest, and enduring.
              </p>
            </div>
            {/* Projects Count */}
            <div
              data-strength-card
              className="flex flex-col justify-end gap-4 px-3 py-5 border-0 border-t border-b border-gray-200 sm:gap-6 sm:px-4"
              role="article"
            >
              <h3 className="heading text-lg sm:text-2xl lg:text-3xl">
                350+ <br /> Projects
              </h3>
              <p className="paragraph max-w-sm text-sm sm:text-base lg:text-lg">
                Collaborating closely with clients to create spaces that truly
                reflect their way of living.
              </p>
            </div>
            {/* Experience 1 */}
            <div
              data-strength-card
              className="flex flex-col justify-end gap-4 px-3 py-5 border-0 border-r border-b border-gray-200 sm:gap-6 sm:px-4"
              role="article"
            >
              <h3 className="heading text-lg sm:text-2xl lg:text-3xl">
                15+ Years <br /> Experience
              </h3>
              <p className="paragraph max-w-sm text-sm sm:text-base lg:text-lg">
                Decades of expertise in crafting timeless furniture that
                transforms spaces and enhances lifestyles.
              </p>
            </div>
            {/* Design Philosophy */}
            <div
              data-strength-card
              className="flex flex-col justify-end gap-4 px-3 py-5 border-0 border-b border-gray-200 sm:gap-6 sm:px-4"
              role="article"
            >
              <h3 className="heading text-lg sm:text-2xl lg:text-3xl">
                Design <br /> Philosophy
              </h3>
              <p className="paragraph max-w-sm text-sm sm:text-base lg:text-lg">
                Sustainable, thoughtful design that prioritizes quality,
                craftsmanship, and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
