import React, { useCallback, useEffect, useState } from "react";

import { fromDate, toDate } from "./helpers";
import { Preloader } from "../components/Preloader/Preloader";
import { NothingFound } from "../components/NothingFound/NothingFound";

const BASE_URL = "https://nomoreparties.co/news/v2/everything?";
const API_KEY = "397db29f2b7d47238daa4bdcefcbdfd2";
const query = "lotr";

export function NewsApi() {
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
    <>
      <h2>Test api</h2>
      {showArticles &&
        (isLoading ? (
          <Preloader />
        ) : !articlesData ? (
          <NothingFound />
        ) : (
          <ul>
            {articlesData.map((articles, i) => {
              return (
                <li style={{ color: "blue" }} key={i}>
                  {articles.title}
                </li>
              );
            })}
          </ul>
        ))}
    </>
  );
}
