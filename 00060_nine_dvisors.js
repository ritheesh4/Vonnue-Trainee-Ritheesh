// 60. Number of integers which has exactly 9 divisors

const nineDivisors = (limit) => {
    let numberOfIntegers = 0;
    if (limit < 36) {
        return "No numbers"
    } else {
        for (let i = 1; i <= limit; i++) {
            let count = 0;
            for (let j = 1; j <= i; j++) {
                if (i % j === 0) {
                    count++;
                }
            } if (count === 9) {
                numberOfIntegers++;

            }
        } if (numberOfIntegers === 0) {
            return "No numbers"
        } else {
            return numberOfIntegers
        }
    }
}

console.log("The number of integers which has exactly 9 divisors in this given limit 1000 is:", nineDivisors(1000));