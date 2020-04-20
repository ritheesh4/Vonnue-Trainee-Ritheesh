// 38. Armstrong number or not

const checkArmstrong = (inputNumber) => {
    let sqrt = Math.cbrt(inputNumber);
    let cbrtOfInputNumber = Math.floor(sqrt);
    for (let i = 1; i < cbrtOfInputNumber + 1; i++) {
        for (let j = 1; j < cbrtOfInputNumber + 1; j++) {
            for (let k = 0; k < cbrtOfInputNumber; k++) {
                if (((i * i * i) + (j * j * j) + (k * k * k)) === inputNumber) {
                    return "True";
                }
            }
        }
    }
    return 'False';
};

console.log("The input number 371 is armstrong number:", checkArmstrong(371));
console.log("The input number 150 is armstrong number:", checkArmstrong(150));