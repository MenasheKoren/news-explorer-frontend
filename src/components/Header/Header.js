import { Link, NavLink, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export function Header({
  handleOpenDropdownMenu,
  isDropdownMenuOpen,
  isRegistered,
  handleLogin,
  handleLogout,
  handleRegister,
  isLoggedIn,
}) {
  const location = useLocation();
  const isBigScreenOrTablet = useMediaQuery({ query: "(min-width: 481px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
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
        <h2
          className="header__title"
          style={isDropdownMenuOpen && isMobile ? { color: "white" } : {}}
        >
          NewsExplorer
        </h2>
        {isBigScreenOrTablet && (
          <nav className="header__nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "nav__item link link__hover" +
                (isActive ? " nav__item_active" : "  nav__item_inactive")
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
        )}

        {isMobile && (
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
        )}
      </div>
    </header>
  );
}
