import React from "react";
import { Link } from "react-router-dom";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

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
          <label htmlFor="emailInput" className="form__label">
            Email
            <input
              type="email"
              className="field-input field-input_type_entry"
              placeholder="Email"
              id="emailInput"
              name="email"
              defaultValue={email || ""}
              onChange={handleInputEmail}
              required
            />
            <span className="error-message" id="email-input-error" />
          </label>
          <label htmlFor="passwordInput" className="form__label">
            Password
            <input
              type="password"
              className="field-input field-input_type_entry"
              placeholder="Password"
              id="passwordInput"
              name="password"
              defaultValue={password || ""}
              onChange={handleInputPassword}
              required
              minLength="2"
              maxLength="40"
              pattern=".*\S.*"
            />
            <span className="error-message" id="password-input-error" />
          </label>
          <button className="entry__save button " type="submit">
            Log in
          </button>
        </form>
        <Link to="/signup" className="link link__hover entry__redirect-text">
          Not a member yet? Sign up here!
        </Link>
      </section>
    </PopupWithForm>
  );
}
