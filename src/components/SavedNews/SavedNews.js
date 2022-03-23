import * as React from "react";
import { SavedNewsSubheader } from "../SavedNewsSubheader/SavedNewsSubheader";

export function SavedNews({ username }) {
  return (
    <section className="saved-news">
      <SavedNewsSubheader username={username} />
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
