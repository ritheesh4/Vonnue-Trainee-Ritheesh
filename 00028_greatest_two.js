// 28. Greatest of two numbers

let number1;
let number2;

const greatestOfTwo = (number1, number2) => {
    if (number1 - number2 > 0) {
        return number1
    } else {
        return number2
    }
}

greatestOfTwo(number1, number2);
console.log("The greatest number of 5,10 is : ", greatestOfTwo(5, 10));