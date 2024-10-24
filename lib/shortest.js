import { isString, splitOnWhitespace } from './helpers.js';

export function shortest(str) {
    if (!isString(str)) {
        return null;
    }

    const words = splitOnWhitespace(str); 
    let shortestWord = words[0] || ''; 
    for (const word of words) {
        if (shortestWord === '' || word.length < shortestWord.length) {
            shortestWord = word;
        }
    }
    return shortestWord;
}

console.assert(shortest('halló hæ') === 'hæ', 'shortest: skilar stysta orðið');
