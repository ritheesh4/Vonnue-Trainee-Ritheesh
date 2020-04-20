// 33. Sum of numbers in a given range

let result = 0;
let startingRange = 0;
let endingRange = 0;

const sumGivenRange = (startingRange, endingRange) => {
    for (let i = startingRange; i < endingRange + 1; i++) {
        result = result + i;
    }
    return result
}

console.log("Printing sum of numbers in a range of 4 and 12 : ", sumGivenRange(4, 12));
