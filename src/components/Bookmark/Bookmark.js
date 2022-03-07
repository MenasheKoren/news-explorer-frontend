import React from "react";

export function Bookmark({ isBookmarked, handleToggleBookmarkIcon }) {
  return (
    <>
      {!isBookmarked && (
        <button
          className="button bookmark bookmark__unselected"
          type="button"
          onClick={handleToggleBookmarkIcon}
        />
      )}
      {isBookmarked && (
        <button
          className="button bookmark bookmark__selected"
          type="button"
          onClick={handleToggleBookmarkIcon}
        />
      )}
    </>
  );
}
