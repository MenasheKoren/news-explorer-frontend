export function SaveFormButton({ saveFormButtonText }) {
  return (
    <button className="entry__save button" disabled={true} type="submit">
      {saveFormButtonText}
    </button>
  );
}
