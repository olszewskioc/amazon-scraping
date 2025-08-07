// Sanitize the input, removing any non-alphanumeric characters
export function sanitizeKeyword(keyword: string): string {
  return encodeURIComponent(keyword.trim().toLowerCase());
}