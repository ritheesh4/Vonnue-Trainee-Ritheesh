// 58. Permutations in which n people can occupy r seats in a theatre.

const factorialOfN = (n) => {
    factorialResult = n;
    for (let i = n; i > 1; i--) {
        factorialResult = factorialResult * (i - 1);
    }
    return factorialResult;
};

const factorialDenominator = (n,r) => {
    n = n - r;
    factorialResult = n;
    for (let i = n; i > 1; i--) {
        factorialResult = factorialResult * (i - 1);
    }
    return factorialResult;
}

const permutation = (n, r) => {
    let result = factorialOfN(n)/factorialDenominator(n,r)
    return result
}

console.log("The reuslt of the perumutaion of 10 people can occupy in 4 seats is: ",permutation(10,4));