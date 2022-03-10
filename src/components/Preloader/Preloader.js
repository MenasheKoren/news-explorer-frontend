import React from "react";

export function Preloader() {
  return (
    <div className="preloader">
      <svg className="preloader__spinner">
        <circle cx="60" cy="60" r="54" />
      </svg>
      <p className="preloader__text">Searching for news...</p>
    </div>
  );
}
