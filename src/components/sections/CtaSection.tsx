import portofolioImage4 from "@/assets/portofolio-image-4.webp";
import { TextReveal } from "../common";

export function CtaSection() {
  return (
    <section
      className="pt-0 pb-12 sm:py-20 md:py-32 lg:py-52"
      aria-label="Call to action section"
    >
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          <div className="w-full lg:w-1/2">
            <TextReveal asChild>
              <h2 className="heading text-4xl sm:text-5xl lg:text-6xl">
                Spaces We Shape
              </h2>
            </TextReveal>
            <div className="flex flex-col gap-6 mt-4 sm:gap-8">
              <TextReveal asChild>
                <p className="paragraph text-sm md:text-lg lg:text-xl">
                  Each space is shaped with intention — where proportion,
                  material, and light come together to create a calm and
                  balanced living environment.
                </p>
              </TextReveal>
              <a
                href="/project"
                className="paragraph flex w-fit items-center gap-2 text-sm uppercase transition-opacity sm:text-base underline underline-offset-8 decoration-[#3D3029]/50 hover:opacity-70"
                aria-label="View all projects"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="w-full h-full lg:w-2/4">
            <img
              className="w-full rounded-lg object-cover"
              src={portofolioImage4}
              alt="Luxury furniture installation showcasing Carpentiére design philosophy"
              // loading="lazy"
              // decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
