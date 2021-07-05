// 28. Greatest of two numbers

const greatestOfTwo = (number1, number2) => {
    if (number1 - number2 > 0) {
        return number1;
    } else {
        return number2;
    }
};

console.log("The greatest number among 5 and 10 is : ", greatestOfTwo(5, 10));