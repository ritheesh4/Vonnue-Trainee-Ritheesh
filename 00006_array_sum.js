// 6. Find the sum of elements in a given array. Array should be an input to the program

const sumOfArrayElements = (inputArray) => {
    let result = 0;
    for (let i = 0; i < inputArray.length; i++) {
        result = result + inputArray[i];
    }
    return result;
};

console.log("sum of array elements:[5, 6, 3, 2]= ", sumOfArrayElements([5, 6, 3, 2]));