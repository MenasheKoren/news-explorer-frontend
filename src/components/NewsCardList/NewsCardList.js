import React from "react";
import { NewsCard } from "../NewsCard/NewsCard";

export function NewsCardList() {
  return (
    <section className="newsCards">
      <div className="newsCards__content">
        <h2 className="newsCards__title">Search results</h2>
        <ul className="newsCards__list">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          {/*{newsCardList.map((newsCard) => {*/}
          {/*  return <NewsCard newsCard={newsCard} key={newsCard._id} />;*/}
          {/*})}*/}
        </ul>
        <button className="button newsCards__more-button" type="button">
          Show more
        </button>
      </div>
    </section>
  );
}
