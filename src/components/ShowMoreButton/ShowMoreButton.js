export function ShowMoreButton({ handleAddThreeMoreCards }) {
  return (
    <button
      className="button show-more-button"
      type="button"
      onClick={handleAddThreeMoreCards}
    >
      Show more
    </button>
  );
}
