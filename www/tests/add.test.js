import { describe, it, expect } from 'vitest';
import { add } from 'wasm-template';

describe('WASM add function', () => {
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });
});
