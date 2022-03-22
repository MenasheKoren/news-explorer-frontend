import { createContext, useState } from "react";

export const AppStateContext = createContext();

export default ({ children }) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);

  const AppState = {
    dropdown: [isDropdownMenuOpen, setIsDropdownMenuOpen],
    registerPopup: [isRegisterPopupOpen, setIsRegisterPopupOpen],
    loginPopup: [isLoginPopupOpen, setIsLoginPopupOpen],
    infoToolTip: [isInfoToolTipOpen, setIsInfoToolTipOpen],
  };

  return (
    <AppStateContext.Provider value={AppState}>
      {children}
    </AppStateContext.Provider>
  );
};
