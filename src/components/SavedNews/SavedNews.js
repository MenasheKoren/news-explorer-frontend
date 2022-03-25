import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { SavedNewsSubheader } from "../SavedNewsSubheader/SavedNewsSubheader";
import { mainApi } from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Preloader } from "../Preloader/Preloader";
import { NothingFound } from "../NothingFound/NothingFound";
import { NewsCard } from "../NewsCard/NewsCard";
import { v4 as uuidv4 } from "uuid";
import { ShowMoreButton } from "../ShowMoreButton/ShowMoreButton";

export function SavedNews({
  username,
  savedArticles,
  setSavedArticles,
  getUserInfoEffect,
  isLoading,
  keyword,
  setIsLoading,
  setKeyword,
  setShowArticles,
  showArticles,
  handleAddThreeMoreCards,
  setEndIndex,
  setStartIndex,
  startIndex,
  endIndex,
  totalResult,
  setTotalResult,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [keywordList, setKeywordList] = useState([]);
  const [savedArticlesData, setSavedArticlesData] = useState([]);
  const [totalSavedArticles, setTotalSavedArticles] = useState(0);
  // function checkUserId(data) {
  //   return data.owner === currentUser._id;
  // }

  // function handleKeywordList(keyword) {
  //   setKeywordList((keywordList) => [...keywordList, keyword]);
  //   console.log(keywordList);
  // }

  useEffect(() => {
    mainApi
      .getSavedArticles()
      .then((data) => {
        setSavedArticlesData(data);
        setTotalSavedArticles(data.length);
        // I tried it here ----- handleKeywordList(keyword) ------- infinite loop;
      })
      .then(() => {
        setIsLoading(false);
        setStartIndex(0);
        setEndIndex(3);
      })
      .catch((err) => console.log(`Error..... ${err}`));
  }, [setSavedArticlesData, setIsLoading]);
  return (
    <section className="saved-news">
      <SavedNewsSubheader
        username={currentUser.name}
        totalSavedArticles={totalSavedArticles}
        keywordList={keywordList}
      />
      <div className="news-cards__content">
        {isLoading ? (
          <Preloader />
        ) : totalResult === 0 ? (
          <NothingFound />
        ) : (
          <ul className="news-cards__list">
            {savedArticlesData.slice(startIndex, endIndex).map((articles) => {
              // handleKeywordList(articles.keyword);
              return (
                <NewsCard
                  savedArticle={articles}
                  articles={articles}
                  savedKeyword={articles.keyword}
                  savedTitle={articles.title}
                  savedDescription={articles.text}
                  savedPublishedAt={articles.date}
                  savedSource={articles.source.name}
                  savedUrl={articles.link}
                  savedUrlToImage={articles.image}
                  savedOwner={articles.owner}
                  key={uuidv4()}
                />
              );
            })}
          </ul>
        )}

        <ShowMoreButton
          handleAddThreeMoreCards={handleAddThreeMoreCards}
          totalResult={totalResult}
          endIndex={endIndex}
        />
      </div>
    </section>
  );
}
