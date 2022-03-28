import React, { useContext } from "react";
import { FormInput } from "../FormInput/FormInput";
import { useFormAndValidation } from "../../utils/FormValidator/useFormAndValidation";
import { FormContext } from "../../contexts/FormContext";

export function Login({ handleLogin, handleSwitchPopup, isOpen }) {
  const {
    email: [email, setEmail],
    password: [password, setPassword],
  } = useContext(FormContext);
  // const [form, setForm] = React.useState({});
  const formRef = React.useRef();
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  return (
    // <div className="entry entry_type_login">
    //   <h2 className="entry__title">Log in</h2>
    //   <form className="entry__form" onSubmit={handleLogin} ref={formRef}>
    <>
      {isOpen && (
        <div className="form__inputs">
          <FormInput
            value={email || ""}
            type="email"
            placeholder="Enter email"
            id="emailInput"
            name="email"
            label="Email"
            onChange={handleChange}
          />
          <FormInput
            label="Password"
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
      )}
    </>
    // </form>
    // </div>
  );
}
