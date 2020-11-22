export const perValue = (type: string) =>
  type === "day" ? "в день" : type === "hour" ? "в час" : "в месяц";
