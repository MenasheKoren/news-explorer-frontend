import { NavLink } from "react-router-dom";

export function SavedArticlesNavLink(props) {
  return (
    <>
      {props.loggedIn && (
        <NavLink to="/saved-news" className={props.className}>
          Saved articles
        </NavLink>
      )}
    </>
  );
}
