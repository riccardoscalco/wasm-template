# wasm-template

A WebAssembly module built with Rust that provides fast mathematical operations for JavaScript applications.

## Installation

```bash
npm install wasm-template
```

## Usage

### Basic Example

```javascript
import { add } from 'wasm-template';

// Add two numbers
const sum = add(5, 3); // Returns 8
```

### With Bundlers

This module works with modern bundlers. For **Vite**, you'll need to install additional plugins:

```bash
npm install --save-dev vite-plugin-wasm vite-plugin-top-level-await
```

Add to your `vite.config.js`:

```javascript
import { defineConfig } from 'vite';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  plugins: [wasm(), topLevelAwait()]
});
```

## API

### `add(a: number, b: number): number`

Adds two 32-bit integers.

```javascript
add(10, 20); // 30
add(-5, 15); // 10
```

## Browser Compatibility

- Modern browsers with WebAssembly support
- ES2018+ for ES modules
- Node.js 16+ (with appropriate WASM support)

## Performance

This module uses WebAssembly for optimal performance.

## License

Licensed under either Apache 2.0 or MIT license.
