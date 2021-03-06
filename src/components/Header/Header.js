import { useLocation } from "react-router-dom";
import { MobileHeader } from "../MobileHeader/MobileHeader";
import { HomeNavLink } from "../HomeNavLink/HomeNavLink";
import { SavedArticlesNavLink } from "../SavedArticlesNavLink/SavedArticlesNavLink";
import { HeaderButton } from "../HeaderButton/HeaderButton";
import { HeaderTitle } from "../HeaderTitle/HeaderTitle";

export function Header({
  handleOpenDropdownMenu,
  isDropdownMenuOpen,
  isMobile,
  isMonitorOrTablet,
  handleLogout,
  handleRegisterClick,
  handleLoginClick,
  isLoggedIn,
  isRegistered,
}) {
  const location = useLocation();

  return (
    <header
      className="header"
      style={
        location.pathname === "/saved-news"
          ? {
              color: "#000",
              borderColor: "#000",
              fill: "#000",
              position: "relative",
              background: "#FFF",
              boxShadow: "inset 0 -0.0625rem 0 #D1D2D6",
            }
          : {}
      }
    >
      <div className="header__content">
        <HeaderTitle dropdownMenuOpen={isDropdownMenuOpen} mobile={isMobile} />
        {isMonitorOrTablet && (
          <nav className="header__nav">
            <HomeNavLink
              className={({ isActive }) =>
                "nav__item link link__hover" +
                (isActive ? " nav__item_active" : "  nav__item_inactive")
              }
            />
            <SavedArticlesNavLink
              loggedIn={isLoggedIn}
              className={({ isActive }) =>
                "nav__item link link__hover" +
                (isActive ? " nav__item_active" : " nav__item_inactive")
              }
            />

            <HeaderButton
              loggedIn={isLoggedIn}
              onLogoutClick={handleLogout}
              registered={isRegistered}
              onLoginClick={handleLoginClick}
              onRegisterClick={handleRegisterClick}
              dropdownMenuOpen={isDropdownMenuOpen}
            />
          </nav>
        )}

        <MobileHeader
          mobile={isMobile}
          onOpenDropdownClick={handleOpenDropdownMenu}
          location={location}
        />
      </div>
    </header>
  );
}
