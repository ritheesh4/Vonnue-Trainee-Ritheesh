// 46. Can a number be expressed as a sum of two prime numbers?

const primeNumbers = (inputNumber) => {
    let primeNumberArray = [];
    let primeNumberArrayIndexValue = 1;
    let primaryNumberFlag = 0;

    for (let limitingLoop = 2; limitingLoop <= inputNumber; limitingLoop++) {
        if (limitingLoop === 2) {
            primeNumberArray[0] = 2;
        } else {
            primeNumberArray[0] = 2;
            for (let individualNumber = 2; individualNumber < limitingLoop; individualNumber++) {
                if (limitingLoop % individualNumber === 0) {
                    primaryNumberFlag = 1;
                    break;
                } else {
                    primaryNumberFlag = 0;
                }
            }

            if (primaryNumberFlag === 0) {
                primeNumberArray[primeNumberArrayIndexValue] = limitingLoop;
                primeNumberArrayIndexValue++;
            }
        }
    }
    return primeNumberArray;
};


const primeNumberTest = (inputNumber) => {
    let primeNumber = primeNumbers(inputNumber);
    let primeLength = primeNumber.length;
    let flagTrue = false;
    for (let i = 0; i < primeLength; i++) {
        for (let j = (primeLength - 1); j > 0; j--) {
            if ((primeNumber[i] * primeNumber[i]) + (primeNumber[j] * primeNumber[j]) === inputNumber) {
                flagTrue = true;
            }
        }
    }

    if (flagTrue === false) {
        return "No";
    } else {
        return "Yes";
    }
};


console.log("The input number 13 can be expressed as sum of squares of two prime nubmers: ", primeNumberTest(13));
console.log("The input number 25 can be expressed as sum of squares of two prime nubmers: ", primeNumberTest(25));
