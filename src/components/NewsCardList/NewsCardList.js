import React from "react";
import { NewsCard } from "../NewsCard/NewsCard";
import { ShowMoreButton } from "../ShowMoreButton/ShowMoreButton";
import articlesArray from "../NewsCard/articles";

export function NewsCardList({ handleToggleBookmarkIcon, isBookmarked }) {
  console.log(`Articles Array ${articlesArray.isArray}`);
  return (
    <section className="newsCards">
      <div className="newsCards__content">
        <h2 className="newsCards__title">Search results</h2>
        {/* todo recheck flex dimensions so three cards are shown */}
        <ul className="newsCards__list">
          <NewsCard
            handleToggleBookmarkIcon={handleToggleBookmarkIcon}
            isBookmarked={isBookmarked}
          />
          <NewsCard
            handleToggleBookmarkIcon={handleToggleBookmarkIcon}
            isBookmarked={isBookmarked}
          />
          <NewsCard
            handleToggleBookmarkIcon={handleToggleBookmarkIcon}
            isBookmarked={isBookmarked}
          />

          <NewsCard
            handleToggleBookmarkIcon={handleToggleBookmarkIcon}
            isBookmarked={isBookmarked}
          />
          <NewsCard
            handleToggleBookmarkIcon={handleToggleBookmarkIcon}
            isBookmarked={isBookmarked}
          />
          {/*todo Make a map index of the cards*/}
          {articlesArray.map((newsCard) => {
            return <NewsCard newsCard={newsCard} key={newsCard._id} />;
          })}
        </ul>

        <ShowMoreButton />
      </div>
    </section>
  );
}
