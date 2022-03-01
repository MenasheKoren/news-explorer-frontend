import * as React from "react";
import { About } from "../About/About";

export function Main() {
  return (
    <main className="main">
      <section className="search">
        <div className="search__content">
          <h2 className="search__title">What's going on in the world?</h2>
          <p className="search__text">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <form className="search__form">
            <div className="search__bar">
              <input
                type="text"
                className="search__input"
                placeholder="Enter topic"
                required
              />
              <button className="search__button button" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </section>
      <About />
    </main>
  );
}
