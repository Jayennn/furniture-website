import projectImage from "@/assets/project.png";
import projectImage2 from "@/assets/project2.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { Fragment, useRef } from "react";
import TextReveal from "../animation/TextReveal";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function PortofolioGridSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const imageContainers = sectionRef.current.querySelectorAll(
        "[data-image-container]"
      );

      imageContainers.forEach((container) => {
        const images = container.querySelectorAll("[data-image]");

        gsap.from(images, {
          // scale: 1.5,
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power4.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: container,
            start: "top 60%",
            once: true,
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-18 sm:py-20 md:py-32 lg:py-48">
      <div className="container px-4 sm:px-6 lg:px-0">
        <div className="mb-12 flex flex-col gap-8 sm:gap-12 lg:mb-20 lg:gap-16">
          <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
            <h2 className="heading shrink-0 text-3xl sm:text-4xl lg:text-6xl">
              Portofolio
            </h2>
            <p className="paragraph text-sm sm:text-base md:max-w-lg md:text-lg lg:text-xl">
              More than buildings, we design human experiences. Our studio
              crafts thoughtful environments that connect, inspire, and resonate
              for a lifetime.
            </p>
          </div>
          <hr className="border-gray-200" />
        </div>
        <div className="grid grid-cols-1 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <Fragment key={index}>
              {/* Item */}
              <article role="article">
                {/* Image */}
                <div
                  data-image-container
                  className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 h-64 sm:h-80 md:h-96 lg:h-full overflow-x-auto md:overflow-hidden"
                >
                  <div className="col-span-2 overflow-hidden">
                    <img
                      data-image
                      className="object-cover w-full h-full"
                      src={projectImage}
                      alt="Functional and elegant design for productive work environments"
                    />
                  </div>
                  <img
                    data-image
                    className="col-span-1 object-cover w-full h-full"
                    src={projectImage2}
                    alt="Functional and elegant design for productive work environments"
                  />
                </div>
              </article>

              {/* Description */}
              <div className="space-y-4 sm:space-y-5">
                <div className="flex flex-row items-center justify-between gap-3 sm:gap-4">
                  <TextReveal start="top 90%">
                    <h3 className="heading uppercase text-lg sm:text-xl md:text-2xl">
                      Luxury Bedroom
                    </h3>
                  </TextReveal>
                  <button
                    className="paragraph inline-flex w-fit items-center justify-center gap-2 text-sm sm:text-base uppercase transition-all duration-300 whitespace-nowrap hover:bg-black hover:text-white"
                    aria-label="View Detail"
                  >
                    View Detail
                    <ArrowUpRight strokeWidth={1} className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-start md:items-center justify-between gap-4">
                  <div className="flex flex-col space-y-0.5">
                    <p className="paragraph text-xs sm:text-sm tracking-wide text-[#A4A4A4]">
                      Category
                    </p>
                    <p className="paragraph text-base sm:text-lg">
                      Interior Design
                    </p>
                  </div>

                  <TextReveal start="top 90%">
                    <p className="max-w-3xl paragraph text-sm sm:text-base md:text-lg text-justify">
                      More than buildings, we design human experiences. Our
                      studio crafts thoughtful environments that connect,
                      inspire, and resonate for a lifetime.
                    </p>
                  </TextReveal>
                </div>
              </div>

              <hr className="last:hidden border-gray-200" />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
