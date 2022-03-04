import { About } from "../About/About";
import { SearchForm } from "../SearchForm/SearchForm";
import { NewsCardList } from "../NewsCardList/NewsCardList";

export function Main() {
  return (
    <main className="main">
      <SearchForm />
      <NewsCardList />
      <About />
    </main>
  );
}
