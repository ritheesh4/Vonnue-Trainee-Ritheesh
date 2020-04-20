// 18. Write a program that prints the next 20 leap years.

let leapYearsArray = [];

const leapYears = (currentYear) => {
    let yearsPrinted = 0;
    let leapYearArrayIndex = 0;
    while (yearsPrinted < 20) {
        if ((currentYear % 4 === 0) && (!((currentYear % 100 === 0) && (currentYear % 400 !== 0)))) {
            leapYearsArray[leapYearArrayIndex] = currentYear;
            yearsPrinted++;
            currentYear++;
            leapYearArrayIndex++;
        } else {
            currentYear++;
        }
    } return leapYearsArray;
};

console.log("Next 20 leap years from 2020: ", leapYears(2020));