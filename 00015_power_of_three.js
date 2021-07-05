// 15. Write program to check if number is power of 3 of any number

const powerOfThreeTesting = (inputNumber) => {
    if (inputNumber % 3 > 0) {
        return 'Not power of 3';
    }
    else {
        return 'Power of 3';
    }
};

console.log("The input number is 9: ", powerOfThreeTesting(9));
console.log("The input number is 10: ", powerOfThreeTesting(10));