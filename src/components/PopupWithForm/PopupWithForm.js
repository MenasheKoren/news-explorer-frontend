import React from "react";
import Register from "../Register/Register";
import Login from "../Login/Login";

const PopupWithForm = ({
  name,
  title,
  children,
  isOpen,
  closeAllPopups,
  buttonText,
  handleSubmit,
  isLoginPopupOpen,
  isRegisterPopupOpen,
  isLoggedIn,
  isRegistered,
}) => {
  return (
    <section
      className={[
        `popup `,
        isRegisterPopupOpen || isLoginPopupOpen ? "popup_opened" : "",
      ].join(" ")}
    >
      <div className="popup__container">
        <button
          className="popup__close button "
          type="button"
          onClick={closeAllPopups}
        />
        {!isRegistered && <Register />}
        {isRegistered && <Login />}
      </div>
    </section>
  );
};

export default PopupWithForm;
