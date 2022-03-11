export function SaveFormButton({
  saveFormButtonText,
  handleSubmitInfoToolTip,
}) {
  return (
    <button
      className="entry__save button"
      disabled={true}
      type="submit"
      onClick={handleSubmitInfoToolTip}
    >
      {saveFormButtonText}
    </button>
  );
}
