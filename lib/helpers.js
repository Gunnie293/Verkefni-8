/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns {boolean} `true` ef `str` er strengur, annars `false`.
 */
export const isString = (str) => typeof str === 'string';

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng eftir whitespace
 * stöfum (bil, nýlína o.fl.).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
export function splitOnWhitespace(str) {
  if (!isString(str)) {
    return [];
  }

  return str.split(/\s+/).filter(Boolean);
}

/**
 * Talning á tiltekinum stöfum í streng.
 * @param {string} str Hugsanlegur strengur.
 * @param {string[]} characters Stafir sem á að telja.
 * @returns {number} Fjöldi stafa í streng.
 */
export function countGivenCharactersInString(str, characters) {
  if (!isString(str)) {
    return 0;
  }
  
  return str.split('').filter(char => characters.includes(char.toLowerCase())).length;
}
