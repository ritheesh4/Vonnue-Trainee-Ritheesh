// 76. Frequency of characters in a string

const frequency = (input) => {
    let inputString = input.split('')
    console.log(inputString)
    let resultArray = [];
    let index = 0;
    let count = 1;
    for (let i = 0; i < inputString.length; i++) {

        for (j = i; j < inputString.length; j++) {
            if (inputString[i] == inputString[j + 1]) {
                console.log("True")
                count++
                console.log(count)
            }
            if (j === inputString.length - 1) {
                resultArray[index] = count;
                index++
                count = 1;
            }


        }
        inputString.shift()
        console.log(inputString)
    }
    console.log(resultArray)
}

frequency("tttt")