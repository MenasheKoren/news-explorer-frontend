import { About } from "../About/About";
import { SearchForm } from "../SearchForm/SearchForm";
import { NewsCardList } from "../NewsCardList/NewsCardList";

export function Main({ handleToggleBookmarkIcon, isBookmarked }) {
  return (
    <main className="main">
      <SearchForm />
      <NewsCardList
        handleToggleBookmarkIcon={handleToggleBookmarkIcon}
        isBookmarked={isBookmarked}
      />
      <About />
    </main>
  );
}
