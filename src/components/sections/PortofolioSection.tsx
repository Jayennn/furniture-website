import portofolioImage1 from "@/assets/portofolio-image-1.webp";
import portofolioImage2 from "@/assets/portofolio-image-2.webp";
import portofolioImage3 from "@/assets/portofolio-image-3.webp";
import TextReveal from "../animation/TextReveal";

const portofolioItems = [
  {
    id: 1,
    title: "Modern Living Room",
    image: portofolioImage1,
    description:
      "Contemporary furniture design for sophisticated living spaces",
  },
  {
    id: 2,
    title: "Minimalist Workspace",
    image: portofolioImage2,
    description:
      "Functional and elegant design for productive work environments",
  },
  {
    id: 3,
    title: "Luxury Bedroom",
    image: portofolioImage3,
    description: "Comfortable and stylish furniture for restful bedrooms",
  },
];

export function PortofolioSection() {
  return (
    <section
      className="py-8 sm:py-20 md:py-32 lg:py-52"
      aria-label="Portfolio section"
    >
      <div className="container px-4 sm:px-6 lg:px-0">
        <div className="mb-12 flex flex-col gap-8 sm:gap-12 lg:mb-20 lg:gap-16">
          <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
            <TextReveal>
              <h2 className="heading shrink-0 text-4xl sm:text-5xl lg:text-6xl">
                Portofolio
              </h2>
            </TextReveal>
            <TextReveal>
              <p className="paragraph md:max-w-lg text-lg lg:text-xl">
                More than buildings, we design human experiences. Our studio
                crafts thoughtful environments that connect, inspire, and
                resonate for a lifetime.
              </p>
            </TextReveal>
          </div>
          <hr className="border-gray-200" />
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {portofolioItems.map((item) => (
            <article
              key={item.id}
              className="flex flex-col gap-4 group hover:opacity-80 transition-opacity"
              role="article"
            >
              <img
                className="w-full rounded-lg object-cover"
                src={item.image}
                alt={item.description}
                loading="lazy"
                decoding="async"
              />
              <div className="flex flex-row justify-between gap-3 sm:gap-4 sm:items-center">
                <p className="paragraph text-base uppercase tracking-wide">
                  {item.title}
                </p>
                <button
                  className="paragraph flex w-fit items-center gap-2 text-base uppercase underline underline-offset-4 transition-opacity hover:opacity-70 sm:underline-offset-8"
                  aria-label={`View ${item.title} project`}
                >
                  View Project
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
