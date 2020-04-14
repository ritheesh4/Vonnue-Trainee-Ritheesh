/*2. Enter 2 numbers and display the result for the following operations (each operation should be a function)
    add / multiply / divide / modulus / substract / greater than / less than / is equal
*/


const readLine = require("readline-sync");
const number1 = readLine.question("Enter first Number : ");
const number2 = readLine.question("Enter the second Number: ");

let addition = () => {
    let result = parseInt(number1) + parseInt(number2);
    console.log("Addition:", number1, "+", number2, "=", result);
}

let subtraction = () => {
    let result = parseInt(number1) - parseInt(number2);
    console.log("Subtraction:", number1, "-", number2, "=", result);
}

let multiplication = () => {
    let result = parseInt(number1) * parseInt(number2);
    console.log("Multiplication:", number1, "*", number2, "=", result);
}

let division = () => {
    let result = parseInt(number1) / parseInt(number2);
    console.log("Division:", number1, "/", number2, "=", result);
}

let modulus = () => {
    let result = parseInt(number1) % parseInt(number2);
    console.log("Modulus:", number1, "%", number2, "=", result);
}

let numberCompare = () => {
    if (parseInt(number1) > parseInt(number2)) {
        console.log("First number is greater than the second number.");
    } else if (parseInt(number1) < parseInt(number2)) {
        console.log("Second number is greater than the first number.");
    } else if (parseInt(number1) === parseInt(number2)) {
        console.log("Both the input numbers are the same.");
    }
}

addition(number1, number2);
subtraction(number1, number2);
multiplication(number1, number2);
division(number1, number2);
modulus(number1, number2);
numberCompare(number1, number2);
