import React from "react";

export function FormRedirect({ handleSwitchPopup, isRegisterPopupOpen }) {
  return (
    <p className="entry__redirect-text">
      or{" "}
      <button
        className="link link__hover entry__redirect-link"
        onClick={handleSwitchPopup}
      >
        {isRegisterPopupOpen ? "Sign in" : "Sign up"}
      </button>
    </p>
  );
}
