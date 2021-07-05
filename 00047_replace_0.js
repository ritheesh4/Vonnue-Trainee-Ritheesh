// 47. Replace all 0's with 1 in a given integer

const replaceZero = (inputNumber) => {
    let result = 0;
    let digit = 1;
    let remainder =0;

    while (inputNumber > 0) {
        remainder = inputNumber % 10;
        if (remainder === 0) {
            remainder = 1;
        }
        result = result + remainder * digit;
        inputNumber = parseInt(inputNumber / 10);
        digit = digit * 10;
    }
    return result;
};

console.log("Replaced 0s with 1 in 400007:",replaceZero(400007));
console.log("Replaced 0s with 1 in 50302:",replaceZero(50302));
