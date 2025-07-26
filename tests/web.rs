//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;
use wasm_bindgen_test::*;

wasm_bindgen_test_configure!(run_in_browser);

use wasm_module::*;

#[wasm_bindgen_test]
fn test_add() {
    assert_eq!(add(2, 3), 5);
}
