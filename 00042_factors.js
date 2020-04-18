let inputNumber = 0;
let result;
let resultArray = [];
let arrayIndex = 0;

const factors = (inputNumber) => {
    for (let i = 1; i < inputNumber; i++) {
        for (let j = inputNumber; j > 0; j--) {
            result = i * j;
            if (result === inputNumber) {
                resultArray[arrayIndex] = i;
                arrayIndex++;
                resultArray[arrayIndex] = j;
                arrayIndex++;
                resultArray[arrayIndex] = i * -1;
                arrayIndex++;
                resultArray[arrayIndex] = j * -1;
                arrayIndex++;

            }
        }
    }
    return resultArray
}

factors(inputNumber);
console.log("factors of 12: ", factors(12));