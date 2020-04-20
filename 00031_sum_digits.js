// 31. Sum of digits of a number

let inputNumber = 0;
let sum = 0;

const sumOfDigits = (inputNumber) => {
    while (inputNumber) {
        sum += inputNumber % 10;
        inputNumber = Math.floor(inputNumber / 10);
    }
    return sum
}

console.log("Sum of digits of input number 345: ", sumOfDigits(345));