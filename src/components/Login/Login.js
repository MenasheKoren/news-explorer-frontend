import React, { useEffect } from "react";
import { FormInput } from "../FormInput/FormInput";
import { SaveFormButton } from "../SaveFormButton/SaveFormButton";
import { FormValidator } from "../../utils/FormValidator/FormValidator";
import { formSettings } from "../../utils/helpers";

export function Login({
  handleInputEmail,
  handleInputPassword,
  email,
  password,
  handleSubmitLogin,
  handleSwitchLoginToRegisterPopup,
}) {
  const [form, setForm] = React.useState({});
  const formRef = React.useRef();

  useEffect(() => {
    const validatedForm = new FormValidator(formSettings, formRef.current);
    validatedForm.enableValidation();
    setForm(validatedForm);
  }, []);
  return (
    <div className="entry entry_type_login">
      <h2 className="entry__title">Log in</h2>
      <form className="entry__form" onSubmit={handleSubmitLogin}>
        <div className="form__inputs">
          <FormInput
            defaultValue={email || ""}
            onChange={handleInputEmail}
            type="email"
            placeholder="Enter email"
            id="emailInput"
            name="email"
            label="Email"
          />
          <FormInput
            label="Password"
            onChange={handleInputPassword}
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
          onClick={handleSwitchLoginToRegisterPopup}
        >
          Sign up
        </button>
      </p>
    </div>
  );
}
