// 23. Write a program to check a number is positive or negative

const singOfNumber = (inputNumber) => {
    if (inputNumber >= 0) {
        return "Positive";
    } else {
        return "Negative";
    }
};

console.log("The input number -1 is: ", singOfNumber(-1));
console.log("The input number 8 is: ", singOfNumber(8));
console.log("The input number -4 is: ", singOfNumber(-4));
console.log("The input number 0.31 is: ", singOfNumber(0.31));