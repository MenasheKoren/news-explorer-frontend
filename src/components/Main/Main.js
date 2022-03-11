import { About } from "../About/About";
import { SearchForm } from "../SearchForm/SearchForm";
import { NewsCardList } from "../NewsCardList/NewsCardList";
import React from "react";

export function Main({ isMobile, isMonitor, isTablet, isLoggedIn }) {
  return (
    <main className="main">
      <SearchForm />

      <NewsCardList
        isMobile={isMobile}
        isTablet={isTablet}
        isMonitor={isMonitor}
        isLoggedIn={isLoggedIn}
      />
      <About />
    </main>
  );
}
