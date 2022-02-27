import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export const MobileMenu = ({ closeAllPopups, isOpen }) => {
  const location = useLocation();

  return (
    <section
      className={["mobile-menu", isOpen ? "mobile-menu_opened" : ""].join(" ")}
    >
      <div className="mobile-menu__container">
        {location.pathname === "/" && (
          <>
            <button
              className="popup__close button button_hover_dark"
              type="button"
              onClick={closeAllPopups}
            />

            <nav className="header__nav">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav__item link link__hover" +
                  (isActive ? " nav__item_active" : "")
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/saved-news"
                className={({ isActive }) =>
                  "nav__item link link__hover" +
                  (isActive ? " nav__item_active" : " nav__item_inactive")
                }
              >
                Saved articles
              </NavLink>

              <Link to="/" className="nav__item link link__hover nav__entry">
                Sign in
              </Link>
            </nav>
          </>
        )}
        )}
      </div>
    </section>
  );
};
