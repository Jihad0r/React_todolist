import { Navbar } from "./pages/Navigation";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
