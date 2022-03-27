import React from "react";

export function SearchInput({ searchInput, setSearchInput }) {
  return (
    <>
      <input
        type="text"
        className="search__input"
        placeholder="Enter topic"
        name="search"
        required
        value={searchInput || ""}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <span className="error-message" id="search-input-error" />
    </>
  );
}
