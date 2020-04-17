// 38. Armstrong number or not

let inputNumber;
let cubeSum;

const checkArmstrong = (inputNumber) => {
    let sqrt = Math.cbrt(inputNumber);
    let cbrtOfInputNumber = Math.floor(sqrt);
    for (let i = 1; i < cbrtOfInputNumber + 1; i++) {
        for (let j = 1; j < cbrtOfInputNumber + 1; j++) {
            for (let k = 0; k < cbrtOfInputNumber; k++) {
                cubeSum = (i * i * i) + (j * j * j) + (k * k * k);
                if (cubeSum === inputNumber) {
                    return "True"
                }
            }
        }
    }
    return 'False'
}

checkArmstrong(inputNumber);
console.log("The input number 371 is armstrong number:", checkArmstrong(371));
console.log("The input number 150 is armstrong number:", checkArmstrong(150));