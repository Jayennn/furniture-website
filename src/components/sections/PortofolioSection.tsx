import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import portofolioImage1 from "@/assets/portofolio-image-1.webp";
import portofolioImage2 from "@/assets/portofolio-image-2.webp";
import portofolioImage3 from "@/assets/portofolio-image-3.webp";
import portofolioImage4 from "@/assets/portofolio-image-4.webp";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function PortofolioSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Title animation
    const titleSplit = new SplitText(titleRef.current, {
      type: "chars, words",
    });

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

    // Description animation
    const descSplit = new SplitText(descRef.current, {
      type: "lines",
    });

    gsap.from(descSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 0.1,
      scrollTrigger: {
        trigger: descRef.current,
        start: "top 80%",
        end: "top 20%",
        once: true,
      },
    });

    // Portfolio items staggered animation
    const items = itemsContainerRef.current?.querySelectorAll(
      "[data-portfolio-item]"
    );
    if (items) {
      gsap.from(items, {
        opacity: 0,
        // scale: 0.95,
        yPercent: 20,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: itemsContainerRef.current,
          start: "top 85%",
          end: "top 35%",
          once: true,
        },
      });
    }

    return () => {
      titleSplit.revert();
      descSplit.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <>
      <section className="py-12 sm:py-20 md:py-32 lg:py-52">
        <div className="container px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16 mb-12 lg:mb-20">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8">
              <h2
                ref={titleRef}
                className="heading font-medium text-3xl sm:text-4xl lg:text-5xl shrink-0"
              >
                Portofolio
              </h2>
              <p
                ref={descRef}
                className="paragraph text-sm sm:text-base md:text-lg lg:text-xl max-w-lg"
              >
                More than buildings, we design human experiences. Our studio
                crafts thoughtful environments that connect, inspire, and
                resonate for a lifetime.
              </p>
            </div>
            <hr className="border-gray-200" />
          </div>

          <div
            ref={itemsContainerRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
          >
            {/* Portfolio items can be added here in the future */}
            <div data-portfolio-item className="flex flex-col gap-4">
              <img
                className="w-full rounded-lg object-cover"
                src={portofolioImage1}
                alt="Portfolio 1"
              />
              <div className="flex flex-row items-center justify-between gap-3 sm:gap-4">
                <p className="paragraph text-sm sm:text-base uppercase tracking-wide">
                  Lorem ipsum
                </p>
                <span className="paragraph text-sm sm:text-base flex items-center gap-2 uppercase underline underline-offset-4 sm:underline-offset-8 w-fit hover:opacity-70 transition cursor-pointer">
                  View Project
                </span>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div data-portfolio-item className="flex flex-col gap-4">
              <img
                className="w-full rounded-lg object-cover"
                src={portofolioImage2}
                alt="Portfolio 2"
              />
              <div className="flex flex-row items-center justify-between gap-3 sm:gap-4">
                <p className="paragraph text-sm sm:text-base uppercase tracking-wide">
                  Lorem ipsum
                </p>
                <span className="paragraph text-sm sm:text-base flex items-center gap-2 uppercase underline underline-offset-4 sm:underline-offset-8 w-fit hover:opacity-70 transition cursor-pointer">
                  View Project
                </span>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div data-portfolio-item className="flex flex-col gap-4">
              <img
                className="w-full rounded-lg object-cover"
                src={portofolioImage3}
                alt="Portfolio 3"
              />
              <div className="flex flex-row items-center justify-between gap-3 sm:gap-4">
                <p className="paragraph text-sm sm:text-base uppercase tracking-wide">
                  Lorem ipsum
                </p>
                <span className="paragraph text-sm sm:text-base flex items-center gap-2 uppercase underline underline-offset-4 sm:underline-offset-8 w-fit hover:opacity-70 transition cursor-pointer">
                  View Project
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-20 md:py-32 lg:py-52">
        <div className="container px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="heading font-medium text-2xl sm:text-3xl lg:text-4xl">
                Space we shape
              </h2>
              <div className="flex flex-col gap-6 sm:gap-8 mt-6">
                <p className="paragraph text-sm sm:text-base md:text-lg lg:text-xl ">
                  Each space is shaped with intention — where proportion,
                  material, and light come together to create a calm and
                  balanced living environment. Our furniture is designed to
                  belong naturally within a space, enhancing how it feels,
                  moves, and is experienced every day.
                </p>
                <button className="cursor-pointer paragraph text-sm sm:text-base md:text-lg lg:text-xlflex items-center gap-2 uppercase underline decoration-[#3D3029]/50 underline-offset-8 w-fit hover:opacity-70 transition">
                  View Project
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                className="w-full rounded-lg object-cover"
                src={portofolioImage4}
                alt="Portofolio 4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
