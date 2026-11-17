import { describe, it, expect } from "vitest";
import { slugify, capitalize, truncate, randomId, sleep } from "./index";

describe("slugify", () => {
  it("converts a simple string to a slug", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("strips special characters", () => {
    expect(slugify("Hello, World! #2024")).toBe("hello-world-2024");
  });

  it("collapses consecutive separators", () => {
    expect(slugify("foo---bar")).toBe("foo-bar");
  });

  it("trims leading and trailing hyphens", () => {
    expect(slugify("  --Hello--  ")).toBe("hello");
  });

  it("returns empty string for empty input", () => {
    expect(slugify("")).toBe("");
  });

  it("handles all-special-character input", () => {
    expect(slugify("!@#$%")).toBe("");
  });

  it("preserves numbers", () => {
    expect(slugify("Top 10 Tips")).toBe("top-10-tips");
  });
});

describe("capitalize", () => {
  it("capitalizes the first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("does not alter an already-capitalized string", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  it("handles single character", () => {
    expect(capitalize("a")).toBe("A");
  });

  it("returns empty string for empty input", () => {
    expect(capitalize("")).toBe("");
  });

  it("handles non-letter first character", () => {
    expect(capitalize("123abc")).toBe("123abc");
  });
});

describe("truncate", () => {
  it("truncates a long string and appends ellipsis", () => {
    expect(truncate("Hello, world!", 5)).toBe("Hell\u2026");
  });

  it("returns the original string when shorter than maxLength", () => {
    expect(truncate("Hi", 10)).toBe("Hi");
  });

  it("returns the original string when exactly maxLength", () => {
    expect(truncate("Hello", 5)).toBe("Hello");
  });

  it("handles maxLength of 1", () => {
    expect(truncate("Hello", 1)).toBe("\u2026");
  });

  it("throws RangeError when maxLength < 1", () => {
    expect(() => truncate("Hello", 0)).toThrow(RangeError);
  });

  it("returns empty string as-is", () => {
    expect(truncate("", 5)).toBe("");
  });
});

describe("randomId", () => {
  it("returns a string of the requested length", () => {
    expect(randomId(8)).toHaveLength(8);
  });

  it("returns only lowercase alphanumeric characters", () => {
    const id = randomId(100);
    expect(id).toMatch(/^[a-z0-9]+$/);
  });

  it("generates unique values across calls", () => {
    const ids = new Set(Array.from({ length: 50 }, () => randomId(16)));
    expect(ids.size).toBe(50);
  });

  it("handles length of 1", () => {
    const id = randomId(1);
    expect(id).toHaveLength(1);
    expect(id).toMatch(/^[a-z0-9]$/);
  });

  it("throws RangeError when length < 1", () => {
    expect(() => randomId(0)).toThrow(RangeError);
  });
});

describe("sleep", () => {
  it("resolves after the given delay", async () => {
    const start = Date.now();
    await sleep(50);
    const elapsed = Date.now() - start;
    expect(elapsed).toBeGreaterThanOrEqual(40); // allow minor timing variance
  });

  it("resolves immediately for 0ms", async () => {
    const start = Date.now();
    await sleep(0);
    const elapsed = Date.now() - start;
    expect(elapsed).toBeLessThan(50);
  });

  it("throws RangeError for negative values", () => {
    expect(() => sleep(-1)).toThrow(RangeError);
  });
});
