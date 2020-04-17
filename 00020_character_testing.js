// 20. Write a program to check if a character is an alphabet or not

let inputCharacter = '';
let asciiValueOfInput;

const alphabetOrNot = (inputCharacter) => {
    asciiValueOfInput = inputCharacter.charCodeAt();
    if (asciiValueOfInput < 65 || (asciiValueOfInput > 90 && asciiValueOfInput < 97) || asciiValueOfInput > 122) {
        return "Not aplhaber"
    } else {
        return "Alphabet"
    }
}

alphabetOrNot(inputCharacter);
console.log("Input character is: ", alphabetOrNot('a'));
console.log("Input character is: ", alphabetOrNot('$'));
