import React from "react";

export function SearchInput({ searchInput, setSearchInput }) {
  return (
    <input
      type="text"
      className="search__input"
      placeholder="Enter topic"
      required
      value={searchInput || ""}
      onChange={(e) => {
        setSearchInput(e.target.value);
      }}
    />
  );
}
