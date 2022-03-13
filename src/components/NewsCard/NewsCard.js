import React, { useState } from "react";
import { Bookmark } from "../Bookmark/Bookmark";

export function NewsCard({
  articleCard: { _id, image, source, text, title },
  isLoggedIn,
}) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  function handleToggleBookmarkIcon() {
    setIsBookmarked(!isBookmarked);
  }
  return (
    <li className="news-card" key={_id}>
      <image
        className="news-card__image"
        style={{
          backgroundImage: `url(${image})`,
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
          {new Date().toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__text">{text}</p>
        <h4 className="news-card__source">{source}</h4>
      </div>
    </li>
  );
}
