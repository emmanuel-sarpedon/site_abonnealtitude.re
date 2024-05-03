export const formatDate = (date: string | null | number | Date): string => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
