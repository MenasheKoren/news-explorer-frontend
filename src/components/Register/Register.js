import React from "react";
import { EmailInput } from "../EmailInput/EmailInput";
import { PasswordInput } from "../PasswordInput/PasswordInput";
import { UsernameInput } from "../UsernameInput/UsernameInput";
import { SaveFormButton } from "../SaveFormButton/SaveFormButton";
import { Link } from "react-router-dom";

export function Register({
  handleInputEmail,
  handleInputPassword,
  userName,
  email,
  password,
  handleSubmitRegister,
  handleInputUsername,
  isRegisterPopupOpen,
  isLoginPopupOpen,
}) {
  return (
    <div className="entry entry_type_register">
      <h2 className="entry__title">Sign up</h2>
      <form className="entry__form" onSubmit={handleSubmitRegister}>
        <div className="form__inputs">
          <EmailInput email={email} onChange={handleInputEmail} />
          <PasswordInput password={password} onChange={handleInputPassword} />
          <UsernameInput userName={userName} onChange={handleInputUsername} />
        </div>
        <SaveFormButton />
      </form>
      <p className="entry__redirect-text">
        or{" "}
        <Link to={null} className="link link__hover entry__redirect-link">
          Sign in
        </Link>
      </p>
    </div>
  );
}
