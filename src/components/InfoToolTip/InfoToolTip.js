import React from "react";
import { PopupCloseButton } from "../PopupCloseButton/PopupCloseButton";

export const InfoToolTip = ({
  closeAllPopups,
  setIsLoginPopupOpen,
  isInfoToolTipOpen,
}) => {
  function handleRegistrationSuccessPopup() {
    closeAllPopups();
    setIsLoginPopupOpen(true);
  }

  return (
    <section
      className={[
        "popup popup__info-tool-tip",
        isInfoToolTipOpen ? "popup_opened" : "",
      ].join(" ")}
    >
      <div className="popup__container popup__container_type_info-tool-tip">
        <PopupCloseButton onClick={closeAllPopups} />
        <h2 className="popup__title info-tool-tip__title">
          Registration successfully completed!
        </h2>
        <button
          className="link link__hover info-tool-tip__redirect-link"
          onClick={handleRegistrationSuccessPopup}
        >
          Sign in
        </button>
      </div>
    </section>
  );
};
