import React, { useState } from "react";
import { About } from "../About/About";
import { SearchForm } from "../SearchForm/SearchForm";
import { NewsCardList } from "../NewsCardList/NewsCardList";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export function Main({ isMobile, isMonitor, isTablet, isLoggedIn }) {
  const [keyword, setKeyword] = useState("");
  const [showArticles, setShowArticles] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const currentUser = React.useContext(CurrentUserContext);
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
          showArticles={showArticles}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      )}

      <About />
    </main>
  );
}
