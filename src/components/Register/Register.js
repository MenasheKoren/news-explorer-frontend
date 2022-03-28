import React, { useContext } from "react";
import { FormInput } from "../FormInput/FormInput";
import * as auth from "../../utils/auth";
import { FormContext } from "../../contexts/FormContext";
import { useFormAndValidation } from "../../utils/FormValidator/useFormAndValidation";

export function Register({
  handleSetRegistration,
  handleSubmitInfoToolTip,
  handleSwitchPopup,
  isOpen,
}) {
  const {
    username: [username, setUsername],
    email: [email, setEmail],
    password: [password, setPassword],
  } = useContext(FormContext);
  const [form, setForm] = React.useState({});
  const formRef = React.useRef();
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

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

  return (
    // <div className="entry entry_type_register">
    //   /*<h2 className="entry__title">Sign up</h2>*/}
    // <form
    //   className="entry__form"
    //   ref={formRef}
    //   onSubmit={handleSubmitRegister}
    // >
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
          <FormInput
            label="Username"
            type="username"
            placeholder="Enter username"
            id="usernameInput"
            name="username"
            value={username || ""}
          />
        </div>
      )}
    </>

    //   <SaveFormButton saveFormButtonText="Sign up" />
    // </form>
    //<FormRedirect onClick={handleSwitchPopup} />
    // </div>
  );
}
