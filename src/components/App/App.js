import * as React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "../Main/Main";
import { SavedNews } from "../SavedNews/SavedNews";
import { Layout } from "../Layout/Layout";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMonitorOrTablet = useMediaQuery({ minWidth: 768 });
  const isMonitor = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [userName, setUserName] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  // const localEmail = localStorage.getItem("localEmail");
  // const navigate = useNavigate();
  // const location = useLocation();
  function handleRegister() {
    setIsRegistered(!isRegistered);
  }

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

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
            handleLogout={handleLogout}
            handleLogin={handleLogin}
            handleRegister={handleRegister}
            isRegistered={isRegistered}
            isLoggedIn={isLoggedIn}
            isDropdownMenuOpen={isDropdownMenuOpen}
            handleOpenDropdownMenu={handleOpenDropdownMenu}
            closeAllPopups={closeAllPopups}
            isMonitorOrTablet={isMonitorOrTablet}
            isMobile={isMobile}
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
