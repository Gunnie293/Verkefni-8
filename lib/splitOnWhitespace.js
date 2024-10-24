/**
 * Splits a string into an array of words based on whitespace.
 * @param {string} str - The input string to split.
 * @returns {string[]} - An array of words.
 */
export function splitOnWhitespace(str) {
    return str.trim().split(/\s+/); // Split on one or more whitespace characters
}