import React, { useContext, useEffect } from "react";
import { FormInput } from "../FormInput/FormInput";
import { SaveFormButton } from "../SaveFormButton/SaveFormButton";
import { FormValidator } from "../../utils/FormValidator/FormValidator";
import { formSettings } from "../../utils/helpers";
import { FormContext } from "../../contexts/FormContext";
import * as auth from "../../utils/auth";

export function Login({ handleLogin, handleSwitchPopup, closeAllPopups }) {
  const {
    email: [email, setEmail],
    password: [password, setPassword],
  } = useContext(FormContext);
  const [form, setForm] = React.useState({});
  const formRef = React.useRef();

  function handleSubmitLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          handleLogin().then(() => {
            closeAllPopups();
          });
        }
      })
      .catch((err) => {
        console.log(`Error..... ${err}`);
      });
  }

  useEffect(() => {
    const validatedForm = new FormValidator(formSettings, formRef.current);
    validatedForm.enableValidation();
    setForm(validatedForm);
  }, []);
  return (
    <div className="entry entry_type_login">
      <h2 className="entry__title">Log in</h2>
      <form className="entry__form" onSubmit={handleSubmitLogin} ref={formRef}>
        <div className="form__inputs">
          <FormInput
            defaultValue={email || ""}
            handleInput={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter email"
            id="emailInput"
            name="email"
            label="Email"
          />
          <FormInput
            label="Password"
            handleInput={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter password"
            id="passwordInput"
            name="password"
            defaultValue={password || ""}
            minLength="2"
            maxLength="40"
            pattern=".*\S.*"
          />
        </div>
        <SaveFormButton saveFormButtonText="Sign in" />
      </form>
      <p className="entry__redirect-text">
        or{" "}
        <button
          className="link link__hover entry__redirect-link"
          onClick={handleSwitchPopup}
        >
          Sign up
        </button>
      </p>
    </div>
  );
}
