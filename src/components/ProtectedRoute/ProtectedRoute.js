import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const ProtectedRoute = ({
  children,
  handleRegisterClick,
  isLoggedIn,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/", { replace: true });
      handleRegisterClick();
    }
  }, []);

  return isLoggedIn && children;
};
