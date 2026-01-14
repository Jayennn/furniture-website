import portofolioImage4 from "@/assets/portofolio-image-4.webp";

export function CtaSection() {
  return (
    <section className="py-12 sm:py-20 md:py-32 lg:py-52">
      <div className="container px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="heading text-2xl sm:text-3xl lg:text-6xl">
              Space we shape
            </h2>
            <div className="flex flex-col gap-6 sm:gap-8 mt-6">
              <p className="paragraph text-sm sm:text-base md:text-lg lg:text-xl">
                Each space is shaped with intention — where proportion,
                material, and light come together to create a calm and balanced
                living environment. Our furniture is designed to belong
                naturally within a space, enhancing how it feels, moves, and is
                experienced every day.
              </p>
              <button className="cursor-pointer paragraph text-sm sm:text-base flex items-center gap-2 uppercase underline decoration-[#3D3029]/50 underline-offset-8 w-fit hover:opacity-70 transition">
                View Project
              </button>
            </div>
          </div>
          <div className="w-full lg:w-2/4 ">
            <img
              className="w-full rounded-lg object-cover"
              src={portofolioImage4}
              alt="Portofolio 4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
