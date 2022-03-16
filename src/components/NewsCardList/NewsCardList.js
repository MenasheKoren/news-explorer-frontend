import React, { useEffect, useState } from "react";
import { NewsCard } from "../NewsCard/NewsCard";
import { ShowMoreButton } from "../ShowMoreButton/ShowMoreButton";
import { Preloader } from "../Preloader/Preloader";
import { NothingFound } from "../NothingFound/NothingFound";
import newsApi from "../../utils/NewsApi";

export function NewsCardList({ isLoggedIn }) {
  const [isLoading, setIsLoading] = useState(false);
  const [articlesData, setArticlesData] = useState([]);

  const [showArticles, setShowArticles] = useState(false);
  let keyword = "cat";
  useEffect(() => {
    setIsLoading(true);
    setShowArticles(true);
    return () => {
      setIsLoading(false);
      setArticlesData(newsApi.getArticleData(keyword));
    };
  }, [setArticlesData, keyword]);

  return (
    <section className="news-cards">
      <div className="news-cards__content">
        <h2 className="news-cards__title">Search results</h2>

        {showArticles &&
          (isLoading ? (
            <Preloader />
          ) : !articlesData ? (
            <NothingFound />
          ) : (
            <ul className="news-cards__list">
              {articlesData.map((articles, i) => {
                return (
                  <NewsCard
                    articles={articles}
                    key={i}
                    isLoggedIn={isLoggedIn}
                  />
                );
              })}
            </ul>
          ))}

        <ShowMoreButton />
      </div>
    </section>
  );
}
