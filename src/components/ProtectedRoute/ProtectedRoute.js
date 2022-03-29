import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({
  children,
  setIsRegisterPopupOpen,
  isLoggedIn,
}) => {
  const location = useLocation();
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/" replace state={{ from: location.pathname }} />
  );
};
