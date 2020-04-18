let inputNumber;
let powerValue;
let result =1;

const powerOfNumber = (inputNumber, powerValue) => {
    for (let i =0;i<powerValue;i++){
        result = result* inputNumber
    }
    return result
}

powerOfNumber(inputNumber, powerValue);
console.log("The value of 4 power 5: ", powerOfNumber(4,5))