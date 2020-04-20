// 11. Write a program that prints a multiplication table for numbers up to 12.

const multiplicationTable = () => {
    for (let i = 1; i < 13; i++) {
        for (let j = 1; j < 11; j++) {
            let multipliedResult = i * j;
            console.log(i, "*", j, '=', multipliedResult);
        }
        console.log('\n');
    }
}

multiplicationTable();

