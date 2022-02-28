import { Link, NavLink, useLocation } from "react-router-dom";
import MediaQuery from "react-responsive";

export function Header({ handleOpenDropdownMenu }) {
  const location = useLocation();

  return (
    <header
      className="header"
      style={
        location.pathname === "/saved-news"
          ? {
              color: "black",
              borderColor: "black",
              fill: "black",
            }
          : {
              color: "white",
              borderColor: "rgba(26, 27, 34, 1)",
              fill: "white",
            }
      }
    >
      <div className="header__content">
        <h2 className="header__title">NewsExplorer</h2>
        <MediaQuery minWidth={481}>
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
        </MediaQuery>
        <MediaQuery maxWidth={480}>
          <button
            className="nav__dropdown-button button"
            onClick={handleOpenDropdownMenu}
          >
            <svg
              className="dropdown__svg"
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                style={
                  location.pathname === "/saved-news"
                    ? {
                        fill: "black",
                      }
                    : {
                        fill: "white",
                      }
                }
                d="M4 8h16v2H4zM4 14h16v2H4z"
              />
            </svg>
          </button>
        </MediaQuery>
      </div>
    </header>
  );
}
