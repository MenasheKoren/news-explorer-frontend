import React, { useEffect } from "react";
import { FormInput } from "../FormInput/FormInput";
import { SaveFormButton } from "../SaveFormButton/SaveFormButton";
import { FormValidator } from "../../utils/FormValidator/FormValidator";
import { formSettings } from "../../utils/helpers";
import * as auth from "../../utils/auth";

export function Register({
  handleInputEmail,
  handleInputPassword,
  userName,
  email,
  password,
  handleSetRegistration,
  handleInputUsername,
  handleSwitchRegisterToLoginPopup,
  handleSubmitInfoToolTip,
}) {
  const [form, setForm] = React.useState({});
  const formRef = React.useRef();

  function handleSubmitRegister(e) {
    e.preventDefault();
    auth
      .register({
        // eslint-disable-next-line no-restricted-globals
        userName: name,
        email: email,
        password: password,
      })
      .then((result) => {
        if (result && result._id) {
          handleSetRegistration();
        }
      })
      .catch((err) => {
        console.log(`Error..... ${err}`);
      })
      .finally((result) => {
        console.log(`Did it work? ${result} `);
      });
  }

  useEffect(() => {
    const validatedForm = new FormValidator(formSettings, formRef.current);
    validatedForm.enableValidation();
    setForm(validatedForm);
  }, []);

  return (
    <div className="entry entry_type_register">
      <h2 className="entry__title">Sign up</h2>
      <form
        className="entry__form"
        ref={formRef}
        onSubmit={handleSubmitRegister}
      >
        <div className="form__inputs">
          <FormInput
            defaultValue={email || ""}
            handleInput={handleInputEmail}
            type="email"
            placeholder="Enter email"
            id="emailInput"
            name="email"
            label="Email"
          />
          <FormInput
            label="Password"
            handleInput={handleInputPassword}
            type="password"
            placeholder="Enter password"
            id="passwordInput"
            name="password"
            defaultValue={password || ""}
            minLength="2"
            maxLength="40"
            pattern=".*\S.*"
          />
          <FormInput
            label="Username"
            handleInput={handleInputUsername}
            type="username"
            placeholder="Enter username"
            id="usernameInput"
            name="username"
          />
        </div>
        <SaveFormButton
          saveFormButtonText="Sign up"
          handleSubmitInfoToolTip={handleSubmitInfoToolTip}
        />
      </form>
      <p className="entry__redirect-text">
        or{" "}
        <a
          href="#"
          className="link link__hover entry__redirect-link"
          onClick={handleSwitchRegisterToLoginPopup}
        >
          Sign in
        </a>
      </p>
    </div>
  );
}
