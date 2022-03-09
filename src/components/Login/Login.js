import React from "react";
import { EmailInput } from "../EmailInput/EmailInput";
import { PasswordInput } from "../PasswordInput/PasswordInput";
import { SaveFormButton } from "../SaveFormButton/SaveFormButton";
import { Link } from "react-router-dom";
import { Register } from "../Register/Register";

export function Login({
  handleInputEmail,
  handleInputPassword,
  email,
  password,
  handleSubmitLogin,
}) {
  return (
    <div className="entry entry_type_login">
      <h2 className="entry__title">Log in</h2>
      <form className="entry__form" onSubmit={handleSubmitLogin}>
        <div className="form__inputs">
          <EmailInput email={email} onChange={handleInputEmail} />
          <PasswordInput password={password} onChange={handleInputPassword} />
        </div>
        <SaveFormButton />
      </form>
      <p className="entry__redirect-text">
        or{" "}
        <Link to={Register} className="link link__hover entry__redirect-link">
          Sign up
        </Link>
      </p>
    </div>
  );
}
