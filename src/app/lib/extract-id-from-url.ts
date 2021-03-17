export const extractIdFromEndOfUrl = (url: string): number => {
  const parts = url.split("/");
  return parseInt(parts[parts.length - 2]);
};
