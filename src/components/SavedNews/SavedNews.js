import * as React from "react";
import { useContext, useEffect } from "react";
import { SavedNewsSubheader } from "../SavedNewsSubheader/SavedNewsSubheader";
import { mainApi } from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export function SavedNews({
  username,
  savedArticles,
  setSavedArticles,
  getUserInfoEffect,
}) {
  const currentUser = useContext(CurrentUserContext);
  useEffect(getUserInfoEffect, []);

  useEffect(() => {
    mainApi
      .getSavedArticles()
      .then((articlesData) => {
        setSavedArticles([...articlesData]);
      })
      .catch((err) => console.log(`Error..... ${err}`));
  }, [setSavedArticles]);
  return (
    <section className="saved-news">
      <SavedNewsSubheader username={currentUser.name} />
      <div className="news-cards__content">
        {/* {isLoading ? (
          <Preloader />
        ) : totalResult === 0 ? (
          <NothingFound />
        ) : (
        <ul className="news-cards__list">
            {articlesData.slice(startIndex, endIndex).map((articles) => {
              return (
                <NewsCard
                  articles={articles}
                  key={uuidv4()}
                  isLoggedIn={isLoggedIn}
                />
              );
          })}
        </ul>
        )}

        <ShowMoreButton
          handleAddThreeMoreCards={handleAddThreeMoreCards}
          totalResult={totalResult}
          endIndex={endIndex}
        />*/}
      </div>
    </section>
  );
}
