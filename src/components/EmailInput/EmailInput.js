import React from "react";

export function EmailInput(props) {
  return (
    <label htmlFor="emailInput" className="form__label">
      Email
      <input
        type="email"
        className="field-input "
        placeholder="Email"
        id="emailInput"
        name="email"
        defaultValue={props.email || ""}
        onChange={props.onChange}
        required
      />
      <span className="error-message" id="email-input-error" />
    </label>
  );
}
