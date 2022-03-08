import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

export default function Register({
  handleInputEmail,
  handleInputPassword,
  userName,
  email,
  password,
  handleSubmitRegister,
  closeAllPopups,
  handleInputUsername,
  isOpen,
}) {
  return (
    <section className={`entry entry_type_signup`}>
      <h2 className="entry__title">Sign up</h2>
      <form className="entry__form" onSubmit={handleSubmitRegister}>
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
        <label htmlFor="usernameInput" className="form__label">
          Username
          <input
            type="username"
            className="field-input field-input_type_entry"
            placeholder="Username"
            id="usernameInput"
            name="username"
            defaultValue={userName || ""}
            onChange={handleInputUsername}
            required
          />
          <span className="error-message" id="username-input-error" />
        </label>

        <button className="entry__save button " type="submit">
          Sign up
        </button>
      </form>
      <Link to={<Login />} className="link link__hover entry__redirect-text">
        Already a member? Log in here!
      </Link>
    </section>
  );
}
