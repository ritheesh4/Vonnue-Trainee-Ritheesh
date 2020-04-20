// 14. Write program to check if number can be expressed as sum of squares of two whole numbers

const checkSumOfSquares = (inputNumber) => {
    let sqrt = Math.sqrt(inputNumber);
    let sqrtOfInputNumber = Math.floor(sqrt);
    for (let i = 1; i < sqrtOfInputNumber + 1; i++) {
        for (let j = 1; j < sqrtOfInputNumber + 1; j++) {
            if (((i * i) + (j * j)) === inputNumber) {
                return 'True';
            }
        }
    }
    return 'False';
};

console.log("The input number 5 can be expressed as sum of squares of two whole numbers:", checkSumOfSquares(5));
console.log("The input number 6 can be expressed as sum of squares of two whole numbers:", checkSumOfSquares(6));