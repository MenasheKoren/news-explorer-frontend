import * as React from "react";
import { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import { Main } from "../Main/Main";
import { SavedNews } from "../SavedNews/SavedNews";
import { Layout } from "../Layout/Layout";
import { MobileMenu } from "../MobileMenu/MobileMenu";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [userName, setUserName] = useState("");
  // const [isRegistered, setIsRegistered] = useState(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  // const localEmail = localStorage.getItem("localEmail");
  const navigate = useNavigate();
  const location = useLocation();

  function handleOpenHamburgerMenu() {
    setIsHamburgerMenuOpen(true);
  }

  function closeAllPopups() {
    setIsHamburgerMenuOpen(false);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            // handleLogout={handleLogout}
            // handleLogin={handleLogin}
            // isRegistered={isRegistered}
            // localEmail={localEmail}
            isOpen={isHamburgerMenuOpen}
            handleOpenHamburgerMenu={handleOpenHamburgerMenu}
            closeAllPopups={closeAllPopups}
          >
            <MobileMenu />
          </Layout>
        }
      >
        <Route index element={<Main />} />
        <Route path="/saved-news" element={<SavedNews />} />
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
