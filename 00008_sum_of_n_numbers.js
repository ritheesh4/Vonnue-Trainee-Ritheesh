// 8. Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

let n;

const sum = (n) => {
    let sumOfLimit = 0;
    for (let i = 1; i < n + 1; i++) {
        sumOfLimit = sumOfLimit + i;
    }
    return sumOfLimit
}

console.log("Sum of 100 numbers:",sum(100));
