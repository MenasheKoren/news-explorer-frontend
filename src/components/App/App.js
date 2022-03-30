import * as React from "react";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Main } from "../Main/Main";
import { Layout } from "../Layout/Layout";
import { useMediaQuery } from "react-responsive";
import { Register } from "../Register/Register";
import { InfoToolTip } from "../InfoToolTip/InfoToolTip";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as auth from "../../utils/auth";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import FormContextProvider from "../../contexts/FormContext";
import { Login } from "../Login/Login";
import { mainApi } from "../../utils/MainApi";
import { CardsContext } from "../../contexts/SavedCardsContext";
import { SavedNews } from "../SavedNews/SavedNews";

function App() {
  const isMonitorOrTablet = useMediaQuery({ minWidth: 768 });
  const isMonitor = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [currentUser, setCurrentUser] = useState({});
  const [keyword, setKeyword] = useState("");
  const [showArticles, setShowArticles] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);
  const [totalResult, setTotalResult] = useState(0);
  const [savedCards, setSavedCards] = useState([]);
  const cardsData = [savedCards, setSavedCards];
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      auth
        .checkToken()
        .then(({ user }) => {
          setIsRegistered(true);
          setIsLoggedIn(true);
          setCurrentUser(user);
        })
        .then(() => {
          mainApi
            .getSavedArticles()
            .then((data) => {
              setSavedCards(data);
            })

            .catch((err) => console.log(`Error..... ${err}`));
        })
        .catch((err) => console.log(`Error..... ${err}`));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  function handleRegister({ username, email, password }) {
    auth
      .register({
        username,
        email,
        password,
      })
      .then((result) => {
        if (result && result._id) {
          setIsRegistered(true);
          setIsInfoToolTipOpen(true);
        }
      })
      .catch((err) => {
        console.log(`Error..... ${err}`);
      });
  }

  function handleLogin({ email, password }) {
    if (!email || !password) {
      return;
    }
    auth
      .authorize(email, password)
      .then(() => {
        auth
          .checkToken()
          .then(({ user }) => {
            setCurrentUser(user);
            setIsLoggedIn(true);
            mainApi.updateToken();
          })
          .then(() => {
            navigate("/", { replace: true });
            closeAllPopups();
          });
      })
      .catch((err) => {
        console.log(`Error..... ${err}`);
      });
  }

  function handleLogout() {
    setIsRegistered(false);
    setIsLoggedIn(false);
    setShowArticles(false);
    setCurrentUser({});
    setSavedCards([]);
    localStorage.clear();
    navigate("/", { replace: true });
  }

  function handleOpenDropdownMenu() {
    setIsDropdownMenuOpen(true);
  }

  function handleRegisterClick() {
    setIsRegisterPopupOpen(true);
  }

  function handleLoginClick() {
    setIsLoginPopupOpen(true);
  }

  function handleSubmitInfoToolTip() {
    setIsInfoToolTipOpen(true);
  }

  function closeAllPopups() {
    setIsInfoToolTipOpen(false);
    setIsDropdownMenuOpen(false);
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(false);
  }

  function handleSwitchPopup() {
    setIsRegisterPopupOpen(!isRegisterPopupOpen);
    setIsLoginPopupOpen(!isLoginPopupOpen);
  }

  function handleAddThreeMoreCards() {
    setEndIndex(endIndex + 3);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <FormContextProvider>
        <CardsContext.Provider value={cardsData}>
          <Routes>
            <Route
              path="/"
              element={
                <Layout
                  handleLogout={handleLogout}
                  handleLogin={handleLogin}
                  isRegistered={isRegistered}
                  isLoggedIn={isLoggedIn}
                  isDropdownMenuOpen={isDropdownMenuOpen}
                  handleOpenDropdownMenu={handleOpenDropdownMenu}
                  closeAllPopups={closeAllPopups}
                  isMonitorOrTablet={isMonitorOrTablet}
                  isMobile={isMobile}
                  isRegisterPopupOpen={isRegisterPopupOpen}
                  isLoginPopupOpen={isLoginPopupOpen}
                  isInfoToolTipOpen={isInfoToolTipOpen}
                  handleLoginClick={handleLoginClick}
                  handleRegisterClick={handleRegisterClick}
                  handleSubmitInfoToolTip={handleSubmitInfoToolTip}
                  setIsLoggedIn={setIsLoggedIn}
                  setIsRegisteredPopupOpen={setIsRegisterPopupOpen}
                  setIsLoginPopupOpen={setIsLoginPopupOpen}
                />
              }
            >
              <Route
                index
                element={
                  <>
                    <Main
                      isMobile={isMobile}
                      isTablet={isTablet}
                      isMonitor={isMonitor}
                      isLoggedIn={isLoggedIn}
                      keyword={keyword}
                      setKeyword={setKeyword}
                      isLoading={isLoading}
                      setIsLoading={setIsLoading}
                      showArticles={showArticles}
                      setShowArticles={setShowArticles}
                      handleAddThreeMoreCards={handleAddThreeMoreCards}
                      startIndex={startIndex}
                      setStartIndex={setStartIndex}
                      endIndex={endIndex}
                      setEndIndex={setEndIndex}
                      totalResult={totalResult}
                      setTotalResult={setTotalResult}
                      handleRegisterClick={handleRegisterClick}
                    />

                    <Register
                      handleSwitchPopup={handleSwitchPopup}
                      handleSubmitInfoToolTip={handleSubmitInfoToolTip}
                      handleRegister={handleRegister}
                      isOpen={isRegisterPopupOpen}
                      closeAllPopups={closeAllPopups}
                    />
                    <Login
                      handleSwitchPopup={handleSwitchPopup}
                      handleSubmitInfoToolTip={handleSubmitInfoToolTip}
                      handleLogin={handleLogin}
                      closeAllPopups={closeAllPopups}
                      isOpen={isLoginPopupOpen}
                    />
                    <InfoToolTip
                      setIsLoginPopupOpen={setIsLoginPopupOpen}
                      closeAllPopups={closeAllPopups}
                      isInfoToolTipOpen={isInfoToolTipOpen}
                    />
                  </>
                }
              />

              <Route
                path="/saved-news"
                element={
                  <ProtectedRoute
                    isLoggedIn={isLoggedIn}
                    handleRegisterClick={handleRegisterClick}
                    closeAllPopups={closeAllPopups}
                    setIsRegisterPopupOpen={setIsRegisterPopupOpen}
                    children
                  >
                    <SavedNews
                      keyword={keyword}
                      isLogged={isLoggedIn}
                      setKeyword={setKeyword}
                      isLoading={isLoading}
                      setIsLoading={setIsLoading}
                      showArticles={showArticles}
                      setShowArticles={setShowArticles}
                      handleAddThreeMoreCards={handleAddThreeMoreCards}
                      startIndex={startIndex}
                      setStartIndex={setStartIndex}
                      endIndex={endIndex}
                      setEndIndex={setEndIndex}
                      totalResult={totalResult}
                      setTotalResult={setTotalResult}
                    />
                  </ProtectedRoute>
                }
              />

              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <h1>Error 404: There's nothing here!</h1>
                  </main>
                }
              />
            </Route>
          </Routes>
        </CardsContext.Provider>
      </FormContextProvider>
    </CurrentUserContext.Provider>
  );
}

export { App };
