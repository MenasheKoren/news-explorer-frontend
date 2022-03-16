import React, { useEffect, useState } from "react";
import { NewsCard } from "../NewsCard/NewsCard";
import { ShowMoreButton } from "../ShowMoreButton/ShowMoreButton";
import { Preloader } from "../Preloader/Preloader";
import { NothingFound } from "../NothingFound/NothingFound";
import newsApi from "../../utils/NewsApi";
import { SearchInput } from "../SearchInput/SearchInput";

export function NewsCardList({ isLoggedIn }) {
  const [isLoading, setIsLoading] = useState(false);
  const [articlesData, setArticlesData] = useState([]);
  const [showArticles, setShowArticles] = useState(false);

  const [isEndIndex, setIsEndIndex] = useState(3);

  function handleAddThreeMoreCards() {
    setIsEndIndex(isEndIndex + 3);
  }

  const keyword = SearchInput().valueOf().toString();
  console.log(`Keyword: ${keyword}`);
  const keywordString = JSON.stringify(keyword);
  console.log(`KeywordString: ${keywordString}`);

  useEffect(() => {
    setIsLoading(true);
    setShowArticles(true);

    newsApi
      .getArticleData(keywordString)
      .then((data) => {
        setArticlesData(data);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [keywordString]);

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
              {articlesData.slice(0, isEndIndex).map((articles, i) => {
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

        <ShowMoreButton handleAddThreeMoreCards={handleAddThreeMoreCards} />
      </div>
    </section>
  );
}
