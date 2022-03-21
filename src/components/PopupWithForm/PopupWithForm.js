import React, { useContext, useState } from "react";
import { PopupCloseButton } from "../PopupCloseButton/PopupCloseButton";
import { MobileCloseButton } from "../MobileCloseButton/MobileCloseButton";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { FormContext } from "../../contexts/FormContext";

export function PopupWithForm({ closeAllPopups, isRegistered, isMobile }) {
  const {
    username: [username, setUsername],
    email: [email, setEmail],
    password: [password, setPassword],
  } = useContext(FormContext);

  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  function handleSwitchPopup() {
    setIsRegisterPopupOpen(!isRegisterPopupOpen);
    setIsLoginPopupOpen(!isLoginPopupOpen);
  }

  function handleInputUsername(e) {
    e.preventDefault();
    setUsername(e.target.value);
  }

  function handleInputEmail(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function handleInputPassword(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  return (
    <section
      className={[
        `popup `,
        isRegisterPopupOpen || isLoginPopupOpen ? "popup_opened" : "",
      ].join(" ")}
    >
      <div className="popup__container">
        <PopupCloseButton onClick={closeAllPopups} />
        {isMobile && <MobileCloseButton onClick={closeAllPopups} />}

        {!isRegistered && (
          <Register
            handleInputEmail={handleInputEmail}
            handleInputPassword={handleInputPassword}
            handleInputUsername={handleInputUsername}
            handleSwitchPopup={handleSwitchPopup}
          />
        )}
        {isRegistered && (
          <Login
            handleInputEmail={handleInputEmail}
            handleInputPassword={handleInputPassword}
            handleSwitchPopup={handleSwitchPopup}
          />
        )}
      </div>
    </section>
  );
}
