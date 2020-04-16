// 15. Write program to check if number is power of 3 of any number

let inputNumber;

const powerOfThreeTesting = (inputNumber) => {
    if (inputNumber % 3 > 0) {
        return 'Not power of 3'
    }
    else {
        return 'Power of 3'
    }
}

powerOfThreeTesting(inputNumber)
console.log("The input number is: ", powerOfThreeTesting(9));
console.log("The input number is: ", powerOfThreeTesting(10));