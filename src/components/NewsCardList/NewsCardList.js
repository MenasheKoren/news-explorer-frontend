import React from "react";
import { NewsCard } from "../NewsCard/NewsCard";
import { ShowMoreButton } from "../ShowMoreButton/ShowMoreButton";
import articlesArray from "../NewsCard/articles";
import { NewsApi } from "../../utils/NewsApi";

export function NewsCardList({ isLoggedIn }) {
  return (
    <section className="news-cards">
      {/*<Preloader />*/}
      {/*<NothingFound />*/}
      <NewsApi />
      <div className="news-cards__content">
        <h2 className="news-cards__title">Search results</h2>
        <ul className="news-cards__list">
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
