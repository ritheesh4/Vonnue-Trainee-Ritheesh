// 30. Number of digits in an integer

let numberOfDigit = 0;

const numberOfDigits = (inputNumber) => {
    if (inputNumber >= 1) {
        numberOfDigit++;
    }
    while (inputNumber / 10 >= 1) {
        inputNumber /= 10;
        numberOfDigit++;
    }
    return numberOfDigit;
};

console.log("Number of digits in input : 986745 : ", numberOfDigits(986745));
