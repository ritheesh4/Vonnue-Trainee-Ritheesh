// 40. Perfect number or not

let inputNumber;
let perfectNumberArray = [];
let indexValue = 0;
let sumOfArray = 0;

const perfectNumber = (inputNumber) => {
    for (let i = 0; i < inputNumber; i++) {
        if (inputNumber % i === 0) {
            perfectNumberArray[indexValue] = i;
            indexValue++;
        }
    }
    if (perfectNumberArray[0] !== 0) {
        for (let j = 0; j < perfectNumberArray.length; j++) {
            sumOfArray = sumOfArray + perfectNumberArray[j];
        }
        if (sumOfArray === inputNumber) {
            return "Perfect number"
        } else {
            return "Not perfect number"
        }
    } else {
        return "Not perfect number"
    }
}

console.log("The input number 496 is : ", perfectNumber(496));
console.log("The input number 24 is : ", perfectNumber(24));