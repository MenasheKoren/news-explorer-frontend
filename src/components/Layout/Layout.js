import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MobileMenu } from "../MobileMenu/MobileMenu";

export function Layout({ handleOpenDropdownMenu, closeAllPopups, isOpen }) {
  return (
    <div className="page">
      <div className="content">
        <Header handleOpenDropdownMenu={handleOpenDropdownMenu} />
        <MobileMenu isOpen={isOpen} closeAllPopups={closeAllPopups} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
