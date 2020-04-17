// 22. Write a program to check Uppercase, Lowercase or special character

let inputCharacter = '';
let asciiValueOfInput;

const characterType = (inputCharacter) => {
    asciiValueOfInput = inputCharacter.charCodeAt();
    if (asciiValueOfInput >= 65 && asciiValueOfInput <= 90) {
        return "Uppercase"
    } else if (asciiValueOfInput >= 97 && asciiValueOfInput <= 122) {
        return "Lowercase"
    } else {
        return "Character"
    }
}

characterType(inputCharacter);
console.log("Input character is: ", characterType('a'));
console.log("Input character is: ", characterType('$'));
console.log("Input character is: ", characterType('A'));
