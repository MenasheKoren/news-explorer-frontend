import React, { useEffect, useState } from "react";
import { NewsCard } from "../NewsCard/NewsCardRefactor";
import { ShowMoreButton } from "../ShowMoreButton/ShowMoreButton";
import { Preloader } from "../Preloader/Preloader";
import { NothingFound } from "../NothingFound/NothingFound";
import newsApi from "../../utils/NewsApi";
import { v4 as uuidv4 } from "uuid";

export function NewsCardList({ isLoggedIn, keyword, isLoading, setIsLoading }) {
  const [articlesData, setArticlesData] = useState([]);
  const [endIndex, setEndIndex] = useState(3);

  useEffect(() => {
    newsApi
      .getArticleData(keyword)
      .then((data) => {
        setArticlesData(data);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [isLoading, endIndex]);

  const handleAddThreeMoreCards = () => {
    setEndIndex(endIndex + 3);
  };

  return (
    <section className="news-cards">
      <div className="news-cards__content">
        <h2 className="news-cards__title">Search results</h2>

        {isLoading ? (
          <Preloader />
        ) : articlesData.length === 0 ? (
          <NothingFound />
        ) : (
          <ul className="news-cards__list">
            {articlesData.slice(0, endIndex).map((article) => {
              article.keyword = keyword;
              return (
                <NewsCard
                  articleData={article}
                  key={uuidv4()}
                  isLoggedIn={isLoggedIn}
                />
              );
            })}
          </ul>
        )}

        <ShowMoreButton
          handleAddThreeMoreCards={handleAddThreeMoreCards}
          totalResult={articlesData.length}
          endIndex={endIndex}
        />
      </div>
    </section>
  );
}
