// import { Menu } from "lucide-react";

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
            Bethany Furniture
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
                Portfolio
              </a>
            </li>
          </ul>
          {/* <button
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <Menu size={24} strokeWidth={2} />
          </button> */}
        </div>
      </div>
    </nav>
  );
}
