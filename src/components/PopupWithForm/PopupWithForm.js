import React, { useContext } from "react";
import { PopupCloseButton } from "../PopupCloseButton/PopupCloseButton";
import { MobileCloseButton } from "../MobileCloseButton/MobileCloseButton";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { FormContext } from "../../contexts/FormContext";

export function PopupWithForm({
  closeAllPopups,
  isMobile,
  isRegistered,
  isRegisterPopupOpen,
  isLoginPopupOpen,
  handleInputPassword,
  handleInputUsername,
  handleInputEmail,
  handleSwitchPopup,
}) {
  const {
    username: [username, setUsername],
    email: [email, setEmail],
    password: [password, setPassword],
  } = useContext(FormContext);

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
