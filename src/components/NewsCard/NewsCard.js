import React, { useState } from "react";
import { Bookmark } from "../Bookmark/Bookmark";
import { mainApi } from "../../utils/MainApi";

export function NewsCard({
  articles: { description, publishedAt, source, title, urlToImage, url },
  isLoggedIn,
  keyword,
  savedArticles,
  setSavedArticles,
}) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  function handleSaveBookmarkedArticles() {
    if (!isBookmarked) {
      mainApi
        .addArticle({
          keyword,
          title,
          text: description,
          date: `${new Date(publishedAt).toISOString()}`,
          source: source.name,
          link: url,
          image: urlToImage,
        })
        .then(() => {
          setIsBookmarked(true);
        })
        .catch((err) => console.log(`Error..... ${err}`));
    } else {
      /* todo Fix delete card function */
      mainApi
        .deleteArticle()
        .then(() => {
          const deletedArticleId = NewsCard.key;
          setSavedArticles(
            savedArticles.filter((article) => article._id !== deletedArticleId)
          );
        })
        .catch((err) => console.log(`Error..... ${err}`));
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
          handleSaveBookmarkedArticles={handleSaveBookmarkedArticles}
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
        <h3
          className="news-card__title"
          onClick={() => {
            window.open(url, "_blank");
          }}
          style={{ cursor: "pointer" }}
        >
          {title}
        </h3>
        <p className="news-card__text">{description}</p>
        <h4 className="news-card__source">{source.name}</h4>
      </div>
    </li>
  );
}
