// 74. Count the sum of numbers in a string

const sumNumbers = (inputString) => {
    let result = [];
    let numbers = [];
    let index = 0;
    let indexValue = 0;
    let flagOfEntry = 0;
    let sum = 0;

    for (let i = 0; i < inputString.length; i++) {
        if (48 >= inputString[i] && inputString[i] <= 57) {
            indexValue = i;
            result[indexValue] = inputString[i];
            indexValue++;
        }
    }

    for (let j = 0; j < result.length; j++) {
        if ((result[j] >= 0)) {
            if (flagOfEntry === 0) {
                numbers[index] = result[j];
                if (!(result[j + 1] >= 0)) {
                    index++;
                    flagOfEntry = 0;
                } else {
                    flagOfEntry = 1;
                }
            } else {
                numbers[index] = numbers[index] + result[j];
                if (!(result[j + 1] >= 0)) {
                    index++;
                    flagOfEntry = 0;
                } else {
                    flagOfEntry = 1;
                }
            }
        }

    }


    for (let k = 0; k < numbers.length; k++) {
        sum = sum + parseInt(numbers[k]);
    }
    return sum;
};

console.log(sumNumbers('rih3444he52t'));