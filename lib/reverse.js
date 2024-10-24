import { isString } from './helpers.js';

export function reverse(str) {
    if (!isString(str)) {
        return null;
    }
    return str.split('').reverse().join('');
}

console.assert(reverse('halló') === 'óllah', 'reverse: skilar réttum viðsnúningi');
