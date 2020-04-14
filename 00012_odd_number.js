// 13. Write a program to check if number is odd

const readLine = require('readline-sync');
let inputNumber = parseInt(readLine.question("Input the number to check wether it is odd number or not: "));

let oddNumberTest = () => {
    if (inputNumber % 2 == 0) {
        console.log("Input number is not odd.")
    } else {
        console.log("Input number is an odd number.");
    }
}

oddNumberTest(inputNumber);

