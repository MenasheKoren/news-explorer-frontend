import { useLocation } from "react-router-dom";
import { MobileHeader } from "../MobileHeader/MobileHeader";
import { HomeNavLink } from "../HomeNavLink/HomeNavLink";
import { SavedArticlesNavLink } from "../SavedArticlesNavLink/SavedArticlesNavLink";
import { HeaderButton } from "../HeaderButton/HeaderButton";
import { HeaderTitle } from "../HeaderTitle/HeaderTitle";

export function Header({
  handleOpenDropdownMenu,
  isDropdownMenuOpen,
  isRegistered,
  handleLogout,
  isLoggedIn,
  isMobile,
  isMonitorOrTablet,
  handleLoginClick,
  handleRegisterClick,
  userName,
}) {
  const location = useLocation();

  return (
    /* todo split header connected to saved news */
    <header
      className="header"
      style={{
        color: "white",
        borderColor: "rgb(26, 27, 34)",
        fill: "white",
        position: "absolute",
        background: "rgba(196, 196, 196, 0.01)",
        boxShadow: "inset 0 -0.0625rem 0 rgba(255, 255, 255, 0.2)",
      }}
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
              onClick={handleLogout}
              userName={userName}
              registered={isRegistered}
              onClick1={handleLoginClick}
              onClick2={handleRegisterClick}
            />
          </nav>
        )}

        <MobileHeader
          mobile={isMobile}
          onClick={handleOpenDropdownMenu}
          location={location}
        />
      </div>
    </header>
  );
}
