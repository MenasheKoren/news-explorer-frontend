import * as React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "../Main/Main";
import { SavedNews } from "../SavedNews/SavedNews";
import { Layout } from "../Layout/Layout";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [userName, setUserName] = useState("");
  // const [isRegistered, setIsRegistered] = useState(false);
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  // const localEmail = localStorage.getItem("localEmail");
  // const navigate = useNavigate();
  // const location = useLocation();

  function handleOpenDropdownMenu() {
    setIsDropdownMenuOpen(true);
  }

  function closeAllPopups() {
    setIsDropdownMenuOpen(false);
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
            isDropdownMenuOpen={isDropdownMenuOpen}
            handleOpenDropdownMenu={handleOpenDropdownMenu}
            closeAllPopups={closeAllPopups}
          />
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
