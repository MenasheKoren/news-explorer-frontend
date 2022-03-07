import { About } from "../About/About";
import { SearchForm } from "../SearchForm/SearchForm";
import { NewsCardList } from "../NewsCardList/NewsCardList";

export function Main({
  handleToggleBookmarkIcon,
  isBookmarked,
  isMobile,
  isMonitor,
  isTablet,
}) {
  return (
    <main className="main">
      <SearchForm />
      <NewsCardList
        handleToggleBookmarkIcon={handleToggleBookmarkIcon}
        isBookmarked={isBookmarked}
        isMobile={isMobile}
        isTablet={isTablet}
        isMonitor={isMonitor}
      />
      <About />
    </main>
  );
}
