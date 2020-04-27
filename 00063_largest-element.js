// 63. Write a function that returns the largest element in a list.

const largestElement = (input) => {
    let length = input.length;
    let largest = input[1];
    for (let i = 0; i < length - 1; i++) {
        if (input[i] >= largest) {
            largest = input[i];
        }
    }
    return largest;
};

console.log("Largest number in the list: [1, 4, 3, 9, 2, 7, 5, 6, 8, 3, 4] is = ", largestElement([1, 4, 3, 9, 2, 7, 5, 6, 8, 3, 4]));