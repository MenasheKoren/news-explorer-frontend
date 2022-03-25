import React from "react";

export function SavedNewsSubheader({
  username,
  totalSavedArticles,
  keywordList,
}) {
  let keywordListText;

  if (keywordList.length >= 3) {
    keywordListText = `${keywordList[0]}, ${keywordList[1]}, and ${
      keywordList.length - 2
    } other`;
  } else if (keywordList.length === 2) {
    keywordListText = `${keywordList[0]} and ${keywordList[1]}`;
  } else if (keywordList.length <= 1) {
    keywordListText = `${keywordList}`;
  } else {
    keywordListText = "";
  }

  return (
    <section className="saved-news__subheader">
      <h2 className="subheader__title">Saved articles</h2>
      <p className="subheader__article-count">
        {username}, you have {totalSavedArticles} saved articles
      </p>
      <p className="subheader__keywords-list">
        By keywords:{" "}
        <span className="keywords-list__span">{keywordListText}</span>
      </p>
    </section>
  );
}
