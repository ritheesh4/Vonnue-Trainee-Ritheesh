// 70. Sorting a string in alphabetical order

const sortingString = (input) => {
    let inputString = input.split('').sort().join('');
    return inputString;
}

console.log("The sorted output of ritheesh :",sortingString("ritheesh"));
console.log("The sorted output of kerala :",sortingString("kerala"));