import React, { useState } from "react";
import { Bookmark } from "../Bookmark/Bookmark";
import { mainApi } from "../../utils/MainApi";

export function NewsCard({ articleData, removeFromSaved, isLoggedIn }) {
  const [isBookmarked, setIsBookmarked] = useState(
    articleData.isSaved || false
  );
  const { date, link, title, text, source, image, keyword } = articleData;

  function handleSaveBookmarkedArticles() {
    if (removeFromSaved) {
      return mainApi
        .deleteArticle(articleData._id)
        .then(() => removeFromSaved(articleData));
    }
    if (isBookmarked) {
      mainApi.deleteArticle(articleData._id).then(() => setIsBookmarked(false));
    } else {
      mainApi
        .addArticle({ date, link, title, source, text, image, keyword })
        .then((res) => {
          Object.assign(articleData, res.article);
          setIsBookmarked(true);
        })
        .catch((err) => console.log(`Error..... ${err}`));
    }
  }

  return (
    <li className="news-card">
      <div
        className="news-card__image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <Bookmark
          handleSaveBookmarkedArticles={handleSaveBookmarkedArticles}
          isBookmarked={isBookmarked}
          isLoggedIn={isLoggedIn}
          savedKeyword={keyword}
        />
      </div>
      <div className="news-card__text-container">
        <p className="news-card__date">
          {new Date(date).toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h3
          className="news-card__title"
          onClick={() => {
            window.open(link, "_blank");
          }}
          style={{ cursor: "pointer" }}
        >
          {title}
        </h3>
        <p className="news-card__text">{text}</p>
        <h4 className="news-card__source">{source}</h4>
      </div>
    </li>
  );
}
