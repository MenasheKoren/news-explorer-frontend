import * as React from "react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "../Main/Main";
import { SavedNews } from "../SavedNews/SavedNews";
import { Layout } from "../Layout/Layout";
import { useMediaQuery } from "react-responsive";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { InfoToolTip } from "../InfoToolTip/InfoToolTip";
import { PopupWithForm } from "../PopupWithForm/PopupWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as auth from "../../utils/auth";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import FormContextProvider from "../../contexts/FormContext";

function App() {
  const isMonitorOrTablet = useMediaQuery({ minWidth: 768 });
  const isMonitor = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [currentUser, setCurrentUser] = useState({});

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);

  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      localStorage.getItem("token");
      auth
        .getContent()
        .then((data) => {
          setIsRegistered(true);
          setIsLoggedIn(true);
          setUsername(data.user.name);
        })
        .catch((err) => console.log(`Error..... ${err}`));
    }
  }, []);

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  function handleSetRegistration() {
    setIsRegistered(true);
  }

  function handleLogin() {
    return new Promise((res) => {
      setIsLoggedIn(true);
      res();
    }).catch((err) => console.log(`Error..... ${err}`));
  }

  function handleLogout() {
    return new Promise((res) => {
      setIsLoggedIn(false);
      setIsRegistered(false);
      res();
    })
      .then(() => {
        localStorage.removeItem("token");
      })

      .catch((err) => console.log(`Error..... ${err}`));
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
    setIsDropdownMenuOpen(false);
    setIsRegisterPopupOpen(false);
    setIsInfoToolTipOpen(false);
    setIsLoginPopupOpen(false);
  }

  function handleSwitchPopup() {
    setIsRegisterPopupOpen(!isRegisterPopupOpen);
    setIsLoginPopupOpen(!isLoginPopupOpen);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <FormContextProvider>
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
                username={username}
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
                    // getUserInfoEffect={getUserInfoEffect}
                    savedArticles={savedArticles}
                    setSavedArticles={setSavedArticles}
                  />
                  <PopupWithForm
                    isRegisterPopupOpen={isRegisterPopupOpen}
                    isLoginPopupOpen={isLoginPopupOpen}
                    isRegistered={isRegistered}
                    handleLogin={handleLogin}
                    isMobile={isMobile}
                    handleSwitchPopup={handleSwitchPopup}
                    closeAllPopups={closeAllPopups}
                    handleSubmitInfoToolTip={handleSubmitInfoToolTip}
                    handleSetRegistration={handleSetRegistration}
                  >
                    <Register />
                    <Login />
                  </PopupWithForm>
                  <InfoToolTip
                    setIsLoginPopupOpen={setIsLoginPopupOpen}
                    closeAllPopups={closeAllPopups}
                    isOpen={isInfoToolTipOpen}
                  />
                </>
              }
            />

            <Route
              path="/saved-news"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedNews
                    username={username}
                    savedArticles={savedArticles}
                    setSavedArticles={setSavedArticles}
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
      </FormContextProvider>
    </CurrentUserContext.Provider>
  );
}

export { App };
