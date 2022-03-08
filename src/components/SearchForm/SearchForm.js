import React from "react";
import { SearchButton } from "../SearchButton/SearchButton";
import { SearchInput } from "../SearchInput/SearchInput";

export function SearchForm() {
  return (
    <section className="search">
      <div className="search__content">
        <h2 className="search__title">What's going on in the world?</h2>
        <p className="search__text">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form className="search__form">
          <div className="search__bar">
            <SearchInput />
            {/* todo set styles for different states */}
            <SearchButton />
          </div>
        </form>
      </div>
    </section>
  );
}
