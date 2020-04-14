// 14. Write program to check if number can be expressed as sum of squares of two whole numbers

const readLine = require('readline-sync');
const inputNumber = parseInt(readLine.question("Enter the number: "));

let flagOfSumSquare = 0;
let checkSumOfSquares = () => {
    for (i = 0; i < Math.sqrt(inputNumber); i++) {
        for (j = 0; j < Math.sqrt(inputNumber); i++) {
            if (i * i == j * j == inputNumber) {
                console.log("This number can be expressed as sum of squares of", i, j);
                flagOfSumSquare = 1;
            }
        }
    }
    if (flagOfSumSquare == 0) { console.log("This number can not be expresses as sum of squares of two numbers.") }
}

checkSumOfSquares(inputNumber);