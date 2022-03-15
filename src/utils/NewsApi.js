import React, { useEffect, useState } from "react";

import { todayMinusSevenDays } from "./helpers";

const BASE_URL = "https://nomoreparties.co/news/v2/everything?";
const API_KEY = "397db29f2b7d47238daa4bdcefcbdfd2";
const query = "lotr";

export function NewsApi() {
  let fromDate = todayMinusSevenDays();
  const [articlesData, setArticlesData] = useState([]);
  const getArticleData = () => {
    fetch(
      `${BASE_URL}q=${query}&language=en&from=${fromDate}&pageSize=100&apiKey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.articles);
        setArticlesData(res.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    return () => {
      getArticleData();
    };
  }, []);

  return (
    <>
      <h2>Test api</h2>
      <ul>
        {articlesData.map((articles, i) => {
          return (
            <li style={{ color: "blue" }} key={i}>
              {articles.title}
            </li>
          );
        })}
      </ul>
    </>
  );
}
