// 41. Find the power of a number

let result = 1;

const powerOfNumber = (inputNumber, powerValue) => {
    for (let i = 0; i < powerValue; i++) {
        result = result * inputNumber;
    }
    return result;
};

console.log("Result of 4 power 5: ", powerOfNumber(4, 5));