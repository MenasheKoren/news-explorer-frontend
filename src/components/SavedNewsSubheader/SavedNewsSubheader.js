import React from "react";

export function SavedNewsSubheader({ username, totalResult }) {
  return (
    <section className="saved-news__subheader">
      <h2 className="subheader__title">Saved articles</h2>
      <p className="subheader__article-count">
        {username}, you have {totalResult} saved articles
      </p>
      <p className="subheader__keywords-list">
        By keywords:{" "}
        <span className="keywords-list__span">
          Nature, Yellowstone, and 2 others
        </span>
      </p>
    </section>
  );
}
