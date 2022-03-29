import React from "react";
import { FormInput } from "../FormInput/FormInput";

export function Register({
  handleSetRegistration,
  handleSubmitInfoToolTip,
  isOpen,
}) {
  // const {
  //   username: [username, setUsername],
  //   email: [email, setEmail],
  //   password: [password, setPassword],
  // } = useContext(FormContext);
  // const [form, setForm] = React.useState({});
  // const formRef = React.useRef();
  // const { values, handleChange, errors, isValid, setValues, resetForm } =
  //   useFormAndValidation();

  return (
    <>
      {isOpen && (
        <div className="form__inputs">
          <FormInput
            // value={email || ""}
            type="email"
            placeholder="Enter email"
            id="emailInput"
            name="email"
            label="Email"
            // onChange={handleChange}
            // values
          />
          <FormInput
            label="Password"
            type="password"
            placeholder="Enter password"
            id="passwordInput"
            name="password"
            // value={password || ""}
            // values
            // onChange={handleChange}
            minLength="2"
            maxLength="40"
            pattern=".*\S.*"
          />
          <FormInput
            label="Username"
            type="username"
            placeholder="Enter username"
            id="usernameInput"
            name="username"
            // value={username || ""}
            // values
            // onChange={handleChange}
          />
        </div>
      )}
    </>
  );
}
