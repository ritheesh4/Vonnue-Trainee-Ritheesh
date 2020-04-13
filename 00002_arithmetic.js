var readline = require("readline-sync");
var number1 = readline.question("Enter first Number :");
var number2 = readline.question("Enter the second Number:");

let addition = parseInt(number1) + parseInt(number2);
console.log("Addition:", number1, "+", number2, "=", addition);

let subtraction = parseInt(number1) - parseInt(number2);
console.log("Subtraction:", number1, "-", number2, "=", subtraction);

let multiplication = parseInt(number1) * parseInt(number2);
console.log("Multiplication:", number1, "*", number2, "=", multiplication);

let devision = parseInt(number1) / parseInt(number2);
console.log("Devision:", number1, "/", number2, "=", devision);

let modulus = parseInt(number1) % parseInt(number2);
console.log("Modulus:", number1, "%", number2, "=", modulus);

if (parseInt(number1) > parseInt(number2)) {
    console.log("First number is greater than the second number");
} else if (parseInt(number1) < parseInt(number2)) {
    console.log("Second number is greater than the first number.");
} else if (parseInt(number1) === parseInt(number2)) {
    console.log("Both the input numbers are the same.");
}
