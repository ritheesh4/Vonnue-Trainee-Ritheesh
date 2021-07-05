// 19. Write a program to check if a character is a vowel or consonant

const vowels = 'aeioAEIOU';

const vowelOrConsonant = (inputCharacter) => {
    if (vowels.search(inputCharacter) >= 0) {
        return "Vowel";
    } else {
        return "Consonant";
    }
};

console.log("The input character a is: ", vowelOrConsonant("a"));
console.log("The input character b is : ", vowelOrConsonant("b"));