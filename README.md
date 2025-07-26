# wasm-template

A template for kick starting a Rust and WebAssembly project using [wasm-pack][wasm-pack-web-page].

[wasm-pack-web-page]: https://rustwasm.github.io/docs/wasm-pack/introduction.html

### Usage

* Write your Rust module in `src/`
* Update the `[package]` section in the `Cargo.toml` file
* Update the module scope in the build command (see `package.json`) and in `www/package.json`
* Add tests to `tests/web.rs`, `www/main.js`, and `www/tests`
* Build the project using `npm run build`
* Test in headless browsers using `wasm-pack test --headless --firefox`
* Run `npm install` in the www directory
* Test in a web app using `npm run dev`
* Run unit tests using `npm run test`
* Update the `README-npm.md` file
* Publish to NPM with `wasm-pack publish`

## Batteries Included

* [`wasm-bindgen`](https://github.com/rustwasm/wasm-bindgen) for communicating
  between WebAssembly and JavaScript.
* [`console_error_panic_hook`](https://github.com/rustwasm/console_error_panic_hook)
  for logging panic messages to the developer console.
* `LICENSE-APACHE` and `LICENSE-MIT`: most Rust projects are licensed this way, so these are included for you

## License

Licensed under either of

* Apache License, Version 2.0, ([LICENSE-APACHE](LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
* MIT license ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

at your option.

### Contribution

Unless you explicitly state otherwise, any contribution intentionally
submitted for inclusion in the work by you, as defined in the Apache-2.0
license, shall be dual licensed as above, without any additional terms or
conditions.
