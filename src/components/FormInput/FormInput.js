import React from "react";

export function FormInput({
  id,
  name,
  placeholder,
  type,
  label,
  defaultValue,
  minLength,
  maxLength,
  pattern,
  handleInput,
}) {
  return (
    <label htmlFor={id} className="form__label">
      {label}
      <input
        type={type}
        className="field-input "
        placeholder={placeholder}
        id={id}
        name={name}
        defaultValue={defaultValue}
        onChange={handleInput}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        required
      />
      <span className="error-message" id={`${name}-input-error`} />
    </label>
  );
}
