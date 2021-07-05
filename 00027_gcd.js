// 27. GCD of two numbers

const gcd = (number1, number2) => {
    for (let gcdValue = number1; gcdValue > 0; gcdValue--) {
        if (number1 % gcdValue === 0) {
            if (number2 % gcdValue === 0) {
                return gcdValue;
            }
        }
    }
};

console.log("GCD of two numbers 98 and 56: ", gcd(98, 56));