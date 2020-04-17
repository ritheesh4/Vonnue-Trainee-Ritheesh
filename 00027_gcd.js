// 27. GCD of two numbers

let number1;
let number2;

const gcd = (number1, number2) => {
    for (let gcdValue = number1; gcdValue > 0; gcdValue--) {
        if (number1 % gcdValue === 0) {
            if (number2 % gcdValue === 0) {
                return gcdValue
            }
        }
    }
}

gcd(number1, number2);
console.log("Lcm of two numbers 98, 56: ", gcd(98, 56));