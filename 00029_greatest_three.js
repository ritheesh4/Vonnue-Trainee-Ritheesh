// 28. Greatest of two numbers

let number1;
let number2;
let number3;

const greatestOfThree = (number1, number2, number3) => {
    if (number1 - number2 > 0) {
        if (number1 - number3 > 0) {
            return number1
        } else {
            return number3
        }
    } else {
        if (number2 - number3 > 0) {
            return number2
        } else {
            return number3
        }
    }
}

console.log("The greatest number among 11, 54 and 22 is : ", greatestOfThree(11, 54, 22));