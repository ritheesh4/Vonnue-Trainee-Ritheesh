// 51. Octal to decimal conversion

const ocd = (inputNumber) => {
    return parseInt(inputNumber,8);
};

console.log("The decimal value of the octal 55:", ocd(55));
console.log("The decimal value of the octal 2:", ocd(2));
