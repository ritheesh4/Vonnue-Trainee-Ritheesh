// 76. Frequency of characters in a string

const frequency = (input) => {
    let inputString = input.split('');
    let resultArray = [];
    let i = 0;
    let index = 0;
    let count = 1;

    while (inputString.length > 0) {
        for (let j = i; j < inputString.length; j++) {
            if (inputString[i] == inputString[j + 1]) {
                count++
            }

            if (j === inputString.length - 1) {
                let repeatingValue = inputString[i];
                resultArray[index] = [repeatingValue, count];


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
    return (resultArray);

};

console.log("Frequency of characters in the string ritheesh= ", frequency("ritheesh"));
console.log('\n', "Frequency of characters in the string eeeettttttthhefrrrr= ", frequency("eeeettttttthhefrrrr"));