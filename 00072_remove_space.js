// 73. Remove spaces from a string

const removeSpace = (inputString) => {
    let result = inputString.replace(/ /g, "");
    return result;
};

console.log("The spaced removed from the string 'r t ihee': ", removeSpace('r t ihee'));