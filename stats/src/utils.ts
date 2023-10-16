export const dateStringToDate = (date: string): Date => {
  const dateParts = date.split("/").map((part: string): number => {
    return parseInt(part);
  });
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
