import { Navbar, Footer } from "@/components/common";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
