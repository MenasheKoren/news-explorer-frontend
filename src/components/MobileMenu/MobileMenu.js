import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MobileCloseButton } from "../MobileCloseButton/MobileCloseButton";

export const MobileMenu = ({
  closeAllPopups,
  isDropdownMenuOpen,
  isRegistered,
  handleLogin,
  handleLogout,
  handleRegister,
  isLoggedIn,
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
          <MobileCloseButton onClick={closeAllPopups} />

          <nav className="mobile-menu__nav">
            <NavLink
              to="/"
              onClick={closeAllPopups}
              className={({ isActive }) =>
                "nav__item link link__hover" +
                (isActive && isLoggedIn ? " nav__item_active" : "")
              }
            >
              Home
            </NavLink>
            {isLoggedIn && (
              <>
                <NavLink
                  to="/saved-news"
                  onClick={closeAllPopups}
                  className={({ isActive }) =>
                    "nav__item link link__hover" +
                    (isActive ? " nav__item_active" : " nav__item_inactive")
                  }
                >
                  Saved articles
                </NavLink>

                <Link
                  to="/"
                  onClick={handleLogout}
                  className="nav__item link link__hover nav__entry"
                >
                  Log out
                </Link>
              </>
            )}

            {isRegistered && !isLoggedIn && (
              <Link
                to="/"
                onClick={handleLogin}
                className="nav__item link link__hover nav__entry"
              >
                Sign in
              </Link>
            )}
            {!isRegistered && !isLoggedIn && (
              <Link
                to="/"
                onClick={handleRegister}
                className="nav__item link link__hover nav__entry"
              >
                Sign up
              </Link>
            )}
          </nav>
        </div>
      </div>
    </section>
  );
};
