import React, { useCallback, useEffect, useState } from "react";
import { NewsCard } from "../NewsCard/NewsCard";
import { ShowMoreButton } from "../ShowMoreButton/ShowMoreButton";
import { fromDate, toDate } from "../../utils/helpers";
import { Preloader } from "../Preloader/Preloader";
import { NothingFound } from "../NothingFound/NothingFound";

export function NewsCardList({ isLoggedIn }) {
  const BASE_URL = "https://nomoreparties.co/news/v2/everything?";
  const API_KEY = "397db29f2b7d47238daa4bdcefcbdfd2";
  const query = "lotr";

  const [isLoading, setIsLoading] = useState(false);
  const [articlesData, setArticlesData] = useState([]);

  const [showArticles, setShowArticles] = useState(false);

  const getArticleData = useCallback(() => {
    setIsLoading(true);
    setShowArticles(true);
    fetch(
      `${BASE_URL}q=${query}&language=en&from=${fromDate}&to=${toDate}&pageSize=100&apiKey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        setIsLoading(false);
        setArticlesData(res.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    return () => {
      getArticleData();
    };
  }, [getArticleData, setArticlesData]);

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
              {articlesData.map((articles, uuid) => {
                return (
                  <NewsCard
                    articles={articles}
                    key={uuid}
                    isLoggedIn={isLoggedIn}
                  />
                );
              })}
            </ul>
          ))}

        {/*<ul className="news-cards__list">
          {articlesArray.map((articleCard) => {
            return (
              <NewsCard
                articleCard={articleCard}
                key={articleCard._id}
                isLoggedIn={isLoggedIn}
              />
            );
          })}
        </ul>*/}

        <ShowMoreButton />
      </div>
    </section>
  );
}
