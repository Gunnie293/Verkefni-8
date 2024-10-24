import { countGivenCharactersInString } from './helpers.js';

const CONSONANTS = 'bcdfghjklmnpqrstvwxzáéíóúýþð'.split('');

export function consonants(str) {
    return countGivenCharactersInString(str, CONSONANTS);
}

console.assert(consonants('halló') === 3, 'consonants: skilar rétta talningu');
console.assert(consonants('') === 0, 'consonants: skilar 0 ef strengur er tómur');
