// 10. Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.
/*choiceOfUser:1.Muliplication or 2.Sum. Any other input is invalid.*/

const choiseOfUserInput = (choiceOfUser, n) => {
    if (choiceOfUser === 1) {
        return multiplicaition(n)
    } else if (choiceOfUser === 2) {
        return sum(n)
    } else {
        return invalidInput();
    }
};

const sum = (n) => {
    let sumOfLimit = 0;
    for (let i = 1; i < n + 1; i++) {
        sumOfLimit = sumOfLimit + i;
    }
    return sumOfLimit;
};

const multiplicaition = (n) => {
    let multiplicationOfLimit = 1;
    for (let i = 1; i < n + 1; i++) {
        multiplicationOfLimit = multiplicationOfLimit * i;
    }
    return multiplicationOfLimit;
};

const invalidInput = () => {
    return "Invalid choice";
};

console.log("Sum of 10 numbers with choice 2:", choiseOfUserInput(2, 10));
console.log("Multiplication of 10 numbers with choice 1:", choiseOfUserInput(1, 10));
console.log("Multiplication of 10 numbers with choice 3:", choiseOfUserInput(3, 10));

