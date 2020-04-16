// 7. Multiple each element of an array with a constant and print the result

let inputArray;

let multiplyArrayElementsWithConstant = (inputArray) => {
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        result[i] = parseFloat(inputArray[i]) * 5;
    }
    return result
}

multiplyArrayElementsWithConstant(inputArray);