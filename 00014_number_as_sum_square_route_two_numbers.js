// 14. Write program to check if number can be expressed as sum of squares of two whole numbers

let inputNumber;

const checkSumOfSquares = (inputNumber) => {
    let sqrt = Math.sqrt(inputNumber);
    let sqrtOfInputNumber = Math.floor(sqrt);
    for (let i = 1; i < sqrtOfInputNumber + 1; i++) {
        for (let j = 1; j < sqrtOfInputNumber + 1; j++) {
            let squareSum = (i * i) + (j * j);
            if (squareSum === inputNumber) {
                return 'True'
            }
        }
    }
    return 'False'
}

checkSumOfSquares(inputNumber);
console.log("The input number can be expressed as sum of squares of two whole numbers:", checkSumOfSquares(5));
console.log("The input number can be expressed as sum of squares of two whole numbers:", checkSumOfSquares(6));