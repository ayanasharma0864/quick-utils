/**
 * Converts a string into a URL-friendly slug.
 *
 * Lowercases the text, replaces non-alphanumeric characters with hyphens,
 * collapses consecutive hyphens, and trims leading/trailing hyphens.
 *
 * @param text - The input string to slugify.
 * @returns A URL-friendly slug string.
 *
 * @example
 * ```ts
 * slugify("Hello World!") // "hello-world"
 * ```
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Capitalizes the first letter of a string.
 *
 * @param text - The input string to capitalize.
 * @returns The string with its first character uppercased.
 *
 * @example
 * ```ts
 * capitalize("hello") // "Hello"
 * ```
 */
export function capitalize(text: string): string {
  if (text.length === 0) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Truncates a string to a maximum length, appending "…" if truncated.
 *
 * If the string is shorter than or equal to `maxLength`, it is returned as-is.
 * Otherwise it is clipped and an ellipsis character is appended (the total
 * length including the ellipsis will be `maxLength`).
 *
 * @param text - The input string to truncate.
 * @param maxLength - The maximum allowed length (must be ≥ 1).
 * @returns The (possibly truncated) string.
 * @throws {RangeError} If `maxLength` is less than 1.
 *
 * @example
 * ```ts
 * truncate("Hello, world!", 5) // "Hell…"
 * ```
 */
export function truncate(text: string, maxLength: number): string {
  if (maxLength < 1) {
    throw new RangeError("maxLength must be at least 1");
  }
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 1) + "\u2026";
}

/**
 * Generates a random alphanumeric ID of the specified length.
 *
 * Uses `Math.random()` — suitable for non-cryptographic identifiers.
 *
 * @param length - The desired length of the ID (must be ≥ 1).
 * @returns A random string consisting of `[a-z0-9]` characters.
 * @throws {RangeError} If `length` is less than 1.
 *
 * @example
 * ```ts
 * randomId(8) // e.g. "k3x9a1qz"
 * ```
 */
export function randomId(length: number): string {
  if (length < 1) {
    throw new RangeError("length must be at least 1");
  }
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Returns a promise that resolves after the given number of milliseconds.
 *
 * @param ms - The delay in milliseconds (must be ≥ 0).
 * @returns A promise that resolves after the delay.
 * @throws {RangeError} If `ms` is negative.
 *
 * @example
 * ```ts
 * await sleep(1000) // waits 1 second
 * ```
 */
export function sleep(ms: number): Promise<void> {
  if (ms < 0) {
    throw new RangeError("ms must not be negative");
  }
  return new Promise((resolve) => setTimeout(resolve, ms));
}
