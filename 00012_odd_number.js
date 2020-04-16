// 13. Write a program to check if number is odd

let inputNumber;

const oddNumberTest = (inputNumber) => {
    if (inputNumber % 2 == 0) {
        return "Not odd. Its even."
    } else {
        return "odd"
    }
}

oddNumberTest(inputNumber);
console.log("The input number is: ",oddNumberTest(3));
console.log("The input number is: ",oddNumberTest(4));

