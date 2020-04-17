let result = 0;
let n = 0;

const sum = (n) => {
    let result = 0;
    for (let i = 1; i < n + 1; i++) {
        result = result + i;
    }
    return result
}

sum(n);
console.log("Printing sum of natural numbers n = 10: ", sum(10));
