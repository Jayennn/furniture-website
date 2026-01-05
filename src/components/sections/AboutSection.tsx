import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import AboutImage from "@/assets/about-image.webp";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function AboutSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const titleSplit = new SplitText(titleRef.current, {
      type: "chars, words",
    });
    const paragraphSplit = new SplitText(subtitleRef.current, {
      type: "lines",
    });

    // Title animation
    gsap.from(titleSplit.chars, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: "power3.out",
      stagger: 0.06,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "top 20%",
        once: true,
      },
    });

    // Subtitle animation
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 0.2,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "top 20%",
        once: true,
      },
    });

    // Image animation - scale and fade in
    gsap.from(imageRef.current, {
      opacity: 0,
      clipPath: "inset(0 0 100% 0)",
      duration: 1.2,
      ease: "power2.out",
      delay: 0.4,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 85%",
        end: "top 25%",
        once: true,
      },
    });

    // Grid items animation - staggered fade and slide
    const gridItems = gridRef.current?.querySelectorAll("div[data-grid-item]");
    if (gridItems) {
      gsap.from(gridItems, {
        opacity: 0,
        yPercent: 30,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.3,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          end: "top 35%",
          once: true,
        },
      });
    }

    return () => {
      titleSplit.revert();
      paragraphSplit.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section className="py-12 sm:py-20 md:py-32 lg:py-48">
      <div className="container px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col xl:flex-row gap-6 lg:gap-12">
          {/* Brand Info */}
          <div className="flex flex-col w-full xl:w-1/2">
            <div className="flex flex-col justify-center max-w-4xl h-auto lg:h-96 mb-6 lg:mb-0">
              <h2
                ref={titleRef}
                className="heading font-medium text-2xl sm:text-3xl lg:text-4xl mb-4"
              >
                Carpentiére
              </h2>
              <p
                ref={subtitleRef}
                className="paragraph text-base sm:text-lg lg:text-xl mb-8 lg:mb-12"
              >
                We are a design studio focused on creating furniture and
                interior spaces that feel calm, balanced, and timeless.
              </p>
            </div>
            <img
              ref={imageRef}
              className="w-full rounded-lg object-cover"
              src={AboutImage}
              alt="About Carpentiére"
            />
          </div>

          {/* Strength Brand */}
          <div ref={gridRef} className="grid grid-cols-2 w-full xl:w-1/2">
            <div
              data-grid-item
              className="border-0 border-r border-t border-b border-gray-200 py-5 px-3 sm:px-4 flex flex-col justify-end gap-4 sm:gap-6"
            >
              <h3 className="heading text-lg sm:text-2xl lg:text-3xl">
                Our Work
              </h3>
              <p className="paragraph text-sm sm:text-base lg:text-lg max-w-sm">
                We create furniture that blends design integrity with everyday
                comfort — pieces that feel natural, honest, and enduring.
              </p>
            </div>
            <div
              data-grid-item
              className="border-0 border-t border-b border-gray-200 py-5 px-3 sm:px-4 flex flex-col justify-end gap-4 sm:gap-6"
            >
              <h3 className="heading text-lg sm:text-2xl lg:text-3xl">
                350+ <br /> Project
              </h3>
              <p className="paragraph text-sm sm:text-base lg:text-lg max-w-sm">
                Collaborating closely with clients to create spaces that truly
                reflect their way of living.
              </p>
            </div>
            <div
              data-grid-item
              className="border-0 border-r border-b border-gray-200 py-5 px-3 sm:px-4 flex flex-col justify-end gap-4 sm:gap-6"
            >
              <h3 className="heading text-lg sm:text-2xl lg:text-3xl">
                350+ <br /> Project
              </h3>
              <p className="paragraph text-sm sm:text-base lg:text-lg max-w-sm">
                Collaborating closely with clients to create spaces that truly
                reflect their way of living.
              </p>
            </div>
            <div
              data-grid-item
              className="border-0 border-b border-gray-200 py-5 px-3 sm:px-4 flex flex-col justify-end gap-4 sm:gap-6"
            >
              <h3 className="heading text-lg sm:text-2xl lg:text-3xl">
                350+ <br /> Project
              </h3>
              <p className="paragraph text-sm sm:text-base lg:text-lg max-w-sm">
                Collaborating closely with clients to create spaces that truly
                reflect their way of living.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
