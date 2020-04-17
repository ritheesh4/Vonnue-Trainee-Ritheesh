// 21. Write a program to check Ascii values of a character

let inputCharacter = '';
let asciiValueOfInput;

const asciiValue = (inputCharacter) => {
    asciiValueOfInput = inputCharacter.charCodeAt();
    return asciiValueOfInput
}

asciiValue(inputCharacter);
console.log("Input character is: ", asciiValue('a'));
console.log("Input character is: ", asciiValue('$'));