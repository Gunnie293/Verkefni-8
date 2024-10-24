/**
 * Checks if the input is a string.
 * @param {any} input - The input to check.
 * @returns {boolean} - Returns true if the input is a string, false otherwise.
 */
export function isString(input) {
    return typeof input === 'string' && input.trim() !== ''; // Ensure it's a non-empty string
}