// 10. Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.

let n;
let choiceOfUser; /*1.Muliplication or 2.Sum.*/

const sum = (n) => {
    let sumOfLimit = 0;
    for (let i = 1; i < n + 1; i++) {
        sumOfLimit = sumOfLimit + i;
    }
    return sumOfLimit
}

const multiplicaition = (n) => {
    let multiplicationOfLimit = 1;
    for (let i = 1; i < n + 1; i++) {
        multiplicationOfLimit = multiplicationOfLimit * i;
    }
    return multiplicationOfLimit
}

const invalidInput = () => {
    return "Invalid input"
}

if (choiceOfUser == 1) {
    multiplicaition(n)
} else if (choiceOfUser == 2) {
    sum(n)
} else {
    invalidInput()
}
