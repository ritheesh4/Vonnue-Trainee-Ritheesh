// 23. Write a program to check a number is positive or negative

let inputNumber;

const singOfNumber = (inputNumber) => {
    if (inputNumber >= 0) {
        return "Positive"
    } else {
        return "Negative"
    }
}

singOfNumber(inputNumber);
console.log("The input number is: ", singOfNumber(-1));
console.log("The input number is: ", singOfNumber(8));
console.log("The input number is: ", singOfNumber(0));
console.log("The input number is: ", singOfNumber(0.31));
