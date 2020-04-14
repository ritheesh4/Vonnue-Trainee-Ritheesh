// 8. Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

const readLine = require('readline-sync');
const n = parseFloat(readLine.question("Enter the limit value of n to find the sum: "));

let sum = () => {
    let sumOfLimit = 0;
    for (i = 1; i < n+1; i++) {
        sumOfLimit = sumOfLimit + i;
    }
    console.log("Sum of n numbers: ", sumOfLimit)
}

sum(n);