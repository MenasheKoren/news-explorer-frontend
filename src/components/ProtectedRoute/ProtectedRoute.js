import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({
  children,
  handleRegisterClick,
  isLoggedIn,
}) => {
  const location = useLocation();

  if (!isLoggedIn) {
    handleRegisterClick();
  }
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/" replace state={{ from: location.pathname }} />
  );
};
