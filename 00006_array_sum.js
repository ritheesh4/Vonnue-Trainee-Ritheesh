// 6. Find the sum of elements in a given array. Array should be an input to the program

const readLine = require('readline-sync');
const inputArray = readLine.question("Enter the array elemets. Seperate them using comma: ").split(",");

let sumOfArrayElements = () => {
    let result = 0;
    for (i = 0; i < inputArray.length; i++) {
        result = result + parseFloat(inputArray[i]);
    }
    console.log("Sum of array elements = ", result);
}

sumOfArrayElements(inputArray);