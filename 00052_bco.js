// 52. Binary to octal conversion

const bco = (inputNumber) => {
    let decimal = parseInt(inputNumber, 2);
    return decimal.toString(8);
};

console.log("The octal value of the binary 101101:", bco(101101));
console.log("The octal value of the binary 10:", bco(10));
