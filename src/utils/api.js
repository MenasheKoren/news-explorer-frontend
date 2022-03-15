import React, { useEffect, useState } from "react";

export function ArticlesData() {
  const [articlesData, fetchArticlesData] = useState([]);

  const getArticle = () => {
    fetch(
      "https://nomoreparties.co/news/v2/everything?q=lotr&language=en&apiKey=397db29f2b7d47238daa4bdcefcbdfd2"
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        fetchArticlesData(res.articles);
      })

      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <>
      <h2>Test api</h2>
      <ul>
        {articlesData.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </>
  );
}
