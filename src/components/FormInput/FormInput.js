import React from "react";
import { useFormAndValidation } from "../../utils/FormValidator/useFormAndValidation";

export function FormInput({
  id,
  name,
  placeholder,
  type,
  label,
  // value,
  minLength,
  maxLength,
  pattern,
}) {
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();
  return (
    <label htmlFor={id} className="form__label">
      {label}
      <input
        type={type}
        className="field-input "
        placeholder={placeholder}
        id={id}
        name={name}
        // value={values}
        // value={values.value || ""}
        onChange={handleChange}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        required
      />
      <span className="error-message" id={`${name}-input-error`} />
    </label>
  );
}
