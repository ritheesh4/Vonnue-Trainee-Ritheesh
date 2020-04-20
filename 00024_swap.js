// 24. Write a program to Swap two numbers without third variable.

const swapVariables = (inputNumber1, inputNumber2) => {
    inputNumber1 = inputNumber1 + inputNumber2;
    inputNumber2 = inputNumber1 - inputNumber2;
    inputNumber1 = inputNumber1 - inputNumber2;
    return [inputNumber1, inputNumber2];
};

console.log("Swap of tw0 numbers 5,6:", swapVariables(5, 6));