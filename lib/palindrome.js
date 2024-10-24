import { isString } from './helpers.js';

export function palindrome(str) {
    if (!isString(str)) {
        return false;
    }
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase(); // remove spaces and lower case
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

console.assert(palindrome('hannah') === true, 'palindrome: skilar réttum niðurstöðum');
console.assert(palindrome('not a palindrome') === false, 'palindrome: skilar réttum niðurstöðum');
