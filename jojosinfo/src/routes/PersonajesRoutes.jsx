import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

export const BandsRoutes = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};