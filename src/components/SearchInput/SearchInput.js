import React from "react";
import { useFormAndValidation } from "../../utils/FormValidator/useFormAndValidation";

export function SearchInput({ searchInput, setSearchInput }) {
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();
  return (
    <>
      <input
        type="text"
        className="search__input"
        placeholder="Enter topic"
        name="searchInput"
        required
        // value={searchInput || ""}
        onChange={handleChange}
      />
      <span className="error-message" id="search-input-error" />
    </>
  );
}
