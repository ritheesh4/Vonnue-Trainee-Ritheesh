// 34. Reverse a given number

let inputNumber = 0;
let reverseResult = 0;

const reverseNumber = (inputNumber) => {
    while (inputNumber) {
        reverseResult = reverseResult * 10;
        reverseResult += inputNumber % 10;
        inputNumber = Math.floor(inputNumber / 10);
    }
    return reverseResult
}

console.log("The revers of input number 256: ", reverseNumber(256));
