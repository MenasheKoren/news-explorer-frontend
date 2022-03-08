export function HeaderButton({
  loggedIn,
  onClick: onLogoutClick,
  onClick1: onLoginClick,
  onClick2: onRegisterClick,
  registered,
  userName,
}) {
  return (
    <>
      {loggedIn && (
        <button
          onClick={onLogoutClick}
          className="nav__item button  nav__entry"
        >
          {userName ? { userName } : "Gollum"}
          <svg className="nav__logout-icon" />
        </button>
      )}
      {registered && !loggedIn && (
        <button onClick={onLoginClick} className="nav__item button nav__entry">
          Sign in
        </button>
      )}
      {!registered && !loggedIn && (
        <button
          onClick={onRegisterClick}
          className="nav__item button nav__entry"
        >
          Sign up
        </button>
      )}
    </>
  );
}
