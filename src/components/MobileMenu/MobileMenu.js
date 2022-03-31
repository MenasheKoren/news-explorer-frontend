import React from "react";
import { MobileCloseButton } from "../MobileCloseButton/MobileCloseButton";
import { HomeNavLink } from "../HomeNavLink/HomeNavLink";
import { SavedArticlesNavLink } from "../SavedArticlesNavLink/SavedArticlesNavLink";
import { HeaderButton } from "../HeaderButton/HeaderButton";

export const MobileMenu = ({
  closeAllPopups,
  isDropdownMenuOpen,
  isLoggedIn,
  handleLogout,
  isRegistered,
  handleLoginClick,
  handleRegisterClick,
}) => {
  return (
    <section
      className={[
        "mobile-menu",
        isDropdownMenuOpen ? "mobile-menu_opened" : "",
      ].join(" ")}
    >
      <div className="mobile-menu__container">
        <div className="mobile-menu__content">
          <div className="mobile-menu__header">
            <MobileCloseButton onClick={closeAllPopups} />
          </div>

          <nav className="mobile-menu__nav">
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
              registered={isRegistered}
              loggedIn={isLoggedIn}
              onLoginClick={handleLoginClick}
              onRegisterClick={handleRegisterClick}
              onLogoutClick={handleLogout}
              style={{
                filter: "invert(0)",
              }}
            />
          </nav>
        </div>
      </div>
    </section>
  );
};
