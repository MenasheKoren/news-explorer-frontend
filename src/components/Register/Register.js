import React, { useContext } from "react";
import { FormInput } from "../FormInput/FormInput";
import { FormContext } from "../../contexts/FormContext";

export function Register({
  handleSetRegistration,
  handleSubmitInfoToolTip,
  isOpen,
}) {
  const {
    username: [username, setUsername],
    email: [email, setEmail],
    password: [password, setPassword],
  } = useContext(FormContext);
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
      {isOpen && (
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
          <FormInput
            label="Username"
            handleInput={(e) => {
              setUsername(e.target.value);
            }}
            type="username"
            placeholder="Enter username"
            id="usernameInput"
            name="username"
            value={username || ""}
          />
        </div>
      )}
    </>
  );
}
