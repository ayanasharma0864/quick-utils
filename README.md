# @ayanasharma0864/quick-utils

Tiny, dependency-free TypeScript string and utility helpers.

## Install

```bash
npm i @ayanasharma0864/quick-utils
```

## Usage

```ts
import { slugify, capitalize, truncate, randomId, sleep } from "@ayanasharma0864/quick-utils";

// Convert text to a URL-friendly slug
slugify("Hello World!"); // "hello-world"

// Capitalize the first letter
capitalize("hello"); // "Hello"

// Truncate with ellipsis
truncate("Hello, world!", 5); // "Hell…"

// Generate a random alphanumeric ID
randomId(8); // e.g. "k3x9a1qz"

// Async sleep
await sleep(1000); // waits 1 second
```

## API Reference

### `slugify(text: string): string`

Converts a string into a URL-friendly slug. Lowercases the text, replaces
non-alphanumeric characters with hyphens, collapses consecutive hyphens, and
trims leading/trailing hyphens.

### `capitalize(text: string): string`

Capitalizes the first letter of a string. Returns the original string if it is
empty.

### `truncate(text: string, maxLength: number): string`

Truncates a string to a maximum length, appending `…` if truncated. The total
length including the ellipsis will be `maxLength`. Throws `RangeError` if
`maxLength < 1`.

### `randomId(length: number): string`

Generates a random alphanumeric (`[a-z0-9]`) ID of the specified length. Uses
`Math.random()` — suitable for non-cryptographic identifiers. Throws
`RangeError` if `length < 1`.

### `sleep(ms: number): Promise<void>`

Returns a promise that resolves after the given number of milliseconds. Throws
`RangeError` if `ms` is negative.

## License

[MIT](./LICENSE)
