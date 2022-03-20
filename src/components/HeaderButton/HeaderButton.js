import { useLocation } from "react-router-dom";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export function HeaderButton({
  loggedIn,
  onLogoutClick,
  onLoginClick,
  onRegisterClick,
  registered,
  userName,
  dropdownMenuOpen,
}) {
  const location = useLocation();
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      {loggedIn && (
        <button
          onClick={onLogoutClick}
          className="nav__item button  nav__entry logout__button "
          style={
            location.pathname === "/saved-news" && !dropdownMenuOpen
              ? {
                  filter: "invert(0)",
                }
              : {}
          }
        >
          {userName ? { userName } : "Gollum"}
          <svg className="logout__icon" />
        </button>
      )}
      {registered && !loggedIn && (
        <button
          onClick={onLoginClick}
          className="nav__item button nav__entry"
          style={
            location.pathname === "/saved-news"
              ? {
                  filter: "invert(0)",
                }
              : {}
          }
        >
          Sign in
        </button>
      )}
      {!registered && !loggedIn && (
        <button
          onClick={onRegisterClick}
          className="nav__item button nav__entry"
          style={
            location.pathname === "/saved-news" || dropdownMenuOpen
              ? {
                  filter: "invert(0)",
                }
              : {}
          }
        >
          Sign up
        </button>
      )}
    </>
  );
}
