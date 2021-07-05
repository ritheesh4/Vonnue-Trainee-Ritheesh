// 45. Armstrong numbers between two intervals

const armstrongInterval = (lowerLimit, upperLimit) => {
    let addition = 0;
    let indexValue = 0;
    let remainder;   
    let result = [];
    let currentNumber;

    for (let i = lowerLimit; i <= upperLimit; i++) {
        currentNumber = i;
        while (currentNumber > 0) {
            remainder = currentNumber % 10;
            addition = addition + remainder * remainder * remainder;
            currentNumber = parseInt(currentNumber / 10);
        }

        if (addition === i) {
            result[indexValue] = addition;
            indexValue++;
        }
        addition = 0;
    }
    return result;

};

console.log("Armstrong number between the interval 0 and 370 :", armstrongInterval(0, 370));
