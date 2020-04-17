// 37. Leap year or not

let inputYear;

const leapYearTest = (inputYear) => {
    if ((inputYear % 4 === 0) && (inputYear % 100 !== 0)) {
        return "Leap Year"
    } else {
        return "Not a leap Year"
    }
}

leapYearTest(inputYear);
console.log("The input year 2024 is : ", leapYearTest(2024));
console.log("The input year 1900 is : ", leapYearTest(1900));
