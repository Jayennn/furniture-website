// import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav
      className="fixed top-0 z-50 w-full bg-white shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container px-4 sm:px-6 lg:px-0 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <h1 className="heading uppercase tracking-wide text-xl font-light">
            Bethany Furniture
          </h1>
          <ul className="hidden md:flex items-center space-x-6">
            <li className="inline-block ml-6">
              <a
                href="/"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Home
              </a>
            </li>
            <li className="inline-block ml-6">
              <a
                href="/project"
                className="text-gray-700 hover:text-gray-900 transition-colors"
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
