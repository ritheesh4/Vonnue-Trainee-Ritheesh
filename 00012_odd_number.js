// 13. Write a program to check if number is odd

let inputNumber;

const oddNumberTest = (inputNumber) => {
    if (inputNumber % 2 === 0) {
        return "Not odd. Its even."
    } else {
        return "odd"
    }
}

console.log("The input number 3 is: ",oddNumberTest(3));
console.log("The input number 4 is: ",oddNumberTest(4));

