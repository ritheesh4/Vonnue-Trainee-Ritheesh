// 77. Non-repeating characters in a string

const nonRepeating = (input) => {
    let inputString = input.split('');
    let resultArray = [];
    let countArray = [];
    let index = 0;
    let indexResult = 0;
    let count = 1;

    while (inputString.length > 0) {
        for (let j = 0; j < inputString.length; j++) {
            if (inputString[0] == inputString[j + 1]) {
                count++;
            }

            if (j === inputString.length - 1) {
                let repeatingValue = inputString[0];
                countArray[index] = [repeatingValue, count];

                for (let k = 0; k < count; k++) {
                    let repeatedValue = inputString.indexOf(repeatingValue);
                    if (repeatedValue > -1) {
                        inputString.splice(repeatedValue, 1);
                    }
                }

                index++;
                count = 1;
            }
        }
    }

    for (let l = 0; l < countArray.length; l++) {
        if (countArray[l][1] === 1) {
            resultArray[indexResult] = countArray[l][0];
            indexResult++;

        }
    }

    return (resultArray.join(','));

};

console.log(" Non-repeating characters in the string ritheeshthomas= ", nonRepeating("ritheeshthomas"));
console.log(" Non-repeating characters in the string eeeettttttithhefrjrprr= ", nonRepeating("eeeettttttithhefrjrprr"));
