import { fromDate, toDate } from "./helpers";

const BASE_URL = "https://nomoreparties.co/news/v2/everything?";
const API_KEY = "397db29f2b7d47238daa4bdcefcbdfd2";

export class NewsApi {
  constructor(baseUrl, apiKey, fromDate, toDate) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
    this.date = { from: fromDate, to: toDate };
  }

  getArticleData = (query) => {
    return fetch(
      `${this.baseUrl}q=${query}&language=en&from=${this.date.from}&to=${this.date.to}&pageSize=100&apiKey=${this.apiKey}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`error :${res.message}`);
        }
      })
      .then((res) => {
        return res.articles.map((item) => {
          const {
            source: { name: source },
            title,
            publishedAt: date,
            description: text,
            url: link,
            urlToImage: image,
          } = item;
          return { title, source, date, text, link, image };
        });
      });
  };
}
const newsApi = new NewsApi(BASE_URL, API_KEY, fromDate, toDate);
export default newsApi;
