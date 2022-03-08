import { Link, NavLink, useLocation } from "react-router-dom";

export function Header({
  handleOpenDropdownMenu,
  isDropdownMenuOpen,
  isRegistered,
  handleLogin,
  handleLogout,
  handleRegister,
  isLoggedIn,
  isMobile,
  isMonitorOrTablet,
  handleLoginClick,
  handleRegisterClick,
  handleSubmitInfoToolTip,
  isInfoToolTipOpen,
  isLoginPopupOpen,
  isRegisterPopupOpen,
  userName,
}) {
  const location = useLocation();

  return (
    /* todo split header connected to saved news */
    <header
      className="header"
      style={
        location.pathname === "/saved-news"
          ? {
              color: "black",
              borderColor: "black",
              fill: "black",
              position: "relative",
              background: "rgb(255, 255, 255)",
              boxShadow: "inset 0 -0.0625rem 0 rgb(209, 210, 214)",
            }
          : {
              color: "white",
              borderColor: "rgb(26, 27, 34)",
              fill: "white",
              position: "absolute",
              background: "rgba(196, 196, 196, 0.01)",
              boxShadow: "inset 0 -0.0625rem 0 rgba(255, 255, 255, 0.2)",
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
        {isMonitorOrTablet && (
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
            {isLoggedIn && (
              <NavLink
                to="/saved-news"
                className={({ isActive }) =>
                  "nav__item link link__hover" +
                  (isActive ? " nav__item_active" : " nav__item_inactive")
                }
              >
                Saved articles
              </NavLink>
            )}
            {/* todo add username and logout icon  */}
            {isLoggedIn && (
              <Link
                to="/"
                onClick={handleLogout}
                className="nav__item link link__hover nav__entry"
              >
                {userName} <svg className="nav__logout-icon" />
              </Link>
            )}
            {isRegistered && !isLoggedIn && (
              <Link
                to="/"
                onClick={handleLoginClick}
                className="nav__item link link__hover nav__entry"
              >
                Sign in
              </Link>
            )}
            {!isRegistered && !isLoggedIn && (
              <Link
                to="/"
                onClick={handleRegisterClick}
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
