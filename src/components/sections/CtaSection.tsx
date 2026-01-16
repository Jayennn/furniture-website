import portofolioImage4 from "@/assets/portofolio-image-4.webp";
import TextReveal from "../animation/TextReveal";

export function CtaSection() {
  return (
    <section
      className="py-12 sm:py-20 md:py-32 lg:py-52"
      aria-label="Call to action section"
    >
      <div className="container px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          <div className="w-full lg:w-1/2">
            <TextReveal start="top 100%">
              <h2 className="heading text-4xl sm:text-5xl lg:text-6xl">
                Spaces We Shape
              </h2>
            </TextReveal>
            <div className="mt-6 flex flex-col gap-6 sm:gap-8">
              <TextReveal>
                <p className="paragraph text-lg lg:text-xl">
                  Each space is shaped with intention — where proportion,
                  material, and light come together to create a calm and
                  balanced living environment. Our furniture is designed to
                  belong naturally within a space, enhancing how it feels,
                  moves, and is experienced every day.
                </p>
              </TextReveal>
              <button
                className="paragraph flex w-fit items-center gap-2 text-sm uppercase sm:text-base underline decoration-[#3D3029]/50 underline-offset-8 transition-opacity hover:opacity-70"
                aria-label="View more projects"
              >
                View Project
              </button>
            </div>
          </div>
          <div className="w-full lg:w-2/4">
            <img
              className="w-full rounded-lg object-cover"
              src={portofolioImage4}
              alt="Luxury furniture installation showcasing Carpentiére design philosophy"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
