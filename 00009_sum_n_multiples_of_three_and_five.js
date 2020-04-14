// 9. Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17

const readLine = require('readline-sync');
const n = parseFloat(readLine.question("Enter the limit value of n to find the sum: "));

let sum = () => {
    let sumOfLimit = 0;
    for (i = 3; i < n + 1; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sumOfLimit = sumOfLimit + i;
        }
    }
    console.log("Sum of multiples of three or five n numbers: ", sumOfLimit)
}

sum(n);

