// import { Menu } from "lucide-react";
import { COMPANY_NAME } from "@/constants";
export function Navbar() {
  return (
    <nav
      className="fixed top-0 z-1 w-full bg-white shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container px-4 py-4 sm:px-6 sm:py-6">
        <div className="flex items-center justify-between">
          <h1 className="heading text-xl font-light uppercase tracking-wide">
            {COMPANY_NAME}
          </h1>
          <ul className="flex items-center space-x-6 md:space-x-10">
            <li className="inline-block">
              <a
                href="/"
                className="paragraph text-sm transition-colors md:text-lg lg:text-xl"
              >
                Home
              </a>
            </li>
            <li className="inline-block">
              <a
                href="/project"
                className="paragraph text-sm transition-colors md:text-lg lg:text-xl"
              >
                Project
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
