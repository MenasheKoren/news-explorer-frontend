import { NavLink } from "react-router-dom";

export function HomeNavLink({ className }) {
  return (
    <NavLink to="/" className={className}>
      Home
    </NavLink>
  );
}
