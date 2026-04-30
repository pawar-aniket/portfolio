/**
 * Split a string on the first occurrence of `needle`.
 * Returns [before, after] where `after` is null if needle is not found.
 */
export function splitOnce(haystack: string, needle: string): [string, string | null] {
  const idx = haystack.indexOf(needle);
  if (idx === -1) return [haystack, null];
  return [haystack.slice(0, idx), haystack.slice(idx + needle.length)];
}
