import { Link, NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <h2>NewsExplorer</h2>
      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            "nav__item link link__hover" + (isActive ? " nav__item_active" : "")
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/saved-news"
          className={({ isActive }) =>
            "nav__item link link__hover" + (isActive ? " nav__item_active" : "")
          }
        >
          Saved articles
        </NavLink>

        <Link to="/" className="nav__item link link__hover">
          (Log out | Sign in)
        </Link>
      </nav>
    </header>
  );
}
