import { NavLink } from "react-router-dom";

export function SavedArticlesNavLink({ className, loggedIn }) {
  return (
    <>
      {loggedIn && (
        <NavLink to="/saved-news" className={className}>
          Saved articles
        </NavLink>
      )}
    </>
  );
}
