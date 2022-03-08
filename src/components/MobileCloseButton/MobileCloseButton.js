import React from "react";

export function MobileCloseButton({ onClick }) {
  return (
    <button
      className="mobile-menu__close button"
      type="button"
      onClick={onClick}
    />
  );
}
