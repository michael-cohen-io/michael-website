export function capitalize(str: string) {
  if (!str || typeof str !== "string") return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatDate(date?: Date | null) {
  return date
    ? date.toLocaleString("en-US", { month: "short", year: "numeric" })
    : "Present";
}
