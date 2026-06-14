export function formatDate(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-ZA", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  }).format(new Date(value));
}
