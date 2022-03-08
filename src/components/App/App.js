import * as React from "react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "../Main/Main";
import { SavedNews } from "../SavedNews/SavedNews";
import { Layout } from "../Layout/Layout";
import { useMediaQuery } from "react-responsive";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { InfoToolTip } from "../InfoToolTip/InfoToolTip";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function App() {
  const isMonitorOrTablet = useMediaQuery({ minWidth: 768 });
  const isMonitor = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  function handleSubmitRegister() {
    setIsRegistered(!isRegistered);
    setUserName(userName);
  }

  function handleSubmitLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
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

  function handleInputUsername(e) {
    e.preventDefault();
    setUserName(e.target.value);
  }

  function handleInputEmail(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function handleInputPassword(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            handleLogout={handleLogout}
            handleLogin={handleSubmitLogin}
            handleRegister={handleSubmitRegister}
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
            userName={userName}
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
              />
              <PopupWithForm
                isRegisterPopupOpen={isRegisterPopupOpen}
                isLoginPopupOpen={isLoginPopupOpen}
                isRegistered={isRegistered}
                isLoggedIn={isLoggedIn}
              >
                <Register
                  closeAllPopups={closeAllPopups}
                  isOpen={isRegisterPopupOpen}
                  handleInputUsername={handleInputUsername}
                  handleInputEmail={handleInputEmail}
                  handleInputPassword={handleInputPassword}
                  userName={userName}
                  email={email}
                  password={password}
                />
                <Login
                  closeAllPopups={closeAllPopups}
                  isOpen={isLoginPopupOpen}
                  handleInputEmail={handleInputEmail}
                  handleInputPassword={handleInputPassword}
                  email={email}
                  password={password}
                />
              </PopupWithForm>

              <InfoToolTip
                closeAllPopups={closeAllPopups}
                isOpen={isInfoToolTipOpen}
              />
            </>
          }
        />
        <Route path="/saved-news" element={<SavedNews userName={userName} />} />
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
  );
}

export { App };
