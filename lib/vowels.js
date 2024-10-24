import { countGivenCharactersInString } from './helpers.js';

const VOWELS = 'aeiouáéíóúý'.split('');

export function vowels(str) {
    return countGivenCharactersInString(str, VOWELS);
}

console.assert(vowels('halló') === 2, 'vowels: skilar rétta talningu');
console.assert(vowels('') === 0, 'vowels: skilar 0 ef strengur er tómur');
