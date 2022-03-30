import React, { useContext } from "react";
import { FormInput } from "../FormInput/FormInput";
import { FormContext } from "../../contexts/FormContext";
import { PopupWithForm } from "../PopupWithForm/PopupWithForm";

export function Register({
  handleRegister,
  isOpen,
  handleSwitchPopup,
  closeAllPopups,
}) {
  const {
    username: [username, setUsername],
    email: [email, setEmail],
    password: [password, setPassword],
  } = useContext(FormContext);

  function handleRegisterSubmit(e) {
    e.preventDefault();
    handleRegister({
      username,
      email,
      password,
    });
  }

  return (
    <>
      <PopupWithForm
        type={"register"}
        handleSubmit={handleRegisterSubmit}
        isOpen={isOpen}
        title={"Sign up"}
        buttonText={"Sign up"}
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
      </PopupWithForm>
    </>
  );
}
