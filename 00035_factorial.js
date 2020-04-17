// 35. Factorial of a number

let inputNumber = 0;
let factorialResult = 0;

const factorial = (inputNumber) => {
    factorialResult = inputNumber;
    for (let i = inputNumber; i > 1; i--) {
        factorialResult = factorialResult * (i - 1);
    }
    return factorialResult
}

factorial(inputNumber);
console.log("Factorial of input number 5: ", factorial(5));