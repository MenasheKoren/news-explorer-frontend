import React from "react";
import { NewsCard } from "../NewsCard/NewsCard";
import { ShowMoreButton } from "../ShowMoreButton/ShowMoreButton";
import articlesArray from "../NewsCard/articles";
import { Preloader } from "../Preloader/Preloader";
import { NothingFound } from "../NothingFound/NothingFound";

export function NewsCardList({ isLoggedIn }) {
  return (
    <section className="newsCards">
      <Preloader />
      <NothingFound />
      <div className="newsCards__content">
        <h2 className="newsCards__title">Search results</h2>
        <ul className="newsCards__list">
          {articlesArray.map((articleCard) => {
            return (
              <NewsCard
                articleCard={articleCard}
                key={articleCard._id}
                isLoggedIn={isLoggedIn}
              />
            );
          })}
        </ul>

        <ShowMoreButton />
      </div>
    </section>
  );
}
