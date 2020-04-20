// 20. Write a program to check if a character is an alphabet or not

let asciiValueOfInput;

const alphabetOrNot = (inputCharacter) => {
    asciiValueOfInput = inputCharacter.charCodeAt();
    if (asciiValueOfInput < 65 || (asciiValueOfInput > 90 && asciiValueOfInput < 97) || asciiValueOfInput > 122) {
        return "Not Aplhabet";
    } else {
        return "Alphabet";
    }
};

console.log("Input character a is: ", alphabetOrNot('a'));
console.log("Input character $ is: ", alphabetOrNot('$'));
