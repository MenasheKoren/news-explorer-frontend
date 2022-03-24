import React, { useContext, useEffect } from "react";
import { FormInput } from "../FormInput/FormInput";
import { SaveFormButton } from "../SaveFormButton/SaveFormButton";
import { FormValidator } from "../../utils/FormValidator/FormValidator";
import { formSettings } from "../../utils/helpers";
import * as auth from "../../utils/auth";
import { FormContext } from "../../contexts/FormContext";

export function Register({
  handleSetRegistration,
  handleSubmitInfoToolTip,
  handleSwitchPopup,
}) {
  const {
    username: [username, setUsername],
    email: [email, setEmail],
    password: [password, setPassword],
  } = useContext(FormContext);

  const [form, setForm] = React.useState({});
  const formRef = React.useRef();

  function handleSubmitRegister(e) {
    e.preventDefault();
    auth
      .register({
        username,
        email,
        password,
      })
      .then((result) => {
        if (result && result._id) {
          handleSetRegistration();
          handleSubmitInfoToolTip();
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
          <FormInput
            label="Username"
            handleInput={(e) => {
              setUsername(e.target.value);
            }}
            type="username"
            placeholder="Enter username"
            id="usernameInput"
            name="username"
            defaultValue={username || ""}
          />
        </div>
        <SaveFormButton saveFormButtonText="Sign up" />
      </form>
      <p className="entry__redirect-text">
        or{" "}
        <a
          href="#"
          className="link link__hover entry__redirect-link"
          onClick={handleSwitchPopup}
        >
          Sign in
        </a>
      </p>
    </div>
  );
}
