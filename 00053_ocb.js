// 53. Octal to binary conversion

const ocb = (inputNumber) => {
    let decimal = parseInt(inputNumber, 8);
    return decimal.toString(2);
};

console.log("The binary value of the octal 55:", ocb(55));
console.log("The binary value of the octal 2:", ocb(2));
