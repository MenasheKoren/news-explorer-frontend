import React, { useState } from "react";
import { SearchButton } from "../SearchButton/SearchButton";
import { SearchInput } from "../SearchInput/SearchInput";

export function SearchForm({ setKeyword, setShowArticles, setIsLoading }) {
  const [searchInput, setSearchInput] = useState("");
  // const [form, setForm] = React.useState({});
  // const formRef = React.useRef();
  function handleGetKeywordInput(e) {
    e.preventDefault();
    setShowArticles(true);
    setIsLoading(true);
    setKeyword(searchInput);
  }
  // useEffect(() => {
  //   const validatedForm = new FormValidator(formSettings, formRef.current);
  //   validatedForm.enableValidation();
  //   setForm(validatedForm);
  // }, []);
  return (
    <section className="search">
      <div className="search__content">
        <h2 className="search__title">What's going on in the world?</h2>
        <p className="search__text">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form className="search__form" onSubmit={handleGetKeywordInput}>
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
