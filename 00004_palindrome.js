// 4. Enter a  string and find if it's a palindrome

const readLine = require('readline-sync');
const inputString = readLine.question("Enter the string to check palindrome property: ");

let palindromeTesting = (inputString) => {
    let reverseOftheString = inputString.split('').reverse().join('');
    if (inputString === reverseOftheString){
        console.log("The input string is a palindrome.");
    }else {
        console.log("The input string is not a palindrome.");
    }
}

palindromeTesting(inputString);
