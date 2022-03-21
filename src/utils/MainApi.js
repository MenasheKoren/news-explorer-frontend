import { token } from "./auth";

const BASE_URL = "https://api.news-explorer.mk.students.nomoreparties.sbs";

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getUserInfo() {
    return customFetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    });
  }
}

const customFetch = (url, headers) =>
  fetch(url, headers).then((res) =>
    res.ok ? res.json() : Promise.reject(res.statusText)
  );

export const mainApi = new MainApi({
  baseUrl: BASE_URL,
  headers: {
    authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export default MainApi;
