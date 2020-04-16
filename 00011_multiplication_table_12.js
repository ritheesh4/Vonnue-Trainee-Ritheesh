// 11. Write a program that prints a multiplication table for numbers up to 12.

const multiplicationTable = () => {
    for (let i = 1; i < 13; i++) {
        let tableOf = i;
        for (let j = 1; j < 11; j++) {
            let multipliedResult = tableOf * j;
            let result = [tableOf, j, multipliedResult];  //tableOf, '*', j, '=', multipliedResult)
            return result
        }
    }
}

multiplicationTable();
