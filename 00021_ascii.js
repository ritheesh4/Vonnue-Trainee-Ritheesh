// 21. Write a program to check Ascii values of a character

let inputCharacter = '';
let asciiValueOfInput;

const asciiValue = (inputCharacter) => {
    asciiValueOfInput = inputCharacter.charCodeAt();
    return asciiValueOfInput
}

console.log("ASCII value of the input character a is: ", asciiValue('d'));
console.log("ASCII value of the input $ is: ", asciiValue('$'));