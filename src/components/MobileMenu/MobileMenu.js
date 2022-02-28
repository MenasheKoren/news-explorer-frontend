import React from "react";
import { Link, NavLink } from "react-router-dom";

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
          <button
            className="mobile-menu__close button"
            type="button"
            onClick={closeAllPopups}
          />

          <nav className="mobile-menu__nav">
            <NavLink
              to="/"
              onClick={closeAllPopups}
              className={({ isActive }) =>
                "nav__item link link__hover" +
                (isActive ? " nav__item_active" : "")
              }
            >
              Home
            </NavLink>

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

            {isLoggedIn && (
              <Link
                to="/"
                onClick={handleLogout}
                className="nav__item link link__hover nav__entry"
              >
                Log out
              </Link>
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
