import React from "react";
import { useLocation } from "react-router-dom";
import { PopupCloseButton } from "../PopupCloseButton/PopupCloseButton";

export const InfoToolTip = ({ closeAllPopups, isOpen }) => {
  const location = useLocation();

  return (
    <section
      className={[
        "popup popup__info-tool-tip",
        isOpen ? "popup_opened" : "",
      ].join(" ")}
    >
      <div className="popup__container popup__container_type_info-tool-tip">
        <PopupCloseButton onClick={closeAllPopups} />
        <h2 className="popup__title info-tool-tip__title">
          Registration successfully completed!
        </h2>
        <a
          href="#"
          className="link link__hover info-tool-tip__redirect-link"
          onClick={closeAllPopups}
        >
          Sign in
        </a>
      </div>
    </section>
  );
};
