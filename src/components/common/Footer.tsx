import image from "@/assets/assets.webp";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 lg:py-32" role="contentinfo" aria-label="Footer">
      <div className="container px-4 sm:px-6">
        <hr className="border-gray-200 my-12 lg:my-32" />
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-0">
          {/* left */}
          <div className="flex w-full flex-col justify-between lg:max-w-2xl">
            <div className="space-y-4">
              <h3 className="heading text-4xl sm:text-5xl lg:text-6xl">
                Contact Us
              </h3>
              <p className="paragraph max-w-xs text-sm md:max-w-sm md:text-lg lg:text-xl">
                Get in touch with us for any enquiries and questions
              </p>
            </div>

            <a
              className="paragraph flex items-center gap-2 text-base mt-6 transition-opacity sm:text-lg lg:mt-0 lg:text-xl hover:opacity-70"
              href="https://instagram.com/carpentiere.id"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Carpentiére Instagram profile"
            >
              <Instagram strokeWidth={2} size={20} aria-hidden="true" />
              carpentiere.id
            </a>
          </div>

          {/* right */}
          <div className="flex w-full flex-col">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8">
              {/* Email */}
              <address className="flex flex-col gap-2 not-italic">
                <h4 className="paragraph text-base tracking-wide text-[#A4A4A4]">
                  General Inquiries
                </h4>
                <div className="space-y-1">
                  <a
                    href="mailto:bethanyfurniture@gmail.com"
                    className="paragraph text-base transition-opacity sm:text-lg lg:text-xl hover:opacity-70"
                  >
                    bethanyfurniture@gmail.com
                  </a>
                  <a
                    href="mailto:bethanyproperty05@gmail.com"
                    className="paragraph block text-base transition-opacity sm:text-lg lg:text-xl hover:opacity-70"
                  >
                    bethanyproperty05@gmail.com
                  </a>
                </div>
              </address>
              {/* Contact */}
              <div className="flex flex-col gap-2">
                <h4 className="paragraph text-base tracking-wide text-[#A4A4A4]">
                  Contact
                </h4>
                <div className="space-y-1">
                  <a
                    href="tel:+62813984842"
                    className="paragraph text-base transition-opacity sm:text-lg lg:text-xl hover:opacity-70"
                  >
                    0813 - 9848422
                  </a>
                  <a
                    href="tel:+6281767599722"
                    className="paragraph block text-base transition-opacity sm:text-lg lg:text-xl hover:opacity-70"
                  >
                    0817 - 6759972
                  </a>
                  <a
                    href="tel:+62815811126"
                    className="paragraph block text-base transition-opacity sm:text-lg lg:text-xl hover:opacity-70"
                  >
                    0815 - 8111262
                  </a>
                </div>
              </div>
              {/* Office Address */}
              <address className="flex flex-col gap-2 col-span-1 not-italic sm:col-span-2 lg:col-span-1">
                <h4 className="paragraph text-base tracking-wide text-[#A4A4A4]">
                  Office
                </h4>
                <div className="space-y-1">
                  <p className="paragraph text-base sm:text-lg lg:text-xl">
                    Kalibata City Residences, Tower Ebony Kios BM - 05
                  </p>
                  <a
                    href="tel:+6221397088"
                    className="paragraph block text-base transition-opacity sm:text-lg lg:text-xl hover:opacity-70"
                  >
                    021 - 3970 - 8855
                  </a>
                </div>
              </address>
            </div>
            <img
              className="w-full max-h-64 rounded-lg object-cover mt-8 sm:mt-12 sm:max-h-72 lg:mt-40 lg:max-h-80"
              src={image}
              alt="Carpentiére furniture portfolio showcase"
              // loading="lazy"
              // decoding="async"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
