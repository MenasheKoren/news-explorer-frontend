import React, { useState } from "react";
import { Bookmark } from "../Bookmark/Bookmark";

export function NewsCard({
  key,
  articles: { description, publishedAt, source, title, urlToImage },
  isLoggedIn,
}) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  function handleToggleBookmarkIcon() {
    setIsBookmarked(!isBookmarked);
  }
  return (
    <li className="news-card" key={key}>
      <image
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
      </image>
      <div className="news-card__text-container">
        <p className="news-card__date">
          {publishedAt}
          {/*{new Date().toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}*/}
        </p>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__text">{description}</p>
        <h4 className="news-card__source">{source.name}</h4>
      </div>
    </li>
  );
}
