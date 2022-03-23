import React, { useState } from "react";
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
}) {
  const [keyword, setKeyword] = useState("");
  const [showArticles, setShowArticles] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
        />
      )}
      <About />
    </main>
  );
}
