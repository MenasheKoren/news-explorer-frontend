import { Link } from "react-router-dom";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";

export function RedirectText({ isRegisterPopupOpen, isLoginPopupOpen }) {
  return (
    <>
      {isRegisterPopupOpen && (
        <p className="entry__redirect-text">
          or
          <Link to={Login} className="link link__hover entry__redirect-link">
            Sign in
          </Link>
        </p>
      )}
      {isLoginPopupOpen && (
        <p className="entry__redirect-text">
          or
          <Link to={Register} className="link link__hover entry__redirect-link">
            Sign up
          </Link>
        </p>
      )}
    </>
  );
}
