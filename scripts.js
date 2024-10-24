// Importa nauðsynlegar aðgerðir
import { longest } from './lib/longest.js';
import { shortest } from './lib/shortest.js';
import { reverse } from './lib/reverse.js';
import { vowels } from './lib/vowels.js';
import { consonants } from './lib/consonants.js';
import { palindrome } from './lib/palindrome.js';
import { isString, splitOnWhitespace } from './lib/helpers.js';

// Sækja vísanir á DOM-þættina
const textarea = document.getElementById('string');
const analyzeButton = document.querySelector('.string-form button[type="submit"]');
const clearButton = document.querySelector('.string-form button[type="reset"]');
const outputDiv = document.querySelector('.output');

// Atburðahandfangi fyrir textagreiningu
analyzeButton.addEventListener('click', (event) => {
    event.preventDefault(); // Forðast að skrá inn formið

    const inputText = textarea.value;
    
    // Athuga hvort input sé gildur strengur áður en unnið er með það
    if (isString(inputText)) {
        // Skipta inputinu í orð (ef þörf krefur)
        const words = splitOnWhitespace(inputText);
        
        // Framkvæma greininguna
        const longestWord = longest(words);
        const shortestWord = shortest(words);
        const reversedString = reverse(inputText);
        const vowelCount = vowels(inputText);
        const consonantCount = consonants(inputText);
        const isPalin = palindrome(inputText);

        // Sýna niðurstöður
        updateOutput(longestWord, shortestWord, reversedString, vowelCount, consonantCount, isPalin);
    } else {
        // Meðhöndla tilvik þar sem input er ekki gildur strengur
        outputDiv.textContent = 'Vinsamlegast sláðu inn gildan texta.';
    }
});

// Atburðahandfangi fyrir að hreinsa texta
clearButton.addEventListener('click', () => {
    textarea.value = ''; // Tæma textareitinn
    outputDiv.classList.add('hidden'); // Fela útkomuhlutann
});

// Fall til að uppfæra útkomu í DOM
function updateOutput(longestWord, shortestWord, reversedString, vowelCount, consonantCount, isPalin) {
    // Uppfæra útkomuhlutann með niðurstöðunum
    outputDiv.querySelector('.longest').textContent = longestWord || 'Engin orð';
    outputDiv.querySelector('.shortest').textContent = shortestWord || 'Engin orð';
    outputDiv.querySelector('.vowels').textContent = vowelCount;
    outputDiv.querySelector('.consonants').textContent = consonantCount;
    outputDiv.querySelector('.palindrome').textContent = isPalin ? 'er samhverfur' : 'er ekki samhverfur';
    outputDiv.querySelector('.reversed').textContent = reversedString || 'Engin strengur';

    // Sýna útkomuhlutann
    outputDiv.classList.remove('hidden');
}

// Valfrjálst: Uppfæra niðurstöður við breytingu á innslætti (rauntímagreining)
textarea.addEventListener('input', () => {
    const inputText = textarea.value;

    if (inputText.trim()) { // Greina aðeins ef eitthvað er til staðar
        const longestWord = longest(inputText);
        const shortestWord = shortest(inputText);
        const reversedString = reverse(inputText);
        const vowelCount = vowels(inputText);
        const consonantCount = consonants(inputText);
        const isPalin = palindrome(inputText);

        updateOutput(longestWord, shortestWord, reversedString, vowelCount, consonantCount, isPalin);
    } else {
        outputDiv.classList.add('hidden'); // Fela útkomu ef textareiturinn er tómur
    }
});
