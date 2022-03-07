import React from "react";
import { Bookmark } from "../Bookmark/Bookmark";

export function NewsCard({
  handleToggleBookmarkIcon,
  isBookmarked,
  newsCard: { _id, image, source, text, title },
}) {
  return (
    <li className="newsCard" key={_id}>
      <Bookmark
        handleToggleBookmarkIcon={handleToggleBookmarkIcon}
        isBookmarked={isBookmarked}
      />
      {/*todo make a demo json for about 5 cards*/}
      <img className="newsCard__image" src={image} alt="#" />
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
