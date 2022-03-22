import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export function Layout({
  handleOpenDropdownMenu,
  closeAllPopups,
  isDropdownMenuOpen,
  isRegistered,
  handleLogin,
  handleLogout,
  handleRegister,
  isLoggedIn,
  isMonitorOrTablet,
  isMobile,
  handleLoginClick,
  handleRegisterClick,
  handleSubmitInfoToolTip,
  isInfoToolTipOpen,
  isLoginPopupOpen,
  isRegisterPopupOpen,
  setIsRegisteredPopupOpen,
  setIsLoginPopupOpen,
  username,
  setIsLoggedIn,
}) {
  const currentUser = React.useContext(CurrentUserContext);
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
          isMonitorOrTablet={isMonitorOrTablet}
          isMobile={isMobile}
          isRegisterPopupOpen={isRegisterPopupOpen}
          isLoginPopupOpen={isLoginPopupOpen}
          isInfoToolTipOpen={isInfoToolTipOpen}
          handleLoginClick={handleLoginClick}
          handleRegisterClick={handleRegisterClick}
          handleSubmitInfoToolTip={handleSubmitInfoToolTip}
          username={currentUser.name}
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
