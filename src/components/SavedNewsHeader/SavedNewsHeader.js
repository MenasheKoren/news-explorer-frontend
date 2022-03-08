import { Header } from "../Header/Header";
import { useLocation } from "react-router-dom";

export function SavedNewsHeader() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/saved-news" && (
        <Header
          style={{
            color: "black",
            borderColor: "black",
            fill: "black",
            position: "relative",
            background: "rgb(255, 255, 255)",
            boxShadow: "inset 0 -0.0625rem 0 rgb(209, 210, 214)",
          }}
        />
      )}
    </>
  );
}
