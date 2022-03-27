import React, { useContext, useEffect, useState } from "react";
import { Bookmark } from "../Bookmark/Bookmark";
import { mainApi } from "../../utils/MainApi";
import { CardsContext } from "../../contexts/SavedCardsContext";

export function NewsCard({ articleData, removeFromSaved, isLoggedIn }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [savedCards, setSavedCards] = useContext(CardsContext);
  const { date, link, title, text, source, image, keyword } = articleData;

  function handleSaveBookmarkedArticles() {
    console.log(isBookmarked);
    if (articleData._id)
      return mainApi.deleteArticle(articleData._id).then(() => {
        removeFromSaved(articleData);
      });
    if (!isBookmarked) {
      mainApi
        .addArticle(articleData)
        .then(() => {
          setIsBookmarked(true);
        })
        .catch((err) => console.log(`Error..... ${err}`));
    } else {
      setSavedCards(
        savedCards.map((item) =>
          item.link === articleData.link ? console.log("test") : ""
        )
      );
    }
  }

  useEffect(() => {
    isLoggedIn && savedCards.some((item) => articleData.link === item.link)
      ? setIsBookmarked(true)
      : setIsBookmarked(false);
  }, [articleData, isLoggedIn, savedCards]);

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
