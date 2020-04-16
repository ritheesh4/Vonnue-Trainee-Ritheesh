/*2. Enter 2 numbers and display the result for the following operations (each operation should be a function)
    add / multiply / divide / modulus / substract / greater than / less than / is equal.
*/

let number1;
let number2;

const addition = (number1, number2) => {
    let result = parseInt(number1) + parseInt(number2);
    return result
}

const subtraction = (number1, number2) => {
    let result = parseInt(number1) - parseInt(number2);
    return result
}

const multiplication = (number1, number2) => {
    let result = parseInt(number1) * parseInt(number2);
    return result
}

const division = (number1, number2) => {
    let result = parseInt(number1) / parseInt(number2);
    return result
}

const modulus = (number1, number2) => {
    let result = parseInt(number1) % parseInt(number2);
    return result
}

const numberCompare = (number1, number2) => {
    if (parseInt(number1) > parseInt(number2)) {
        let result = "First number is greater than the second number."
        return result
    } else if (parseInt(number1) < parseInt(number2)) {
        let result = "Second number is greater than the first number."
        return result
    } else if (parseInt(number1) === parseInt(number2)) {
        let result = "Both the input numbers are the same."
        return result
    }
}

addition(number1, number2);
subtraction(number1, number2);
multiplication(number1, number2);
division(number1, number2);
modulus(number1, number2);
numberCompare(number1, number2);
