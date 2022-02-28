import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export const MobileMenu = ({ closeAllPopups, isOpen }) => {
  const location = useLocation();

  return (
    <section
      className={["mobile-menu", isOpen ? "mobile-menu_opened" : ""].join(" ")}
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

            <Link
              to="/"
              onClick={closeAllPopups}
              className="nav__item link link__hover nav__entry"
            >
              Sign in
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
};
