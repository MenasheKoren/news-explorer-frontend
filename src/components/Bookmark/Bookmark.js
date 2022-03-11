import React from "react";
import { useLocation } from "react-router-dom";

export function Bookmark({
  isBookmarked,
  handleToggleBookmarkIcon,
  isLoggedIn,
}) {
  const location = useLocation();
  return (
    <>
      {!isBookmarked && location.pathname === "/" && (
        <div className="bookmarks__container">
          <button
            className="button bookmark bookmark__unselected"
            type="button"
            onClick={handleToggleBookmarkIcon}
          />
          {!isLoggedIn && (
            <div className="bookmark__tool-tip">Sign in to save articles</div>
          )}
        </div>
      )}
      {isBookmarked && location.pathname === "/" && (
        <button
          className="button bookmark bookmark__selected"
          type="button"
          onClick={handleToggleBookmarkIcon}
        />
      )}
      {location.pathname === "/saved-news" && (
        <div className="bookmark bookmark__container">
          <button className="button bookmark__delete" type="button" />
          <span className="bookmark__tool-tip">Remove from saved</span>
        </div>
      )}
    </>
  );
}
