import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <>
      <nav className="z-9999 bg-white shadow fixed w-full top-0 ">
        <div className="container px-4 sm:px-6 lg:px-0 py-6">
          <div className="flex justify-between items-center">
            <h1 className="heading text-3xl">Carpentiére</h1>
            <Menu />
          </div>
        </div>
      </nav>
    </>
  );
}
