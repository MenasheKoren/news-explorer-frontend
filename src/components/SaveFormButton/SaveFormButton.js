export function SaveFormButton({ saveFormButtonText, isValid }) {
  // const { values, handleChange, errors, isValid, setValues, resetForm } =
  //   useFormAndValidation();
  return (
    <button className="entry__save button" disabled={!isValid} type="submit">
      {saveFormButtonText}
    </button>
  );
}
