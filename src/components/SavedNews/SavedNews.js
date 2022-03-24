import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { SavedNewsSubheader } from "../SavedNewsSubheader/SavedNewsSubheader";
import { mainApi } from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Preloader } from "../Preloader/Preloader";
import { NothingFound } from "../NothingFound/NothingFound";
import { NewsCard } from "../NewsCard/NewsCard";
import { v4 as uuidv4 } from "uuid";
import { ShowMoreButton } from "../ShowMoreButton/ShowMoreButton";
import { data } from "autoprefixer";

export function SavedNews({
  username,
  savedArticles,
  setSavedArticles,
  getUserInfoEffect,
  isLoading,
  keyword,
  setIsLoading,
  setKeyword,
  setShowArticles,
  showArticles,
  handleAddThreeMoreCards,
  setEndIndex,
  setStartIndex,
  startIndex,
  endIndex,
  totalResult,
  setTotalResult,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [keywordCount, setKeywordCount] = useState([]);

  function handleKeywordCount() {
    setKeywordCount();
  }
  useEffect(() => {
    mainApi
      .getSavedArticles(data)
      .then((data) => {
        setSavedArticles(data);
        setTotalResult(data.length);
      })
      .then(() => {
        setIsLoading(false);
        setStartIndex(0);
        setEndIndex(3);
      })
      .catch((err) => console.log(`Error..... ${err}`));
  }, [setSavedArticles, setIsLoading, totalResult]);
  return (
    <section className="saved-news">
      <SavedNewsSubheader
        username={currentUser.name}
        totalResult={totalResult}
      />
      <div className="news-cards__content">
        {isLoading ? (
          <Preloader />
        ) : totalResult === 0 ? (
          <NothingFound />
        ) : (
          <ul className="news-cards__list">
            {savedArticles.slice(startIndex, endIndex).map((articles) => {
              return (
                <NewsCard
                  keyword={keyword}
                  articles={articles}
                  key={uuidv4()}
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
