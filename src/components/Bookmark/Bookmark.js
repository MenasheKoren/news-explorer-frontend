import React from "react";
import { useLocation } from "react-router-dom";

export function Bookmark({
  isBookmarked,
  handleSaveBookmarkedArticles,
  isLoggedIn,
  savedKeyword,
  handleRegisterClick,
}) {
  const location = useLocation();
  return (
    <>
      {!isBookmarked && location.pathname === "/" && (
        <div className="bookmarks">
          <button
            className="button bookmarks__bookmark bookmarks__unselected"
            type="button"
            onClick={
              isLoggedIn ? handleSaveBookmarkedArticles : handleRegisterClick
            }
          />
          {!isLoggedIn && (
            <div className="bookmarks__tool-tip">Sign in to save articles</div>
          )}
        </div>
      )}
      {isBookmarked && location.pathname === "/" && (
        <div className="bookmarks">
          <button
            className="button bookmarks__bookmark bookmarks__selected"
            type="button"
            onClick={handleSaveBookmarkedArticles}
          />
        </div>
      )}
      {location.pathname === "/saved-news" && (
        <div className="bookmarks" style={{ justifyContent: "space-between" }}>
          <button
            className="button bookmarks__bookmark bookmarks__delete"
            type="button"
            onClick={handleSaveBookmarkedArticles}
          />
          <span className="bookmarks__tool-tip">Remove from saved</span>
          <button className="button bookmarks__keyword" type="button">
            {savedKeyword}
          </button>
        </div>
      )}
    </>
  );
}
