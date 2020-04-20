// 7. Multiple each element of an array with a constant and print the result

const multiplyArrayElementsWithConstant = (inputArray) => {
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        result[i] = inputArray[i] * 5;
    }
    return result;
};
console.log("Array multiplication with constant '5' : ", multiplyArrayElementsWithConstant([1, 2, 3, 4, 5]));