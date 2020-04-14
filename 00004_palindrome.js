// 4. Enter a  string and find if it's a palindrome.

const readLine = require('readline-sync');
const inputString = readLine.question("Enter the string to check wether it is palindrome or not : ");

let palindromeTesting = (inputString) => {
    let reverseOfString = inputString.split('').reverse().join('');
    if (inputString === reverseOfString){
        console.log("The input string is a palindrome.");
    }else {
        console.log("The input string is not a palindrome.");
    }
}

palindromeTesting(inputString);

