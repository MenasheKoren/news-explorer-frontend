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

  getSavedArticles() {
    return customFetch(`${this._baseUrl}/articles/`, {
      headers: this._headers,
    });
  }

  addArticle() {
    return customFetch(`${this._baseUrl}/articles`, {
      headers: this._headers,
      method: "POST",
    });
  }

  deleteArticle(articleId) {
    return customFetch(`${this._baseUrl}/articles/${articleId}`, {
      headers: this._headers,
      method: "DELETE",
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
    authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});

export default MainApi;
