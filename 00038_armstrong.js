// 38. Armstrong number or not

const armstrongNumbers = (inputNumber) => {
    let addition = 0;
    let remainder = 0;
    let duplicate = inputNumber;

    while (inputNumber > 0) {
        remainder = inputNumber % 10;
        addition = addition + remainder * remainder * remainder;
        inputNumber = parseInt(inputNumber / 10);
    }

    if (addition === duplicate) {
        return "Armstrong number";
    } else {
        return "Not armstrong number";
    }
};

console.log("Armstrong number between the interval :", armstrongNumbers(153));
console.log("Armstrong number between the interval :", armstrongNumbers(13));