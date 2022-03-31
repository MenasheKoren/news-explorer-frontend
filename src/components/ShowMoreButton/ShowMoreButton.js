export function ShowMoreButton({
  handleAddThreeMoreCards,
  endIndex,
  totalResult,
}) {
  return (
    <>
      {endIndex < totalResult && (
        <button
          className="button show-more-button"
          type="button"
          onClick={handleAddThreeMoreCards}
        >
          Show more
        </button>
      )}
    </>
  );
}
