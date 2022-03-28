import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({
  children,
  isLoggedIn,
  setIsRegisterPopupOpen,
}) => {
  const navigate = useNavigate();
  function handleProtectedRouteOpenRegister() {
    navigate("/", { replace: true });
    setIsRegisterPopupOpen(true);
  }
  return isLoggedIn ? children : handleProtectedRouteOpenRegister();
};
