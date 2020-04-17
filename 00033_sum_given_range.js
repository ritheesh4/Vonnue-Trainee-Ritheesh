// 33. Sum of numbers in a given range

let result = 0;
let startingRange = 0;
let endingRange = 0;


const sumGivenRange = (startingRange, endingRange) => {
    let result = 0;
    for (let i = startingRange; i < endingRange + 1; i++) {
        result = result + i;
    }
    return result
}

sumGivenRange(startingRange, endingRange);
console.log("Printing sum of numbers in range of 4,12 : ", sumGivenRange(4, 12));
