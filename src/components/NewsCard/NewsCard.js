import React, { useState } from "react";
import { Bookmark } from "../Bookmark/Bookmark";

export function NewsCard({
  articles: { description, publishedAt, source, title, urlToImage },
  isLoggedIn,
  savedArticles,
  setSavedArticles,
}) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [saveArticle, setSaveArticle] = useState({});

  function handleToggleBookmarkIcon() {
    setIsBookmarked(!isBookmarked);
  }

  function saveBookmarkedArticles() {
    if (!isBookmarked) {
      setIsBookmarked(true);
      setSavedArticles([...savedArticles]);
    } else {
      setIsBookmarked(false);
    }
  }

  return (
    <li className="news-card">
      <div
        className="news-card__image"
        style={{
          backgroundImage: `url(${urlToImage})`,
        }}
      >
        <Bookmark
          handleToggleBookmarkIcon={handleToggleBookmarkIcon}
          isBookmarked={isBookmarked}
          isLoggedIn={isLoggedIn}
        />
      </div>
      <div className="news-card__text-container">
        <p className="news-card__date">
          {new Date(publishedAt).toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__text">{description}</p>
        <h4 className="news-card__source">{source.name}</h4>
      </div>
    </li>
  );
}
