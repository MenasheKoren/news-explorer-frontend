import React from "react";
import { PopupCloseButton } from "../PopupCloseButton/PopupCloseButton";
import { MobileCloseButton } from "../MobileCloseButton/MobileCloseButton";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";

export function PopupWithForm({
  closeAllPopups,
  isMobile,
  isRegisterPopupOpen,
  isLoginPopupOpen,
  handleSwitchPopup,
  handleSubmitInfoToolTip,
  handleSetRegistration,
  handleLogin,
  handleFormValidationEffect,
}) {
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

        {isRegisterPopupOpen && (
          <Register
            handleSwitchPopup={handleSwitchPopup}
            handleSubmitInfoToolTip={handleSubmitInfoToolTip}
            handleSetRegistration={handleSetRegistration}
            handleFormValidationEffect={handleFormValidationEffect}
          />
        )}
        {isLoginPopupOpen && (
          <Login
            handleSwitchPopup={handleSwitchPopup}
            handleSubmitInfoToolTip={handleSubmitInfoToolTip}
            handleLogin={handleLogin}
            closeAllPopups={closeAllPopups}
            handleFormValidationEffect={handleFormValidationEffect}
          />
        )}
      </div>
    </section>
  );
}
