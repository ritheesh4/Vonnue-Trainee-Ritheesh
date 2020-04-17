// 9. Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17

let n;

const sum = (n) => {
    let sumOfLimit = 0;
    for (let i = 3; i < n + 1; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sumOfLimit = sumOfLimit + i;
        }
    }
    return sumOfLimit
}

sum(n);
console.log("sum of multiples of three or five of limit 10: ", sum(10));

