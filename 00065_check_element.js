// 65. Write a function that checks whether an element occurs in a list.

const checkElement = (list, element) => {
    if (list.indexOf(element) === -1) {
        return "Not present"
    } else {
        return "Present"
    }
}

console.log("List [1,2,3,2,4], value to check 5 is : ", checkElement([1, 2, 3, 2, 4], 5));
console.log("List [1,8,3,2,4], value to check 2 is : ", checkElement([1, 8, 3, 2, 4], 2));