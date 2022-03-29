import React, { useContext, useEffect } from "react";
import { PopupCloseButton } from "../PopupCloseButton/PopupCloseButton";
import { MobileCloseButton } from "../MobileCloseButton/MobileCloseButton";
import { FormRedirect } from "../FormRedirect/FormRedirect";
import { SaveFormButton } from "../SaveFormButton/SaveFormButton";
import { FormContext } from "../../contexts/FormContext";
import { FormValidator } from "../../utils/FormValidator/FormValidator";
import { formSettings } from "../../utils/helpers";

export function PopupWithForm({
  closeAllPopups,
  isMobile,
  isRegisterPopupOpen,
  isLoginPopupOpen,
  handleSwitchPopup,
  handleSubmitRegister,
  handleLogin,
  children,
  isOpen,
}) {
  const {
    username: [username, setUsername],
    email: [email, setEmail],
    password: [password, setPassword],
  } = useContext(FormContext);
  const [form, setForm] = React.useState({});
  const formRef = React.useRef();

  useEffect(() => {
    const validatedForm = new FormValidator(formSettings, formRef.current);
    validatedForm.enableValidation();
    setForm(validatedForm);
  }, []);
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
            onSubmit={(e) => {
              e.preventDefault();
              isRegisterPopupOpen
                ? handleSubmitRegister(email, password, username)
                : handleLogin(email, password);
            }}
            ref={formRef}
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
