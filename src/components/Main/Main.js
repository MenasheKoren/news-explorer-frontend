import React from "react";
import { About } from "../About/About";
import { SearchForm } from "../SearchForm/SearchForm";
import { NewsCardList } from "../NewsCardList/NewsCardList";

export function Main({
  isMobile,
  isMonitor,
  isTablet,
  isLoggedIn,
  savedArticles,
  setSavedArticles,
  setShowArticles,
  isLoading,
  setIsLoading,
  keyword,
  setKeyword,
  showArticles,
  handleAddThreeMoreCards,
  endIndex,
  setStartIndex,
  setEndIndex,
  startIndex,
  totalResult,
  setTotalResult,
  savedUserCards,
}) {
  return (
    <main className="main">
      <SearchForm
        setKeyword={setKeyword}
        setShowArticles={setShowArticles}
        setIsLoading={setIsLoading}
      />

      {showArticles && (
        <NewsCardList
          isMobile={isMobile}
          isTablet={isTablet}
          isMonitor={isMonitor}
          isLoggedIn={isLoggedIn}
          keyword={keyword}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          savedArticles={savedArticles}
          setSavedArticles={setSavedArticles}
          handleAddThreeMoreCards={handleAddThreeMoreCards}
          startIndex={startIndex}
          setStartIndex={setStartIndex}
          endIndex={endIndex}
          setEndIndex={setEndIndex}
          totalResult={totalResult}
          setTotalResult={setTotalResult}
          savedUserCards={savedUserCards}
        />
      )}
      <About />
    </main>
  );
}
