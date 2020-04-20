// 32. Sum of N natural numbers

let result = 0;
let n = 0;

const sum = (n) => {
    for (let i = 1; i < n + 1; i++) {
        result = result + i;
    }
    return result
}

console.log("Printing sum of natural numbers n = 10: ", sum(10));
