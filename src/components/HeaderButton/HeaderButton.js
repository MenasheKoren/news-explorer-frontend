import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useLocation } from "react-router-dom";
import { AuthStateContext } from "../../contexts/AuthStateContext";
import { AppStateContext } from "../../contexts/AppStateContext";

export function HeaderButton({
  dropdownMenuOpen,
  // loggedIn,
  // onLoginClick,
  // onLogoutClick,
  // onRegisterClick,
  // registered,
}) {
  const location = useLocation();
  const currentUser = useContext(CurrentUserContext);
  const {
    loggedIn: [isLoggedIn, setIsLoggedIn],
    registered: [isRegistered, setIsRegistered],
  } = useContext(AuthStateContext);
  const {
    registerPopup: [isRegisterPopupOpen, setIsRegisterPopupOpen],
    loginPopup: [isLoginPopupOpen, setIsLoginPopupOpen],
  } = useContext(AppStateContext);

  function handleLogout() {
    setIsLoggedIn(false);
  }

  function handleRegisterClick() {
    setIsRegisterPopupOpen(true);
  }

  function handleLoginClick() {
    setIsLoginPopupOpen(true);
  }

  return (
    <>
      {isLoggedIn && (
        <button
          onClick={handleLogout}
          className="nav__item button  nav__entry logout__button "
          style={
            location.pathname === "/saved-news" && !dropdownMenuOpen
              ? {
                  filter: "invert(0)",
                }
              : {}
          }
        >
          {currentUser ? currentUser.name : "Gollum"}
          <svg className="logout__icon" />
        </button>
      )}
      {isRegistered && !isLoggedIn && (
        <button
          onClick={handleLoginClick}
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
      {!isRegistered && !isLoggedIn && (
        <button
          onClick={handleRegisterClick}
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
