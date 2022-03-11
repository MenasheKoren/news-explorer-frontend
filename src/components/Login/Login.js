import React from "react";
import { EmailInput } from "../EmailInput/EmailInput";
import { PasswordInput } from "../PasswordInput/PasswordInput";
import { SaveFormButton } from "../SaveFormButton/SaveFormButton";
import { FormValidator } from "../../utils/FormValidator/FormValidator";
import { formSettings } from "../../utils/helpers";

export function Login({
  handleInputEmail,
  handleInputPassword,
  email,
  password,
  handleSubmitLogin,
  isLoginPopupOpen,
  isRegisterPopupOpen,
  handleSwitchLoginToRegisterPopup,
}) {
  const [form, setForm] = React.useState({});
  const formRef = React.useRef();

  React.useEffect(() => {
    const validatedForm = new FormValidator(formSettings, formRef.current);
    validatedForm.enableValidation();
    setForm(validatedForm);
  }, []);
  return (
    <div className="entry entry_type_login">
      <h2 className="entry__title">Log in</h2>
      <form className="entry__form" onSubmit={handleSubmitLogin}>
        <div className="form__inputs">
          <EmailInput email={email} onChange={handleInputEmail} />
          <PasswordInput password={password} onChange={handleInputPassword} />
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
