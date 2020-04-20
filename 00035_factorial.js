// 35. Factorial of a number

let factorialResult = 0;

const factorial = (inputNumber) => {
    factorialResult = inputNumber;
    for (let i = inputNumber; i > 1; i--) {
        factorialResult = factorialResult * (i - 1);
    }
    return factorialResult;
};

console.log("Factorial of the input number 5: ", factorial(5));