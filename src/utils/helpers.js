export const fromDate = todayMinusSevenDays();
export const toDate = new Date().toISOString().split("T");

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

// const date = articles.publishedAt.toLocaleString("en-US", {
//   month: "long",
//   day: "numeric",
//   year: "numeric",
// });
