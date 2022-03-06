import React from "react";
import { NewsCard } from "../NewsCard/NewsCard";

export function NewsCardList({ handleToggleBookmarkIcon, isBookmarked }) {
  // const [height, setHeight] = useState(0);
  // const ref = useRef();
  //
  // useEffect(() => {
  //   setHeight(ref.current);
  //   console.log(`height`);
  // }, [height]);

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
          {/*{newsCardList.map((newsCard) => {*/}
          {/*  return <NewsCard newsCard={newsCard} key={newsCard._id} />;*/}
          {/*})}*/}
        </ul>
        {/*todo Implement show more button*/}
        <button className="button newsCards__more-button" type="button">
          Show more
        </button>
      </div>
    </section>
  );
}
