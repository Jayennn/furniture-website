import image from "@/assets/assets.webp";
import { Instagram } from "lucide-react";
export function Footer() {
  return (
    <>
      <footer className="lg:py-32">
        <div className="container px-4 sm:px-6 lg:px-0">
          <hr className="border-gray-200 my-32" />
          <div className="flex flex-row">
            {/* left */}
            <div className="w-full max-w-2xl flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="heading text-6xl">Contact us</h3>
                <p className="paragraph text-xl max-w-sm">
                  Get in touch with us for any enquiries and questions
                </p>
              </div>

              <a className="paragraph text-xl flex items-center gap-2" href="#">
                <Instagram strokeWidth={2} size={20} /> carpentiere.id
              </a>
            </div>

            {/* right */}
            <div className="w-full flex flex-col">
              <div className="grid grid-cols-2 gap-8">
                {/* Email */}
                <div className="max-w-sm col-span-1 flex flex-col gap-2">
                  <h4 className="paragraph text-md tracking-wide text-[#A4A4A4]">
                    General Inquiries
                  </h4>
                  <div className="space-y-1">
                    <p className="paragraph text-xl">
                      bethanyfurniture@gmail.com
                    </p>
                    <p className="paragraph text-xl">
                      bethanyproperty05@gmail.com
                    </p>
                  </div>
                </div>
                {/* Contact */}
                <div className="max-w-sm col-span-1 flex flex-col gap-2">
                  <h4 className="paragraph text-md tracking-wide text-[#A4A4A4]">
                    Contact
                  </h4>
                  <div className="space-y-1">
                    <p className="paragraph text-xl">0813 - 9848422</p>
                    <p className="paragraph text-xl">0817 - 6759972</p>
                    <p className="paragraph text-xl">0815 - 8111262</p>
                  </div>
                </div>
                {/* Office Address */}
                <div className="max-w-sm col-span-1 flex flex-col gap-2">
                  <h4 className="paragraph text-md tracking-wide text-[#A4A4A4]">
                    Office
                  </h4>
                  <div className="space-y-1">
                    <p className="paragraph text-xl">
                      Kalibata City Residences, Tower Ebony Kios BM - 05
                    </p>
                    <p className="paragraph text-xl">021 - 3970 - 8855</p>
                  </div>
                </div>
              </div>
              <img
                className="mt-40 w-full rounded-lg object-cover max-h-80 "
                src={image}
                alt="Image"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
