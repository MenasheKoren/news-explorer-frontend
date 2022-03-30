import React, { useContext } from "react";
import { FormInput } from "../FormInput/FormInput";
import { FormContext } from "../../contexts/FormContext";
import { PopupWithForm } from "../PopupWithForm/PopupWithForm";

export function Login({
  handleLogin,
  handleSwitchPopup,
  isOpen,
  closeAllPopups,
}) {
  const {
    email: [email, setEmail],
    password: [password, setPassword],
  } = useContext(FormContext);

  function handleLoginSubmit(e) {
    e.preventDefault();
    handleLogin({
      email,
      password,
    });
  }
  // const [form, setForm] = React.useState({});
  // const formRef = React.useRef();
  //
  // useEffect(() => {
  //   const validatedForm = new FormValidator(formSettings, formRef.current);
  //   validatedForm.enableValidation();
  //   setForm(validatedForm);
  // }, []);
  return (
    <>
      <PopupWithForm
        type={"login"}
        handleSubmit={handleLoginSubmit}
        isOpen={isOpen}
        title={"Sign in"}
        buttonText={"Sign in"}
        handleSwitchPopup={handleSwitchPopup}
        closeAllPopups={closeAllPopups}
      >
        <div className="form__inputs">
          <FormInput
            value={email || ""}
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
            value={password || ""}
            minLength="2"
            maxLength="40"
            pattern=".*\S.*"
          />
        </div>
      </PopupWithForm>
    </>
  );
}
