import React, { useState } from "react";
import { SearchButton } from "../SearchButton/SearchButton";
import { SearchInput } from "../SearchInput/SearchInput";
import { useFormAndValidation } from "../../utils/FormValidator/useFormAndValidation";

export function SearchForm({ setKeyword, setShowArticles, setIsLoading }) {
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();
  const [searchInput, setSearchInput] = useState("");
  function handleGetKeyword(e) {
    e.preventDefault();
    setShowArticles(true);
    setIsLoading(true);
    setKeyword(searchInput);
  }
  return (
    <section className="search">
      <div className="search__content">
        <h2 className="search__title">What's going on in the world?</h2>
        <p className="search__text">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form className="search__form" onSubmit={handleGetKeyword}>
          <div className="search__bar">
            <SearchInput
              setSearchInput={setSearchInput}
              searchInput={searchInput}
            />
            <SearchButton />
          </div>
        </form>
      </div>
    </section>
  );
}
