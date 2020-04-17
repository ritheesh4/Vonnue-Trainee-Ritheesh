// 19. Write a program to check if a character is a vowel or consonant

const vowels = 'aeioAEIOU';
let inputCharacter = "";

const vowelOrConsonant = (inputCharacter) => {
    if (vowels.search(inputCharacter) >= 0) {
        return "Vowel"
    } else {
        return "Consonant"
    }
}

vowelOrConsonant(inputCharacter);
console.log(vowelOrConsonant("a"));
console.log(vowelOrConsonant("b"));