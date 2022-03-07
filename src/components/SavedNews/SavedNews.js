import * as React from "react";
import articlesArray from "../NewsCard/articles";
import { NewsCard } from "../NewsCard/NewsCard";
import { ShowMoreButton } from "../ShowMoreButton/ShowMoreButton";
import { SavedNewsSubheader } from "../SavedNewsSubheader/SavedNewsSubheader";
import { Preloader } from "../Preloader/Preloader";

export function SavedNews() {
  return (
    <section className="saved-news">
      <SavedNewsSubheader />
      <Preloader />
      <div className="newsCards__content">
        <ul className="newsCards__list">
          {articlesArray.map((articleCard) => {
            return <NewsCard articleCard={articleCard} key={articleCard._id} />;
          })}
        </ul>
        <ShowMoreButton />
      </div>
    </section>
  );
}
