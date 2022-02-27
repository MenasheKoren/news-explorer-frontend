import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export function Layout({
  handleLogout,
  isRegistered,
  localEmail,
  handleOpenHamburgerMenu,
  closeAllPopups,
  isOpen,
}) {
  return (
    <div className="page">
      <div className="content">
        <Header
          isOpen={isOpen}
          handleOpenHamburgerMenu={handleOpenHamburgerMenu}
          closeAllPopups={closeAllPopups}
        />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
