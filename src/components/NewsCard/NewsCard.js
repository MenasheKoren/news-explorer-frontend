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
    <li className="newsCard" key={_id}>
      <image
        className="newsCard__image"
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
      <div className="newsCard__text-container">
        <p className="newsCard__date">
          {new Date().toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h3 className="newsCard__title">{title}</h3>
        <p className="newsCard__text">{text}</p>
        <h4 className="newsCard__source">{source}</h4>
      </div>
    </li>
  );
}
