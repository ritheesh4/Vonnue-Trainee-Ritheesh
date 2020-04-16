// 14. Write program to check if number can be expressed as sum of squares of two whole numbers

const readLine = require('readline-sync');
const inputNumber = parseInt(readLine.question("Enter the number: "));

let flagOfSumSquare = 0;
let sqrt = Math.sqrt(inputNumber);
let sqrtOfInputNumber = Math.floor(sqrt)
let repeatI = 0;
let repeatJ = 0;

const checkSumOfSquares = (inputNumber) => {
    for (let i = 1; i < sqrtOfInputNumber + 1; i++) {
        for (let j = 1; j < sqrtOfInputNumber + 1; j++) {
            let squareSum = (i * i) + (j * j);
            if (squareSum == inputNumber) {
                if (repeatI != j) {
                    console.log("This number can be expressed as sum of squares of", i, j);
                    flagOfSumSquare = 1;
                    repeatI = i;
                    repeatJ = j;
                }
            }
        }
    }
    if (flagOfSumSquare == 0) { console.log("This number can not be expresses as sum of squares of two numbers.") }
}

checkSumOfSquares(inputNumber);