// 7. Multiple each element of an array with a constant and print the result

const readLine = require('readline-sync');
const inputArray = readLine.question("Enter the array elemets. Seperate them using comma: ").split(",");

let multiplyArrayElementsWithConstant = () => {
    let result = [];
    for (i = 0; i < inputArray.length; i++) {
        result[i] = parseFloat(inputArray[i])*5;
    }
    console.log("Multiplied result with a constant 5 = ", result);
}

multiplyArrayElementsWithConstant(inputArray);