import React from "react";
import { PopupCloseButton } from "../PopupCloseButton/PopupCloseButton";
import { MobileCloseButton } from "../MobileCloseButton/MobileCloseButton";
import { FormRedirect } from "../FormRedirect/FormRedirect";
import { SaveFormButton } from "../SaveFormButton/SaveFormButton";

export function PopupWithForm({
  closeAllPopups,
  isMobile,
  isRegisterPopupOpen,
  isLoginPopupOpen,
  handleSwitchPopup,
  handleSetRegistration,
  handleLogin,
  children,
  isOpen,
}) {
  return (
    <section className={[`popup `, isOpen ? "popup_opened" : ""].join(" ")}>
      <div className="popup__container">
        <PopupCloseButton onClick={closeAllPopups} />
        {isMobile && <MobileCloseButton onClick={closeAllPopups} />}

        <div className="entry">
          <h2 className="entry__title">
            {isRegisterPopupOpen ? "Sign up" : "Sign in"}
          </h2>
          <form
            className="entry__form"
            onSubmit={isRegisterPopupOpen ? handleSetRegistration : handleLogin}
          >
            {children}
            <SaveFormButton
              saveFormButtonText={isRegisterPopupOpen ? "Sign up" : "Sign in"}
            />
          </form>
          <FormRedirect
            handleSwitchPopup={handleSwitchPopup}
            isRegisterPopupOpen={isRegisterPopupOpen}
            isLoginPopupOpen={isLoginPopupOpen}
          />
        </div>
      </div>
    </section>
  );
}
