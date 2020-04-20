// 36. Fibonacci series up ton

let n;
let fibonacciResult = [];

const fibonacci = (n) => {
    fibonacciResult[0] = 0;
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fibonacciResult[i] = fibonacciResult[i] + i;
        } else if (i === 1) {
            fibonacciResult[i] = fibonacciResult[i - 1] + i;
        } else {
            fibonacciResult[i] = fibonacciResult[i - 1] + fibonacciResult[i - 2];
        }
    }
    return fibonacciResult
}

console.log("The fibonacci series of value n =10 : ", fibonacci(10));