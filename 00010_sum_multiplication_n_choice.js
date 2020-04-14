// 10. Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.

const readLine = require('readline-sync');
const n = parseFloat(readLine.question("Enter the limit value of n: "));
let choiceOfUser = parseFloat(readLine.question("1.Muliplication or 2.Sum. Input the option number you prefer: "));

let sum = () => {
    let sumOfLimit = 0;
    for (i = 1; i < n + 1; i++) {
        sumOfLimit = sumOfLimit + i;
    }
    console.log("Sum of n numbers: ", sumOfLimit)
}

let multiplicaition = () => {
    let multiplicationOfLimit = 1;
    for (i = 1; i < n + 1; i++) {
        multiplicationOfLimit = multiplicationOfLimit * i;
    }
    console.log("Multiplied result of n numbers: ", multiplicationOfLimit)
}

if (choiceOfUser == 1) {
    multiplicaition(n)
} else if (choiceOfUser == 2) {
    sum(n)
} else {
    console.log("Input a valid option.")
}

