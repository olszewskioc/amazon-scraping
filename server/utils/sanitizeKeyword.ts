export function sanitizeKeyword(keyword: string): string {
  return encodeURIComponent(keyword.trim().toLowerCase());
}