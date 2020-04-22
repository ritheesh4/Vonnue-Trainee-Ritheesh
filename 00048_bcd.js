// 48. Binary to decimal conversion

const bcd = (inputNumber) => {
    let decimal = parseInt(inputNumber, 2);
    return decimal;
};

console.log("The binary 1011 into decimal: ",bcd(1011));
console.log("The binary 10101 into decimal: ",bcd(10101));
