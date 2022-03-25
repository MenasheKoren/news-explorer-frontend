import React, { useState } from "react";
import { Bookmark } from "../Bookmark/Bookmark";
import { mainApi } from "../../utils/MainApi";

export function NewsCard({
  articles: { description, publishedAt, source, title, urlToImage, url, owner },
  isLoggedIn,
  keyword,
  savedArticles,
  setSavedArticles,
  savedOwner,
  savedUrlToImage,
  savedDescription,
  savedKeyword,
  savedUrl,
  savedPublishedAt,
  savedSource,
  savedTitle,
  savedArticle,
  handleKeywordList,
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
          owner,
        })
        .then(() => {
          setIsBookmarked(true);
          // I tried it here ----- handleKeywordList(keyword) ------- infinite loop;
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
          backgroundImage: `url(${urlToImage || savedUrlToImage})`,
        }}
      >
        <Bookmark
          handleSaveBookmarkedArticles={handleSaveBookmarkedArticles}
          isBookmarked={isBookmarked}
          isLoggedIn={isLoggedIn}
          savedKeyword={savedKeyword}
        />
      </div>
      <div className="news-card__text-container">
        <p className="news-card__date">
          {new Date(publishedAt || savedPublishedAt).toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h3
          className="news-card__title"
          onClick={() => {
            window.open(url || savedUrl, "_blank");
          }}
          style={{ cursor: "pointer" }}
        >
          {title || savedTitle}
        </h3>
        <p className="news-card__text">{description || savedDescription}</p>
        <h4 className="news-card__source">{source.name || savedSource}</h4>
      </div>
    </li>
  );
}
