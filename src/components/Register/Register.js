import React from "react";
import { EmailInput } from "../EmailInput/EmailInput";
import { PasswordInput } from "../PasswordInput/PasswordInput";
import { UsernameInput } from "../UsernameInput/UsernameInput";
import { SaveFormButton } from "../SaveFormButton/SaveFormButton";
import { FormValidator } from "../../utils/FormValidator/FormValidator";
import { formSettings } from "../../utils/helpers";

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
  handleSwitchRegisterToLoginPopup,
}) {
  const [form, setForm] = React.useState({});
  const formRef = React.useRef();

  React.useEffect(() => {
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
          <EmailInput email={email} onChange={handleInputEmail} />
          <PasswordInput password={password} onChange={handleInputPassword} />
          <UsernameInput userName={userName} onChange={handleInputUsername} />
        </div>
        <SaveFormButton saveFormButtonText="Sign up" />
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
