import { Navigate } from "react-router-dom";
import { checkToken } from "../../utils/auth";
import { useEffect } from "react";

export const ProtectedRoute = ({ setIsRegisterPopupOpen, children }) => {
  let isAuthed = checkToken();

  useEffect(() => {
    return () => {
      !isAuthed && setIsRegisterPopupOpen(true);
    };
  }, []);

  return isAuthed ? children : <Navigate to={"/"} replace />;
};
