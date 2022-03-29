import React, { useContext, useEffect, useState } from "react";
import { ShowMoreButton } from "../ShowMoreButton/ShowMoreButton";
import { Preloader } from "../Preloader/Preloader";
import { NothingFound } from "../NothingFound/NothingFound";
import newsApi from "../../utils/NewsApi";
import { v4 as uuidv4 } from "uuid";
import { CardsContext } from "../../contexts/SavedCardsContext";
import { NewsCard } from "../NewsCard/NewsCard";

export function NewsCardList({
  isLoggedIn,
  keyword,
  isLoading,
  setIsLoading,
  handleRegisterClick,
}) {
  const [articlesData, setArticlesData] = useState([]);
  const [endIndex, setEndIndex] = useState(3);
  const [savedCards, setSavedCards] = useContext(CardsContext);

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
              savedCards.forEach((item) => {
                if (item.link === article.link) {
                  Object.assign(article, item);
                  article.isSaved = true;
                }
              });
              return (
                <NewsCard
                  articleData={article}
                  key={uuidv4()}
                  isLoggedIn={isLoggedIn}
                  handleRegisterClick={handleRegisterClick}
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
