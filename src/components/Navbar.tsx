import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <>
      <nav>
        <div className="container py-6">
          <div className="flex justify-between items-center">
            <h1 className="heading text-3xl">Carpentiére</h1>
            <Menu />
          </div>
        </div>
      </nav>
    </>
  );
}
