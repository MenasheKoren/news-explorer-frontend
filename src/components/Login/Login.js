import React from "react";
import { Link } from "react-router-dom";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { EmailInput } from "../EmailInput/EmailInput";
import { PasswordInput } from "../PasswordInput/PasswordInput";
import { SaveFormButton } from "../SaveFormButton/SaveFormButton";

export default function Login({
  handleInputEmail,
  handleInputPassword,
  email,
  password,
  handleSubmitLogin,
}) {
  return (
    <PopupWithForm>
      <section className={`entry entry_type_login`}>
        <h2 className="entry__title">Log in</h2>
        <form className="entry__form" onSubmit={handleSubmitLogin}>
          <EmailInput email={email} onChange={handleInputEmail} />
          <PasswordInput password={password} onChange={handleInputPassword} />
          <SaveFormButton />
        </form>
        <Link to="/signup" className="link link__hover entry__redirect-text">
          Not a member yet? Sign up here!
        </Link>
      </section>
    </PopupWithForm>
  );
}
