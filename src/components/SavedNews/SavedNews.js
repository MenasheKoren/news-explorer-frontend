import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { SavedNewsSubheader } from "../SavedNewsSubheader/SavedNewsSubheader";
import { mainApi } from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Preloader } from "../Preloader/Preloader";
import { NothingFound } from "../NothingFound/NothingFound";
import { v4 as uuidv4 } from "uuid";
import { ShowMoreButton } from "../ShowMoreButton/ShowMoreButton";
import { CardsContext } from "../../contexts/SavedCardsContext";
import { NewsCard } from "../NewsCard/NewsCard";

export function SavedNews({ isLoading, setIsLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const [endIndex, setEndIndex] = useState(3);
  const [savedCards, setSavedCards] = useContext(CardsContext);

  const removeArticle = (article) => {
    setSavedCards(savedCards.filter((item) => item !== article));
  };

  const handleAddThreeMoreCards = () => {
    setEndIndex(endIndex + 3);
  };

  useEffect(() => {
    mainApi
      .getSavedArticles()
      .then((data) => {
        setSavedCards(data);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => console.log(`Error..... ${err}`));
  }, []);

  return (
    <section className="saved-news">
      <SavedNewsSubheader
        username={currentUser.name}
        totalSavedArticles={savedCards.length}
        keywordList={Array.from(
          new Set(
            savedCards.map((item) => {
              return item.keyword;
            })
          )
        )}
      />
      <div className="news-cards__content">
        {isLoading && !savedCards.length ? (
          <Preloader />
        ) : !savedCards.length ? (
          <NothingFound />
        ) : (
          <ul className="news-cards__list">
            {savedCards.slice(0, endIndex).map((article) => {
              return (
                <NewsCard
                  articleData={article}
                  removeFromSaved={removeArticle}
                  key={uuidv4()}
                />
              );
            })}
          </ul>
        )}

        <ShowMoreButton
          handleAddThreeMoreCards={handleAddThreeMoreCards}
          totalResult={savedCards.length}
          endIndex={endIndex}
        />
      </div>
    </section>
  );
}
