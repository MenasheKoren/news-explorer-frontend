import * as React from "react";
import articlesArray from "../NewsCard/articles";
import { NewsCard } from "../NewsCard/NewsCard";
import { ShowMoreButton } from "../ShowMoreButton/ShowMoreButton";
import { SavedNewsSubheader } from "../SavedNewsSubheader/SavedNewsSubheader";

export function SavedNews({ userName }) {
  return (
    <section className="saved-news">
      <SavedNewsSubheader userName={userName} />
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
