// 11. Write a program that prints a multiplication table for numbers up to 12.

let multiplicationTable = () => {
    for (i = 1; i < 13; i++) {
        let tableOf = i;
        for (j = 1; j < 11; j++) {
            console.log(tableOf, '*', j, '=', tableOf * j)
        }
    }
}

multiplicationTable();
