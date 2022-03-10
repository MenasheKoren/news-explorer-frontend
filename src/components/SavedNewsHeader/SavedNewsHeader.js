import { useLocation } from "react-router-dom";

export function SavedNewsHeader(props) {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/saved-news" && (
        <div
          style={{
            color: "red",
            borderColor: "#000",
            fill: "#000",
            position: "relative",
            background: "#FFF",
            boxShadow: "inset 0 -0.0625rem 0 #D1D2D6",
          }}
        />
      )}
    </>
  );
}
