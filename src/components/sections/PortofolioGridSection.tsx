import projectImage from "@/assets/project.webp";
import projectImage2 from "@/assets/project2.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { Fragment, useRef, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Portfolio {
  id: number;
  title: string;
  category: string;
  description: string;
  detailedDescription: string;
  images: string[];
}

const PORTFOLIO_ITEMS: Portfolio[] = [
  {
    id: 1,
    title: "Luxury Bedroom",
    category: "Residential Furniture Design",
    description:
      "More than buildings, we design human experiences. Our studio crafts thoughtful environments that connect, inspire, and resonate for a lifetime.",
    detailedDescription:
      "Our luxury bedroom collection represents the pinnacle of contemporary furniture design. Featuring premium materials including sustainably sourced hardwoods, fine fabrics, and bespoke upholstery, each piece is meticulously crafted to provide ultimate comfort and elegance. This project showcases our expertise in creating cohesive interior environments that blend aesthetic sophistication with functional excellence.",
    images: [projectImage, projectImage2],
  },
  {
    id: 2,
    title: "Modern Office Space",
    category: "Commercial Property Design",
    description:
      "Functional and elegant design for productive work environments. Creating spaces that enhance creativity and collaboration.",
    detailedDescription:
      "This commercial property project demonstrates our comprehensive approach to workspace design. We integrated ergonomic furniture solutions with cutting-edge architectural elements to create an environment that maximizes productivity and employee well-being. Our design strategy focuses on optimizing property value through innovative spatial planning and sustainable building practices.",
    images: [projectImage, projectImage2],
  },
  {
    id: 3,
    title: "Contemporary Living",
    category: "Residential Property Development",
    description:
      "Innovative solutions for modern living. Designs that balance aesthetics with practicality for everyday comfort.",
    detailedDescription:
      "This residential property development project showcases our holistic design philosophy. From architectural planning to bespoke furniture curation, we created a comprehensive living experience that respects both modern aesthetics and timeless comfort. Our team coordinated multiple design elements to ensure seamless integration between property structure and interior furnishings.",
    images: [projectImage, projectImage2],
  },
];

export function PortofolioGridSection() {
  const [openItemId, setOpenItemId] = useState<number | null>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const imageContainers = sectionRef.current.querySelectorAll(
        "[data-image-container]",
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
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="py-18 sm:py-20 md:py-32 lg:py-48">
      <div className="container px-4 sm:px-6">
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
          {PORTFOLIO_ITEMS.map((item) => (
            <Fragment key={item.id}>
              {/* Item */}
              <article role="article">
                {/* Image */}
                <div
                  data-image-container
                  className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 h-64 sm:h-80 md:h-96 lg:h-full overflow-x-auto overflow-hidden"
                >
                  <div className="col-span-3 md:col-span-2 overflow-hidden">
                    <img
                      data-image
                      className="object-cover w-full h-full"
                      src={item.images[0]}
                      alt={item.title}
                    />
                  </div>

                  <img
                    data-image
                    className="hidden md:block col-span-1 object-cover w-full h-full"
                    src={item.images[1]}
                    alt={item.title}
                  />
                </div>
              </article>

              {/* Description */}
              <div className="space-y-4 sm:space-y-5">
                <div className="flex flex-row items-center justify-between gap-3 sm:gap-4">
                  <h3 className="heading uppercase text-lg sm:text-xl md:text-2xl">
                    {item.title}
                  </h3>
                  {isDesktop ? (
                    <Dialog
                      open={openItemId === item.id}
                      onOpenChange={(isOpen) =>
                        setOpenItemId(isOpen ? item.id : null)
                      }
                    >
                      <DialogTrigger asChild>
                        <button
                          className="px-2 py-1 paragraph inline-flex w-fit items-center justify-center gap-2 text-sm sm:text-base uppercase transition-all duration-300 whitespace-nowrap hover:bg-black hover:text-white"
                          aria-label="View Detail"
                        >
                          View Detail
                          <ArrowUpRight strokeWidth={1} className="w-6 h-6" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                        <div className="px-4 py-2">
                          <img
                            src={item.images[0]}
                            alt={item.title}
                            className="w-full h-auto object-cover rounded-lg mb-4"
                          />
                        </div>
                        <DialogHeader>
                          <DialogTitle>{item.title}</DialogTitle>
                          <DialogDescription className="text-sm text-gray-500 mt-1">
                            {item.category}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <p className="text-base text-gray-700">
                            {item.description}
                          </p>
                          <hr />
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {item.detailedDescription}
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Drawer
                      open={openItemId === item.id}
                      onOpenChange={(isOpen) =>
                        setOpenItemId(isOpen ? item.id : null)
                      }
                    >
                      <DrawerTrigger asChild>
                        <button
                          className="px-2 py-1 paragraph inline-flex w-fit items-center justify-center gap-2 text-sm sm:text-base uppercase transition-all duration-300 whitespace-nowrap hover:bg-black hover:text-white"
                          aria-label="View Detail"
                        >
                          View Detail
                          <ArrowUpRight strokeWidth={1} className="w-6 h-6" />
                        </button>
                      </DrawerTrigger>
                      <DrawerContent>
                        <div className="px-4 py-2">
                          <img
                            src={item.images[0]}
                            alt={item.title}
                            className="w-full h-auto object-cover rounded-t-lg"
                          />
                        </div>
                        <DrawerHeader className="text-left">
                          <DrawerTitle>{item.title}</DrawerTitle>
                          <DrawerDescription className="text-sm text-gray-500 mt-1">
                            {item.category}
                          </DrawerDescription>
                        </DrawerHeader>
                        <div className="space-y-4 px-4 pb-4">
                          <p className="text-base text-gray-700">
                            {item.description}
                          </p>
                          <hr />
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {item.detailedDescription}
                          </p>
                        </div>
                        <DrawerFooter className="pt-2"></DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  )}
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-start md:items-center justify-between gap-4">
                  <div className="flex flex-col space-y-0.5">
                    <p className="paragraph text-xs sm:text-sm tracking-wide text-[#A4A4A4]">
                      Category
                    </p>
                    <p className="paragraph text-base sm:text-lg">
                      {item.category}
                    </p>
                  </div>

                  <p className="max-w-xl paragraph text-sm sm:text-base lg:text-lg">
                    {item.description}
                  </p>
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
