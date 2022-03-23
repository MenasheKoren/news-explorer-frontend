import React, { useEffect, useState } from "react";
import { NewsCard } from "../NewsCard/NewsCard";
import { ShowMoreButton } from "../ShowMoreButton/ShowMoreButton";
import { Preloader } from "../Preloader/Preloader";
import { NothingFound } from "../NothingFound/NothingFound";
import newsApi from "../../utils/NewsApi";
import { v4 as uuidv4 } from "uuid";

export function NewsCardList({
  isLoggedIn,
  keyword,
  isLoading,
  setIsLoading,
  savedArticles,
  setSavedArticles,
}) {
  const [articlesData, setArticlesData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);
  const [totalResult, setTotalResult] = useState(0);
  function handleAddThreeMoreCards() {
    setEndIndex(endIndex + 3);
  }

  useEffect(() => {
    newsApi
      .getArticleData(keyword)
      .then((data) => {
        setArticlesData(data);
        setTotalResult(data.length);
      })
      .then(() => {
        setIsLoading(false);
        setStartIndex(0);
        setEndIndex(3);
      });
  }, [keyword, setIsLoading, totalResult]);

  return (
    <section className="news-cards">
      <div className="news-cards__content">
        <h2 className="news-cards__title">Search results</h2>

        {isLoading ? (
          <Preloader />
        ) : totalResult === 0 ? (
          <NothingFound />
        ) : (
          <ul className="news-cards__list">
            {articlesData.slice(startIndex, endIndex).map((articles) => {
              return (
                <NewsCard
                  articles={articles}
                  key={uuidv4()}
                  isLoggedIn={isLoggedIn}
                  savedArticles={savedArticles}
                  setSavedArticles={setSavedArticles}
                  keyword={keyword}
                />
              );
            })}
          </ul>
        )}

        <ShowMoreButton
          handleAddThreeMoreCards={handleAddThreeMoreCards}
          totalResult={totalResult}
          endIndex={endIndex}
        />
      </div>
    </section>
  );
}
