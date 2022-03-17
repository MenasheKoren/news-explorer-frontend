import React, { useEffect, useState } from "react";
import { NewsCard } from "../NewsCard/NewsCard";
import { ShowMoreButton } from "../ShowMoreButton/ShowMoreButton";
import { Preloader } from "../Preloader/Preloader";
import { NothingFound } from "../NothingFound/NothingFound";
import newsApi from "../../utils/NewsApi";

export function NewsCardList({ isLoggedIn, keyword, isLoading, setIsLoading }) {
  const [articlesData, setArticlesData] = useState([]);

  const [endIndex, setEndIndex] = useState(3);

  function handleAddThreeMoreCards() {
    setEndIndex(endIndex + 3);
  }

  useEffect(() => {
    newsApi
      .getArticleData(keyword)
      .then((data) => {
        setArticlesData(data);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [keyword, setIsLoading]);

  return (
    <section className="news-cards">
      <div className="news-cards__content">
        <h2 className="news-cards__title">Search results</h2>

        {isLoading ? (
          <Preloader />
        ) : !articlesData ? (
          <NothingFound />
        ) : (
          <ul className="news-cards__list">
            {articlesData.slice(0, endIndex).map((articles, i) => {
              return (
                <NewsCard articles={articles} key={i} isLoggedIn={isLoggedIn} />
              );
            })}
          </ul>
        )}

        <ShowMoreButton handleAddThreeMoreCards={handleAddThreeMoreCards} />
      </div>
    </section>
  );
}
