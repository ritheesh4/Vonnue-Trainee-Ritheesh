// 4. Enter a  string and find if it's a palindrome.

let inputString;
const palindromeTesting = (inputString) => {
    let reverseOfString = inputString.split('').reverse().join('');
    if (inputString === reverseOfString) {
        return "Palindrome"
    } else {
        return "Not palindrome"
    }
}

palindromeTesting(inputString);

