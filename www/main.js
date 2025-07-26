import { add } from 'wasm-template';

async function run() {
    try {
        // Test the add function - no need for init()!
        const result = add(2, 3);
        const expected = 5;

        // Validate the result
        if (result !== expected) {
            throw new Error(`Expected ${expected}, but got ${result}`);
        }

        // Update the UI
        document.getElementById('output').innerHTML = `
            <strong>WASM module loaded successfully!</strong><br>
            Result: ${result} (Expected: ${expected})
        `;
    } catch (error) {
        console.error('Error loading WASM:', error);
        document.getElementById('output').innerHTML = `<strong>Error:</strong> ${error.message}`;
    }
}

run();
