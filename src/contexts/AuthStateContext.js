import { createContext, useState } from "react";

export const AuthStateContext = createContext();

export default ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const AuthState = {
    loggedIn: [isLoggedIn, setIsLoggedIn],
    registered: [isRegistered, setIsRegistered],
  };

  return (
    <AuthStateContext.Provider value={AuthState}>
      {children}
    </AuthStateContext.Provider>
  );
};
