import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MobileMenu } from "../MobileMenu/MobileMenu";

export function Layout({
  handleOpenDropdownMenu,
  closeAllPopups,
  isDropdownMenuOpen,
  isRegistered,
  handleLogin,
  handleLogout,
  handleRegister,
  isLoggedIn,
}) {
  return (
    <div className="page">
      <div className="content">
        <Header
          handleOpenDropdownMenu={handleOpenDropdownMenu}
          isDropdownMenuOpen={isDropdownMenuOpen}
          handleLogout={handleLogout}
          handleLogin={handleLogin}
          handleRegister={handleRegister}
          isRegistered={isRegistered}
          isLoggedIn={isLoggedIn}
        />
        <MobileMenu
          handleLogout={handleLogout}
          handleLogin={handleLogin}
          handleRegister={handleRegister}
          isRegistered={isRegistered}
          isLoggedIn={isLoggedIn}
          isDropdownMenuOpen={isDropdownMenuOpen}
          closeAllPopups={closeAllPopups}
        />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
