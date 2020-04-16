// 5. Enter a number and find if it's prime

let inputNumber;

const primeNumberTesint = (inputNumber) => {
    if (inputNumber < 2) {
        return "Not prime"
    } else {
        let flagForPrimeConclusion = 0;
        let i = 1;
        while (flagForPrimeConclusion == 0) {
            i++;
            if (i < inputNumber) {
                if (inputNumber % i === 0) {
                    flagForPrimeConclusion = 1;
                    return "Not prime"

                }
            } else {
                flagForPrimeConclusion = 2;
            }
        }
        if (flagForPrimeConclusion == 2) {
            return "Not prime"
        }
    }
}

primeNumberTesint(inputNumber);