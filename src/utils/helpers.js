export const formSettings = {
  submitButtonSelector: ".entry__save",
  inputSelector: ".field-input",
};

export function todayMinusSevenDays() {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  const [newDate] = date.toISOString().split("T");
  return newDate;
}
