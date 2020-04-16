// 5. Enter a number and find if it's prime

const readLine = require('readline-sync');
const inputNumber = readLine.question("Input the number to check wether it is a prime number or not: ");

let primeNumberTesint = (inputNumber) => {
    if (inputNumber < 2) {
        console.log("The input number is not a pime.")
    } else {
        let flagForPrimeConclusion = 0;
        let i = 1;
        while (flagForPrimeConclusion == 0) {
            i++;
            if (i < inputNumber) {
                if (inputNumber % i === 0) {
                    console.log("The input number is not a prime.");
                    flagForPrimeConclusion = 1;
                }

            } else {
                flagForPrimeConclusion = 2;
            }
        }
        if (flagForPrimeConclusion == 2) { console.log("The input number is a prime."); }
    }
}

primeNumberTesint(inputNumber);