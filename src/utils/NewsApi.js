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
    fetch(
      `${this.apiKey}q=${query}&language=en&from=${this.date.from}&to=${this.date.to}&pageSize=100&apiKey=${this.apiKey}`
    )
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`error :${res.message}`)
      )
      .then((res) => {
        return res.articles;
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
const newsApi = new NewsApi(BASE_URL, API_KEY, fromDate, toDate);
export default newsApi;
