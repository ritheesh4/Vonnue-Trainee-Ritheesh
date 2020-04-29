// 5. Enter a number and find if it's prime

let inputNumber;

const primeNumberTest = (inputNumber) => {
    if (inputNumber < 2) {
        return "Not prime"
    } else {
        for (let i = 2; i < inputNumber; i++) {
            if (inputNumber % i === 0) {
                return "Not prime"
            }
        }
        return "Prime"
    }
}

console.log(primeNumberTesint(59));
console.log(primeNumberTesint(6));
