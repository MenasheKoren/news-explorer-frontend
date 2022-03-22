import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useLocation } from "react-router-dom";

export function HeaderButton({
  dropdownMenuOpen,
  loggedIn,
  onLoginClick,
  onLogoutClick,
  onRegisterClick,
  registered,
}) {
  const location = useLocation();
  const currentUser = useContext(CurrentUserContext);
  // const {
  //   loggedIn: [isLoggedIn, setIsLoggedIn],
  //   registered: [isRegistered, setIsRegistered],
  // } = useContext(AuthStateContext);

  // const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  // const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  // function handleLogout() {
  //   setIsLoggedIn(false);
  // }
  //
  // function handleRegisterClick() {
  //   setIsRegisterPopupOpen(true);
  // }
  //
  // function handleLoginClick() {
  //   setIsLoginPopupOpen(true);
  // }

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
          {currentUser ? currentUser.name : "Gollum"}
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
