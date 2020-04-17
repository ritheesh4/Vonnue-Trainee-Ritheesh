// 26. LCM of two numbers

let number1;
let number2;

const lcm = (number1, number2) => {
    for (let lcmValue = 2; lcmValue < number1; lcmValue++) {
        if (number1 % lcmValue === 0) {
            if (number2 % lcmValue === 0) {
                return lcmValue
            }
        }
    }
}

lcm(number1, number2);
console.log("Lcm of two numbers 15, 25:", lcm(15, 25));