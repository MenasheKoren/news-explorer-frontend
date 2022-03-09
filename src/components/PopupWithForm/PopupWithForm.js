import React from "react";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { PopupCloseButton } from "../PopupCloseButton/PopupCloseButton";
import { MobileCloseButton } from "../MobileCloseButton/MobileCloseButton";

export function PopupWithForm({
  closeAllPopups,
  isLoginPopupOpen,
  isRegisterPopupOpen,
  isRegistered,
  isMobile,
  isMonitorOrTablet,
}) {
  return (
    <section
      className={[
        `popup `,
        isRegisterPopupOpen || isLoginPopupOpen ? "popup_opened" : "",
      ].join(" ")}
    >
      <div className="popup__container">
        {isMonitorOrTablet && <PopupCloseButton onClick={closeAllPopups} />}
        {isMobile && <MobileCloseButton onClick={closeAllPopups} />}

        {!isRegistered && <Register />}
        {isRegistered && <Login />}
      </div>
    </section>
  );
}
