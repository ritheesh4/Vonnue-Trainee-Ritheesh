// 16. Write a program that prints all prime numbers. (Note: if your programming language does not support arbitrary size numbers, printing all primes up to the largest number you can easily represent is fine too.)
let primeNumberArray = [];
let primeNumberArrayIndexValue = 1;
let primaryNumberFlag = 0;
let limit;

const primeNumbers = (limit) => {
    for (let limitingLoop = 2; limitingLoop <= limit; limitingLoop++) {
        if (limitingLoop === 2) {
            primeNumberArray[0] = 2;
        } else {
            primeNumberArray[0] = 2;
            for (individualNumber = 2; individualNumber < limitingLoop; individualNumber++) {
                if (limitingLoop % individualNumber === 0) {
                    primaryNumberFlag = 1;
                    break;
                } else {
                    primaryNumberFlag = 0;
                }
            }
            if (primaryNumberFlag === 0) {
                primeNumberArray[primeNumberArrayIndexValue] = limitingLoop;
                primeNumberArrayIndexValue++;
            }
        }
    }
    return primeNumberArray
}

primeNumbers(limit);
console.log(primeNumbers(50));
