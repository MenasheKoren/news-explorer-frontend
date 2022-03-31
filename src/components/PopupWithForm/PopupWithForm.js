import React, { useEffect } from "react";
import { PopupCloseButton } from "../PopupCloseButton/PopupCloseButton";
import { MobileCloseButton } from "../MobileCloseButton/MobileCloseButton";
import { SaveFormButton } from "../SaveFormButton/SaveFormButton";
import { FormValidator } from "../../utils/FormValidator/FormValidator";
import { formSettings } from "../../utils/helpers";

export function PopupWithForm({
  closeAllPopups,
  isMobile,
  handleSwitchPopup,
  isOpen,
  type,
  handleSubmit,
  title,
  buttonText,
  children,
}) {
  const [form, setForm] = React.useState({});
  const formRef = React.useRef();

  useEffect(() => {
    const validatedForm = new FormValidator(formSettings, formRef.current);
    validatedForm.enableValidation();
    setForm(validatedForm);
  }, [isOpen]);
  return (
    <section
      className={[
        `popup popup_type_${type}`,
        isOpen ? "popup_opened" : "",
      ].join(" ")}
    >
      <div className="popup__container">
        <PopupCloseButton onClick={closeAllPopups} />
        {isMobile && <MobileCloseButton onClick={closeAllPopups} />}

        <div className={`entry entry_type_${type}`}>
          <h2 className="entry__title">{title}</h2>

          <form className="entry__form" onSubmit={handleSubmit} ref={formRef}>
            {children}
            <SaveFormButton saveFormButtonText={buttonText} />
          </form>
          <p className="entry__redirect-text">
            or{" "}
            <button
              className="link link__hover entry__redirect-link"
              onClick={handleSwitchPopup}
            >
              {type === "register" ? "Sign in" : "Sign up"}
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
